import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { business } from "@/lib/site";

const cards = [
  {
    icon: Phone,
    title: "Call or Text",
    lines: [business.phone],
    href: `tel:${business.phoneHref}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [business.email],
    href: `mailto:${business.email}`,
  },
  {
    icon: MapPin,
    title: "Service Area",
    lines: [business.address],
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {cards.map(({ icon: Icon, title, lines, href }) => {
          const content = (
            <div className="flex items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-5 shadow-sm shadow-navy-950/5 transition-colors hover:border-brand-300/50">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-950">{title}</p>
                {lines.map((line) => (
                  <p key={line} className="text-sm text-navy-700/75">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );
          return (
            <RevealItem key={title}>
              {href ? <a href={href}>{content}</a> : content}
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.15} className="rounded-2xl border border-navy-900/8 bg-white p-5 shadow-sm shadow-navy-950/5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Clock size={20} />
          </span>
          <p className="text-sm font-bold text-navy-950">Business Hours</p>
        </div>
        <ul className="mt-4 space-y-2">
          {business.hours.map((h) => (
            <li key={h.day} className="flex items-center justify-between text-sm text-navy-700/80">
              <span>{h.day}</span>
              <span className="font-semibold text-navy-900">{h.time}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.2} className="flex items-center gap-3 rounded-2xl border border-navy-900/8 bg-white p-5 shadow-sm shadow-navy-950/5">
        <a
          href={business.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors hover:bg-brand-500 hover:text-white"
        >
          <FacebookIcon width={20} height={20} />
        </a>
        <a
          href={business.social.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors hover:bg-brand-500 hover:text-white"
        >
          <TikTokIcon width={18} height={18} />
        </a>
        <p className="text-sm text-navy-700/75">Follow us for before/after photos & specials</p>
      </Reveal>
    </div>
  );
}
