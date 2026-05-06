import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Button } from "../ui/Button";
import { PARTICIPANT_CARDS } from "../../utils/data";
import { PixelGrid } from "../ui/PixelGrid";

export function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 bg-[#07060f] overflow-hidden w-full"
      aria-label="About section"
    >
      <PixelGrid side="left" />
      <PixelGrid side="right" />

      <div ref={ref} className="flex flex-col items-center text-center w-full px-4 sm:px-6">
        <p className="font-medium text-xl sm:text-2xl md:text-[28px] leading-tight tracking-normal uppercase mb-6 sm:mb-9 text-[#7C3AED]">
          About Hackathon
        </p>

        <h2 className="font-semibold text-3xl sm:text-[36px] md:text-[42px] leading-tight tracking-normal text-[#FFFFFF] uppercase text-center mb-6 sm:mb-8">
          WHO CAN <br className="hidden sm:block" /> PARTICIPATE?
        </h2>

        <p className="text-sm sm:text-[15px] md:text-[16px] leading-relaxed tracking-normal text-center text-[#E2E2E2] mb-8 sm:mb-10 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating
          platform designed to foster innovation and creativity in the domain of
          advanced technology and futuristic solutions. Organized by the
          National Center for Applied Research and supported by Hack2skill, this
          hackathon invites undergraduate students, graduate/postgraduate
          students, and PhD researchers to collaborate and solve critical
          challenges.
        </p>

        <Button href="#challenges" className="px-8 sm:px-10 mb-8 sm:mb-10">
          Apply Now
        </Button>

        <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mt-4 mb-6">
          WHO CAN PARTICIPATE?
        </p>

        {/* Cards — stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
          {PARTICIPANT_CARDS.map(({ title }, i) => (
            <div
              key={i}
              className="group flex-1 relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/30 flex flex-col"
              tabIndex={0}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(145.75deg, #7C3AED -11.18%, rgba(124, 58, 237, 0.69) 72.32%)",
                }}
              />
              <div className="relative flex-1 flex flex-col rounded-[14px] bg-[#0A0618] px-6 py-10 sm:py-12 md:py-14 text-center text-white font-semibold text-sm sm:text-base leading-relaxed overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(134.22deg,rgba(255,255,255,0.18)_2.6%,rgba(255,255,255,0.18)_98.42%)]" />
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  {title.split("\n").map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#FFFFFF] text-xs mt-6 sm:mt-8 px-4 max-w-md text-center leading-relaxed">
          Note: Working Professionals are not eligible to participate in the hackathon.
        </p>
      </div>
    </section>
  );
}
