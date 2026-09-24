import React, { useCallback, useRef, useState } from "react";

const SWIPE_THRESHOLD = 40; // px of horizontal travel before a swipe counts

const FRAMES = {
  phone: {
    wrapper: "max-w-[14rem] md:max-w-none",
    screen: "aspect-[9/19.5] rounded-[1.75rem] border-4",
  },
  desktop: {
    wrapper: "",
    screen: "aspect-[16/10] rounded-xl border-2",
  },
};

/**
 * Screenshot carousel, framed as a phone screen for portrait mobile captures
 * or as a desktop window for landscape web captures. Supports buttons, dots,
 * arrow keys, and touch swipes. With `onOpen`, clicking a screenshot hands its
 * index back so the caller can show it larger.
 */
function Carousel({
  shots,
  label,
  variant = "phone",
  className,
  initialIndex = 0,
  showCaption = false,
  onOpen,
}) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef(null);
  const count = shots.length;
  const frame = FRAMES[variant];
  const caption = shots[index].caption;

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
    <div className={`mx-auto w-full select-none ${className ?? frame.wrapper}`}>
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
        className={`group/carousel relative w-full overflow-hidden ${frame.screen} border-slate-700 bg-neutral-950 shadow-xl shadow-black/40 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300`}
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {shots.map((shot, i) => {
            // Distance the short way round, so wrapping to the last slide still
            // finds it decoded.
            const gap = Math.abs(i - index);
            const near = Math.min(gap, count - gap) <= 1;
            return near ? (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.caption ?? `${label} screenshot ${i + 1} of ${count}`}
                loading="lazy"
                decoding="async"
                draggable="false"
                className="h-full w-full shrink-0 object-cover"
              />
            ) : (
              <div key={shot.src} className="h-full w-full shrink-0" aria-hidden="true" />
            );
          })}
        </div>

        {onOpen && (
          <button
            type="button"
            onClick={() => onOpen(index)}
            aria-label={`View ${label} screenshots larger`}
            className="absolute inset-0 cursor-zoom-in focus:outline-none"
          >
            <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white opacity-80 transition group-hover/carousel:opacity-100">
              <ExpandIcon />
            </span>
          </button>
        )}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className="absolute left-1 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className="absolute right-1 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Chevron direction="right" />
            </button>
          </>
        )}
      </div>

      {showCaption && (
        <p className="mt-3 text-center text-sm text-slate-300" aria-live="polite">
          {caption}
          {caption && " · "}
          <a
            href={shots[index].src}
            target="_blank"
            rel="noreferrer noopener"
            className="whitespace-nowrap rounded text-cyan-300 transition hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Open full size
          </a>
        </p>
      )}

      {count > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {shots.map((shot, i) => (
            <button
              key={shot.src}
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

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

export default Carousel;
