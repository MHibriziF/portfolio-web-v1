import React from "react";

function CircleImg({ size, img }) {
  const inlineStyle = {
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundImage: `url('../../${img}')`,
  };
  if (size === "small") {
    return (
      <div
        style={inlineStyle}
        className="md:w-44 md:h-44 sm:w-32 sm:h-32 hover:ring-0 w-24 h-24 bg-contain bg-no-repeat bg-center rounded-full animate-bounce-slow border-solid border-4 ring-4 ring-slate-800 border-slate-700 my-4 mx-6 bg-black"
      ></div>
    );
  } else if (size === "medium") {
    return (
      <div
        style={inlineStyle}
        className="md:w-56 md:h-56 sm:w-44 sm:h-44 hover:ring-0 w-32 h-32 bg-contain bg-no-repeat bg-center rounded-full animate-bounce-slow border-solid border-4 ring-4 ring-slate-800 border-slate-700 my-4 mx-6 bg-black"
      ></div>
    );
  } else if (size === "large") {
    return (
      <div
        style={inlineStyle}
        className="md:w-80 md:h-80 sm:w-60 sm:h-60 hover:ring-0 w-40 h-40 bg-contain bg-no-repeat bg-center rounded-full animate-bounce-slow border-solid border-4 ring-4 ring-slate-800 border-slate-700 my-4 mx-6 bg-black"
      ></div>
    );
  }
}

export default CircleImg;
