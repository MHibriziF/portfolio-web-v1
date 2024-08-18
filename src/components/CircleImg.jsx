import React from "react";

function CircleImg(props) {
  return (
    <div
      className={`bg-contain rounded-full w-${props.size} h-${props.size} bg-[url('../../public/${props.imgTitle}')]`}
    ></div>
  );
}

export default CircleImg;
