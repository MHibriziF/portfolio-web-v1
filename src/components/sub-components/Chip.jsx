import React from "react";

function Chip({ children }) {
  // The inner span is the tag's fill; the li shows through as its 1px outline.
  return (
    <li className="tag">
      <span>{children}</span>
    </li>
  );
}

export default Chip;
