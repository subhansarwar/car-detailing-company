import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "outlineDark";
type Size = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 active:scale-[0.97] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-400 hover:shadow-brand-400/40 hover:-translate-y-0.5",
  secondary:
    "bg-amber-500 text-navy-950 shadow-lg shadow-amber-500/30 hover:bg-amber-400 hover:-translate-y-0.5",
  outline:
    "border-2 border-white/25 text-white hover:border-brand-300 hover:bg-white/5 hover:-translate-y-0.5",
  outlineDark:
    "border-2 border-navy-900/15 text-navy-900 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50/50 hover:-translate-y-0.5",
  ghost: "text-navy-900 hover:bg-navy-900/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  icon,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
