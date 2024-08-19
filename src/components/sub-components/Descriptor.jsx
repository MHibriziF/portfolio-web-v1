import React from "react";
import CircleImg from "./CircleImg";
import Bulletpoint from "./Bulletpoint";

function Descriptor({ text, img, bullet }) {
  return (
    <div className="flex spc:flex-row flex-col justify-start items-center">
      <CircleImg size="small" img={img} />
      <div className="grid grid-cols-[2rem_1fr] grid-rows-[2rem_1fr] font-poppins spc:text-base text-sm">
        <Bulletpoint text={bullet} />
        <div className="relative flex ml-16 spc:w-[40rem] w-72 h-36 group">
          <div className="absolute w-4 mt-4 h-24 rounded-full bg-slate-700 group-hover:rounded-3xl spc:group-hover:w-[35rem] group-hover:w-72 transition-all duration-500"></div>
          <p className="relative ml-16 mt-4 group-hover:ml-8 group-hover:font-semibold transition-all duration-500">
            {text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptor;
