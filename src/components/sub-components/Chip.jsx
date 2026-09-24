import React from "react";
import { techIcon } from "../../data/techIcons";

function Chip({ children }) {
  const icon = typeof children === "string" && techIcon(children);

  // The inner span is the tag's fill; the li shows through as its 1px outline.
  return (
    <li className="tag">
      <span className="gap-1.5">
        {icon && (
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill={icon.color}
            aria-hidden="true"
            className="shrink-0"
          >
            <path d={icon.path} />
          </svg>
        )}
        {children}
      </span>
    </li>
  );
}

export default Chip;
