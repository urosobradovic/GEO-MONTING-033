const features = [
  {
    img: "/instrument2.jpg",
    alt: "Iskustvo na terenu",
    title: "Iskustvo",
    text: "Poslujemo na teritoriji Opštine Prijepolje, a i šire, već više od 20 godina.",
  },
  {
    img: "/instrument.jpg",
    alt: "Profesionalnost u radu",
    title: "Profesionalnost",
    text: "Prilikom poslovanja sa nama, svaka reč iz dogovora se ispoštuje — uključujući dogovor u kancelariji kao i izlazak na teren.",
  },
  {
    img: "/teren1.jpg",
    alt: "Ekspresnost izvršavanja poslova",
    title: "Ekspresnost",
    text: "Maksimalno brzo izvršavamo dogovoreni posao, želeći da zadovoljimo kriterijume mušterije.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Odlike poslovanja</div>
          <h2>Zašto klijenti biraju GEO MONTING 033</h2>
        </div>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.alt} />
              </div>
              <div className="feature-body">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
