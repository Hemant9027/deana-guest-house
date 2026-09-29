import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className,
}: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em]",
            align === "center" && "justify-center",
            dark ? "text-sun" : "text-coral"
          )}
        >
          <span
            className={cn(
              "font-display text-base italic tracking-normal",
              dark ? "text-cream/50" : "text-inksoft/70"
            )}
          >
            {index}
          </span>
          <span className={cn("h-px w-10", dark ? "bg-cream/30" : "bg-ink/20")} />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display mt-5 text-[clamp(2rem,5.4vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.01em] text-balance",
            dark ? "text-cream" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-[15px] leading-relaxed md:text-base",
              align === "center" && "mx-auto",
              dark ? "text-cream/70" : "text-inksoft"
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
