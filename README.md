# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root:

```bash
cp .env.example .env
```

### Available Variables

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| `PUBLIC_POSTHOG_KEY` | No | PostHog project API key for analytics | - |
| `PUBLIC_POSTHOG_HOST` | No | PostHog API host URL | `https://us.i.posthog.com` |

> **Note:** Variables prefixed with `PUBLIC_` are exposed to the browser and included in the client bundle.

### Analytics (PostHog)

Landing-page interest tracking is integrated with PostHog:

**Tracked events:**
- `landing_interest_page_viewed` - When landing page is viewed
- `landing_interest_clicked` - When CTA button is clicked

To enable analytics:
1. Get your PostHog API key from [PostHog Project Settings](https://app.posthog.com/project/settings)
2. Set `PUBLIC_POSTHOG_KEY` in `.env` (local) or environment variables (production)
3. Optionally customize `PUBLIC_POSTHOG_HOST` if using self-hosted PostHog

## Deployment

This site is configured for **Cloudflare Pages** deployment.

### Quick Deploy

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables (see above)
5. Deploy!

**📖 For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Build Output

The project is configured with the `@astrojs/cloudflare` adapter:
- **Output mode**: `static` (pre-rendered at build time)
- **Adapter mode**: `directory` (CF Pages compatible)
- **Security headers**: Configured in `public/_headers`
- **Redirects**: Configured in `public/_redirects`

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
