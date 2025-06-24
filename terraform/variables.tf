variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "eu-west-2"  # London - best for UK users
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "chemarine"
}

variable "bucket_name" {
  description = "Name of the S3 bucket (must be globally unique)"
  type        = string
  default     = "chemarine-website-bucket"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "cloudfront_price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_100" # Use only North America and Europe
  validation {
    condition = contains([
      "PriceClass_All",
      "PriceClass_200", 
      "PriceClass_100"
    ], var.cloudfront_price_class)
    error_message = "Price class must be PriceClass_All, PriceClass_200, or PriceClass_100."
  }
}

variable "domain_name" {
  description = "Custom domain name (leave empty for initial deployment)"
  type        = string
  default     = ""
}

variable "create_iam_resources" {
  description = "Whether to create IAM user and policy for website management"
  type        = bool
  default     = false
}

variable "create_access_key" {
  description = "Whether to create access key for the IAM user (only if create_iam_resources is true)"
  type        = bool
  default     = false
}
