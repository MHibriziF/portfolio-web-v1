import React from "react";
import SmallTitle from "./sub-components/SmallTitle";

function Contacts() {
  return (
    <section id="projects" className="pt-7 flex justify-center text-white">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="mt-52 flex flex-col justify-center"
      >
        <SmallTitle text="Contact" />
      </div>
    </section>
  );
}

export default Contacts;
