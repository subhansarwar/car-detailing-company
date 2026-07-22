import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { business } from "@/lib/site";
import "./globals.css";

const heading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = "https://terrancemobilewash.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Mobile Pressure Washing & Car Detailing in ${business.city}, ${business.state}`,
    template: `%s | ${business.shortName}`,
  },
  description: business.description,
  keywords: [
    "pressure washing LaGrange GA",
    "mobile car detailing LaGrange",
    "driveway cleaning Troup County",
    "soft wash house washing",
    "car detailing near me",
  ],
  openGraph: {
    title: business.name,
    description: business.description,
    url: siteUrl,
    siteName: business.shortName,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.description,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.state,
  },
  areaServed: business.serviceArea,
  sameAs: [business.social.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
