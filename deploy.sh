#!/bin/bash

# Build the Vue.js application
echo "Building Vue.js application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "Error: Build failed or dist directory not found"
    exit 1
fi

# Get S3 bucket name from Terraform output
BUCKET_NAME=$(terraform -chdir=terraform output -raw s3_bucket_name)
DISTRIBUTION_ID=$(terraform -chdir=terraform output -raw cloudfront_distribution_id)

if [ -z "$BUCKET_NAME" ]; then
    echo "Error: Could not get S3 bucket name from Terraform output"
    exit 1
fi

echo "Uploading files to S3 bucket: $BUCKET_NAME"

# Sync files to S3 with appropriate cache headers
aws s3 sync dist/ s3://$BUCKET_NAME --delete \
    --exclude "*.map" \
    --cache-control "public, max-age=31536000" \
    --expires "2034-01-01T00:00:00Z"

# Upload index.html with no-cache headers (for SPA routing)
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "text/html"

echo "Creating CloudFront invalidation..."
aws cloudfront create-invalidation \
    --distribution-id $DISTRIBUTION_ID \
    --paths "/*"

echo "Deployment complete!"
echo "Website URL: $(terraform -chdir=terraform output -raw website_url)"
