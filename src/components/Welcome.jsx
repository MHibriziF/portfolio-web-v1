import React from "react";

function Welcome() {
  return (
    <div className="flex w-full h-auto mt-11 justify-center text-teal-50">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex flex-col justify-center font-poppins animate-waving hover:shadow-xl hover:shadow-blue-500/50 items-center w-auto backdrop-blur-sm bg-white/25 rounded-xl md:px-36 md:py-16 px-16 py-8"
      >
        <h1
          data-aos="fade-down"
          data-aos-duration="2000"
          className="md:text-6xl text-3xl pb-4 hover:scale-125 hover:text-white"
        >
          Hello!
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="md:text-2xl text-base hover:scale-105 pb-4 hover:text-white"
        >
          My name is
        </p>
        <h2
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:text-3xl text-lg hover:scale-125 hover:-rotate-3 hover:text-white"
        >
          Muhammad Hibrizi Farghana
        </h2>
      </div>
    </div>
  );
}

export default Welcome;
