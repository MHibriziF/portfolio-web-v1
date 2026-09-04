import React, { useCallback, useRef, useState } from "react";

const SWIPE_THRESHOLD = 40; // px of horizontal travel before a swipe counts

/**
 * Screenshot carousel for a project card. Sized as a phone screen because every
 * screenshot is a portrait mobile capture. Supports buttons, dots, arrow keys,
 * and touch swipes.
 */
function Carousel({ images, label }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const count = images.length;

  const go = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count]
  );

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <div className="mx-auto w-full max-w-[14rem] select-none md:max-w-none">
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${label} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={onTouchEnd}
        className="group relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.75rem] border-4 border-slate-700 bg-neutral-950 shadow-xl shadow-black/40 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${label} screenshot ${i + 1} of ${count}`}
              loading="lazy"
              draggable="false"
              className="h-full w-full shrink-0 object-cover"
            />
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className="absolute left-1 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className="absolute right-1 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Chevron direction="right" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                i === index
                  ? "w-6 bg-cyan-300"
                  : "w-2 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Chevron({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M15 18 9 12l6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

export default Carousel;
