export default function Logo() {
  return (
    <a aria-label="Home — Mohamed Salem" className="brand" href="#home">
      <span className="brand-mark">
        <svg aria-hidden="true" className="brand-emblem" viewBox="0 0 48 48">
          <defs>
            <linearGradient id="shield-gradient" x1="8" x2="40" y1="5" y2="43" gradientUnits="userSpaceOnUse">
              <stop stopColor="#caffef" />
              <stop offset="1" stopColor="#31c9a6" />
            </linearGradient>
          </defs>
          <path className="brand-shield" d="M24 3 40 9v11c0 10.6-6.7 19.9-16 24-9.3-4.1-16-13.4-16-24V9l16-6Z" />
          <path className="brand-circuit" d="M16 18h5v-5m0 5h7v-5m-7 5v9m0 0h-5v6m5-6h7v6" />
          <circle cx="16" cy="13" r="2.2" /><circle cx="28" cy="13" r="2.2" /><circle cx="16" cy="33" r="2.2" /><circle cx="28" cy="33" r="2.2" />
          <path className="brand-core" d="M24 21.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>MSAW</strong>
        <small>CYBERSECURITY</small>
      </span>
    </a>
  );
}
