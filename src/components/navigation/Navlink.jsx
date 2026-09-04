import React from "react";

function Navlink({ href, text, active, onNavigate }) {
  return (
    <li>
      <a
        href={href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={`block rounded-lg px-3 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
          active
            ? "bg-white/10 text-cyan-200"
            : "text-slate-200 hover:bg-white/5 hover:text-cyan-100"
        }`}
      >
        {text}
      </a>
    </li>
  );
}

export default Navlink;
