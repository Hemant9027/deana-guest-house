import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BUSINESS } from "../data/content";
import { EASE } from "./Reveal";

export function FloatingCall() {
  return (
    <motion.a
      href={BUSINESS.phoneHref}
      aria-label={`Call now — ${BUSINESS.phoneDisplay}`}
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 2.2 }}
      className="fixed inset-x-4 bottom-4 z-[60] md:hidden"
    >
      <span className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-coral py-1.5 pl-1.5 pr-7 text-cream shadow-[0_20px_45px_-15px_rgba(194,81,46,0.9)]">
        <span className="relative grid size-11 place-items-center rounded-full bg-cream text-coraldeep">
          <span className="animate-pulse-ring absolute inset-0 rounded-full bg-sun/70" aria-hidden />
          <Phone className="relative size-5" />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/75">
            Call Now
          </span>
          <span className="block text-[15px] font-extrabold tracking-wide">{BUSINESS.phoneDisplay}</span>
        </span>
      </span>
    </motion.a>
  );
}
