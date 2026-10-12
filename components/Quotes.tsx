const quotes = [
  {
    text: "Višegodišnji smo saradnici sa Opštinom Prijepolje, za koju obavljamo poslove iz oblasti geodezije.",
    who: "Opština Prijepolje",
    role: "Javni sektor",
  },
  {
    text: "Sarađujemo sa velikim brojem privatnih firmi sa kojima smo, osim dobrih poslovnih, stekli i prijateljske odnose.",
    who: "Privatni partneri",
    role: "Investitori i izvođači",
  },
];

export default function Quotes() {
  return (
    <section className="quotes">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">Dela govore umesto nas</div>
          <h2>Poverenje koje traje godinama</h2>
        </div>
        <div className="quote-grid">
          {quotes.map((q) => (
            <figure className="quote-card" key={q.who}>
              <svg className="quote-mark" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M8 34c0-9 4-16 12-20l2 4c-5 3-7 7-7 10h7v12H8zm20 0c0-9 4-16 12-20l2 4c-5 3-7 7-7 10h7v12H28z" />
              </svg>
              <blockquote>{q.text}</blockquote>
              <figcaption>
                <b>{q.who}</b>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
