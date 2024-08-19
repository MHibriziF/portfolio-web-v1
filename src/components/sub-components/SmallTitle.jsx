import React from "react";

function SmallTitle({ text }) {
  return (
    <h1 className="md:text-6xl mb-12 text-4xl hover:animate-rainbow hover:scale-125 transition font-semibold mx-auto">
      {text}
    </h1>
  );
}

export default SmallTitle;
