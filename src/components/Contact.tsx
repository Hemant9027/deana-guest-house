import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { BUSINESS } from "../data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const CARDS = [
  {
    icon: Phone,
    label: "Call Deana",
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.phoneHref,
    hint: "The fastest way to book",
  },
  {
    icon: Mail,
    label: "Write to us",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
    hint: "We reply personally",
  },
  {
    icon: MapPin,
    label: "Find the house",
    value: `${BUSINESS.addressArea}, Nassau`,
    href: BUSINESS.mapsHref,
    hint: "New Providence, Bahamas",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Stay enquiry — ${BUSINESS.name}${name ? ` (${name})` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Hello Deana,`,
        ``,
        name ? `My name is ${name}.` : ``,
        dates ? `I'd like to stay around: ${dates}.` : ``,
        message ? `` : ``,
        message,
        ``,
        `Could you let me know about availability and rates?`,
        ``,
        `Thank you!`,
      ]
        .filter((l) => l !== undefined)
        .join("\n")
    );
    window.location.href = `${BUSINESS.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      {/* warm ambient washes */}
      <div className="pointer-events-none absolute -right-40 top-0 size-[540px] rounded-full bg-sun/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[440px] rounded-full bg-mist/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-[36px] border border-pine/10 bg-gradient-to-br from-parchment via-cream to-sand/60 p-7 shadow-[0_50px_100px_-60px_rgba(15,44,37,0.5)] sm:p-10 md:p-14 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                index="06"
                eyebrow="Contact & Booking"
                title={
                  <>
                    Ready when
                    <br />
                    <em className="italic text-coral">you are.</em>
                  </>
                }
                lede="Tell us when you're coming to Nassau and we'll take care of the rest. Call, email, or send a note with the form — every message lands directly with the house."
              />

              <div className="mt-10 space-y-3.5">
                {CARDS.map((c, i) => (
                  <Reveal key={c.label} delay={0.12 + i * 0.08}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-[22px] border border-pine/12 bg-cream/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-[0_24px_44px_-26px_rgba(224,101,62,0.55)] sm:p-5"
                    >
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-pine text-sun transition-colors duration-300 group-hover:bg-coral group-hover:text-cream">
                        <c.icon className="size-5" strokeWidth={1.9} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10.5px] font-bold uppercase tracking-[0.22em] text-sea">
                          {c.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[15px] font-bold text-ink sm:text-base">
                          {c.value}
                        </span>
                        <span className="block text-xs text-inksoft/80">{c.hint}</span>
                      </span>
                      <ArrowUpRight className="size-5 shrink-0 text-pine/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-coral" />
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.4}>
                <p className="font-display mt-8 text-lg italic leading-relaxed text-pine">
                  "No booking engines, no waiting on hold — just a conversation."
                </p>
              </Reveal>
            </div>

            {/* form */}
            <Reveal delay={0.2}>
              <form
                onSubmit={submit}
                className="flex h-full flex-col rounded-[28px] border border-pine/10 bg-pine p-6 text-cream shadow-[0_40px_80px_-40px_rgba(15,44,37,0.8)] sm:p-8"
              >
                <p className="font-display text-2xl italic">Send a note</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-cream/65">
                  Fill this in and we'll open your email app with everything ready to send.
                </p>

                <label className="mt-7 block">
                  <span className="mb-2 block text-[10.5px] font-bold uppercase tracking-[0.22em] text-sun">
                    Your name
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan Miller"
                    className="ring-focus w-full rounded-2xl border border-cream/15 bg-cream/10 px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-sun/60"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="mb-2 block text-[10.5px] font-bold uppercase tracking-[0.22em] text-sun">
                    When are you thinking of visiting?
                  </span>
                  <input
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder="e.g. Two weeks in March"
                    className="ring-focus w-full rounded-2xl border border-cream/15 bg-cream/10 px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-sun/60"
                  />
                </label>
                <label className="mt-4 block flex-1">
                  <span className="mb-2 block text-[10.5px] font-bold uppercase tracking-[0.22em] text-sun">
                    Anything else?
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Questions, plans, or just say hello…"
                    className="ring-focus w-full resize-none rounded-2xl border border-cream/15 bg-cream/10 px-5 py-4 text-sm text-cream placeholder:text-cream/40 focus:border-sun/60"
                  />
                </label>

                <button
                  type="submit"
                  className="ring-focus group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-coral px-7 py-4 text-sm font-bold tracking-wide text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun hover:text-pinedeep"
                >
                  Contact Us
                  <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <p className="mt-4 text-center text-[11.5px] text-cream/50">
                  Prefer to talk?{" "}
                  <a href={BUSINESS.phoneHref} className="font-bold text-sun underline-offset-4 hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
