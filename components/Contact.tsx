import { CONTACT, COORDS, HOURS, MAPS_URL } from "@/lib/site";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=%211m18%211m12%211m3%211d5799.149532981674%212d19.643850448659776%213d43.385914693843525%212m3%211f0%212f0%213f0%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x4757f951e4642017%3A0xd73e54e33cb92d67%212sGEO%20MONTING%20033%215e0%213m2%211ssr%212srs%214v1668932501600%215m2%211ssr%212srs";

export default function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">Kontakt</div>
          <h2>Posetite našu kancelariju u Prijepolju</h2>
          <p>Za svaku nedoumicu ili pitanje stojimo na raspolaganju — pozovite nas, pišite nam ili svratite.</p>
        </div>

        <div className="contact-cards">
          <a className="contact-card" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            <span className="ci-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.4" />
              </svg>
            </span>
            <b>Adresa</b>
            <span>{CONTACT.address}</span>
            <span>{CONTACT.city}</span>
          </a>
          <div className="contact-card">
            <span className="ci-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h4l2 5-2.5 1.5a11 11 0 005 5L14 14l5 2v4a2 2 0 01-2 2A16 16 0 014 7a2 2 0 012-2z" />
              </svg>
            </span>
            <b>Telefon</b>
            <a href={CONTACT.phoneMobile.href}>+381 {CONTACT.phoneMobile.label.slice(1)}</a>
            <a href={CONTACT.phoneLandline.href}>{CONTACT.phoneLandline.label}</a>
          </div>
          <a className="contact-card" href={`mailto:${CONTACT.email}`}>
            <span className="ci-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <b>E-mail</b>
            <span>{CONTACT.email}</span>
          </a>
        </div>

        <div className="contact-grid">
          <div className="hours-card">
            <h3>Radno vreme kancelarije</h3>
            <table>
              <tbody>
                {HOURS.map((r) => (
                  <tr key={r.day} className={r.closed ? "closed" : undefined}>
                    <td>{r.day}</td>
                    <td>{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="hours-tip">
              Za terenska merenja preporučujemo najavu bar dan unapred, posebno u periodu proleće–jesen. Za hitne
              slučajeve pozovite nas telefonom.
            </p>
          </div>
          <div className="map-frame">
            <iframe
              title="Lokacija kancelarije GEO MONTING 033 na Google mapi"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <span className="map-coord">
              {COORDS.lat.toFixed(6)}° N, {COORDS.lng.toFixed(6)}° E
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
