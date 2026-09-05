import React from "react";
import { profile, socials } from "../data/portfolio";

function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black/80 font-poppins text-slate-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-6 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name} · Made with ❤️
        </p>
        <ul className="flex items-center gap-4 text-sm">
          {socials.map((social) => (
            <li key={social.alt}>
              <a
                href={social.href}
                aria-label={`${profile.name} on ${social.alt}`}
                target="_blank"
                rel="me noreferrer noopener"
                className="transition hover:text-cyan-200"
              >
                {social.alt}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
