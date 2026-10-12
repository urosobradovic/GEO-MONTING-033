const items = [
  {
    tag: "01",
    q: "Šta je geodetski elaborat?",
    a: "Dokument koji sadrži sve podatke terenskog merenja: koordinate, skice i izračunavanja. Elaborat se predaje katastru radi upisa promena na parceli ili objektu.",
  },
  {
    tag: "02",
    q: "Kada je potrebno obeležavanje?",
    a: "Pre svake gradnje potrebno je obeležiti granice parcele i temeljne linije objekta, kako bi se izbegao spor sa susedima i neusklađenost sa projektom.",
  },
  {
    tag: "03",
    q: "Šta je GNSS/RTK merenje?",
    a: "Metoda satelitskog pozicioniranja u realnom vremenu koja omogućava merenje koordinata tačaka na terenu sa preciznošću od svega nekoliko centimetara.",
  },
  {
    tag: "04",
    q: "Šta je katastarsko-topografski plan?",
    a: "Prikaz reljefa, objekata i granica parcele u razmeri, neophodan za izradu projekata, legalizaciju i izdavanje građevinske dozvole.",
  },
];

export default function Knowledge() {
  return (
    <section className="knowledge" id="pitanja">
      <div className="wrap">
        <div className="knowledge-grid">
          <div className="section-head">
            <div className="eyebrow">Korisno da znate</div>
            <h2>Osnovni pojmovi iz geodezije</h2>
            <p>Kratka objašnjenja termina na koje ćete najčešće naići prilikom saradnje sa geodetskom strukom.</p>
            <a href="#kontakt" className="btn btn-primary">
              Imate drugo pitanje?
            </a>
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <details className="faq-item" key={it.tag} open={i === 0}>
                <summary>
                  <span className="tag">{it.tag}</span>
                  {it.q}
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <p>{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
