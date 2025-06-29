# Custom domain configuration for external DNS management
# This creates the SSL certificate but expects DNS records to be managed externally (at mycp)

# SSL Certificate for custom domain (must be in us-east-1 for CloudFront)
resource "aws_acm_certificate" "ssl_certificate" {
  count = var.domain_name != "" ? 1 : 0

  provider                  = aws.us_east_1
  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name        = "${var.project_name}-ssl-cert"
    Environment = var.environment
  }
}

# Output the DNS validation records that need to be created at your DNS provider (mycp)
output "ssl_certificate_validation_records" {
  description = "DNS validation records that need to be created at your DNS provider (mycp)"
  value = var.domain_name != "" ? [
    for record in aws_acm_certificate.ssl_certificate[0].domain_validation_options : {
      domain = record.domain_name
      name   = record.resource_record_name
      type   = record.resource_record_type
      value  = record.resource_record_value
      note   = "Create this ${record.resource_record_type} record at your DNS provider to validate the SSL certificate"
    }
  ] : []
}

# Output instructions for DNS configuration at mycp
output "dns_configuration_instructions" {
  description = "Instructions for configuring DNS at mycp to point to CloudFront"
  value = var.domain_name != "" ? {
    cloudfront_domain = aws_cloudfront_distribution.website_distribution.domain_name
    instructions = [
      "1. Create the SSL validation records shown in 'ssl_certificate_validation_records' output",
      "2. Wait for SSL certificate validation to complete",
      "3. Create CNAME records at mycp:",
      "   - ${var.domain_name} -> ${aws_cloudfront_distribution.website_distribution.domain_name}",
      "   - www.${var.domain_name} -> ${aws_cloudfront_distribution.website_distribution.domain_name}",
      "4. Alternatively, use A record if your DNS provider supports ALIAS records pointing to CloudFront"
    ]
  } : null
}

# Output the CloudFront domain for easy reference
output "cloudfront_domain_for_dns" {
  description = "CloudFront domain name to use in your DNS configuration at mycp"
  value       = aws_cloudfront_distribution.website_distribution.domain_name
}
