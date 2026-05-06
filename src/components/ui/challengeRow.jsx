import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

export function ChallengeRow({ challenge, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`
        border-b border-white/20 px-3 sm:px-4 py-4 sm:py-5
        flex items-center gap-3 sm:gap-5
        cursor-pointer rounded-lg
        transition-all duration-300 ease-in-out
        ${hovered ? "bg-purple-900/40" : "bg-transparent"}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 500)}
      tabIndex={0}
      role="listitem"
      onKeyDown={(e) => e.key === "Enter" && setHovered((p) => !p)}
      aria-label={`Challenge ${challenge.id}`}
    >
      {/* Number */}
      <span
        className={`font-display text-xs sm:text-sm font-bold w-8 sm:w-10 flex-shrink-0 transition-colors duration-300
          ${hovered ? "text-purple-300" : "text-white"}`}
      >
        [ {challenge.id} ]
      </span>

      {/* Image */}
      <div
        className={`
          flex-shrink-0 rounded-xl overflow-hidden
          transition-all duration-300 ease-in-out
          w-24 sm:w-32 md:w-40
          ${hovered ? "h-20 sm:h-24 md:h-32" : "h-12 sm:h-14 md:h-16"}
        `}
      >
        {challenge.img ? (
          <img
            src={challenge.img}
            alt={`Challenge ${challenge.id}`}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, hsl(${270 + index * 8}, 60%, 12%), hsl(${270 + index * 8}, 50%, 8%))`,
            }}
          >
            <span className="font-display font-bold text-purple-600/60 text-xs">
              {challenge.id}
            </span>
          </div>
        )}
      </div>

      {/* Description + Learn More */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300
            ${hovered ? "text-white" : "text-gray-300"}`}
        >
          {challenge.desc}
        </p>

        <div
          className={`transition-all duration-300 overflow-hidden
            ${hovered ? "max-h-12 opacity-100 mt-2 sm:mt-3" : "max-h-0 opacity-0 mt-0"}`}
        >
          <Button
            variant="tech"
            size="sm"
            href="#challenges"
            gradientStyles={{
              background:
                "linear-gradient(131.57deg, #7C3AED 2.28%, #A78BFA 53.69%, #EEE7FB 95.92%)",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={16}
        className={`flex-shrink-0 transition-all duration-300 hidden sm:block
          ${
            hovered
              ? "text-purple-400 scale-125 translate-x-0.5 -translate-y-0.5"
              : "text-gray-500"
          }`}
        aria-hidden="true"
      />
    </li>
  );
}
