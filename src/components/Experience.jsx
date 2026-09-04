import React from "react";
import Section from "./sub-components/Section";
import Timeline from "./sub-components/Timeline";
import { experience } from "../data/portfolio";

function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I have worked, led, and mentored."
    >
      <Timeline items={experience} />
    </Section>
  );
}

export default Experience;
