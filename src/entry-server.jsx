// Build-time entry point. Rendered to a string by scripts/prerender.mjs so the
// shipped index.html contains the real content instead of an empty <div>.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { renderHead } from "./seo.js";

export function render() {
  return {
    html: renderToString(
      <StrictMode>
        <App />
      </StrictMode>
    ),
    head: renderHead(),
  };
}

export { renderSitemap, renderRobots } from "./seo.js";
