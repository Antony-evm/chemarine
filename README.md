# Chemical Marine Inspections - Website

A modern, high-performance Vue 3 website for Chemical Marine Inspections, a leading provider of gas detection instruments, calibration gases, and marine safety equipment. The company has been serving the marine industry since 1994 and is certified ISO 9001:2015.

## 🏢 About Chemical Marine Inspections

Chemical Marine Inspections specializes in:

- **Gas Detection Instruments**: Teledyne GMI & RKI instruments for marine safety
- **Calibration Gases**: High-quality calibration solutions for gas detection equipment
- **Marine Safety Equipment**: Comprehensive safety solutions for the maritime industry
- **Professional Services**: Expert consultation and equipment maintenance

Located in Piraeus, Greece, the company has been a trusted partner in marine safety for over 30 years.

## 🚀 Technology Stack

- **Frontend Framework**: Vue 3 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Vue Router 4
- **Image Optimization**: Sharp for WebP generation and high-DPI support
- **Performance**: Optimized for Core Web Vitals (FCP, LCP)
- **SEO**: Meta tags, structured data, and Open Graph support

## ✨ Key Features

### Performance Optimizations

- **High-DPI Image Support**: Automatic 1x, 2x, 3x WebP generation for crisp displays
- **Lazy Loading**: Progressive image loading for better performance
- **Optimized Assets**: Gzip and Brotli compression
- **Critical CSS**: Render-blocking resource optimization
- **Tree Shaking**: Dead code elimination via Vite

### Modern UX/UI

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG 2.1 compliant with proper focus management
- **Progressive Enhancement**: Works across all modern browsers
- **Performance Budget**: Optimized for fast loading on all devices

### Content Management

- **Modular Architecture**: Reusable components for instruments and categories
- **Type Safety**: Full TypeScript integration for reliable development
- **Asset Pipeline**: Automated image processing and optimization

## 🛠️ Development Setup

### Prerequisites

- **Node.js**: Version 18+
- **npm**: Version 9+ (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/chemarine.git
   cd chemarine
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run build
   npm run preview
   ```
   The site will be available at `http://localhost:4173`

### Available Scripts

- **`npm run dev`**: Start development server with hot reload
- **`npm run build`**: Build for production (includes TypeScript checking)
- **`npm run preview`**: Preview production build locally

## 📁 Project Structure

```
chemarine/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/            # Images and static resources
│   │   ├── gas_detection_instruments/  # Instrument images (PNG + WebP)
│   │   ├── calibration_gases/         # Calibration gas images
│   │   └── certificates/              # Certification images
│   ├── components/        # Vue components
│   │   ├── gas_detection_instruments/ # Instrument-specific components
│   │   ├── utils/         # Reusable utility components
│   │   └── *.vue          # Global components (Navbar, Footer)
│   ├── data/             # TypeScript data files
│   │   ├── instruments/   # Individual instrument definitions
│   │   ├── gasDetectionInstruments.ts
│   │   ├── calibrationGases.ts
│   │   └── regulators.ts
│   ├── pages/            # Route components
│   ├── router/           # Vue Router configuration
│   ├── utils/            # Utility functions
│   ├── App.vue           # Root component
│   ├── main.ts           # Application entry point
│   └── styles.css        # Global styles
├── terraform/            # Infrastructure as Code (AWS)
└── package.json
```

## 🎨 Styling Guidelines

The project uses a custom design system with Tailwind CSS:

### Color Palette

- **Primary**: Graphite (`#2D3436`) - professional, trustworthy
- **Secondary**: Warm White (`#FDCB6E`) - maritime, energetic
- **Accent**: Teal (`#00B894`) - marine, fresh
- **Background**: Warm White gradients

### Typography

- **Font**: Roboto (variable weight 100-900)
- **Responsive**: Mobile-first scaling with Tailwind breakpoints
- **Performance**: Font-display: swap for optimal loading

## 🖼️ Image Optimization

### High-DPI Support

All images support multiple resolutions:

- **1x**: Base resolution (PNG fallback)
- **2x**: Retina displays (WebP)
- **3x**: High-DPI displays (WebP)

### Format Strategy

- **WebP**: Primary format for modern browsers (85% quality)
- **PNG**: Fallback for compatibility
- **Progressive Enhancement**: `<picture>` elements with proper fallbacks

### Performance

- **Lazy Loading**: All images below the fold
- **Proper Sizing**: Width/height attributes prevent layout shift
- **Compression**: Optimized file sizes without quality loss

## 🚀 Deployment

### Production Build

```bash
npm run build
```

Generates optimized assets in the `dist/` directory.

### AWS Deployment

The project includes Terraform configuration for AWS deployment:

- **S3**: Static site hosting
- **CloudFront**: Global CDN
- **Route 53**: DNS management
- **Certificate Manager**: SSL/TLS certificates

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### Techniques Applied

- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: WebP, compression, minification
- **Critical CSS**: Inlined critical styles
- **Resource Hints**: Preconnect, preload for external resources
- **Tree Shaking**: Unused code elimination

### Development Guidelines

- **TypeScript**: Maintain strict type checking
- **Components**: Keep components focused and reusable
- **Performance**: Test Core Web Vitals impact
- **Accessibility**: Ensure WCAG 2.1 compliance
- **Images**: Always include high-DPI variants

## 📄 License

This project is proprietary software owned by Chemical Marine Inspections.

**Chemical Marine Inspections**

- **Website**: [chemarine.com](https://chemarine.com)

---

_Built with ❤️ for marine safety_
