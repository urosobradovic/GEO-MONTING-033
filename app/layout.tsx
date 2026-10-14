import type { Metadata } from "next";
import "./globals.css";
import { COORDS, MAPS_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GEO MONTING 033 | Geometar Prijepolje, geodetske usluge i katastar",
    template: "%s | GEO MONTING 033",
  },
  description:
    "GEO MONTING 033, geodetska firma iz Prijepolja sa više od 20 godina iskustva. Deoba i obeležavanje parcela, katastarsko-topografski plan, geodetski elaborat, obnova međa, profili puteva. Pozovite geometra u Prijepolju.",
  keywords: [
    "geometar Prijepolje",
    "geodeta Prijepolje",
    "geodetske usluge Prijepolje",
    "geodetski biro Prijepolje",
    "obeležavanje parcela",
    "deoba parcela",
    "geodetski elaborat",
    "katastarsko-topografski plan",
    "obnova međa",
    "identifikacija katastarskih parcela",
    "list nepokretnosti",
    "geodetska firma Zlatiborski okrug",
    "geodeta Priboj",
    "geodeta Nova Varoš",
    "geodeta Sjenica",
    "inženjerska geodezija",
    "GNSS RTK merenje",
    "Leica total stanica",
  ],
  authors: [{ name: "GEO MONTING 033" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/logo-icon.png" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: "GEO MONTING 033",
    title: "GEO MONTING 033 | Geometar Prijepolje, geodetske usluge i katastar",
    description:
      "Geodetska firma iz Prijepolja sa više od 20 godina iskustva: obeležavanje parcela, geodetski elaborati, katastarsko-topografski planovi.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Leica totalna stanica na terenu, GEO MONTING 033" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO MONTING 033 | Geometar Prijepolje",
    description: "Geodetske usluge u Prijepolju: deoba parcela, obeležavanje, katastarsko-topografski plan.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GEO MONTING 033",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo-full.png`,
  description:
    "Geodetska firma iz Prijepolja sa više od 20 godina iskustva u geodetskim uslugama: deoba parcela, obeležavanje, katastarsko-topografski planovi, geodetski elaborati.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vladimira Perića Valtera 116",
    addressLocality: "Prijepolje",
    postalCode: "31300",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COORDS.lat,
    longitude: COORDS.lng,
  },
  telephone: "+381641918040",
  email: "daliborobradovic@yahoo.com",
  priceRange: "$$",
  areaServed: ["Prijepolje", "Priboj", "Nova Varoš", "Sjenica", "Zlatiborski okrug"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "15:30",
    },
  ],
  hasMap: MAPS_URL,
  sameAs: [MAPS_URL, "https://geomonting033.wordpress.com/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <head>
        <link rel="preload" as="image" href="/hero.jpg" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
