# Chemarine AWS Infrastructure

This directory contains Terraform configuration for deploying the Chemarine website to AWS using S3 and CloudFront.

## Prerequisites

1. AWS CLI installed and configured
2. Terraform installed (>= 1.0)
3. Node.js and npm installed

## Quick Start

### 1. Configure Variables

```bash
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` and change the `bucket_name` to something globally unique.

### 2. Initialize and Deploy

```bash
# Initialize Terraform
terraform init

# Plan the deployment
terraform plan

# Apply the configuration
terraform apply
```

### 3. Build and Deploy Website

From the project root:

```bash
# Windows PowerShell
.\deploy.ps1

# Linux/Mac
chmod +x deploy.sh
./deploy.sh
```

## Configuration Files

- `main.tf` - Main infrastructure configuration
- `variables.tf` - Variable definitions
- `outputs.tf` - Output values
- `custom-domain.tf` - Custom domain configuration (inactive by default)
- `terraform.tfvars.example` - Example variables file

## Custom Domain Setup

To add a custom domain:

1. Update `terraform.tfvars`:

   ```hcl
   domain_name = "chemarine.com"
   ```

2. Uncomment the custom domain sections in `main.tf`:

   - Aliases in CloudFront distribution
   - ACM certificate configuration in viewer_certificate block

3. Apply the changes:

   ```bash
   terraform plan
   terraform apply
   ```

4. Update your domain's nameservers to use the Route53 name servers (shown in Terraform output)

## Architecture

- **S3 Bucket**: Hosts static website files
- **CloudFront**: Global CDN for fast content delivery
- **Route53**: DNS management (when using custom domain)
- **ACM**: SSL certificate (when using custom domain)

## Costs

Estimated monthly costs:

- S3: $1-5 (depending on storage and requests)
- CloudFront: $5-20 (depending on traffic and price class)
- Route53: $0.50 per hosted zone
- ACM: Free

Total: ~$6-25/month for typical usage

## Security Features

- Origin Access Control (OAC) for secure S3 access
- HTTPS redirect enforced
- Public access blocked except through CloudFront
- Gzip compression enabled
- Long-term caching for static assets

## Deployment Features

- SPA routing support (404 → index.html)
- Cache invalidation on deployment
- Separate cache policies for assets vs. HTML
- Compressed asset delivery
