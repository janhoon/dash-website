# Dash Website Landing Page Conversion

## Project Context
- **Source**: `/home/janhoon/projects/dash/frontend/src/views/LandingView.vue` (1265 lines)
- **Target**: Astro static site in `/home/janhoon/projects/dash-website`
- **Images**: Already copied to `public/`
- **Files**: robots.txt and sitemap.xml already in `public/`

## Current Task
Convert the Vue landing page component to Astro format while preserving all SEO optimizations and structured data.

## Requirements from PRD
See `prd.json` for full requirements.

## Key Constraints
- Maintain all JSON-LD structured data (SoftwareApplication, FAQPage, ItemList, etc.)
- Preserve semantic HTML and accessibility
- Use Tailwind CSS for styling
- Static HTML generation (no client-side JS required)
- Lighthouse SEO score must remain > 95

## Testing
```bash
cd /home/janhoon/projects/dash-website
npm run dev    # Verify locally
npm run build  # Ensure static generation works
```
