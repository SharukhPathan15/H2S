import { STEP_ICONS } from "../../assets/icons";

export function StepCard({ step, index, total }) {
  return (
    <div
      className="flex flex-col items-start text-left relative"
      style={{ animationDelay: `${index * 0.1}s` }}
      tabIndex={0}
      role="article"
      aria-label={`Step ${index + 1}: ${step.title.replace("\n", " ")}`}
    >
      {/* Icon box */}
      <div
        className="w-20 h-20 
             sm:w-24 sm:h-24 
             md:w-28 md:h-28 
             lg:w-32 lg:h-32 
             rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
        style={{ backgroundColor: "rgba(124, 58, 237, 0.3)" }}
      >
        <img
          src={STEP_ICONS[step.icon]}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-[24px] sm:text-[26px] leading-snug mb-1.5 sm:mb-2">
        {step.title.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h3>

      {/* Desc */}
      <p className="text-gray-400 text-[20px] leading-relaxed">{step.desc}</p>
    </div>
  );
}
