import { Button } from "../ui/Button";
import { StarField } from "../ui/StarField";
import model from "../../assets/model1.png";
import bgImage from "../../assets/bg-banner.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label="Hero section"
    >
      <StarField count={200} />

      {/* Purple glow — top right */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute right-[-80px] top-[-40px] w-[600px] h-[700px] opacity-80" />
        <div
          className="absolute right-[20px] top-[40px] w-[250px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse, rgba(192,132,252,0.6) 0%, transparent 70%)",
            borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
          }}
        />
      </div>

      <div className="hidden md:flex relative z-10 container mx-auto px-6 md:px-12 pt-38 pb-0 md:left-20 flex-row items-start gap-8">
        <div className="relative flex-shrink-0 w-48 md:w-64 lg:w-72">
          <div
            className="relative"
            style={{
              width: "100%",
              maxWidth: "404px",
              height: "auto",
              aspectRatio: "404 / 736.13",
            }}
          >
            <img
              src={model}
              alt="Code the Future - Hackathon"
              className="w-full h-full object-cover z-50 object-top transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-purple-400 text-sm opacity-30 font-mono tracking-tighter uppercase">
                hero-person.png
              </span>
            </div>
          </div>
          <p className="text-center text-[#D9D9D9] mt-3 uppercase font-bold text-[16px] leading-none tracking-[0.07em]">
            Where Innovation Becomes Reality
          </p>
        </div>

        <div className="flex-1 text-left">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4">
            <span className="text-[#FFFFFF] block -ml-28 lg:-ml-42">
              CODE THE
            </span>
            <span
              className="block -ml-12 lg:-ml-18"
              style={{ WebkitTextStroke: "2px #a855f7", color: "transparent" }}
            >
              FUTURE
            </span>
          </h1>
        </div>
      </div>

      <div className="hidden md:block absolute z-10 bottom-20 right-12 lg:right-20 xl:right-28">
        <Button size="lg" variant="tech" href="#about">
          Register Now
        </Button>
      </div>

      {/* ── MOBILE layout (below md): stacked, centered ── */}
      <div className="flex md:hidden relative z-10 flex-col items-center text-center px-5 pt-28 pb-8 gap-6">
        {/* Person image — smaller on mobile */}
        <div className="relative flex-shrink-0 w-40 sm:w-52">
          <div
            className="relative"
            style={{ width: "100%", aspectRatio: "404 / 736.13" }}
          >
            <img
              src={model}
              alt="Code the Future - Hackathon"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-purple-400 text-xs opacity-30 font-mono tracking-tighter uppercase">
                hero-person.png
              </span>
            </div>
          </div>
          <p className="text-center text-[#D9D9D9] mt-3 uppercase font-bold text-[13px] leading-none tracking-[0.07em]">
            Where Innovation Becomes Reality
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-6xl font-black leading-none">
          <span className="text-[#FFFFFF] block">CODE THE</span>
          <span
            className="block"
            style={{ WebkitTextStroke: "2px #a855f7", color: "transparent" }}
          >
            FUTURE
          </span>
        </h1>

        {/* Register Now — mobile: below heading */}
        <div className="mt-2">
          <Button size="lg" variant="tech" href="#about">
            Register Now
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #06010f)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
