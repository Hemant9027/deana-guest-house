import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Palmtree } from "lucide-react";
import { BUSINESS } from "../data/content";
import { scrollToId } from "../utils/scroll";
import { cn } from "../utils/cn";
import { EASE } from "./Reveal";

const LINKS = [
  { label: "The House", href: "#house" },
  { label: "Rooms", href: "#rooms" },
  { label: "Why Us", href: "#why" },
  { label: "Nassau", href: "#nassau" },
  { label: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(href), open ? 350 : 0);
  };

  const dark = scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.4 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          dark
            ? "border-b border-ink/8 bg-cream/90 shadow-[0_8px_30px_-18px_rgba(15,44,37,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            onClick={() => go("#home")}
            className={cn(
              "ring-focus group flex items-center gap-2.5 rounded-full text-left",
              dark || open ? "text-ink" : "text-cream"
            )}
            aria-label="Back to top"
          >
            <span
              className={cn(
                "grid size-10 shrink-0 place-items-center rounded-full transition-colors",
                dark || open ? "bg-pine text-sun" : "bg-cream/15 text-sun backdrop-blur-sm"
              )}
            >
              <Palmtree className="size-5" strokeWidth={1.8} />
            </span>
            <span className="leading-tight">
              <span className="font-display block text-[17px] font-medium italic tracking-tight">
                {BUSINESS.shortName}
              </span>
              <span
                className={cn(
                  "block text-[9.5px] font-bold uppercase tracking-[0.32em]",
                  dark || open ? "text-sea" : "text-cream/70"
                )}
              >
                Guest House
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={cn(
                  "ring-focus rounded-full px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors",
                  dark
                    ? "text-inksoft hover:bg-pine/8 hover:text-pine"
                    : "text-cream/85 hover:bg-cream/10 hover:text-cream"
                )}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              className={cn(
                "ring-focus ml-3 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide transition-all hover:-translate-y-0.5",
                dark
                  ? "bg-coral text-cream shadow-[0_10px_24px_-10px_rgba(224,101,62,0.8)] hover:bg-coraldeep"
                  : "bg-cream text-pine hover:bg-sun hover:text-pinedeep"
              )}
            >
              Contact Us
            </button>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "ring-focus grid size-11 place-items-center rounded-full transition-colors lg:hidden",
              dark || open ? "bg-pine/8 text-ink" : "bg-cream/15 text-cream backdrop-blur-sm"
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-cream px-6 pb-8 pt-28"
          >
            <nav className="flex flex-1 flex-col justify-center gap-1">
              {[...LINKS, { label: "Contact", href: "#contact" }].map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: EASE }}
                  onClick={() => go(l.href)}
                  className="group flex items-baseline gap-4 border-b border-ink/8 py-4 text-left"
                >
                  <span className="font-display text-xs italic text-coral">0{i + 1}</span>
                  <span className="font-display text-4xl font-medium tracking-tight text-ink transition-colors group-hover:text-pine">
                    {l.label}
                  </span>
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-1"
            >
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 rounded-2xl bg-pine px-5 py-4 text-cream"
              >
                <Phone className="size-4 text-sun" />
                <span className="text-sm font-bold tracking-wide">{BUSINESS.phoneDisplay}</span>
              </a>
              <p className="pt-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-inksoft">
                {BUSINESS.addressArea} · Nassau
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
