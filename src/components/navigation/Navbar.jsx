import React from "react";
import Navlink from "./Navlink";

function Navbar() {
  return (
    <header className="backdrop-blur-sm bg-black/30 text-white font-poppins sticky top-0  ">
      <nav className="p-5 md:flex md:items-center md:justify-between">
        <span className="text-2xl">
          <a href="#">m.h.f</a>
        </span>
        <ul className="md:flex">
          <Navlink text="Home" href="#" />
          <Navlink text="About" href="#" />
          <Navlink text="Project" href="#" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
