# IAM policy for managing the Chemarine website infrastructure
# This policy grants the minimum required permissions for Terraform operations

data "aws_caller_identity" "current" {}

# IAM policy document for website management
data "aws_iam_policy_document" "website_management_policy" {
  # S3 permissions
  statement {
    sid    = "S3BucketManagement"
    effect = "Allow"
    actions = [
      "s3:CreateBucket",
      "s3:DeleteBucket",
      "s3:GetBucketLocation",
      "s3:GetBucketPolicy",
      "s3:PutBucketPolicy",
      "s3:DeleteBucketPolicy",
      "s3:GetBucketPublicAccessBlock",
      "s3:PutBucketPublicAccessBlock",
      "s3:GetBucketWebsite",
      "s3:PutBucketWebsite",
      "s3:DeleteBucketWebsite",
      "s3:GetBucketVersioning",
      "s3:ListBucket",
      "s3:GetBucketTagging",
      "s3:PutBucketTagging"
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_name}",
      "arn:aws:s3:::${var.bucket_name}-*"
    ]
  }

  # S3 object permissions
  statement {
    sid    = "S3ObjectManagement"
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject",
      "s3:PutObjectAcl",
      "s3:GetObjectAcl"
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_name}/*",
      "arn:aws:s3:::${var.bucket_name}-*/*"
    ]
  }

  # S3 list buckets (for Terraform state management)
  statement {
    sid    = "S3ListBuckets"
    effect = "Allow"
    actions = [
      "s3:ListAllMyBuckets",
      "s3:GetBucketLocation"
    ]
    resources = ["*"]
  }

  # CloudFront permissions
  statement {
    sid    = "CloudFrontManagement"
    effect = "Allow"
    actions = [
      "cloudfront:CreateDistribution",
      "cloudfront:GetDistribution",
      "cloudfront:GetDistributionConfig",
      "cloudfront:UpdateDistribution",
      "cloudfront:DeleteDistribution",
      "cloudfront:ListDistributions",
      "cloudfront:CreateOriginAccessControl",
      "cloudfront:GetOriginAccessControl",
      "cloudfront:UpdateOriginAccessControl",
      "cloudfront:DeleteOriginAccessControl",
      "cloudfront:ListOriginAccessControls",
      "cloudfront:CreateInvalidation",
      "cloudfront:GetInvalidation",
      "cloudfront:ListInvalidations",
      "cloudfront:TagResource",
      "cloudfront:UntagResource",
      "cloudfront:ListTagsForResource"
    ]
    resources = ["*"]
  }

  # ACM permissions (for SSL certificates)
  statement {
    sid    = "ACMManagement"
    effect = "Allow"
    actions = [
      "acm:RequestCertificate",
      "acm:DescribeCertificate",
      "acm:DeleteCertificate",
      "acm:ListCertificates",
      "acm:AddTagsToCertificate",
      "acm:RemoveTagsFromCertificate",
      "acm:ListTagsForCertificate"
    ]
    resources = ["*"]
  }

  # Route53 permissions (for DNS and certificate validation)
  statement {
    sid    = "Route53Management"
    effect = "Allow"
    actions = [
      "route53:CreateHostedZone",
      "route53:GetHostedZone",
      "route53:DeleteHostedZone",
      "route53:ListHostedZones",
      "route53:ChangeResourceRecordSets",
      "route53:GetChange",
      "route53:ListResourceRecordSets",
      "route53:ChangeTagsForResource",
      "route53:ListTagsForResource"
    ]
    resources = ["*"]
  }

  # IAM permissions (for reading current user info)
  statement {
    sid    = "IAMReadOnly"
    effect = "Allow"
    actions = [
      "iam:GetUser",
      "iam:GetAccountSummary"
    ]
    resources = ["*"]
  }

  # STS permissions (for assuming roles and getting caller identity)
  statement {
    sid    = "STSPermissions"
    effect = "Allow"
    actions = [
      "sts:GetCallerIdentity"
    ]
    resources = ["*"]
  }
}

# Create the IAM policy
resource "aws_iam_policy" "website_management_policy" {
  count       = var.create_iam_resources ? 1 : 0
  name        = "${var.project_name}-website-management-policy"
  path        = "/"
  description = "Policy for managing ${var.project_name} website infrastructure"
  policy      = data.aws_iam_policy_document.website_management_policy.json

  tags = {
    Name        = "${var.project_name}-website-policy"
    Environment = var.environment
    Purpose     = "Website Infrastructure Management"
  }
}

# Create IAM user for website management
resource "aws_iam_user" "website_user" {
  count = var.create_iam_resources ? 1 : 0
  name  = "${var.project_name}-website-user"
  path  = "/"

  tags = {
    Name        = "${var.project_name}-website-user"
    Environment = var.environment
    Purpose     = "Website Infrastructure Management"
  }
}

# Attach policy to user
resource "aws_iam_user_policy_attachment" "website_user_policy" {
  count      = var.create_iam_resources ? 1 : 0
  user       = aws_iam_user.website_user[0].name
  policy_arn = aws_iam_policy.website_management_policy[0].arn
}

# Create access key for the user (optional - for programmatic access)
resource "aws_iam_access_key" "website_user_key" {
  count = var.create_iam_resources && var.create_access_key ? 1 : 0
  user  = aws_iam_user.website_user[0].name
}

# Output the access key details (be careful with this in production)
output "iam_user_name" {
  description = "Name of the IAM user for website management"
  value       = var.create_iam_resources ? aws_iam_user.website_user[0].name : null
}

output "iam_user_arn" {
  description = "ARN of the IAM user for website management"
  value       = var.create_iam_resources ? aws_iam_user.website_user[0].arn : null
}

output "iam_policy_arn" {
  description = "ARN of the IAM policy for website management"
  value       = var.create_iam_resources ? aws_iam_policy.website_management_policy[0].arn : null
}

output "access_key_id" {
  description = "Access key ID for the website management user"
  value       = var.create_iam_resources && var.create_access_key ? aws_iam_access_key.website_user_key[0].id : null
  sensitive   = false
}

output "secret_access_key" {
  description = "Secret access key for the website management user"
  value       = var.create_iam_resources && var.create_access_key ? aws_iam_access_key.website_user_key[0].secret : null
  sensitive   = true
}
