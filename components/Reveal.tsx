"use client";

import { useEffect } from "react";

// Elementi koji se pojavljuju jedan po jedan dok se stranica skroluje.
const TARGETS = [
  ".stats-card .stat",
  ".about-art",
  ".about-copy > *",
  ".section-head",
  ".service-item",
  ".feature-card",
  ".p-step",
  ".quote-card",
  ".faq-item",
  ".contact-card",
  ".hours-card",
  ".map-frame",
  ".footer-grid > *",
].join(",");

const STEP_MS = 110;

export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));

    // Elementi u istoj grupi (npr. kartice usluga) dobijaju rastuće kašnjenje.
    els.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
      const index = siblings.indexOf(el);
      el.style.setProperty("--reveal-delay", `${(index % 6) * STEP_MS}ms`);
      el.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
