# Lighthouse CI Configuration

This directory contains configuration for Lighthouse CI performance auditing in our deployment pipeline.

## Files

### `budget.json`

Performance budgets that define acceptable limits for:

- **Resource sizes**: Total bundle size, JS, CSS, images, fonts
- **Resource counts**: Number of requests per type
- **Core Web Vitals**: FCP, LCP, CLS, TBT, Speed Index

### `lighthouserc.js`

Lighthouse CI configuration defining:

- **Performance thresholds** (80% minimum score)
- **Accessibility requirements** (90% minimum score)
- **Best practices** (85% minimum score)
- **SEO requirements** (90% minimum score)

## How it works

1. **After deployment** to CloudFront
2. **Wait 60 seconds** for cache invalidation
3. **Run Lighthouse audit** (3 runs for accuracy)
4. **Check against budgets** and thresholds
5. **Upload reports** as GitHub artifacts
6. **Fail build** if critical thresholds not met

## Performance Targets

### Core Web Vitals

- **First Contentful Paint**: < 2.0s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms
- **Speed Index**: < 3.0s

### Resource Budgets

- **Total bundle size**: < 500KB
- **JavaScript**: < 150KB
- **CSS**: < 50KB
- **Images**: < 200KB
- **Total requests**: < 50

## Viewing Reports

After each deployment:

1. Go to **Actions** tab in GitHub
2. Click on the latest **Deploy** workflow
3. Download **lighthouse-reports** artifact
4. Open `index.html` to view detailed reports

## Adjusting Budgets

Edit `budget.json` to adjust performance budgets based on your requirements. The current settings are optimized for:

- ✅ Fast loading on 3G networks
- ✅ Good performance on mobile devices
- ✅ Modern web standards compliance
- ✅ Excellent user experience
