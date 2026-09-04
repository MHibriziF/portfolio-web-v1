import React, { useEffect, useState } from "react";
import Navlink from "./Navlink";

const LINKS = [
  { text: "Home", href: "#top", id: "top" },
  { text: "About", href: "#about-me", id: "about-me" },
  { text: "Experience", href: "#experience", id: "experience" },
  { text: "Education", href: "#education", id: "education" },
  { text: "Projects", href: "#projects", id: "projects" },
  { text: "Skills", href: "#skills", id: "skills" },
  { text: "Socials", href: "#socials", id: "socials" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  // Highlight whichever section is closest to the top of the viewport.
  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean
    );
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/70 font-poppins text-white backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6"
      >
        <a
          href="#top"
          className="text-xl font-semibold tracking-widest transition hover:text-cyan-200"
        >
          m.h.f
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          className="rounded-lg p-2 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>

        <ul
          id="primary-navigation"
          className={`w-full flex-col text-sm md:flex md:w-auto md:flex-row md:items-center md:gap-1 ${
            open ? "flex animate-fade-slide pb-2 pt-2" : "hidden"
          }`}
        >
          {LINKS.map((link) => (
            <Navlink
              key={link.id}
              text={link.text}
              href={link.href}
              active={active === link.id}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
