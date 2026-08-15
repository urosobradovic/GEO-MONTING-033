export default function Hero() {
  return (
    <section className="hero" id="pocetna">
      <div className="rod">
        <span style={{ bottom: 38 }}>0.40</span>
        <span style={{ bottom: 118 }}>0.80</span>
        <span style={{ bottom: 198 }}>1.20</span>
        <span style={{ bottom: 278 }}>1.60</span>
        <span style={{ bottom: 358 }}>2.00</span>
      </div>
      <div className="wrap">
        <div className="hero-inner">
          <div className="coord">N 43.385453°, E 19.642011° — PRIJEPOLJE, RS
          </div>
          <h1>GEO MONTING 033</h1>
          <p className="tagline">
            <strong>GEO MONTING 033</strong> — geodetska firma za obeležavanje parcela, katastarsko-topografski
            plan i geodetske elaborate. Više od dve decenije poverenja opštine i privatnih investitora.
          </p>
          <div className="btn-row">
            <a href="#kontakt" className="btn btn-primary">
              Zakažite merenje
            </a>
            <a href="#usluge" className="btn btn-ghost">
              Pogledajte usluge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
