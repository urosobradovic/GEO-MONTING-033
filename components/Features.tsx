const features = [
  {
    img: "https://geomonting033.wordpress.com/wp-content/uploads/2022/11/1000_f_148808365_sexibr6skmp7ar9rsvzrked4l0e68dqq.jpg?w=1000",
    alt: "Iskustvo na terenu",
    title: "Iskustvo",
    text: "Poslujemo na teritoriji Opštine Prijepolje, a i šire, već više od 20 godina.",
  },
  {
    img: "https://geomonting033.wordpress.com/wp-content/uploads/2022/11/3a64d61c-8b64-4fc6-9b39-3447c37167e4.jpeg?w=1024",
    alt: "Profesionalnost u radu",
    title: "Profesionalnost",
    text: "Prilikom poslovanja sa nama, svaka reč iz dogovora se ispoštuje — uključujući dogovor u kancelariji kao i izlazak na teren.",
  },
  {
    img: "https://geomonting033.wordpress.com/wp-content/uploads/2022/11/80a763b7-f39e-4e4a-919d-3aa17a2834e3-edited-3214338436-e1668239176671.jpeg?w=455",
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
