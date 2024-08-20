import React from "react";

function Icons({ href, img, alt }) {
  return (
    <a href={href} target="_blank" className="mx-4 group">
      <img
        src={img}
        alt={alt}
        className="w-24 bg-white rounded-full group-hover:scale-75 group-hover:bg-slate-100 transition-all"
      />
    </a>
  );
}

export default Icons;
