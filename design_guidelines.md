# Air Compressor Portfolio - Design Guidelines

## Design Approach
**Reference-Based**: Modern B2B e-commerce inspired by Shopify, Grainger, and contemporary industrial product catalogs. Clean, trust-building layouts that showcase technical products professionally while maintaining approachability.

## Typography System
- **Primary Font**: Inter (Google Fonts) - clean, technical, professional
- **Hierarchy**:
  - Hero Headlines: 3xl-5xl, font-bold (48-64px desktop)
  - Section Headers: 2xl-3xl, font-semibold (32-40px)
  - Product Titles: xl-2xl, font-semibold (24-32px)
  - Body Text: base-lg, font-normal (16-18px)
  - Product Specs: sm-base, font-medium (14-16px)
  - Labels/Captions: sm, font-medium (14px)

## Layout & Spacing System
**Tailwind Units**: Consistent use of 4, 6, 8, 12, 16, 20, 24 for spacing
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Card padding: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8

## Component Library

### Navigation
- Fixed header with transparent-to-solid scroll transition
- Logo left, main nav center, CTA/contact right
- Categories dropdown for product types
- Mobile: Hamburger menu with slide-out drawer

### Hero Section
- Full-width background image (80vh) showing industrial compressor in professional setting
- Centered content with headline, subheadline, dual CTAs
- Gradient overlay for text readability
- CTAs: Primary "Browse Products" + Secondary "Request Quote"

### Product Grid
- 3-column desktop (lg:grid-cols-3), 2-column tablet (md:grid-cols-2), 1-column mobile
- Product cards with:
  - Square product image (aspect-square)
  - Product name and model number
  - Key specs (3-4 bullet points: CFM, PSI, HP, Tank Size)
  - Price/pricing tier indicator
  - "View Details" button
- Hover: Subtle lift effect (shadow-lg transition)

### Product Detail Page
- Two-column split: Image gallery left (60%), specs right (40%)
- Image gallery: Main large image + thumbnail strip below
- Specs panel: Title, price, key features list, full specifications table, inquiry CTA
- Below fold: Related products carousel, technical documentation downloads

### Filter Sidebar
- Sticky sidebar on desktop
- Collapsible sections:
  - Compressor Type (checkboxes)
  - Power Range (slider)
  - Tank Capacity (checkboxes)
  - CFM Rating (slider)
  - Price Range (dual slider)
- "Reset Filters" link at bottom

### Trust Elements
- Industry certifications badges below hero
- Customer testimonials (2-column cards with company logos)
- "Trusted by X Companies" counter

### Footer
- 4-column desktop layout:
  - Company info + logo
  - Product categories links
  - Support resources (specs, manuals, warranty)
  - Contact info + newsletter signup
- Social media icons
- Bottom bar: Copyright, privacy policy, terms

## Images

### Hero Image
Large background image (1920x1080): Industrial workspace with modern air compressor, clean facility, professional setting. Subtle blue tone overlay to align with brand color.

### Product Images
- Clean white background studio shots
- 1:1 aspect ratio (800x800px minimum)
- Multiple angles for detail pages (front, side, controls closeup)
- Lifestyle images showing products in use for featured items

### Trust Section
- Company/client logos (grayscale, hover to color)
- Certification badge images

### Content Images
- Technical diagram overlays for spec comparisons
- Application photos (workshop, factory, garage settings)

## Interaction Patterns
- Smooth scroll behavior for anchor links
- Lazy loading for product images
- Filter updates with subtle fade transitions
- Product card hover states with scale and shadow
- Sticky "Request Quote" button on product detail pages (appears after scroll)

## Responsive Breakpoints
- Mobile: Single column, stacked navigation
- Tablet (768px): 2-column grids, condensed navigation
- Desktop (1024px+): Full layout with sidebar filters, 3-column grids

## Accessibility
- High contrast between blue (#0d5eba) and white (#ffffff)
- All interactive elements minimum 44px touch targets
- Form labels properly associated
- Alt text for all product images with model numbers

This creates a professional, trustworthy industrial product showcase with modern e-commerce UX while maintaining technical credibility.