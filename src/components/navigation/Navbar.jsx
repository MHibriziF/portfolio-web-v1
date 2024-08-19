import React from "react";
import Navlink from "./Navlink";

function Navbar() {
  return (
    <header className="backdrop-blur-sm bg-black/30 text-white font-poppins sticky top-0 z-10">
      <nav className="p-5 md:flex md:items-center md:justify-between">
        <span className="text-2xl">
          <a href="#">m.h.f</a>
        </span>

        <input class="peer hidden" type="checkbox" id="navbar-open" />
        <label
          class="absolute right-0 mt-1 cursor-pointer text-xl mx-4 md:hidden "
          for="navbar-open"
        >
          <span class="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>

        <ul
          aria-label="Header Navigation"
          className="md:flex md:peer-checked:flex peer-checked:inline hidden"
        >
          <Navlink text="Home" href="#" />
          <Navlink text="About" href="#about-me" />
          <Navlink text="Project" href="#" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
