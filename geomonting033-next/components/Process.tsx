const steps = [
  {
    n: 1,
    title: "Dogovor i izlazak na teren",
    text: "Definišemo obim posla i zakazujemo termin merenja na licu mesta.",
  },
  {
    n: 2,
    title: "Terensko merenje",
    text: "GNSS/RTK prijem i robotska totalna stanica beleže tačke sa centimetarskom preciznošću.",
  },
  {
    n: 3,
    title: "Obrada podataka",
    text: "Izrada elaborata, plana ili projekta na osnovu prikupljenih koordinata.",
  },
  {
    n: 4,
    title: "Overa i predaja",
    text: "Dokumentacija se overava i predaje katastru ili direktno klijentu.",
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Kako radimo</div>
          <h2>Put od poziva do overenog elaborata</h2>
          <p>Isti redosled koraka, bez obzira da li je u pitanju mala parcela ili veći infrastrukturni projekat.</p>
        </div>
        <div className="process-grid">
          {steps.map((s) => (
            <div className="p-step" key={s.n}>
              <div className="p-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
