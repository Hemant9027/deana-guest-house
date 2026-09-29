import { ArrowUp, Mail, MapPin, Palmtree, Phone } from "lucide-react";
import { BUSINESS } from "../data/content";
import { scrollToId } from "../utils/scroll";

const NAV = [
  { label: "The House", href: "#house" },
  { label: "Rooms", href: "#rooms" },
  { label: "Why Stay Here", href: "#why" },
  { label: "Nassau", href: "#nassau" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-pinedeep text-cream">
      <div className="pointer-events-none absolute -top-32 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-sea/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-20 md:px-8 md:pb-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1.2fr] md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-sun text-pinedeep">
                <Palmtree className="size-5" strokeWidth={1.9} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-xl font-medium italic">{BUSINESS.shortName}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cream/60">
                  Guest House
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-[1.85] text-cream/65">
              A small, independently run Bahamian guest house offering comfortable,
              budget-friendly stays in the heart of everyday Nassau.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sun">Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <button
                    onClick={() => scrollToId(n.href)}
                    className="ring-focus rounded text-sm font-semibold text-cream/75 transition-colors hover:text-sun"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sun">Reach Us</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="ring-focus group flex items-center gap-3 rounded text-cream/80 transition-colors hover:text-sun"
                >
                  <Phone className="size-4 shrink-0 text-sun/70" />
                  <span className="font-bold tracking-wide">{BUSINESS.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="ring-focus group flex items-center gap-3 rounded text-cream/80 transition-colors hover:text-sun"
                >
                  <Mail className="size-4 shrink-0 text-sun/70" />
                  <span className="font-semibold">{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sun/70" />
                <span className="leading-relaxed">
                  {BUSINESS.addressArea}
                  <br />
                  {BUSINESS.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 select-none overflow-hidden" aria-hidden>
          <p className="font-display whitespace-nowrap text-center text-[clamp(3.4rem,12vw,10rem)] font-medium italic leading-[0.85] tracking-tight text-cream/[0.06]">
            Deana Smith
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-5 border-t border-cream/10 pt-7 md:flex-row">
          <p className="text-center text-xs leading-relaxed text-cream/50 md:text-left">
            © {year} {BUSINESS.name} · {BUSINESS.city}
            <span className="mt-1 block text-cream/35 md:mt-0 md:inline">
              {" "}
              · Website concept — photography shown for illustration.
            </span>
          </p>
          <button
            onClick={() => scrollToId("#home")}
            className="ring-focus group inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-cream/80 transition-all hover:border-sun hover:text-sun"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
