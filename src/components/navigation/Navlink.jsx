import React from "react";

function Navlink(props) {
  return (
    <li>
      <a href={props.href} className="mx-4 hover:text-cyan-100 ">
        {props.text}
      </a>
    </li>
  );
}

export default Navlink;
