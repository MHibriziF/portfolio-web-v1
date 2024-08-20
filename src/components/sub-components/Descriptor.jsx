import React from "react";
import CircleImg from "./CircleImg";
import Bulletpoint from "./Bulletpoint";

function Descriptor({ start, text, img, bullet }) {
  if (start === "left") {
    return (
      <div className="flex spc:flex-row flex-col justify-start items-center mb-4">
        <CircleImg size="small" img={img} />
        <div className="grid grid-cols-[2rem_1fr] grid-rows-[2rem_1fr] font-poppins spc:text-base text-sm">
          <Bulletpoint text={bullet} start={start} />
          <div className="relative flex ml-16 spc:w-[40rem] w-72 h-36 row-span-2 group">
            <div className="absolute w-4 mt-4 h-32 rounded-full bg-slate-700 group-hover:rounded-3xl spc:group-hover:w-[37rem] group-hover:w-72 transition-all duration-500"></div>
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
  } else if (start === "right") {
    return (
      <div className="flex spc:flex-row-reverse flex-col justify-start items-center mb-4">
        <CircleImg size="small" img={img} />
        <div className="flex flex-col items-start font-poppins spc:text-base text-sm">
          <div className="flex w-full justify-end">
            <Bulletpoint text={bullet} start={start} />
          </div>

          <div className="relative spc:w-[40rem] w-72 h-36 group">
            <div className="absolute right-0 w-4 mt-4 h-32 rounded-full bg-slate-700 group-hover:rounded-3xl spc:group-hover:w-[37rem] group-hover:w-72 transition-all duration-500"></div>
            <p className="relative mr-16 mt-4 group-hover:mr-8 group-hover:font-semibold transition-all duration-500 text-right">
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
}

export default Descriptor;
