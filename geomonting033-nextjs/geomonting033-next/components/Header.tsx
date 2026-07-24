"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="siteHeader" className={solid ? "solid" : ""}>
      <div className="wrap">
        <div className="brand">
          <span className="mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="GEO MONTING 033 logo" />
          </span>
          <span>
            <span className="geo">GEO</span> <span className="monting">MONTING 033</span>
          </span>
        </div>
        <nav>
          <ul
            style={
              menuOpen
                ? {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    top: 64,
                    right: 20,
                    background: "#fff",
                    padding: "20px 26px",
                    boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                    borderRadius: 4,
                  }
                : undefined
            }
          >
            <li>
              <a href="#pocetna" onClick={() => setMenuOpen(false)}>
                Početna
              </a>
            </li>
            <li>
              <a href="#usluge" onClick={() => setMenuOpen(false)}>
                Usluge
              </a>
            </li>
            <li>
              <a href="#onama" onClick={() => setMenuOpen(false)}>
                O nama
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="nav-cta"
                style={menuOpen ? { display: "inline-flex" } : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Kontaktirajte nas
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="burger"
          aria-label="Meni"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
