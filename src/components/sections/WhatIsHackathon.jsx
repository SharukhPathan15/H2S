import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useCountdown } from "../../hooks/useCountdown";
import { Button } from "../ui/Button";
import groupimage from "../../assets/groupimage.png";

const TARGET_DATE = "2026-07-25T23:59:59";

export function WhatIsHackathon() {
  const ref = useScrollReveal();
  const time = useCountdown(TARGET_DATE);
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      id="what-is"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-purple-950/10"
      aria-label="What is the hackathon"
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left — Text */}
          <div className="flex-1 w-full">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase leading-tight mb-5 sm:mb-6">
              What Is The
              <br />
              Hackathon?
            </h2>
            <p className="text-[#E2E2E2] text-sm leading-relaxed mb-4">
              The Lorem Ipsum Innovation Hackathon is a flagship event crafted
              to uncover pioneering ideas in science, technology, and system
              design. As technological advancements accelerate globally, this
              initiative aims to bridge academic knowledge with practical
              implementation.
            </p>
            <p className="text-[#E2E2E2] text-sm leading-relaxed mb-8 sm:mb-10">
              Participants will work on challenge statements designed by leading
              R&D units, applying theoretical expertise to build innovative
              prototypes and solutions with potential real-world application.
            </p>

            {/* Countdown */}
            <p className="text-[#FFFFFF] text-xs mb-3 uppercase tracking-widest">
              Submission Closing In:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
              <div className="relative inline-block px-5 sm:px-8 py-3 transition-all duration-300">
                <div className="absolute inset-0 border border-white/10 bg-gradient-to-br from-[#2D1B4E] to-[#12111a]" />
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white" />
                <div className="relative z-10 font-['Manrope'] text-white text-lg sm:text-2xl font-medium tracking-wider whitespace-nowrap">
                  {pad(time.days)}d {pad(time.hours)}h {pad(time.minutes)}m{" "}
                  {pad(time.seconds)}s
                </div>
              </div>
              <Button variant="tech" size="lg" href="#register">
                Register Now
              </Button>
            </div>
          </div>

          {/* Right — Image */}
          <div className="w-full lg:flex-1 lg:max-w-md xl:max-w-lg mx-auto lg:mx-0">
            <img
              src={groupimage}
              alt="Hackathon participants"
              className="w-full h-56 sm:h-72 md:h-80 lg:h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
