import { useScrollReveal } from "../../hooks/useScrollReveal";
import { AstroOrbit } from "../ui/AstroOrbit";
import { SectionLabel } from "../ui/SectionLabel";
import { WHY_PARTICIPATE } from "../../utils/data";
import astro from "../../assets/astro.png";

export function WhyParticipate() {
  const ref = useScrollReveal(0.1);

  const leftItems = WHY_PARTICIPATE.filter((i) => i.side === "left");
  const rightItems = WHY_PARTICIPATE.filter((i) => i.side === "right");

  return (
    <section
      id="why"
      className="py-16 sm:py-20 md:py-24 overflow-hidden"
      aria-label="Why participate"
    >
      <SectionLabel className="text-center block mb-8 sm:mb-10 px-4">
        Why Participate?
      </SectionLabel>

      {/* Mobile: stacked layout */}
      <div
        ref={ref}
        className="block lg:hidden px-4 sm:px-6 max-w-2xl mx-auto space-y-4"
      >
        {/* Left items */}
        <div className="bg-[#7C3AED] rounded-2xl p-6 space-y-5">
          {leftItems.map((item, i) => (
            <div key={i} className="text-left sm:text-right">
              <h3 className="text-[#FFFFFF] font-bold text-base mb-1">
                {item.title}
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Astronaut center */}
        <div className="flex justify-center py-4">
          <AstroOrbit imgSrc={astro} />
        </div>

        {/* Right items */}
        <div className="bg-[#7C3AED] rounded-2xl p-6 space-y-5">
          {rightItems.map((item, i) => (
            <div key={i} className="text-left">
              <h3 className="text-white font-bold text-base mb-1">
                {item.title}
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: full-width row layout (original design) */}
      <div ref={ref} className="hidden lg:flex flex-row items-stretch w-full">
        {/* LEFT purple panel */}
        <div className="w-140 xl:w-150 bg-[#7C3AED] flex flex-col justify-center gap-8 px-8 xl:px-10 py-10 self-center rounded-r-2xl">
          {leftItems.map((item, i) => (
            <div key={i} className="text-right">
              <h3 className="text-[#FFFFFF] font-bold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-[#FFFFFF] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER astronaut */}
        <div className="flex-1 flex items-center justify-center px-4">
          <AstroOrbit imgSrc={astro} />
        </div>

        {/* RIGHT purple panel */}
        <div className="w-142 xl:w-150 bg-[#7C3AED] flex flex-col justify-center gap-8 px-8 xl:px-10 py-10 self-center rounded-l-2xl">
          {rightItems.map((item, i) => (
            <div key={i} className="text-left">
              <h3 className="text-white font-bold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
