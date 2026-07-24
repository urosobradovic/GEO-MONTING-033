const rows = [
  { day: "Ponedeljak", time: "7:30 – 15:30" },
  { day: "Utorak", time: "7:30 – 15:30" },
  { day: "Sreda", time: "7:30 – 15:30" },
  { day: "Četvrtak", time: "7:30 – 15:30" },
  { day: "Petak", time: "7:30 – 15:30" },
  { day: "Subota", time: "Ne radimo", closed: true },
  { day: "Nedelja", time: "Ne radimo", closed: true },
];

export default function Hours() {
  return (
    <section className="hours">
      <div className="wrap">
        <div className="hours-grid">
          <div>
            <div className="eyebrow">Radno vreme</div>
            <h2>Kancelariju možete posetiti u periodu od:</h2>
            <table style={{ marginTop: 30 }}>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.day} className={r.closed ? "closed" : undefined}>
                    <td>{r.day}</td>
                    <td>{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="hours-note">
            <div className="eyebrow">Savet</div>
            <p>
              Za terenska merenja preporučujemo najavu bar dan unapred, posebno u periodu proleće–jesen
              kada je obim poslova najveći. Za hitne slučajeve, pozovite nas telefonom — trudimo se da
              izađemo na teren u najkraćem mogućem roku.
            </p>
          </div>
          <div className="hours-note">
            <div className="eyebrow">Konsultovanje</div>
            <p>
              Za svaku Vašu nedoumicu ili pitanje stojimo na raspolaganju. Kontaktirajte nas kako bi
              pronašli najbolje rešenje za Vas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
