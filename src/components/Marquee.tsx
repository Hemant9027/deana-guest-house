const WORDS = [
  "Warm Welcomes",
  "Easy Island Living",
  "Blue Hill Road",
  "Nassau Sunshine",
  "Simple & Honest",
  "Stay A While",
];

function Aster() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-sun md:size-5" fill="currentColor" aria-hidden>
      <path d="M12 2c.6 3.4 1.8 5.6 3.4 7.4S19.4 11.4 22 12c-2.6.6-5 1-6.6 2.6S12.6 18.6 12 22c-.6-3.4-1.8-5.6-3.4-7.4S4.6 12.6 2 12c2.6-.6 5-1 6.6-2.6S11.4 5.4 12 2z" />
    </svg>
  );
}

export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="font-display px-6 text-lg italic tracking-tight text-cream md:px-10 md:text-2xl">
            {w}
          </span>
          <Aster />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-20 -my-4 -rotate-1 overflow-hidden border-y border-pinedeep/20 bg-pine py-4 shadow-[0_20px_50px_-30px_rgba(15,44,37,0.7)] md:py-5">
      <div className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
