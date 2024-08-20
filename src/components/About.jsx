import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import SmallTitle from "./sub-components/SmallTitle";
import CircleImg from "./sub-components/CircleImg";

function About() {
  return (
    <>
      <section id="about-me" className="pt-7 flex justify-center text-white">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="my-28 flex flex-col justify-center"
        >
          <SmallTitle text="About Me" />

          <div className="flex spc:flex-row flex-col items-center">
            <div
              data-aos="zoom-out-right"
              data-aos-duration="2000"
              className="m-0 p-0"
            >
              <CircleImg size="medium" img="izi.jpg" />
            </div>
            <div
              data-aos="zoom-out-left"
              data-aos-duration="2000"
              className="m-0 p-0"
            >
              <div className="flex items-center md:ml-4 md:w-[41rem] sm:w-[27rem] w-80 bg-gradient-to-r from-stone-700/75 via-stone-500/75 to-stone-800/75 hover:bg-stone-500 transition group rounded-3xl md:p-6 p-4 text-center h-auto">
                <p className="font-poppins font-semibold md:text-xl sm:text-lg text-xs group-hover:font-bold transition-all">
                  I am currently pursuing my bachelor's degree in Information
                  System at Universitas Indonesia. I have a strong interest in
                  technology and loves to try new things. I also love watching
                  anime!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Education />
      <Experience />
    </>
  );
}

export default About;
