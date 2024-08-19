import React from "react";

function Welcome() {
  return (
    <div className="flex w-full h-auto mt-32 justify-center text-teal-50">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex flex-col justify-center font-poppins ring-1 ring-white animate-floating hover:shadow-xl hover:shadow-blue-500/50 items-center w-auto backdrop-blur-sm bg-white/25 rounded-xl md:px-36 md:py-16 px-16 py-8"
      >
        <div data-aos="fade-down" data-aos-duration="2000">
          <h1 className="md:text-6xl text-3xl pb-4 hover:scale-125 hover:text-white transition">
            Hello!
          </h1>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <p className="md:text-2xl text-base hover:scale-105 pb-4 hover:text-white transition">
            My name is
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <h2 className="md:text-3xl text-lg hover:scale-125 hover:-rotate-3 hover:text-white transition">
            Muhammad Hibrizi Farghana
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
