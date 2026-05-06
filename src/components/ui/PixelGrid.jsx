export function PixelGrid({ side = "left", className = "" }) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute ${isLeft ? "left-0" : "right-0"} pointer-events-none mt-20 ${className}`}
      aria-hidden="true"
    >
      <div className="grid grid-cols-2 p-3">
        {[...Array(10)].map((_, i) => {
          const row = Math.floor(i / 2);
          const col = i % 2;
          const filled = isLeft 
            ? (row + col) % 2 === 0 
            : (row + col) % 2 !== 0;

          return filled ? (
            <div
              key={i}
              className="w-16 h-16 bg-purple-600 rounded-sm opacity-90"
            />
          ) : (
            <div key={i} className="w-16 h-16" />
          );
        })}
      </div>
    </div>
  );
}