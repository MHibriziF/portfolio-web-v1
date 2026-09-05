import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

const container = document.getElementById("root");

const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships prerendered markup (see scripts/prerender.mjs), so
// attach to it instead of throwing it away. `npm run dev` serves an empty root
// and falls through to a plain client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
