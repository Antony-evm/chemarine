# Build the Vue.js application
Write-Host "Building Vue.js application..." -ForegroundColor Green
npm run build

# Check if build was successful
if (-not (Test-Path "dist")) {
    Write-Host "Error: Build failed or dist directory not found" -ForegroundColor Red
    exit 1
}

# Get S3 bucket name from Terraform output
$BUCKET_NAME = terraform -chdir=terraform output -raw s3_bucket_name
$DISTRIBUTION_ID = terraform -chdir=terraform output -raw cloudfront_distribution_id

if (-not $BUCKET_NAME) {
    Write-Host "Error: Could not get S3 bucket name from Terraform output" -ForegroundColor Red
    exit 1
}

Write-Host "Uploading files to S3 bucket: $BUCKET_NAME" -ForegroundColor Green

# Sync files to S3 with appropriate cache headers
aws s3 sync dist/ s3://$BUCKET_NAME --delete `
    --exclude "*.map" `
    --cache-control "public, max-age=31536000" `
    --expires "2034-01-01T00:00:00Z"

# Upload index.html with no-cache headers (for SPA routing)
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html `
    --cache-control "public, max-age=0, must-revalidate" `
    --content-type "text/html"

Write-Host "Creating CloudFront invalidation..." -ForegroundColor Green
aws cloudfront create-invalidation `
    --distribution-id $DISTRIBUTION_ID `
    --paths "/*"

Write-Host "Deployment complete!" -ForegroundColor Green
$WEBSITE_URL = terraform -chdir=terraform output -raw website_url
Write-Host "Website URL: $WEBSITE_URL" -ForegroundColor Cyan
