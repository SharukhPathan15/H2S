import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { REWARDS } from "../../utils/data";
import brain from "../../assets/brain.png";

export function Rewards() {
  const ref = useScrollReveal(0.1);

  return (
    <section
      id="rewards"
      className="pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 pb-0"
      aria-label="Rewards and benefits"
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionLabel className="text-center block">
          Rewards and Benefits
        </SectionLabel>

        {/* Cards — stacked on mobile, side by side on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
          {REWARDS.map((reward, i) => (
            <div
              key={i}
              className="group relative flex-1 rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/30"
              tabIndex={0}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(145.75deg, #7C3AED -11.18%, rgba(124, 58, 237, 0.69) 72.32%)",
                }}
              />
              <div className="relative h-full rounded-[14px] bg-[#0A0618] p-6 sm:p-8 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(134.22deg,rgba(255,255,255,0.18)_2.6%,rgba(255,255,255,0.18)_98.42%)]" />
                <div className="relative z-10">
                  <h3 className="text-[#7c3aed] font-bold text-sm mb-3 leading-snug">
                    {reward.title}
                  </h3>
                  <p className="text-[#FFFFFF] text-sm leading-relaxed">
                    {reward.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brain image — full width */}
      <div className="w-full mt-6 sm:mt-0">
        <img
          src={brain}
          alt=""
          className="w-full object-contain opacity-80"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
