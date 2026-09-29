import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { IMG } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal, EASE } from "./Reveal";

export function Intro() {
  return (
    <section id="house" className="relative overflow-hidden py-24 md:py-36">
      {/* soft background wash */}
      <div className="pointer-events-none absolute -left-40 top-20 size-[480px] rounded-full bg-sand/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* copy */}
        <div className="order-2 lg:order-1">
          <SectionHeading
            index="01"
            eyebrow="The House"
            title={
              <>
                Welcome in. Make
                <br />
                yourself <em className="italic text-sea">at home.</em>
              </>
            }
          />
          <Reveal delay={0.2}>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.85] text-inksoft md:text-base">
              <p>
                <span className="font-display float-left mr-3 mt-1 text-[3.4rem] font-medium leading-[0.8] text-coral">
                  D
                </span>
                eana Smith Guest House is a small, independently run guest house on Blue Hill
                Road, where Nassau hums along like it always has — neighbors chatting on the
                porch, breadfruit trees in the yard, the sea never far from mind.
              </p>
              <p>
                There's no lobby marble and no doorman here. What you'll find instead is a
                clean, comfortable room, an honest budget-friendly stay, and a host who
                actually picks up the phone. You're not a reservation number — you're a guest
                in the house.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <figure className="mt-9 rounded-3xl border border-pine/12 bg-parchment/70 p-6 md:p-7">
              <Quote className="size-5 -scale-x-100 text-coral" fill="currentColor" strokeWidth={0} />
              <blockquote className="font-display mt-3 text-lg italic leading-relaxed text-ink md:text-xl">
                "Come as you are. Leave rested, well-fed on island air, and with a friend in
                Nassau."
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="h-px w-8 bg-coral" />
                <span className="font-display text-base italic text-pine">Deana Smith</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-inksoft/70">
                  Your host
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* imagery */}
        <div className="relative order-1 lg:order-2">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative overflow-hidden rounded-t-[999px] rounded-b-[28px] border-[10px] border-parchment shadow-[0_40px_80px_-40px_rgba(15,44,37,0.45)]"
          >
            <img
              src={IMG.introShadow}
              alt="Soft palm shadows on a sunlit white wall"
              className="aspect-[3/4] w-full object-cover transition-transform duration-[1600ms] hover:scale-105 md:aspect-[4/5]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            className="absolute -bottom-8 -left-3 w-[46%] overflow-hidden rounded-[22px] border-8 border-cream shadow-[0_30px_60px_-25px_rgba(15,44,37,0.5)] sm:-left-8"
          >
            <img
              src={IMG.introDoor}
              alt="A cottage doorway tucked into tropical greenery"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
            className="animate-drift absolute -right-2 top-6 grid size-24 place-items-center rounded-full bg-sun text-center shadow-[0_20px_40px_-18px_rgba(242,179,61,0.9)] md:-right-6 md:size-28"
          >
            <p className="font-display px-3 text-[13px] italic leading-tight text-pinedeep md:text-sm">
              the real
              <br />
              Nassau
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
