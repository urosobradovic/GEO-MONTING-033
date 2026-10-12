const features = [
  {
    img: "/iskustvo.jpg",
    alt: "Leica totalna stanica pored puta u magli — terensko merenje, GEO MONTING 033",
    title: "Iskustvo",
    text: "Poslujemo na teritoriji Opštine Prijepolje, a i šire, već više od 20 godina.",
  },
  {
    img: "/profesionalnost-gnss.jpg",
    alt: "Geodeta sa Leica GNSS prijemnikom i kontrolerom tokom merenja",
    title: "Profesionalnost",
    text: "Prilikom poslovanja sa nama, svaka reč iz dogovora se ispoštuje — uključujući dogovor u kancelariji kao i izlazak na teren.",
  },
  {
    img: "/ekspresnost.jpg",
    alt: "Geodetska ekipa sa totalnom stanicom i prizmom na terenu",
    title: "Ekspresnost",
    text: "Maksimalno brzo izvršavamo dogovoreni posao, želeći da zadovoljimo kriterijume mušterije.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">Odlike poslovanja</div>
          <h2>Zašto klijenti biraju GEO MONTING 033</h2>
        </div>
        <div className="feature-grid">
          {features.map((f, i) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.alt} loading="lazy" width={900} height={600} />
                <span className="feature-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="feature-body">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
