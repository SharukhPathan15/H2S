

export function AstroOrbit({ imgSrc }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 420, height: 420 }}
    >
      {/* Pulse rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-purple-500/30"
          style={{
            width: `${100 + i * 60}px`,
            height: `${100 + i * 60}px`,
            animation: `pulse-ring ${1.5 + i * 0.8}s ease-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Orbit rings */}
      {[160, 220, 290].map((r, idx) => (
        <div
          key={idx}
          className="absolute rounded-full border border-purple-600/20"
          style={{ width: r * 2, height: r * 2 }}
          aria-hidden="true"
        />
      ))}

      {/* Orbiting dots */}
      <OrbitDot radius={160} duration={8} delay={0} color="#a855f7" size={8} />
      <OrbitDot
        radius={220}
        duration={14}
        delay={-4}
        color="#7c3aed"
        size={6}
      />
      <OrbitDot
        radius={290}
        duration={20}
        delay={-10}
        color="#c084fc"
        size={5}
      />
      <OrbitDot
        radius={220}
        duration={14}
        delay={-11}
        color="#a855f7"
        size={4}
      />

      {/* Astronaut image */}
      <div
        className="relative z-10 animate-float"
        style={{
          width: "470px",
          height: "556px",
          transform: "rotate(18.39deg)", // Apply the Figma rotation
        }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="Astronaut floating in space"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          />
        ) : (
          <AstroPlaceholder />
        )}
      </div>
    </div>
  );
};

function OrbitDot({ radius, duration, delay, color, size }) {
  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: `0 0 8px ${color}`,
        "--orbit-r": `${radius}px`,
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        top: "50%",
        left: "50%",
        marginTop: -size / 2,
        marginLeft: -size / 2,
      }}
      aria-hidden="true"
    />
  );
}

function AstroPlaceholder() {
  return (
    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 to-purple-600 flex items-center justify-center opacity-60">
      <span className="text-7xl select-none">🧑‍🚀</span>
    </div>
  );
}
