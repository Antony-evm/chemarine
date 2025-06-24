# Chemarine CI/CD Pipeline

This repository uses GitHub Actions for automated deployment with the following workflow:

## Branching Strategy

- **`main`** - Production branch, auto-deploys to AWS
- **`develop`** - Development branch for feature integration
- **`feature/*`** - Feature branches for new development

## Workflows

### 1. Website Deployment (`.github/workflows/deploy.yml`)
- **Triggers**: Push to `main`, Pull Requests
- **Actions**: 
  - Build Vue.js application
  - Deploy to S3 + CloudFront (main branch only)
  - Invalidate CloudFront cache

### 2. Infrastructure (`.github/workflows/terraform.yml`)
- **Triggers**: Changes to `terraform/` folder
- **Actions**:
  - Terraform plan (PRs)
  - Terraform apply (main branch)

## Setup Instructions

### 1. Configure GitHub Secrets

Go to your repository → Settings → Secrets and variables → Actions

Add these secrets:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key

### 2. Environment Variables

The following are configured in the workflow files:
- `AWS_REGION`: eu-west-2
- `S3_BUCKET`: chemarine-website-bucket
- `CLOUDFRONT_DISTRIBUTION_ID`: E1B0I3T295MLIP

### 3. Development Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add your feature"

# Push and create PR
git push origin feature/your-feature-name
```

### 4. Deployment Process

1. **Pull Request**: Creates build artifacts, no deployment
2. **Merge to main**: Automatically builds and deploys to production
3. **Infrastructure changes**: Apply via Terraform on main branch

## Manual Deployment (Backup)

If needed, you can still deploy manually:

```powershell
# Build the application
npm run build

# Deploy using PowerShell script
.\deploy.ps1
```

## Monitoring

- Check GitHub Actions tab for deployment status
- Website URL: https://d2s6h2a5wo6rmu.cloudfront.net
- AWS CloudFront console for CDN metrics
- AWS S3 console for storage metrics
