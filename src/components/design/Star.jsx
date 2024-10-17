const Star = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="url(#starGradient)"
    className={className}
    style={{
      filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8))",
      transform: "rotateX(30deg) rotateY(30deg)",
    }}
  >
    <defs>
      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#cccccc", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.3 5.5 21 7 14 2 9.3 9 8.5 12 2" />
  </svg>
);

export default Star;
