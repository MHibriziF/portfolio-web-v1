import React from "react";
import Section from "./sub-components/Section";
import CircleImg from "./sub-components/CircleImg";
import { profile } from "../data/portfolio";

function About() {
  return (
    <Section id="about-me" title="About Me">
      <div className="flex flex-col items-center gap-8 spc:flex-row spc:gap-12">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="shrink-0"
        >
          <CircleImg size="medium" img="/izi.jpg" name={profile.name} />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="min-w-0 flex-1"
        >
          <div className="group rounded-3xl bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800 p-5 ring-1 ring-white/10 transition duration-300 hover:ring-cyan-300/40 sm:p-7">
            <p className="text-center font-poppins text-sm leading-relaxed text-slate-100 spc:text-left sm:text-base">
              {profile.summary}
            </p>
            <p className="mt-4 text-center font-poppins text-xs text-slate-400 spc:text-left">
              📍 {profile.location} · ✉️{" "}
              <a
                href={`mailto:${profile.email}`}
                className="underline decoration-dotted underline-offset-4 transition hover:text-cyan-200"
              >
                {profile.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
