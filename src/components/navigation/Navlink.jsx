import React from "react";

function Navlink({ href, text }) {
  return (
    <li className="mx-4 md:my-0 md:static my-4">
      <a href={href} className="hover:text-cyan-100 ">
        {text}
      </a>
    </li>
  );
}

export default Navlink;
