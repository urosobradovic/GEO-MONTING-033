export default function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="wrap">
        <div className="eyebrow">Kontakt</div>
        <h2>Pišite nam ili posetite našu kancelariju u Prijepolju</h2>
        <div className="contact-grid">
          <ul className="contact-info">
            <li>
              <span className="ci-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.4" />
                </svg>
              </span>
              <div>
                <b>Adresa</b>
                <a href="https://goo.gl/maps/pqJAKgZaqG88DF7q7" target="_blank" rel="noopener">
                  Vladimira Perića Valtera 116, Prijepolje 31300, Srbija
                </a>
              </div>
            </li>
            <li>
              <span className="ci-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 5h4l2 5-2.5 1.5a11 11 0 005 5L14 14l5 2v4a2 2 0 01-2 2A16 16 0 014 7a2 2 0 012-2z" />
                </svg>
              </span>
              <div>
                <b>Telefon</b>
                <a href="tel:+381641918040">+381 64 191 80 40</a>
                <br />
                <a href="tel:033716240">033 716 240</a>
              </div>
            </li>
            <li>
              <span className="ci-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div>
                <b>E-mail</b>
                <a href="mailto:daliborobradovic@yahoo.com">daliborobradovic@yahoo.com</a>
              </div>
            </li>
            <li>
              <span className="ci-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </span>
              <div>
                <b>Koordinate</b>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: ".92rem" }}>
                  43.385480° N, 19.641992° E
                </span>
              </div>
            </li>
          </ul>
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=%211m18%211m12%211m3%211d5799.149532981674%212d19.643850448659776%213d43.385914693843525%212m3%211f0%212f0%213f0%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x4757f951e4642017%3A0xd73e54e33cb92d67%212sGEO%20MONTING%20033%215e0%213m2%211ssr%212srs%214v1668932501600%215m2%211ssr%212srs"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
