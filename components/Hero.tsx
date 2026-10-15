import { CONTACT } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero" id="pocetna">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="wrap">
        <div className="hero-inner">
          <div className="coord">
            <span>N 43.385626°</span>
            <span>E 19.642456°</span>
            <span className="coord-place">Prijepolje, Srbija</span>
          </div>
          <h1>
            Geodetska firma <span>iz Prijepolja</span>
          </h1>
          <p className="tagline">
            <strong>GEO MONTING 033</strong> je geodetska firma iz Prijepolja. Već više od dve decenije radimo
            deobu i obeležavanje parcela, katastarsko-topografske planove i elaborate za fizička lica, firme i
            opštinu.
          </p>
          <div className="btn-row">
            <a href={CONTACT.phoneMobile.href} className="btn btn-primary">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h4l2 5-2.5 1.5a11 11 0 005 5L14 14l5 2v4a2 2 0 01-2 2A16 16 0 014 7a2 2 0 012-2z" />
              </svg>
              Pozovite {CONTACT.phoneMobile.label}
            </a>
            <a href="#usluge" className="btn btn-ghost">
              Pogledajte usluge
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
