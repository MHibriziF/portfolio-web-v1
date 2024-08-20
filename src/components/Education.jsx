import React from "react";
import SmallTitle from "./sub-components/SmallTitle";
import CircleImg from "./sub-components/CircleImg";
import Bulletpoint from "./sub-components/Bulletpoint";
import Descriptor from "./sub-components/Descriptor";

function Education() {
  return (
    <section className="pt-1 flex justify-center text-white">
      <div className="w-full flex flex-col">
        <SmallTitle text="Education" />
        <Descriptor
          start="left"
          img="makara-ui.png"
          bullet="Information System --- 2023 — 2027 (expected)"
          text="Current GPA: 3.94 / 4.0 
                Credits Taken: 42"
        />
        <Descriptor
          start="right"
          img="logo-netco.jpg"
          bullet="Science Student --- 2020 — 2023"
          text="Activities: Netco Informatics Olympiad Team, English Club
                Achievements: 7th Place In the Jambi City Informatics Olympiad"
        />
      </div>
    </section>
  );
}

export default Education;
