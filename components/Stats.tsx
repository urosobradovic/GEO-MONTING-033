import CountUp from "./CountUp";

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        <div className="stat">
          <b>
            <CountUp end={20} suffix="+" start={12} duration={2000} />
          </b>
          <span>Godina na terenu</span>
        </div>
        <div className="stat">
          <b>Poverenje</b>
          <span>Opština Prijepolje kao partner</span>
        </div>
        <div className="stat">
          <b>
            <CountUp end={9} suffix="+" start={3} duration={2000} />
          </b>
          <span>Vrsta geodetskih usluga</span>
        </div>
        <div className="stat">
          <b>Leica</b>
          <span>Savremeni merni instrumenti</span>
        </div>
      </div>
    </div>
  );
}