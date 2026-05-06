import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { HOW_TO_STEPS } from "../../utils/data";
import { StepCard } from "../ui/stepCard";

export function HowToParticipate() {
  const ref = useScrollReveal(0.1);

  return (
    <section id="how-to" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-label="How to participate">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionLabel className="text-center block">
          How To Participate?
        </SectionLabel>

        {/* Mobile: 2-col grid then single; Tablet: 3-col; Desktop: all in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 mt-8 sm:mt-10">
          {HOW_TO_STEPS.map((step, i) => (
            <StepCard
              key={i}
              step={step}
              index={i}
              total={HOW_TO_STEPS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
