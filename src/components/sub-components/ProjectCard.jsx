import React, { useState } from "react";
import Carousel from "./Carousel";
import Chip from "./Chip";
import ProjectDetails from "./ProjectDetails";
import ProjectLinks from "./ProjectLinks";

/**
 * One project: screenshot carousel (when screenshots exist), tech stack, and
 * the contributions from the CV. Phone screenshots sit beside the text and
 * alternate sides; landscape web screenshots take the wider column beside it. Either
 * opens the full-size details view.
 */
function ProjectCard({ project, index }) {
  const [openAt, setOpenAt] = useState(null);
  const shots = (project.images ?? []).map((image) =>
    typeof image === "string" ? { src: image } : image
  );
  const hasImages = shots.length > 0;
  const desktop = hasImages && project.screenshots === "desktop";
  const flip = index % 2 === 1;

  const carousel = hasImages && (
    <Carousel
      shots={shots}
      label={project.name}
      variant={desktop ? "desktop" : "phone"}
      onOpen={setOpenAt}
    />
  );

  const header = (
    <>
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

      <ProjectLinks project={project}>
        {hasImages && (
          <button
            type="button"
            onClick={() => setOpenAt(0)}
            className="inline-flex items-center gap-1.5 rounded-full bg-cyan-300/10 px-3 py-1 font-medium text-cyan-200 ring-1 ring-cyan-300/40 transition hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            View details
          </button>
        )}
      </ProjectLinks>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </ul>
    </>
  );

  const points = (
    <ul className="flex flex-col gap-2.5">
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
  );

  return (
    <article
      data-aos="fade-up"
      data-aos-duration="1000"
      className="group rounded-3xl bg-[#25252a] p-5 font-poppins ring-1 ring-white/10 transition duration-300 hover:bg-[#2e2e34] hover:ring-cyan-300/40 sm:p-7"
    >
      {desktop ? (
        <>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-10">
            {carousel}
            <div className="min-w-0">{header}</div>
          </div>
          <div className="mt-7">{points}</div>
        </>
      ) : (
        <div
          className={`flex flex-col gap-6 ${
            hasImages ? (flip ? "md:flex-row-reverse" : "md:flex-row") : ""
          } md:items-center md:gap-10`}
        >
          {hasImages && <div className="md:w-[13rem] md:shrink-0">{carousel}</div>}
          <div className="min-w-0 flex-1">
            {header}
            <div className="mt-5">{points}</div>
          </div>
        </div>
      )}

      {openAt !== null && (
        <ProjectDetails
          project={project}
          shots={shots}
          startIndex={openAt}
          onClose={() => setOpenAt(null)}
        />
      )}
    </article>
  );
}

export default ProjectCard;
