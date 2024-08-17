import React from "react";

function Welcome() {
  return (
    <div className="flex w-full h-auto mt-16 justify-center">
      <div
        data-aos="fade-right"
        className="flex flex-col justify-center items-center w-auto backdrop-blur-sm bg-white/25 rounded-xl md:px-36 md:py-16 px-16 py-8"
      >
        <h1 className="md:text-5xl text-3xl font-poppins pb-4">Hello!</h1>
        <p>My name is</p>
        <h2>Muhammad Hibrizi Farghana</h2>
      </div>
    </div>
  );
}

export default Welcome;
