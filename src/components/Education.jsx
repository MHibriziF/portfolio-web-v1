import React from "react";
import SmallTitle from "./sub-components/SmallTitle";
import Descriptor from "./sub-components/Descriptor";

function Education() {
  return (
    <section className="pt-1 flex justify-center text-white mb-16">
      <div
        className="w-full flex flex-col"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <SmallTitle text="Education" />
        <Descriptor
          start="left"
          img="makara-ui.png"
          bullet="Universitas Indonesia — Undergraduate Information System"
          text="
                Current GPA: 3.90 / 4.0 
                Credits Taken: 60"
        />
        <Descriptor
          start="right"
          img="logo-netco.jpeg"
          bullet="SMAN 3 Kota Jambi — Science Student"
          text="
                Activities: Netco Informatics Olympiad Team, English Club
                Achievements: 7th Place In the Jambi City Informatics Olympiad"
        />
      </div>
    </section>
  );
}

export default Education;
