import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { CHALLENGES } from "../../utils/data";
import { ChallengeRow } from "../../components/ui/challengeRow";

export function Challenges() {
  const ref = useScrollReveal(0.05);

  return (
    <section id="challenges" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" aria-label="Challenges" >
      
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionLabel className="text-center block">Challenges</SectionLabel>

        <div className="border-t border-white/20 mt-6 sm:mt-8" />

        <ul className="list-none" role="list" aria-label="Challenge list">
          {CHALLENGES.map((c, i) => (
            <ChallengeRow key={c.id} challenge={c} index={i} />
          ))}
        </ul>

        <div className="border-t border-white/20" />
      </div>
    </section>
  );
}
