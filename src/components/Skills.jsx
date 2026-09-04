import React from "react";
import Section from "./sub-components/Section";
import Chip from "./sub-components/Chip";
import { skills, certifications } from "../data/portfolio";

function Skills() {
  return (
    <Section id="skills" title="Skills & Certifications">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.label}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="rounded-2xl bg-white/5 p-5 font-poppins ring-1 ring-white/10 backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:ring-cyan-300/40"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex gap-3 rounded-2xl bg-white/5 p-5 font-poppins ring-1 ring-white/10 backdrop-blur-sm transition duration-300 hover:bg-white/10 hover:ring-cyan-300/40"
          >
            <span aria-hidden="true" className="text-xl">
              🏅
            </span>
            <div className="min-w-0">
              <h3 className="break-words text-sm font-semibold text-white">
                {cert.name}
              </h3>
              <p className="text-xs text-cyan-100/80">{cert.issuer}</p>
              <p className="mt-1 break-words text-xs text-slate-400">
                {cert.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
