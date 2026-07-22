import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
            light
              ? "border-brand-300/30 bg-brand-400/10 text-brand-200"
              : "border-brand-500/20 bg-brand-50 text-brand-700"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-fluid-h2 mt-4 font-display font-bold tracking-tight ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-fluid-body mt-4 ${
            light ? "text-white/70" : "text-navy-700/80"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
