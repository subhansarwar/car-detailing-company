import Link from "next/link";
import { Clock, Droplets, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { business, navLinks, services } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/80">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="container-fluid relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-lg shadow-brand-500/30">
                <Droplets size={22} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Terrance Mobile
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {business.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-300"
              >
                <FacebookIcon width={18} height={18} />
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-300"
              >
                <InstagramIcon width={18} height={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <a href={`tel:${business.phoneHref}`} className="hover:text-brand-300">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <a href={`mailto:${business.email}`} className="hover:text-brand-300">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={17} className="mt-0.5 shrink-0 text-brand-400" />
                <span>
                  {business.hours[0].day}: {business.hours[0].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Proudly serving {business.city}, {business.state} & surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}
