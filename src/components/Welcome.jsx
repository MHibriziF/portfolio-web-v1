import React from "react";
import { profile } from "../data/portfolio";

function Welcome() {
  return (
    <section
      id="top"
      aria-labelledby="hero-name"
      className="flex w-full scroll-mt-24 justify-center px-4 pb-16 pt-20 sm:px-6 md:pt-28"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="w-full max-w-3xl animate-floating rounded-3xl bg-stone-100/20 px-6 py-10 text-center font-poppins text-teal-50 ring-1 ring-white/40 backdrop-blur-md transition-shadow duration-500 hover:shadow-xl hover:shadow-blue-500/50 sm:px-10 md:px-16 md:py-14"
      >
        <div data-aos="fade-down" data-aos-duration="2000">
          <p className="pb-3 text-3xl transition hover:scale-110 hover:text-white sm:text-4xl md:text-5xl">
            Hello!
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-duration="2000">
          <p className="pb-3 text-sm transition hover:text-white sm:text-base md:text-xl">
            My name is
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <h1
            id="hero-name"
            className="animate-rainbow-fast break-words text-xl font-bold transition hover:scale-105 hover:text-white sm:text-2xl md:text-3xl"
          >
            {profile.name}
          </h1>
          <p className="mt-2 text-sm text-slate-200 sm:text-base">
            — or just {profile.nickname}
          </p>
          <p className="mx-auto mt-4 max-w-md text-xs text-slate-200 sm:text-sm md:text-base">
            {profile.tagline}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#projects"
            className="rounded-full bg-cyan-400/90 px-6 py-2.5 text-sm font-semibold text-neutral-900 transition hover:scale-105 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            See my projects
          </a>
          <a
            href="#socials"
            className="rounded-full px-6 py-2.5 text-sm font-semibold text-white ring-1 ring-white/60 transition hover:scale-105 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
