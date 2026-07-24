const items = [
  {
    tag: "01",
    q: "Šta je geodetski elaborat?",
    a: "Dokument koji sadrži sve podatke terenskog merenja — koordinate, skice i izračunavanja — a koji se predaje katastru radi upisa promena na parceli ili objektu.",
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
    <section className="knowledge">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Korisno da znate</div>
          <h2>Osnovni pojmovi iz geodezije</h2>
          <p>Kratka objašnjenja termina na koje ćete najčešće naići prilikom saradnje sa geodetskom strukom.</p>
        </div>
        <div className="faq-grid">
          {items.map((it) => (
            <div className="faq-item" key={it.tag}>
              <h4>
                <span className="tag">{it.tag}</span>
                {it.q}
              </h4>
              <p>{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
