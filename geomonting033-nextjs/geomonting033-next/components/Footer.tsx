export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="f-brand" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-icon.png"
            alt="GEO MONTING 033"
            style={{
              width: 26,
              height: 26,
              objectFit: "contain",
              background: "#fff",
              borderRadius: 6,
              padding: 2,
            }}
          />
          © <span>{year}</span> GEO MONTING 033 — Prijepolje, Srbija
        </div>
        <nav>
          <ul>
            <li>
              <a href="#pocetna">Početna</a>
            </li>
            <li>
              <a href="#usluge">Usluge</a>
            </li>
            <li>
              <a href="#onama">O nama</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
