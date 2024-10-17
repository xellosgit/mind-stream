const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        {/* Left Gradient */}
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ff9999" /> {/* Light red */}
          <stop offset="100%" stopColor="#cc0000" /> {/* Darker red */}
        </linearGradient>

        {/* Top Gradient */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#ff6666" /> {/* Light red */}
          <stop offset="50%" stopColor="white" /> {/* White in the middle */}
          <stop offset="100%" stopColor="#cc0000" /> {/* Darker red */}
        </linearGradient>

        {/* Bottom Gradient */}
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#cc0000" /> {/* Darker red */}
          <stop offset="50%" stopColor="white" /> {/* White in the middle */}
          <stop offset="100%" stopColor="#ff6666" /> {/* Light red */}
        </linearGradient>

        {/* Right Gradient */}
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9999" /> {/* Light red */}
          <stop offset="100%" stopColor="#cc0000" /> {/* Darker red */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
