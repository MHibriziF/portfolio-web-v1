import React from "react";

function SmallTitle({ text }) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <h2 className="text-center font-poppins text-3xl font-semibold text-white transition hover:animate-rainbow hover:scale-110 sm:text-4xl md:text-5xl">
        {text}
      </h2>
      <span className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400/70 via-slate-300/70 to-fuchsia-400/70" />
    </div>
  );
}

export default SmallTitle;
