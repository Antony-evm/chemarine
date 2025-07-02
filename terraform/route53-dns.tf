# Route 53 configuration for DNS management
# This creates a hosted zone and manages DNS records directly in AWS

# Route53 Hosted Zone for the domain
resource "aws_route53_zone" "main" {
  count = var.domain_name != "" ? 1 : 0
  name  = var.domain_name

  tags = {
    Name        = "${var.project_name}-hosted-zone"
    Environment = var.environment
  }
}

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

# Certificate validation records in Route53
resource "aws_route53_record" "cert_validation" {
  for_each = var.domain_name != "" ? {
    for dvo in aws_acm_certificate.ssl_certificate[0].domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  } : {}

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.main[0].zone_id
}

# Certificate validation
resource "aws_acm_certificate_validation" "ssl_certificate_validation" {
  count = var.domain_name != "" ? 1 : 0

  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.ssl_certificate[0].arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]

  timeouts {
    create = "5m"
  }
}

# A record for the main domain pointing to CloudFront
resource "aws_route53_record" "main_domain" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# A record for the www subdomain pointing to CloudFront
resource "aws_route53_record" "www_domain" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# Email MX records (preserve existing email setup)
resource "aws_route53_record" "mx_records" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = var.domain_name
  type    = "MX"
  ttl     = 300
  records = [
    "10 mx0.spamfilter.gr",
    "20 mx1.spamfilter.gr"
  ]
}

# SPF record for email
resource "aws_route53_record" "spf_record" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = var.domain_name
  type    = "TXT"
  ttl     = 300
  records = ["v=spf1 a:spf.spamfilter.gr -all"]
}

# DKIM records for email
resource "aws_route53_record" "dkim_policy" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "_domainkey.${var.domain_name}"
  type    = "TXT"
  ttl     = 300
  records = ["o=-"]
}

resource "aws_route53_record" "dkim_key" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "default._domainkey.${var.domain_name}"
  type    = "TXT"
  ttl     = 300
  records = ["v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmW5/+fjoWqfY6HjQOvH/uNsuLZVj7nThsPigio2+1kdb5MmkGxBi9RXbpXWTmmxrOn3YEGmUhGxfyCIWNiccdNuwoEwcJ7kvhoFuA7dXshjVBXSHktPXiTK0bJ0cMqpCxNy13GsJWQ5KdSDnA3xc5pwiyy8T5xtJGmXX34qUWzQIDAQAB"]
}

# Email subdomains
resource "aws_route53_record" "mail_subdomain" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "mail.${var.domain_name}"
  type    = "A"
  ttl     = 300
  records = ["185.29.24.6"]  # Correct mail server IP with POP3 support
}

resource "aws_route53_record" "webmail_subdomain" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "webmail.${var.domain_name}"
  type    = "A"
  ttl     = 300
  records = ["185.29.24.6"]  # Points to mail server for webmail access
}

resource "aws_route53_record" "webmail_wildcard" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "*.webmail.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300
  records = [var.domain_name]
}

resource "aws_route53_record" "ftp_subdomain" {
  count   = var.domain_name != "" ? 1 : 0
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "ftp.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300
  records = [var.domain_name]
}

# Outputs
output "route53_hosted_zone_id" {
  description = "Route53 hosted zone ID"
  value       = var.domain_name != "" ? aws_route53_zone.main[0].zone_id : null
}

output "route53_name_servers" {
  description = "Route53 name servers that need to be configured at your domain registrar"
  value       = var.domain_name != "" ? aws_route53_zone.main[0].name_servers : null
}

output "ssl_certificate_arn" {
  description = "ARN of the SSL certificate"
  value       = var.domain_name != "" ? aws_acm_certificate_validation.ssl_certificate_validation[0].certificate_arn : null
}

output "dns_setup_instructions" {
  description = "Instructions for completing DNS setup"
  value = var.domain_name != "" ? {
    step_1       = "Update your domain's name servers at mycp to use the Route53 name servers shown in 'route53_name_servers' output"
    step_2       = "This will transfer DNS management to AWS Route 53"
    step_3       = "After name server propagation (24-48 hours), your domain will automatically point to your website"
    name_servers = aws_route53_zone.main[0].name_servers
  } : null
}
