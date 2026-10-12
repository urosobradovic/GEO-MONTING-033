import { CONTACT } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-about">
            <div className="f-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.png" alt="" width={36} height={36} />
              <span>
                <span className="geo">GEO</span> MONTING 033
              </span>
            </div>
            <p>
              Geodetska firma iz Prijepolja sa više od 20 godina iskustva — deoba i obeležavanje parcela,
              katastarsko-topografski planovi, geodetski elaborati i inženjerska geodezija.
            </p>
          </div>
          <div>
            <h4>Navigacija</h4>
            <ul>
              <li><a href="#onama">O nama</a></li>
              <li><a href="#usluge">Usluge</a></li>
              <li><a href="#proces">Kako radimo</a></li>
              <li><a href="#pitanja">Pitanja</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>{CONTACT.address}</li>
              <li>{CONTACT.city}</li>
              <li><a href={CONTACT.phoneMobile.href}>{CONTACT.phoneMobile.label}</a></li>
              <li><a href={CONTACT.phoneLandline.href}>{CONTACT.phoneLandline.label}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            </ul>
          </div>
          <div>
            <h4>Radno vreme</h4>
            <ul>
              <li>Ponedeljak – Petak</li>
              <li className="f-strong">7:30 – 15:30</li>
              <li>Subota i nedelja</li>
              <li className="f-strong">Zatvoreno</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} GEO MONTING 033 d.o.o. — Prijepolje, Srbija</span>
        </div>
      </div>
    </footer>
  );
}
