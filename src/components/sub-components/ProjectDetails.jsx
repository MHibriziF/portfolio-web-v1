import React, { useEffect, useRef } from "react";
import Carousel from "./Carousel";
import Chip from "./Chip";
import ProjectLinks from "./ProjectLinks";

/**
 * Full view of one project: screenshots as large as the screen allows, with
 * captions, then everything the card has. A native <dialog>, so Escape, focus
 * trapping and the backdrop come from the browser.
 */
function ProjectDetails({ project, shots, startIndex, onClose }) {
  const dialogRef = useRef(null);
  const desktop = project.screenshots === "desktop";

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the dialog itself.
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}
      aria-labelledby={`${project.id}-details-title`}
      className="m-auto max-h-[92vh] w-[min(72rem,calc(100vw-1.5rem))] overflow-y-auto rounded-3xl bg-[#1f1f23] p-0 font-poppins text-white ring-1 ring-white/10 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-[#1f1f23]/95 px-5 py-4 backdrop-blur sm:px-8">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
          <h3
            id={`${project.id}-details-title`}
            className="break-words text-xl font-bold sm:text-2xl"
          >
            {project.name}
          </h3>
          {project.role && (
            <span className="tag-meta">
              <span>{project.role}</span>
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current.close()}
          aria-label="Close"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="px-5 pb-8 sm:px-8">
        {shots.length > 0 && (
          <Carousel
            shots={shots}
            label={project.name}
            variant={desktop ? "desktop" : "phone"}
            // Phone captures are capped by height so the whole screen fits.
            className={desktop ? "" : "max-w-[min(20rem,calc(62vh*9/19.5))]"}
            initialIndex={startIndex}
            showCaption
          />
        )}

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="break-words font-medium text-cyan-100/80">
            {project.subtitle}
          </p>
          <p className="mt-0.5 break-words text-sm text-slate-300">
            {project.context}
          </p>

          <ProjectLinks project={project} />

          {project.summary && (
            <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">
              {project.summary}
            </p>
          )}

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ul>

          {project.pointsTitle && (
            <h4 className="mt-7 text-sm font-semibold uppercase tracking-wide text-cyan-200">
              {project.pointsTitle}
            </h4>
          )}
          <ul className="mt-4 flex flex-col gap-3">
            {project.points.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 text-sm leading-relaxed text-slate-200 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                />
                <span className="min-w-0 break-words">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </dialog>
  );
}

export default ProjectDetails;
