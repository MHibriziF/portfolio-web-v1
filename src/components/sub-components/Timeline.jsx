import React from "react";
import CircleImg from "./CircleImg";

/**
 * Vertical timeline.
 *
 * Below `spc` it is a single left-railed column; at `spc` and up it becomes a
 * centre rail with cards alternating sides. Every card is a grid/flex child
 * with `min-w-0`, so long words wrap instead of pushing the page sideways.
 */
function Timeline({ items }) {
  return (
    <ol className="relative flex flex-col gap-10 spc:gap-14">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-7 top-4 w-px spc:left-1/2 bg-[linear-gradient(to_bottom,transparent,rgb(100_116_139/0.7)_4%,rgb(100_116_139/0.7)_96%,transparent)]"
      />

      {items.map((item, index) => {
        const flip = index % 2 === 1;
        return (
          <li
            key={`${item.org}-${item.role}`}
            className="relative min-h-[3.5rem] pl-20 spc:grid spc:grid-cols-[1fr_7rem_1fr] spc:items-start spc:gap-x-8 spc:pl-0"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              className="absolute left-0 top-0 spc:static spc:col-start-2 spc:row-start-1 spc:flex spc:justify-center"
            >
              <CircleImg
                size="timeline"
                img={item.logo}
                name={item.org}
                animated={false}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className={`min-w-0 ${
                flip ? "spc:col-start-3" : "spc:col-start-1"
              } spc:row-start-1`}
            >
              <article className="group h-full rounded-2xl bg-[#25252a] p-5 font-poppins ring-1 ring-white/10 transition duration-300 hover:bg-[#2e2e34] hover:ring-cyan-300/40">
                <span className="tag-meta">
                  <span>{item.period}</span>
                </span>

                <h3 className="mt-3 break-words text-lg font-bold text-white sm:text-xl">
                  {item.org}
                </h3>
                <p className="mt-0.5 break-words text-sm font-medium text-cyan-100/80">
                  {item.role}
                </p>
                {item.place && (
                  <p className="mt-0.5 text-xs text-slate-300">{item.place}</p>
                )}

                <ul className="mt-3 flex flex-col gap-2">
                  {item.points.map((point) => {
                    // A point is either a plain string or {label, text}, where
                    // the label heads the line — used to fold several courses
                    // or sub-roles into one entry.
                    const label = point.label;
                    const text = label ? point.text : point;
                    return (
                      <li
                        key={label ?? text}
                        className="flex gap-2 text-left text-sm leading-relaxed text-slate-200"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500 transition-colors group-hover:bg-cyan-300"
                        />
                        <span className="min-w-0 break-words">
                          {label && (
                            <span className="font-semibold text-cyan-100/90">
                              {label}
                              <br />
                            </span>
                          )}
                          {text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;
