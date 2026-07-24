export default function About() {
  return (
    <section className="about" id="onama">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <div className="eyebrow">Ko smo mi</div>
            <h2>20+ godina rada u struci</h2>
            <p>
              Naša firma posluje više od 20 godina, tokom kojih smo težili da ispunimo visoke kriterijume
              koje smo sami sebi zadali.
            </p>
            <ul>
              <li>Kvalitet radova i stručan pristup poslu</li>
              <li>Poštovanje tehničkih propisa i pravila struke</li>
              <li>Timski rad i brzina izvođenja radova uz poštovanje rokova</li>
            </ul>
            <p>
              Korisnici naših usluga su mnoga fizička lica, kao i pravna lica — kako iz javnog, tako i iz
              privatnog sektora. Koristimo savremene Leica merne instrumente, kojima ispunjavamo i
              najzahtevnije kriterijume naših klijenata.
            </p>
          </div>
          <div className="about-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/o-nama.jpg"
              alt="Leica totalna stanica na terenu — geodetsko snimanje, GEO MONTING 033 Prijepolje"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
