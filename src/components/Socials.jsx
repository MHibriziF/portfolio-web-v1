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
          <Icons
            href="https://www.linkedin.com/in/muhammad-hibrizi-farghana/"
            img="../linkedin.png"
            alt="linkedin-logo"
          />
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