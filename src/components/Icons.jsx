import React from "react";

function Icons({ href, img, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={alt}
      className="group block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className="w-16 rounded-full bg-white p-1 transition-all duration-300 group-hover:scale-90 group-hover:bg-cyan-100 sm:w-20 md:w-24"
      />
    </a>
  );
}

export default Icons;
