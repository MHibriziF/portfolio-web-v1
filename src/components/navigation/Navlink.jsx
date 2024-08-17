import React from "react";

function Navlink(props) {
  return (
    <li className="mx-4 md:my-0 md:static my-4">
      <a href={props.href} className="hover:text-cyan-100 ">
        {props.text}
      </a>
    </li>
  );
}

export default Navlink;
