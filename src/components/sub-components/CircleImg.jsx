import React from "react";

const SIZES = {
  // Sits on the timeline rail: compact on phones, roomier once the layout
  // switches to the alternating two-column view.
  timeline: "w-14 h-14 sm:w-16 sm:h-16 spc:w-24 spc:h-24",
  small: "w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32",
  medium: "w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56",
  large: "w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72",
};

const MONOGRAM_TEXT = {
  timeline: "text-base sm:text-lg spc:text-2xl",
  small: "text-lg sm:text-2xl",
  medium: "text-3xl sm:text-4xl",
  large: "text-4xl sm:text-5xl",
};

/** First letter of up to two meaningful words, e.g. "Bekerdja.id" -> "B". */
function initialsOf(name = "") {
  return name
    .replace(/[^A-Za-z\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

/**
 * Round avatar. Falls back to an initials monogram when no image is provided,
 * so entries without a logo asset still look deliberate.
 */
function CircleImg({ size = "small", img, name = "", animated = true }) {
  const frame = [
    SIZES[size] ?? SIZES.small,
    "shrink-0 rounded-full border-4 border-slate-700 ring-4 ring-slate-800 bg-neutral-900",
    "transition-all duration-500 hover:ring-0 hover:scale-105",
    animated ? "animate-bounce-slow" : "",
  ].join(" ");

  if (!img) {
    return (
      <div
        className={`${frame} flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900`}
        aria-hidden="true"
      >
        <span
          className={`font-poppins font-bold text-slate-200 ${
            MONOGRAM_TEXT[size] ?? MONOGRAM_TEXT.small
          }`}
        >
          {initialsOf(name) || "•"}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${frame} bg-contain bg-center bg-no-repeat`}
      style={{ backgroundImage: `url('${img}')` }}
      role="img"
      aria-label={name}
    />
  );
}

export default CircleImg;
