import React from "react";

const LINK =
  "inline-flex items-center gap-1.5 rounded font-medium text-cyan-300 transition hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300";

/** Repository link, plus credit to the original project for a fork. */
function ProjectLinks({ project, children }) {
  const { link, forkOf } = project;
  if (!link && !forkOf && !children) return null;

  return (
    <div className="mt-3 flex flex-col gap-2 text-sm">
      {forkOf && (
        <p className="break-words text-slate-300">
          Forked from{" "}
          <a href={forkOf.url} target="_blank" rel="noreferrer noopener" className={LINK}>
            {forkOf.name}
          </a>{" "}
          by {forkOf.author}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {link && (
          <a href={link} target="_blank" rel="noreferrer noopener" className={LINK}>
            View on GitHub
            <span aria-hidden="true">&rarr;</span>
          </a>
        )}
        {children}
      </div>
    </div>
  );
}

export default ProjectLinks;
