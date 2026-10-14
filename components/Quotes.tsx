const partners = [
  {
    label: "Javni sektor",
    title: "Opština Prijepolje",
    text: "Dugogodišnji smo saradnik Opštine Prijepolje i za njene potrebe obavljamo poslove iz oblasti geodezije.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V10M9.5 21V10M14.5 21V10M19 21V10" />
        <path d="M2.5 10 12 4l9.5 6z" />
      </svg>
    ),
  },
  {
    label: "Privatni sektor",
    title: "Investitori i izvođači radova",
    text: "Sarađujemo sa velikim brojem privatnih firmi, sa kojima smo pored dobre poslovne saradnje izgradili i prijateljske odnose.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </svg>
    ),
  },
];

export default function Quotes() {
  return (
    <section className="quotes">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">Naši partneri</div>
          <h2>Poverenje koje traje godinama</h2>
        </div>
        <div className="quote-grid">
          {partners.map((p) => (
            <article className="quote-card" key={p.title}>
              <div className="partner-top">
                <div className="partner-icon">{p.icon}</div>
                <div>
                  <span className="partner-label">{p.label}</span>
                  <h3>{p.title}</h3>
                </div>
              </div>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
