import React from "react";
import Icons from "./Icons";
import SmallTitle from "./sub-components/SmallTitle";

function Contacts() {
  return (
    <section id="socials" className="pt-7 flex justify-center text-white">
      <div className="flex flex-col">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="mt-32 flex flex-col justify-center"
        >
          <SmallTitle text="Socials" />
        </div>
        <div className="flex">
          <Icons
            href="https://github.com/MHibriziF/"
            img="../github.png"
            alt="github-logo"
          />
          <a
            href="https://www.linkedin.com/in/muhammad-hibrizi-farghana/"
            target="_blank"
            className="mx-4"
          >
            <img
              src="../linkedin.png"
              alt="linkedin-logo"
              className="w-24 bg-white rounded-full hover:scale-75 hover:bg-slate-100 transition-all"
            />
          </a>
          <Icons
            href="https://www.instagram.com/mhibrizifarghana/"
            img="../instagram.png"
            alt="instagram-logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
