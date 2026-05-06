import { useState, useCallback } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { FAQS } from "../../utils/data";
import { FAQItem } from "../ui/FAQItem";

export function FAQ() {
  const ref = useScrollReveal(0.1);
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = useCallback((i) => {
    setOpenIdx((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section
      id="faq"
      className="pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 relative z-10 -mt-32 sm:-mt-48 md:-mt-64"
      aria-label="Frequently asked questions"
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionLabel className="text-center block mb-6 sm:mb-8 text-[#FFFFFF]">
          Frequently Asked Question
        </SectionLabel>

        <div className="border-t border-white/20 mt-4" />

        <dl>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </dl>
      </div>
    </section>
  );
}
