import React from "react";
import SmallTitle from "./sub-components/SmallTitle";

function Projects() {
  return (
    <>
      <div className="pt-1 flex justify-center text-white mb-16">
        <SmallTitle text="Projects" />
      </div>
      <div className="flex justify-center">
        <div class="w-max">
          <h1 class="animate-typing hover:scale-125 hover:text-slate-500 transition-all overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-6xl text-white font-bold text-center">
            Coming Soon...
          </h1>
        </div>
      </div>
    </>
  );
}

export default Projects;
