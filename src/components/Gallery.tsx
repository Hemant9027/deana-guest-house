import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { GALLERY } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { EASE } from "./Reveal";
import { cn } from "../utils/cn";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((v) => (v === null ? v : (v + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute -left-32 top-1/3 size-[420px] rounded-full bg-sand/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          eyebrow="Gallery"
          align="center"
          title={
            <>
              Little postcards
              <br />
              from <em className="italic text-sea">the island.</em>
            </>
          }
          lede="Moments in and around the neighbourhood — the light, the colour, and the easy pace that keep people coming back."
        />

        <div className="mt-14 columns-2 gap-4 md:columns-3 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.src + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.08 }}
              onClick={() => setOpen(i)}
              className={cn(
                "ring-focus group relative block w-full overflow-hidden rounded-[22px] text-left",
                i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
              )}
              aria-label={`Open photo: ${g.caption}`}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pinedeep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-sm italic text-cream">{g.caption}</span>
                <Expand className="size-4 text-sun" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-pinedeep/95 p-4 backdrop-blur-md md:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="ring-focus absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream hover:text-pinedeep"
            >
              <X className="size-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="ring-focus absolute left-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream hover:text-pinedeep md:left-8"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="ring-focus absolute right-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream hover:text-pinedeep md:right-8"
            >
              <ChevronRight className="size-5" />
            </button>

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="max-h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY[open].src}
                alt={GALLERY[open].caption}
                className="max-h-[76vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 flex items-baseline justify-center gap-3 text-center">
                <span className="font-display text-lg italic text-cream">
                  {GALLERY[open].caption}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-cream/50">
                  {open + 1} / {GALLERY.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
