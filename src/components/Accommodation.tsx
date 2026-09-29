import { motion } from "framer-motion";
import { ArrowRight, BedDouble, Sparkles } from "lucide-react";
import { IMG } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { scrollToId } from "../utils/scroll";

const ROOMS = [
  {
    src: IMG.roomA,
    alt: "A cozy bedroom with sunlight filtering through curtains",
    label: "Rest Easy",
    copy: "Clean linens, soft island light, and a bed that's ready when you are.",
  },
  {
    src: IMG.roomB,
    alt: "A bright, simply furnished bedroom in warm daylight",
    label: "Keep It Simple",
    copy: "No frills you'll never use — just the essentials, kept properly and with care.",
  },
  {
    src: IMG.roomC,
    alt: "Crisp white bedding beside large windows",
    label: "Travel Light",
    copy: "Easy on your budget too, so more of the trip is yours to spend on the island.",
  },
];

const CHIPS = ["Simple", "Comfortable", "Budget-friendly", "Personal"];

export function Accommodation() {
  return (
    <section id="rooms" className="relative overflow-hidden bg-parchment py-24 md:py-36">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-mist/60 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow="Accommodation"
            title={
              <>
                Simple, comfortable rooms.
                <br />
                <em className="italic text-sea">Nothing you don't need.</em>
              </>
            }
          />
          <Reveal delay={0.2} className="md:pb-2">
            <p className="max-w-sm text-[15px] leading-relaxed text-inksoft">
              Rooms at Deana Smith are kept the way a home should be — fresh, uncluttered,
              and genuinely looked after.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room, i) => (
            <motion.article
              key={room.label}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[26px] shadow-[0_24px_50px_-28px_rgba(15,44,37,0.55)]">
                <img
                  src={room.src}
                  alt={room.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pinedeep/75 via-pinedeep/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-2xl italic text-cream">{room.label}</p>
                  <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-cream/75 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {room.copy}
                  </p>
                </div>
                <span className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-cream/15 backdrop-blur-md transition-all duration-500 group-hover:bg-sun">
                  <BedDouble className="size-4 text-cream transition-colors group-hover:text-pinedeep" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* rates note */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-pine/12 bg-cream p-7 md:flex-row md:items-center md:p-9">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun/25">
                <Sparkles className="size-5 text-coral" />
              </span>
              <div>
                <p className="font-display text-xl font-medium text-ink">
                  Room options, availability & current rates?
                </p>
                <p className="mt-1 text-sm leading-relaxed text-inksoft">
                  A quick call or email is all it takes — you'll get a real answer from a real
                  person, usually the host herself.
                </p>
              </div>
            </div>
            <button
              onClick={() => scrollToId("#contact")}
              className="ring-focus group inline-flex shrink-0 items-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-bold text-cream transition-all hover:-translate-y-0.5 hover:bg-pinedeep"
            >
              Contact Us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-pine/15 bg-cream/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-pine"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
