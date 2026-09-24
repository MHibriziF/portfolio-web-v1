import {
  siCloudflare,
  siDart,
  siDjango,
  siFastapi,
  siFirebase,
  siFlutter,
  siGit,
  siGoogle,
  siLivekit,
  siNextdotjs,
  siNuxt,
  siOpenjdk,
  siPostgresql,
  siPython,
  siRailway,
  siResend,
  siSpringboot,
  siSvelte,
  siTensorflow,
  siThemoviedatabase,
  siTypescript,
} from "simple-icons";

// Brand logos for the tech chips, from Simple Icons. Products without a logo
// of their own borrow their vendor's; concepts like "REST API" have none.
const ICONS = {
  Flutter: siFlutter,
  Dart: siDart,
  "Spring Boot": siSpringboot,
  Java: siOpenjdk,
  Django: siDjango,
  FastAPI: siFastapi,
  Python: siPython,
  "Next.js": siNextdotjs,
  Nuxt: siNuxt,
  TypeScript: siTypescript,
  PostgreSQL: siPostgresql,
  Git: siGit,
  SvelteKit: siSvelte,
  "Cloudflare Workers": siCloudflare,
  "Cloudflare D1": siCloudflare,
  "Cloudflare R2": siCloudflare,
  "Cloudflare Turnstile": siCloudflare,
  Railway: siRailway,
  LiveKit: siLivekit,
  Resend: siResend,
  "Google ML Kit": siGoogle,
  "TensorFlow Lite": siTensorflow,
  "Firebase ML": siFirebase,
  "TMDB API": siThemoviedatabase,
};

// Near-black logos would vanish on the dark chips, so those are drawn light.
function readableColor(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.04 ? "#e2e8f0" : `#${hex}`;
}

export function techIcon(name) {
  const icon = ICONS[name];
  return icon && { path: icon.path, color: readableColor(icon.hex) };
}
