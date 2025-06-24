# Add this to main.tf when ready for custom domain

# ACM Certificate for custom domain (must be in us-east-1 for CloudFront)
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

# Route53 Hosted Zone (if you want AWS to manage DNS)
resource "aws_route53_zone" "main" {
  count = var.domain_name != "" ? 1 : 0
  name  = var.domain_name

  tags = {
    Name        = "${var.project_name}-zone"
    Environment = var.environment
  }
}

# DNS validation records for ACM certificate
resource "aws_route53_record" "cert_validation" {
  count = var.domain_name != "" ? length(aws_acm_certificate.ssl_certificate[0].domain_validation_options) : 0

  allow_overwrite = true
  name            = tolist(aws_acm_certificate.ssl_certificate[0].domain_validation_options)[count.index].resource_record_name
  records         = [tolist(aws_acm_certificate.ssl_certificate[0].domain_validation_options)[count.index].resource_record_value]
  type            = tolist(aws_acm_certificate.ssl_certificate[0].domain_validation_options)[count.index].resource_record_type
  zone_id         = aws_route53_zone.main[0].zone_id
  ttl             = 60
}

# Certificate validation
resource "aws_acm_certificate_validation" "cert_validation" {
  count = var.domain_name != "" ? 1 : 0

  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.ssl_certificate[0].arn
  validation_record_fqdns = aws_route53_record.cert_validation[*].fqdn
}

# Route53 A record for domain
resource "aws_route53_record" "website_a_record" {
  count = var.domain_name != "" ? 1 : 0

  zone_id = aws_route53_zone.main[0].zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Route53 A record for www subdomain
resource "aws_route53_record" "website_www_a_record" {
  count = var.domain_name != "" ? 1 : 0

  zone_id = aws_route53_zone.main[0].zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Additional outputs for custom domain
output "route53_name_servers" {
  description = "Name servers for the Route53 hosted zone"
  value       = var.domain_name != "" ? aws_route53_zone.main[0].name_servers : null
}

output "ssl_certificate_arn" {
  description = "ARN of the SSL certificate"
  value       = var.domain_name != "" ? aws_acm_certificate.ssl_certificate[0].arn : null
}
