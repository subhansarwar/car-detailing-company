// lucide-react dropped brand/logo icons — these lightweight inline SVGs
// (24x24 viewBox, currentColor) fill the same role for Facebook & TikTok.
import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.6l.4-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82c-.9-.8-1.47-1.94-1.6-3.22h-3.1v13.2a2.6 2.6 0 1 1-1.87-2.5V9.98a5.8 5.8 0 1 0 5 5.75V9.4a7.35 7.35 0 0 0 4.3 1.38V7.66c-.98 0-1.94-.28-2.73-.79-.36-.24-.7-.53-1-.85" />
    </svg>
  );
}
