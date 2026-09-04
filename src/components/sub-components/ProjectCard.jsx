import React from "react";
import Carousel from "./Carousel";
import Chip from "./Chip";

/**
 * One project: screenshot carousel (when screenshots exist), tech stack, and
 * the contributions from the CV. Cards alternate the carousel side on wide
 * screens; on phones everything collapses into one column.
 */
function ProjectCard({ project, index }) {
  const hasImages = project.images && project.images.length > 0;
  const flip = index % 2 === 1;

  return (
    <article
      data-aos="fade-up"
      data-aos-duration="1000"
      className="group rounded-3xl bg-[#25252a] p-5 font-poppins ring-1 ring-white/10 transition duration-300 hover:bg-[#2e2e34] hover:ring-cyan-300/40 sm:p-7"
    >
      <div
        className={`flex flex-col gap-6 ${
          hasImages ? (flip ? "md:flex-row-reverse" : "md:flex-row") : ""
        } md:items-center md:gap-10`}
      >
        {hasImages && (
          <div className="md:w-[13rem] md:shrink-0">
            <Carousel images={project.images} label={project.name} />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="break-words text-2xl font-bold text-white sm:text-3xl">
              {project.name}
            </h3>
            {project.role && (
              <span className="tag-meta">
                <span>{project.role}</span>
              </span>
            )}
          </div>

          <p className="mt-1 break-words text-sm font-medium text-cyan-100/80 sm:text-base">
            {project.subtitle}
          </p>
          <p className="mt-0.5 break-words text-xs text-slate-300">
            {project.context}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ul>

          <ul className="mt-5 flex flex-col gap-2.5">
            {project.points.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 text-sm leading-relaxed text-slate-200"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500 transition-colors group-hover:bg-cyan-300"
                />
                <span className="min-w-0 break-words">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
