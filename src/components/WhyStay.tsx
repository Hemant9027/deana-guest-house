import { motion } from "framer-motion";
import { HeartHandshake, MapPin, HandCoins, PhoneCall } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { EASE } from "./Reveal";

const REASONS = [
  {
    icon: HeartHandshake,
    title: "A Personal Welcome",
    copy: "This is a small, independent house. You're greeted by name and looked after directly — no front-desk shuffle, no ticket numbers.",
  },
  {
    icon: MapPin,
    title: "A Real Neighbourhood",
    copy: "Set on Blue Hill Road at Wellington Street, in a lived-in corner of Nassau where everyday island life carries on around you.",
  },
  {
    icon: HandCoins,
    title: "Honestly Affordable",
    copy: "Budget-friendly rates mean your money goes toward conch shacks and boat rides — not toward things you'll never use.",
  },
  {
    icon: PhoneCall,
    title: "Easy To Reach",
    copy: "No booking engines or middlemen. One call or email to Deana, and your stay is planned in a single conversation.",
  },
];

export function WhyStay() {
  return (
    <section id="why" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          eyebrow="Why Stay Here"
          align="center"
          title={
            <>
              Everything a stay should be —
              <br />
              <em className="italic text-sea">and nothing it shouldn't.</em>
            </>
          }
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[26px] border border-pine/10 bg-parchment/60 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-pine/20 hover:bg-cream hover:shadow-[0_30px_60px_-30px_rgba(15,44,37,0.45)]"
            >
              <span className="font-display absolute -right-2 -top-3 text-[86px] font-light italic leading-none text-pine/8 transition-colors duration-500 group-hover:text-coral/15">
                0{i + 1}
              </span>
              <span className="relative grid size-12 place-items-center rounded-2xl bg-pine text-sun transition-all duration-500 group-hover:rotate-6 group-hover:bg-coral group-hover:text-cream">
                <r.icon className="size-5" strokeWidth={1.9} />
              </span>
              <h3 className="font-display relative mt-6 text-[22px] font-medium tracking-tight text-ink">
                {r.title}
              </h3>
              <p className="relative mt-3 text-[13.5px] leading-[1.75] text-inksoft">{r.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
