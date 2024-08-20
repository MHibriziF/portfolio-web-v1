import React from "react";

function Bulletpoint({ text, start }) {
  if (start === "left") {
    return (
      <>
        <div className="ml-16 rounded-full w-6 h-6 bg-slate-700 inline-block"></div>
        <p className="ml-16 inline-block hover:font-semibold transition-all">
          {text}
        </p>
      </>
    );
  } else if (start === "right") {
    return (
      <>
        <p className="mr-4 inline-block text-right hover:font-semibold transition-all">
          {text}
        </p>
        <div className="spc:mr-4 rounded-full w-6 h-6 bg-slate-700 inline-block"></div>
      </>
    );
  }
}

export default Bulletpoint;
