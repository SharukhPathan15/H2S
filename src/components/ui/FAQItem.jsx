import { Minus, Plus } from "lucide-react";
import { useId } from "react";

export function FAQItem({ faq, index }) {
  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <div className="border-b border-white/20 py-10">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
        
        <div className="flex-shrink-0 w-10 h-8 flex items-center justify-center rounded bg-[#1A1625] border border-white/20 text-gray-400 font-bold text-xs">
          {displayIndex}
        </div>

        <div className="w-full md:w-1/3">
          <h3 className={`text-[15px] font-semibold leading-snug ${index % 2 !== 0 ? 'text-[#7C3AED]' : 'text-white'}`}>
            {faq.q}
          </h3>
        </div>

        <div className="flex-1 md:text-right md:ml-auto">
          <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-md md:ml-auto">
            {faq.a}
          </p>
        </div>

      </div>
    </div>
  );
}