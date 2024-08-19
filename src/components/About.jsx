import React from "react";
import CircleImg from "./CircleImg";

function About() {
  return (
    <section id="about-me" className="pt-7 flex justify-center text-white">
      <div className="my-28 flex flex-col justify-center">
        <h1 className="md:text-6xl mb-12 text-4xl hover:animate-rainbow hover:scale-125 transition font-semibold mx-auto">
          About Me
        </h1>

        <div className="flex spc:flex-row flex-col items-center">
          <CircleImg size="medium" img="izi.jpg" />
          <div className="flex items-center md:ml-4 md:w-[45rem] sm:w-[30rem] w-80 bg-gradient-to-r from-stone-700/75 via-stone-500/75 to-stone-800/75 hover:bg-stone-500 transition group rounded-3xl md:p-6 p-4 text-center h-auto">
            <p className="font-poppins font-semibold md:text-xl sm:text-lg text-xs group-hover:font-bold transition">
              I am currently pursuing my bachelor's degree in Information System
              at Universitas Indonesia. I have a strong interest in technology
              and loves to try new things. I also love watching anime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
