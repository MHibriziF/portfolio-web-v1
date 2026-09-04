import React from "react";
import SmallTitle from "./SmallTitle";

/**
 * Shared section shell. Every section goes through this so the horizontal
 * padding and max width are defined in exactly one place — that is what keeps
 * narrow screens from scrolling sideways.
 */
function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-24 px-4 py-14 sm:px-6 md:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {title && (
          <div data-aos="zoom-in" data-aos-duration="1200">
            <SmallTitle text={title} />
            {subtitle && (
              <p className="mx-auto mb-10 max-w-2xl text-center font-poppins text-sm text-slate-300 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
