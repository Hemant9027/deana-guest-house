import { motion } from "framer-motion";
import { ArrowDown, Fish, Music2, Palette, Waves } from "lucide-react";
import { IMG } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal, EASE } from "./Reveal";
import { scrollToId } from "../utils/scroll";

const NOTES = [
  { icon: Waves, label: "Turquoise shallows", sub: "The water really is that colour." },
  { icon: Palette, label: "Pastel & clapboard", sub: "Colour around every corner." },
  { icon: Fish, label: "Conch, island-style", sub: "A Bahamian table staple." },
  { icon: Music2, label: "Junkanoo rhythm", sub: "The heartbeat of the city." },
];

export function LocalArea() {
  return (
    <section id="nassau" className="relative overflow-hidden bg-pinedeep py-24 text-cream md:py-36">
      {/* ambient washes */}
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[520px] rounded-full bg-sea/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-0 size-[420px] rounded-full bg-sun/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* collage */}
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-12 gap-4 md:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: EASE }}
              className="col-span-7 overflow-hidden rounded-[26px]"
            >
              <img
                src={IMG.nassauColour}
                alt="Vibrantly painted Caribbean facades"
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                loading="lazy"
              />
            </motion.div>
            <div className="col-span-5 flex flex-col gap-4 md:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                className="flex-1 overflow-hidden rounded-[26px]"
              >
                <img
                  src={IMG.nassauBeach}
                  alt="Turquoise Bahamian shallows fringed with palms"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                className="flex-1 overflow-hidden rounded-[26px]"
              >
                <img
                  src={IMG.nassauCraft}
                  alt="A handwoven straw bag at a local market stall"
                  className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
            className="absolute -bottom-8 left-6 w-40 overflow-hidden rounded-[22px] border-[6px] border-pinedeep shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)] md:-left-6 md:w-48"
          >
            <img
              src={IMG.nassauShells}
              alt="Conch shells resting on warm sand"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            tone="dark"
            index="04"
            eyebrow="Nassau · New Providence"
            title={
              <>
                The colourful heart
                <br />
                of <em className="italic text-sun">The Bahamas.</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.85] text-cream/75 md:text-base">
              <p>
                Nassau is the capital of The Bahamas, spread along the northern shore of New
                Providence — a city of pastel houses, straw work, rake-and-scrape music, and
                water so bright it barely looks real.
              </p>
              <p>
                Blue Hill Road puts you inside the everyday version of it: the Nassau that
                locals know, where mornings start easy and the welcome is genuine. It's the
                perfect base for travellers who'd rather know a place than just photograph it.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {NOTES.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-cream/12 bg-cream/[0.06] px-5 py-4 backdrop-blur-sm transition-colors hover:border-cream/25 hover:bg-cream/10"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sun/15">
                  <n.icon className="size-[18px] text-sun" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="text-sm font-bold tracking-wide">{n.label}</p>
                  <p className="mt-0.5 text-xs text-cream/55">{n.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.3}>
            <button
              onClick={() => scrollToId("#contact")}
              className="ring-focus group mt-10 inline-flex items-center gap-2.5 rounded-full bg-cream px-7 py-4 text-sm font-bold tracking-wide text-pinedeep transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun"
            >
              Plan Your Stay
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
