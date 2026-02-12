# Dash → Ace Observability Rebrand Summary

**Ticket:** #228  
**Date:** 2026-02-12  
**Status:** ✅ Complete

## Overview
Successfully rebranded the entire dash-website Astro landing page from "Dash" to "Ace Observability" with comprehensive updates across all files, SEO metadata, structured data, and GitHub links.

## Brand Guidelines Applied
- **Formal contexts:** "Ace Observability" (titles, headers, formal references)
- **Casual contexts:** "Ace" (within sentences, conversational text)
- **Preserved:** "dashboard" and "Dashboard" (generic terms)
- **GitHub repo:** janhoon/dash → janhoon/ace

## Files Modified

### 1. package.json
- Updated package name: `dash-website` → `ace-website`

### 2. src/pages/index.astro
- Page title: `Dash | Open-Source Monitoring Dashboard` → `Ace Observability | Open-Source Monitoring Dashboard`
- Meta description: Updated all references from "Dash" to "Ace Observability"
- Open Graph tags: Updated `og:site_name` from "Dash" to "Ace Observability"
- Twitter Card metadata: Updated all references

### 3. src/data/landing.ts
**Screenshot gallery alt text (6 updates):**
- All screenshot alt attributes updated from "Dash" to "Ace"

**Structured Data (Schema.org JSON-LD):**
- `softwareApplicationStructuredData`:
  - name: "Dash" → "Ace Observability"
  - All GitHub URLs: janhoon/dash → janhoon/ace
  
- `faqStructuredData`:
  - Questions updated: "Which datasources does Dash support?" → "...Ace support?"
  - Answers updated: All "Dash" references → "Ace"
  
- `featureListStructuredData`:
  - name: "Dash monitoring platform features" → "Ace monitoring platform features"
  - Descriptions: All "Dash" references → "Ace"
  
- `comparisonTableStructuredData`:
  - name: "Dash vs Grafana" → "Ace vs Grafana"
  - about.name: "Dash" → "Ace Observability"
  - All comparison descriptions: "Dash" → "Ace"
  
- `breadcrumbStructuredData`:
  - Breadcrumb: "Dash vs Grafana Comparison" → "Ace vs Grafana Comparison"
  
- `imageGalleryStructuredData`:
  - name and description: All "Dash" references → "Ace"
  
- `organizationStructuredData`:
  - name: "Dash" → "Ace Observability"
  - url and sameAs: janhoon/dash → janhoon/ace

### 4. src/components/landing/HeroSection.astro
- H1 heading: "Dash is a truly open-source dashboard..." → "Ace Observability is a truly open-source dashboard..."
- All GitHub links: janhoon/dash → janhoon/ace
- Image alt text: "Dash monitoring dashboard" → "Ace monitoring dashboard"
- aria-label: "Dash application preview" → "Ace application preview"

### 5. src/components/landing/HeaderNav.astro
- Logo icon: "D" → "A"
- Brand name: "Dash" → "Ace"

### 6. src/components/landing/OverviewSection.astro
- Body text: "Dash is a truly open-source..." → "Ace is a truly open-source..."

### 7. src/components/landing/FeaturesSection.astro
- Section heading: "Core Dash features..." → "Core Ace features..."
- Body text: "Dash combines dashboards..." → "Ace combines dashboards..."
- aria-label: "Dash platform feature list" → "Ace platform feature list"
- Feature description: "Run Dash in your own environment..." → "Run Ace in your own environment..."

### 8. src/components/landing/ComparisonSection.astro
- Section heading: "Dash vs Grafana comparison..." → "Ace vs Grafana comparison..."
- Intro text: "...compare Dash and Grafana..." → "...compare Ace and Grafana..."
- Table header: "Dash" column → "Ace" column
- Closing text: "Dash is a strong fit..." → "Ace is a strong fit..."

### 9. src/components/landing/ScreenshotsSection.astro
- Body text: "See Dash in action..." → "See Ace in action..."
- aria-label: "Dash screenshot gallery" → "Ace screenshot gallery"

### 10. src/components/landing/CtaSection.astro
- Heading: "Run Dash in your own environment" → "Run Ace in your own environment"
- All GitHub links: janhoon/dash → janhoon/ace
- All badges: Updated GitHub URLs and aria-labels

### 11. src/components/landing/FooterSection.astro
- Navigation link: "Dash vs Grafana" → "Ace vs Grafana"
- All resource links: janhoon/dash → janhoon/ace (Documentation, Releases, Issues, Discussions)
- All community links: janhoon/dash → janhoon/ace (GitHub, Star, Fork)
- All legal links: janhoon/dash → janhoon/ace (Security policy, Security disclosure)
- Copyright text: "Dash is truly open source..." → "Ace is truly open source..."

## SEO & Metadata Updates

### Title Tags
- Main page title includes "Ace Observability"

### Meta Descriptions
- All descriptions updated to reference "Ace Observability"

### Open Graph Tags
- `og:site_name`: "Ace Observability"
- `og:title`: Updated
- `og:description`: Updated

### Twitter Cards
- All Twitter Card metadata updated with "Ace Observability"

### Structured Data (JSON-LD)
- 8 structured data objects fully updated
- SoftwareApplication schema
- FAQPage schema
- ItemList (features) schema
- Table (comparison) schema
- BreadcrumbList schema
- ImageGallery schema
- Organization schema
- SiteNavigationElement schema

## GitHub Repository Links
All references updated from `janhoon/dash` to `janhoon/ace`:
- Star links
- Fork links
- Issues tracker
- Discussions
- Releases
- Documentation
- Security policy
- Commit history
- Badge URLs

## Verification
✅ Build successful: `npm run build` completed without errors  
✅ Package name updated in build output: `ace-website@0.0.1`  
✅ Zero remaining "Dash" references (excluding "dashboard"/"Dashboard" generic terms)  
✅ Zero remaining `janhoon/dash` GitHub links  

## Brand Consistency
- Formal references: "Ace Observability" ✅
- Casual references: "Ace" ✅
- Generic term "dashboard" preserved ✅
- All GitHub links point to janhoon/ace ✅

## Notes
- The generic terms "dashboard" and "Dashboard" were intentionally preserved as they refer to the product category, not the brand name
- "Dash vs Grafana" → "Ace vs Grafana" updated throughout comparison section
- All accessibility labels (aria-label, alt text) updated for consistency
- Logo icon changed from "D" to "A"
