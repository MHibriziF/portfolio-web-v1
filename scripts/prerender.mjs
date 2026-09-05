// Post-build step: render the app to static HTML and write the crawler files.
//
// Runs after both Vite builds (client -> dist, SSR -> dist-ssr). Everything it
// emits is derived from src/data/portfolio.js, so there is nothing to keep in
// sync by hand.

import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = resolve(root, "dist/index.html");
const entryPath = resolve(root, "dist-ssr/entry-server.js");

const SEO_BLOCK = /<!-- seo:start[\s\S]*?seo:end -->/;

const { render, renderSitemap, renderRobots } = await import(
  pathToFileURL(entryPath).href
);

const { html, head } = render();
const template = await readFile(indexPath, "utf8");

if (!SEO_BLOCK.test(template)) {
  throw new Error("index.html is missing its <!-- seo:start --> block");
}
if (!template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing <div id="root"></div>');
}

const output = template
  .replace(SEO_BLOCK, head.trimStart())
  .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

await writeFile(indexPath, output, "utf8");
await writeFile(resolve(root, "dist/sitemap.xml"), renderSitemap(), "utf8");
await writeFile(resolve(root, "dist/robots.txt"), renderRobots(), "utf8");

// The SSR bundle is a build artifact only — never deploy it.
await rm(resolve(root, "dist-ssr"), { recursive: true, force: true });

console.log(
  `prerendered ${(html.length / 1024).toFixed(1)} kB of markup, wrote sitemap.xml and robots.txt`
);
