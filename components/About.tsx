export default function About() {
  return (
    <section className="about" id="onama">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-art">
            <div className="about-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/o-nama.jpg"
                alt="Leica totalna stanica na terenu — geodetsko snimanje, GEO MONTING 033 Prijepolje"
                loading="lazy"
                width={1000}
                height={1333}
              />
            </div>
            <div className="about-badge">
              <b>20+</b>
              <span>godina rada u struci</span>
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow">Ko smo mi</div>
            <h2>Iskustvo koje se meri decenijama, a preciznost centimetrima</h2>
            <p className="lead">
              Naša firma posluje više od 20 godina, tokom kojih smo težili da ispunimo visoke kriterijume
              koje smo sami sebi zadali.
            </p>
            <ul className="checklist">
              <li>
                <b>Kvalitet radova</b>
                <span>Stručan pristup svakom poslu, od male parcele do infrastrukturnog projekta.</span>
              </li>
              <li>
                <b>Po propisima struke</b>
                <span>Poštujemo tehničke propise i pravila geodetske struke.</span>
              </li>
              <li>
                <b>Brzina i rokovi</b>
                <span>Timski rad i brzo izvođenje radova uz poštovanje dogovorenih rokova.</span>
              </li>
            </ul>
            <a href="#kontakt" className="btn btn-dark">
              Zakažite merenje
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
