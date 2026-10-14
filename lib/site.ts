// Adresa sajta — podesi NEXT_PUBLIC_SITE_URL u Cloudflare Pages (Settings → Environment variables)
// kada povežeš pravi domen. Koristi se za canonical link, sitemap, robots i Open Graph.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.geomonting033.rs").replace(/\/$/, "");

export const MAPS_URL =
  "https://www.google.com/maps/place/GEO+MONTING+033/@43.3856262,19.6424557,17z/data=!4m6!3m5!1s0x4757f951e4642017:0xd73e54e33cb92d67!8m2!3d43.3856262!4d19.6424557";

export const COORDS = { lat: 43.385626, lng: 19.642456 };

export const CONTACT = {
  phoneMobile: { label: "064 191 80 40", href: "tel:+381641918040" },
  phoneLandline: { label: "033 716 240", href: "tel:+38133716240" },
  email: "daliborobradovic@yahoo.com",
  address: "Vladimira Perića Valtera 116",
  city: "31300 Prijepolje, Srbija",
};

export const HOURS = [
  { day: "Ponedeljak", time: "7:30 do 15:30" },
  { day: "Utorak", time: "7:30 do 15:30" },
  { day: "Sreda", time: "7:30 do 15:30" },
  { day: "Četvrtak", time: "7:30 do 15:30" },
  { day: "Petak", time: "7:30 do 15:30" },
  { day: "Subota", time: "Zatvoreno", closed: true },
  { day: "Nedelja", time: "Zatvoreno", closed: true },
];
