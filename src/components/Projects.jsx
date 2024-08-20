import React from "react";
import SmallTitle from "./sub-components/SmallTitle";

function Projects() {
  return (
    <>
      <section id="projects" className="pt-7 flex justify-center text-white">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="mt-16 flex flex-col justify-center"
        >
          <SmallTitle text="Projects" />
        </div>
      </section>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        className="flex justify-center font-poppins text-slate-300"
      >
        <h1 className="spc:text-6xl text-3xl hover:font-bold hover:text-slate-400 hover:scale-125 transition-all">
          Coming soon...
        </h1>
      </div>
    </>
  );
}

export default Projects;
