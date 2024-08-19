import React from "react";
import SmallTitle from "./sub-components/SmallTitle";
import CircleImg from "./sub-components/CircleImg";
import Bulletpoint from "./sub-components/Bulletpoint";

function Education() {
  return (
    <section className="pt-1 flex justify-center text-white">
      <div className="w-full flex flex-col">
        <SmallTitle text="Education" />
        <div className="flex">
          <CircleImg size="small" img="makara-ui.png" />
          <div className="grid grid-cols-[2rem_1fr] grid-rows-[2rem_1fr] font-poppins text-base">
            <Bulletpoint text="Information System --- 2023 — 2027 (expected)" />
            <div className="relative flex ml-16 w-[40rem] h-36 group">
              <div className="absolute w-4 h-24 rounded-full bg-slate-700 group-hover:rounded-3xl group-hover:w-[40rem] transition-all duration-500"></div>
              <p className="relative ml-16 group-hover:ml-8 group-hover:font-semibold transition-all duration-500">
                Current GPA: 3.94 / 4.0 <br />
                Credits Taken: 42
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
