import React from "react";
import Icons from "./Icons";
import Section from "./sub-components/Section";
import { profile, socials } from "../data/portfolio";

const AOS_BY_INDEX = ["flip-right", "flip-up", "flip-left"];

function Contacts() {
  return (
    <Section
      id="socials"
      title="Socials"
      subtitle="Feel free to reach out — I am always happy to talk about tech."
    >
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        {socials.map((social, index) => (
          <div
            key={social.alt}
            data-aos={AOS_BY_INDEX[index % AOS_BY_INDEX.length]}
            data-aos-duration="1000"
          >
            <Icons href={social.href} img={social.img} alt={social.alt} />
          </div>
        ))}
      </div>

      <p className="mt-8 text-center font-poppins text-sm text-slate-300">
        or email me at{" "}
        <a
          href={`mailto:${profile.email}`}
          className="font-semibold text-cyan-200 underline decoration-dotted underline-offset-4 transition hover:text-cyan-100"
        >
          {profile.email}
        </a>
      </p>
    </Section>
  );
}

export default Contacts;
