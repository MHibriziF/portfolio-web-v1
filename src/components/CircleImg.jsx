import React from "react";

function CircleImg(props) {
  const inlineStyle = {
    width: `${props.size}rem`,
    height: `${props.size}rem`,
    backgroundImage: `url('../../${props.img}')`,
  };
  return (
    <div
      style={inlineStyle}
      className="bg-contain bg-no-repeat bg-center rounded-full border-solid border-4 ring-4 ring-slate-800 border-slate-700 my-4 mx-6 bg-black"
    ></div>
  );
}

export default CircleImg;
