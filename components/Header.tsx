"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/site";

const links = [
  { href: "#pocetna", label: "Početna" },
  { href: "#onama", label: "O nama" },
  { href: "#usluge", label: "Usluge" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header id="siteHeader" className={[solid ? "solid" : "", menuOpen ? "menu-open" : ""].join(" ").trim()}>
      <div className="topbar">
        <div className="wrap">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.4" />
            </svg>
            {CONTACT.address}, Prijepolje
          </span>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            Radnim danima od 7:30 do 15:30
          </span>
          <a href={`mailto:${CONTACT.email}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            {CONTACT.email}
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="wrap">
          <a href="#pocetna" className="brand" onClick={close}>
            <span className="mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.png" alt="GEO MONTING 033 logo" width={36} height={36} />
            </span>
            <span className="brand-text">
              <span className="brand-name">
                <span className="geo">GEO</span> MONTING 033
              </span>
              <span className="brand-sub">Geodetske usluge · Prijepolje</span>
            </span>
          </a>
          <nav id="mainNav" aria-label="Glavni meni">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={close}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={CONTACT.phoneMobile.href} className="nav-phone">
            <span className="nav-phone-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h4l2 5-2.5 1.5a11 11 0 005 5L14 14l5 2v4a2 2 0 01-2 2A16 16 0 014 7a2 2 0 012-2z" />
              </svg>
            </span>
            <span>
              <small>Pozovite nas</small>
              {CONTACT.phoneMobile.label}
            </span>
          </a>
          <button
            className="burger"
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={menuOpen}
            aria-controls="mainNav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
