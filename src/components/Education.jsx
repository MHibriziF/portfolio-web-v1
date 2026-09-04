import React from "react";
import Section from "./sub-components/Section";
import Timeline from "./sub-components/Timeline";
import { education } from "../data/portfolio";

function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline items={education} />
    </Section>
  );
}

export default Education;
