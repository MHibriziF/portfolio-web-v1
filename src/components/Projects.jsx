import React from "react";
import Section from "./sub-components/Section";
import ProjectCard from "./sub-components/ProjectCard";
import { projects } from "../data/portfolio";

function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Things I have built — the stack I used and what I actually contributed."
    >
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
