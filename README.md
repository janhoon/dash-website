<p align="center">
  <img src="public/ace-logo.png" alt="Ace Observability" width="200" />
</p>

<h1 align="center">Ace Observability — Website</h1>

<p align="center">
  Landing page for <a href="https://github.com/aceobservability/ace">Ace Observability</a>, an open-source monitoring dashboard for metrics, logs, and traces.
</p>

<p align="center">
  Built with <a href="https://astro.build">Astro</a> and <a href="https://tailwindcss.com">Tailwind CSS</a>, deployed on <a href="https://pages.cloudflare.com">Cloudflare Pages</a>.
</p>

---

## Project Structure

```text
src/
├── pages/
│   └── index.astro              Main landing page
├── components/landing/
│   ├── HeaderNav.astro           Navigation header
│   ├── HeroSection.astro         Hero with CTA and product screenshot
│   ├── StatsBar.astro            Key metrics strip
│   ├── FeaturesSection.astro     Feature cards with screenshots
│   ├── ComparisonSection.astro   Ace vs Grafana table
│   ├── TestimonialsSection.astro User testimonials
│   ├── TiersSection.astro        Pricing tiers
│   ├── CtaSection.astro          Bottom call to action
│   └── FooterSection.astro       Footer with links
├── styles/
│   └── global.css                Global styles and Kinetic v2 design tokens
├── data/
│   └── landing.ts                Screenshot gallery and structured data
public/
├── screenshot-*.png              Product screenshots
├── ace-favicon.png               Favicon
├── ace-logo.png                  Hero logo
├── _headers                      Cloudflare security headers
└── _redirects                    Cloudflare redirects
```

## Commands

All commands are run from the root of the project:

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `pnpm install`      | Install dependencies                         |
| `pnpm run dev`      | Start local dev server at `localhost:4321`    |
| `pnpm run build`    | Build production site to `./dist/`           |
| `pnpm run preview`  | Preview build locally before deploying       |

## Environment Variables

Create a `.env` file in the root:

```bash
cp .env.example .env
```

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| `PUBLIC_POSTHOG_KEY` | No | PostHog project API key for analytics | - |
| `PUBLIC_POSTHOG_HOST` | No | PostHog API host URL | `https://us.i.posthog.com` |

> Variables prefixed with `PUBLIC_` are exposed to the browser and included in the client bundle.

## Deployment

This site is configured for **Cloudflare Pages** deployment.

1. Connect your repository to Cloudflare Pages
2. Set build command: `pnpm run build`
3. Set output directory: `dist`
4. Add environment variables (see above)
5. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Build Output

- **Output mode**: `static` (pre-rendered at build time)
- **Adapter**: `@astrojs/cloudflare` (CF Pages compatible)
- **Security headers**: Configured in `public/_headers`
- **Redirects**: Configured in `public/_redirects`
