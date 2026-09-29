import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, IMG } from "../data/content";
import { scrollToId } from "../utils/scroll";
import { EASE } from "./Reveal";

const line1 = ["A", "Comfortable"];
const line2 = ["Stay", "in"];
const italicWord = "Nassau";

function StaggeredLine({ words, delay, className }: { words: string[]; delay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className ?? ""}`}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.09 }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 220]);
  const bgScale = useTransform(scrollY, [0, 900], [1.08, 1.22]);
  const fade = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-pinedeep">
      {/* backdrop */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Sunrise over a small green cottage among palm trees"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pinedeep/70 via-pinedeep/25 to-pinedeep/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-pinedeep/60 via-transparent to-transparent" />
        {/* warm sunrise wash */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_10%,rgba(242,179,61,0.28),transparent_55%)]" />
      </motion.div>

      {/* content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-10 pt-32 md:px-8 md:pb-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.55 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-sun" />
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/85">
            A small Bahamian guest house · Est. Blue Hill Road
          </p>
        </motion.div>

        <h1 className="font-display max-w-5xl text-[clamp(3rem,10.5vw,7.5rem)] font-medium leading-[0.98] tracking-[-0.015em] text-cream">
          <StaggeredLine words={line1} delay={0.7} />
          <span className="flex flex-wrap items-baseline gap-x-[0.22em]">
            <StaggeredLine words={line2} delay={0.9} />
            <span className="inline-block overflow-hidden">
              <motion.span
                className="inline-block italic text-sun"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 1.1 }}
              >
                {italicWord}
              </motion.span>
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.35 }}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/80 md:text-lg"
        >
          Simple rooms, a warm welcome, and prices that leave a little extra in your
          pocket for the good stuff — right here in the real Nassau.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.5 }}
          className="mt-9 flex flex-wrap items-center gap-3.5"
        >
          <button
            onClick={() => scrollToId("#contact")}
            className="ring-focus group inline-flex items-center gap-2.5 rounded-full bg-coral px-7 py-4 text-sm font-bold tracking-wide text-cream shadow-[0_18px_40px_-14px_rgba(224,101,62,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coraldeep"
          >
            Contact Us
            <Phone className="size-4 transition-transform duration-300 group-hover:rotate-12" />
          </button>
          <button
            onClick={() => scrollToId("#rooms")}
            className="ring-focus group inline-flex items-center gap-2.5 rounded-full border border-cream/35 px-7 py-4 text-sm font-bold tracking-wide text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-cream hover:text-pine"
          >
            Plan Your Stay
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </motion.div>

      {/* info strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="relative z-10 border-t border-cream/15 bg-pinedeep/30 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-cream/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
          <a
            href={BUSINESS.phoneHref}
            className="group flex items-center gap-3 py-4 text-cream/85 transition-colors hover:text-sun sm:justify-center"
          >
            <Phone className="size-4 shrink-0 text-sun/70 transition-colors group-hover:text-sun" />
            <span className="text-[12.5px] font-bold tracking-[0.12em]">{BUSINESS.phoneDisplay}</span>
          </a>
          <a
            href={BUSINESS.emailHref}
            className="group flex items-center gap-3 py-4 text-cream/85 transition-colors hover:text-sun sm:justify-center"
          >
            <Mail className="size-4 shrink-0 text-sun/70 transition-colors group-hover:text-sun" />
            <span className="text-[12.5px] font-bold tracking-[0.12em]">{BUSINESS.email}</span>
          </a>
          <a
            href={BUSINESS.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 py-4 text-cream/85 transition-colors hover:text-sun sm:justify-center"
          >
            <MapPin className="size-4 shrink-0 text-sun/70 transition-colors group-hover:text-sun" />
            <span className="text-[12.5px] font-bold tracking-[0.12em]">Blue Hill Rd & Wellington St</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
