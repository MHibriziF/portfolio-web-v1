import React from "react";

function Bulletpoint({ text }) {
  return (
    <>
      <div className="ml-16 rounded-full w-6 h-6 bg-slate-700 inline-block"></div>
      <p className="ml-16 inline-block hover:font-semibold transition-all">
        {text}
      </p>
    </>
  );
}

export default Bulletpoint;
