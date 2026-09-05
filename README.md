# Portfolio — Muhammad Hibrizi Farghana (Izi)

Single-page React portfolio built with Vite and Tailwind, deployed at
<https://www.mhibrizif.com>.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server. Client-rendered; the SEO block in `index.html` is the dev fallback. |
| `npm run build` | Client build, then the SSR build, then the prerender pass. **Use this for deploys.** |
| `npm run build:client` | Client build only — no prerendered markup, no sitemap. Debugging aid, not for deploys. |
| `npm run preview` | Serve `dist/` exactly as it will be served in production. |

## Content

`src/data/portfolio.js` is the single source of truth. Everything — the sections,
the `<title>`, the meta description, the JSON-LD, the sitemap — is derived from
it, so there is nothing to update twice.

## How the SEO works

The site is one route, so the work is all on-page and structured data.

- **`src/seo.js`** builds the `<head>` block and the crawler files from the
  portfolio data: title, canonical, description, Open Graph, Twitter card, and a
  schema.org `@graph` containing `WebSite`, `ProfilePage`, `Person`, and one
  `CreativeWork` per project.
- **`scripts/prerender.mjs`** runs after both Vite builds. It renders the app to
  static HTML with `react-dom/server`, swaps that into `<div id="root">`,
  replaces the `<!-- seo:start -->` block in `index.html` with the generated
  tags, and writes `dist/sitemap.xml` and `dist/robots.txt`. The browser
  hydrates the prerendered markup instead of rendering from scratch
  (`src/main.jsx`).
- The `Person` node's `alternateName` lists the spellings people actually
  search — "Izi", "Hibrizi", "Hibrizi Farghana" — which is what ties them to one
  entity. `rel="me"` on the social links ties the GitHub, LinkedIn, and
  Instagram profiles back to this site.

`robots.txt` and `sitemap.xml` are generated, not committed. They only exist in
`dist/`, so a deploy must run `npm run build` — `vite build` alone will ship an
empty `<div id="root">` and no crawler files.

## Remaining asset

`public/izi.jpg` is 256×256, which is why `site.twitterCard` is the small
`summary` variant. For a wide sharing preview, add a ~1200×630 image to
`public/` and update `ogImage`, `ogImageWidth`, `ogImageHeight`, and
`twitterCard` in `src/data/portfolio.js` together.
