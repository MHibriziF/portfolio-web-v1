// Builds the <head> SEO block from the portfolio data. This runs at build time
// (see scripts/prerender.mjs), so the tags and the JSON-LD can never drift from
// what the page actually renders.

import {
  site,
  profile,
  education,
  experience,
  projects,
  skills,
  certifications,
  socials,
} from "./data/portfolio";

const absolute = (path) =>
  /^https?:\/\//.test(path) ? path : `${site.url}${path}`;

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** `</script>` inside a JSON-LD payload would close the tag early. */
const escapeJsonLd = (value) =>
  JSON.stringify(value, null, 2).replace(/</g, "\u003c");

const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;
const PAGE_ID = `${site.url}/#webpage`;

/** Everything he demonstrably works with, de-duplicated and order-preserved. */
function knowsAbout() {
  const fromSkills = skills
    .filter((group) => group.label !== "Soft Skills")
    .flatMap((group) => group.items);
  const fromProjects = projects.flatMap((project) => project.stack);
  const extras = [
    "Backend Development",
    "Mobile Development",
    "Software Engineering",
    "REST API Design",
    "Large Language Model Integration",
  ];
  return [...new Set([...fromSkills, ...fromProjects, ...extras])];
}

function personSchema() {
  const current = experience.filter((item) => item.period.includes("Present"));

  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    alternateName: profile.alternateNames,
    givenName: profile.givenName,
    familyName: profile.familyName,
    additionalName: profile.nickname,
    description: profile.summary,
    disambiguatingDescription: `${profile.tagline} based in ${profile.location}.`,
    jobTitle: profile.tagline,
    email: `mailto:${profile.email}`,
    image: absolute(profile.photo),
    url: `${site.url}/`,
    mainEntityOfPage: { "@id": PAGE_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.locality,
      addressRegion: profile.region,
      addressCountry: profile.country,
    },
    nationality: { "@type": "Country", name: "Indonesia" },
    knowsLanguage: ["en", "id"],
    knowsAbout: knowsAbout(),
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.org,
    })),
    worksFor: current.map((item) => ({
      "@type": "Organization",
      name: item.org,
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: profile.tagline,
      occupationLocation: { "@type": "City", name: profile.locality },
    },
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
    })),
    sameAs: socials.map((social) => social.href),
  };
}

function projectSchemas() {
  return projects.map((project) => ({
    "@type": "CreativeWork",
    "@id": `${site.url}/#project-${project.id}`,
    name: project.name,
    alternateName: project.subtitle,
    description: project.points[0],
    about: project.context,
    keywords: project.stack.join(", "),
    creator: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
  }));
}

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${site.url}/`,
        name: `${profile.name} — Portfolio`,
        alternateName: profile.alternateNames,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": PAGE_ID,
        url: `${site.url}/`,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        primaryImageOfPage: absolute(profile.photo),
        inLanguage: "en",
      },
      personSchema(),
      ...projectSchemas(),
    ],
  };
}

const META = () => {
  const image = absolute(site.ogImage);
  const canonical = `${site.url}/`;

  return [
    ["name", "description", site.description],
    ["name", "author", profile.name],
    [
      "name",
      "robots",
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    ],
    ["name", "googlebot", "index, follow"],

    ["property", "og:type", "profile"],
    ["property", "og:site_name", `${profile.name} — Portfolio`],
    ["property", "og:locale", site.locale],
    ["property", "og:url", canonical],
    ["property", "og:title", site.title],
    ["property", "og:description", site.description],
    ["property", "og:image", image],
    ["property", "og:image:type", site.ogImageType],
    ["property", "og:image:width", site.ogImageWidth],
    ["property", "og:image:height", site.ogImageHeight],
    ["property", "og:image:alt", `Portrait of ${profile.name} (${profile.nickname})`],
    ["property", "profile:first_name", profile.givenName],
    ["property", "profile:last_name", profile.familyName],
    ["property", "profile:username", profile.nickname],

    ["name", "twitter:card", site.twitterCard],
    ["name", "twitter:title", site.title],
    ["name", "twitter:description", site.description],
    ["name", "twitter:image", image],
    ["name", "twitter:image:alt", `Portrait of ${profile.name} (${profile.nickname})`],

    ["name", "geo.region", `${profile.country}-JB`],
    ["name", "geo.placename", profile.locality],
  ];
};

/** The full head block injected between the <!--seo--> markers in index.html. */
export function renderHead() {
  const tags = META()
    .map(([attr, key, value]) => `    <meta ${attr}="${key}" content="${escapeAttr(value)}" />`)
    .join("\n");

  return [
    `    <title>${escapeAttr(site.title)}</title>`,
    `    <link rel="canonical" href="${site.url}/" />`,
    tags,
    `    <script type="application/ld+json">${escapeJsonLd(jsonLd())}</script>`,
  ].join("\n");
}

/** Single-route site, so the sitemap is one entry — but it still gets crawled. */
export function renderSitemap(lastmod = new Date().toISOString().slice(0, 10)) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}

export function renderRobots() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Answer engines are how a lot of "who is ..." questions get asked now.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
}
