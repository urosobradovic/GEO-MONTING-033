const services = [
  {
    title: "Deoba parcela",
    text: "Pravno i tehnički usklađeno deljenje katastarskih parcela.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" />
        <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    title: "Snimanje i obeležavanje građevinskih parcela",
    text: "Precizno obeležavanje granica pre početka gradnje.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="9" r="3" />
        <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    title: "Izrada projekata geodetskog obeležavanja",
    text: "Tehnička dokumentacija za izvođenje radova na terenu.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
  {
    title: "Katastarsko-topografski plan",
    text: "Snimanje terena i izrada plana za projektovanje i legalizaciju.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17l5-7 4 5 4-9 5 11" />
      </svg>
    ),
  },
  {
    title: "Obnova međa katastarskih parcela",
    text: "Vraćanje i fiksiranje graničnih tačaka po katastarskoj evidenciji.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12h6l2-4 4 8 2-4h4" />
      </svg>
    ),
  },
  {
    title: "Identifikacija katastarskih parcela",
    text: "Utvrđivanje tačne pozicije i podataka parcele na terenu.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="10" cy="10" r="6" />
        <line x1="14.5" y1="14.5" x2="20" y2="20" />
      </svg>
    ),
  },
  {
    title: "Profili puteva",
    text: "Podužni i poprečni profili za projektovanje puteva i infrastrukture.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 18c4-10 6-10 8 0s4 10 8 0" />
      </svg>
    ),
  },
  {
    title: "Ostali poslovi inženjerske geodezije",
    text: "Podrška investitorima i izvođačima tokom čitavog projekta.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="3" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "List nepokretnosti",
    text: "Pribavljanje ažurne katastarske dokumentacije o nepokretnosti.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="15" y2="16" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="services" id="usluge">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Naše usluge</div>
          <h2>Kompletna geodetska podrška — od parcele do katastra</h2>
          <p>
            Devet oblasti rada koje pokrivaju najveći deo potreba fizičkih i pravnih lica u geodeziji i
            inženjerstvu.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <div className="service-item" key={s.title}>
              <div className="s-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
