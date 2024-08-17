import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white font-poppins fixed w-full">
      <nav className="p-5 md:flex md:items-center md:justify-between">
        <span className="text-2xl">m.h.f</span>
        <ul className="md:flex">
          <li>
            <a href="#" className="mx-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mx-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mx-4">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
