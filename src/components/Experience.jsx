import React from "react";
import SmallTitle from "./sub-components/SmallTitle";
import Descriptor from "./sub-components/Descriptor";

function Experience() {
  return (
    <section className="pt-1 flex justify-center text-white">
      <div
        className="w-full flex flex-col"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <SmallTitle text="Experience" />
        <Descriptor
          start="left"
          img="makara-ui.png"
          bullet="Universitas Indonesia — Teaching Assistant of Discrete Math 1"
          text="
                Aug 2024 — Present
                Gives assistance to students
                Makes problems for students
                Grades students homeworks"
        />
        <Descriptor
          start="right"
          img="compfest.jpeg"
          bullet="SEA Academy Compfest — Staff"
          text="
                Apr 2024 — Present
                Scouts for potential speaker
                Acts as a Liaison Officer for speaker and judges
                Interviews potential candidates"
        />
      </div>
    </section>
  );
}

export default Experience;