"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Droplets, Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "@/lib/site";
import Button from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu when the route changes — adjusted during render
  // (React's recommended pattern) rather than in an effect, to avoid an
  // extra cascading render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 shadow-sm shadow-navy-950/5 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-fluid flex h-18 items-center justify-between py-3 sm:py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
            <Droplets size={22} className="drop-shadow" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-navy-950 sm:text-xl">
              Terrance Mobile
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-600 sm:text-xs">
              Pressure Washing & Detailing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:text-brand-600"
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-brand-600"
          >
            <Phone size={16} className="text-brand-500" />
            {business.phone}
          </a>
          <Button href="/contact" size="md">
            Get Free Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-900/10 bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <div className="container-fluid flex flex-col gap-1 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                        ? "bg-brand-50 text-brand-700"
                        : "text-navy-900 hover:bg-navy-900/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-navy-900/10 pt-4">
                <a
                  href={`tel:${business.phoneHref}`}
                  className="flex items-center gap-2 px-4 text-base font-semibold text-navy-900"
                >
                  <Phone size={18} className="text-brand-500" />
                  {business.phone}
                </a>
                <Button href="/contact" className="mx-4">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
