# Cloudflare Pages Deployment Guide

This guide covers deploying the Ace Observability website to Cloudflare Pages.

## Prerequisites

- Cloudflare account with Pages access
- GitHub repository connected to Cloudflare Pages (or manual upload)
- Custom domain: `aceobservability.com`

## 1. Create Cloudflare Pages Project

### Via Dashboard

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** > **Pages**
3. Click **Create application** > **Connect to Git**
4. Select your GitHub/GitLab repository
5. Configure build settings (see below)

### Build Configuration

| Setting | Value |
|---------|-------|
| **Framework preset** | Astro |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave blank if repo root) |
| **Node version** | 18 or later (set via env var) |

## 2. Environment Variables

Set these in **Settings** > **Environment variables** on your Cloudflare Pages project:

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_VERSION` | Node.js version for build | `18` or `20` |

### Optional Variables (Analytics)

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `PUBLIC_POSTHOG_KEY` | PostHog project API key | [PostHog Project Settings](https://app.posthog.com/project/settings) |
| `PUBLIC_POSTHOG_HOST` | PostHog API host | `https://us.i.posthog.com` (default) or your custom host |

> **Note:** Variables prefixed with `PUBLIC_` are exposed to the browser client code.

### Setting Environment Variables

1. Go to your Pages project in Cloudflare Dashboard
2. Navigate to **Settings** > **Environment variables**
3. Add variables for:
   - **Production** (deploys from main/master branch)
   - **Preview** (deploys from other branches)

## 3. Custom Domain Setup

### Add aceobservability.com

1. In your Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter `aceobservability.com`
4. Follow the instructions to:
   - Add a CNAME record (if domain is on Cloudflare)
   - Or add DNS records (if domain is external)

### Recommended Domain Configuration

- **Apex domain**: `aceobservability.com` → CNAME to `<project>.pages.dev`
- **WWW subdomain**: `www.aceobservability.com` → Redirect to apex (configured in `_redirects`)

### SSL/TLS Settings

- Cloudflare automatically provisions SSL certificates
- Recommended SSL/TLS mode: **Full** or **Full (strict)**
- Navigate to **SSL/TLS** > **Overview** to configure

## 4. Deploy

### Automatic Deployment (Git)

- **Production**: Push to `main` or `master` branch
- **Preview**: Push to any other branch (creates preview URL)

### Manual Deployment

```bash
# Build locally
npm run build

# Upload dist/ folder via:
# Cloudflare Dashboard > Pages > Upload assets
```

## 5. Verify Deployment

After deployment completes:

1. **Check build logs** for any errors
2. **Visit production URL**: `https://<project>.pages.dev`
3. **Test custom domain**: `https://aceobservability.com`
4. **Verify headers**: Use browser DevTools > Network tab
   - Check `X-Frame-Options`, `Content-Security-Policy`, etc.
5. **Test analytics**: Verify PostHog events are tracking (if configured)

### Testing Security Headers

```bash
curl -I https://aceobservability.com
```

Look for:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy: ...`
- `Cache-Control: ...` (varies by path)

## 6. Configuration Files

### `_headers`

Located in `public/_headers`, defines HTTP headers for all routes:

- **Security headers**: CSP, X-Frame-Options, etc.
- **Cache headers**: Immutable for static assets, revalidation for HTML

Edit this file to adjust security policies or caching behavior.

### `_redirects`

Located in `public/_redirects`, defines URL redirects and rewrites:

- Currently contains examples (commented out)
- Uncomment and customize as needed for:
  - WWW to non-WWW redirects
  - Old URL redirects
  - SPA fallback routing (if needed)

### `astro.config.mjs`

Cloudflare adapter configuration:

```js
export default defineConfig({
  output: 'static', // Change to 'hybrid' or 'server' for SSR
  adapter: cloudflare({
    mode: 'directory', // CF Pages compatible mode
  }),
  // ...
});
```

**Output modes:**
- `static` (default): Pre-renders all pages at build time
- `hybrid`: Pre-renders pages by default, opt-in to SSR with `export const prerender = false`
- `server`: Server-renders all pages on-demand

> **Current setup**: Using `static` output for optimal performance. No server-side rendering needed for landing page.

## 7. Troubleshooting

### Build Fails

- **Check Node version**: Ensure `NODE_VERSION` env var is set to 18+
- **Check dependencies**: Verify `package-lock.json` is committed
- **Check build logs**: Look for specific error messages

### Headers Not Applied

- Verify `_headers` file is in `public/` directory
- Check build output includes `_headers` in `dist/`
- Clear Cloudflare cache: **Caching** > **Configuration** > **Purge Everything**

### Environment Variables Not Working

- Ensure variables are prefixed with `PUBLIC_` for client-side access
- Restart deployment after adding/changing env vars
- Check browser console for errors (PostHog initialization, etc.)

### Domain Not Resolving

- Verify DNS records are correct
- Wait for DNS propagation (up to 24-48 hours)
- Check Cloudflare DNS settings: **DNS** > **Records**

## 8. Performance Optimization

### Cloudflare Settings

Navigate to your domain in Cloudflare Dashboard:

1. **Speed** > **Optimization**
   - Enable Auto Minify (HTML, CSS, JS)
   - Enable Brotli compression
   - Enable Rocket Loader (optional, test thoroughly)

2. **Caching** > **Configuration**
   - Caching Level: Standard
   - Browser Cache TTL: Respect Existing Headers

3. **Network**
   - Enable HTTP/3 (QUIC)
   - Enable WebSockets (if needed)

## 9. Monitoring

### Analytics

- **Cloudflare Pages Analytics**: Built-in, available in Pages dashboard
- **PostHog**: Custom event tracking (requires env vars configured)

### Logs

- **Build logs**: Available in Pages dashboard for each deployment
- **Function logs**: If using SSR, check **Workers** > **Logs** (Logpush)

## 10. Rolling Back

If a deployment has issues:

1. Go to **Pages** > **Deployments**
2. Find a previous working deployment
3. Click **...** > **Rollback to this deployment**
4. Confirm rollback

---

## Quick Reference

### URLs

- **Production**: `https://aceobservability.com`
- **Pages Dev**: `https://<project>.pages.dev`
- **Preview**: `https://<commit>.<project>.pages.dev`

### Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Astro + Cloudflare Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Community](https://community.cloudflare.com/)
