"use client";
import { FaBrain } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

const steps = [
  {
    icon: <HiLightBulb size={16} />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <FaBrain size={16} />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <MdVerified size={16} />,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <FiRepeat size={16} />,
    text: "Build lasting habits for long-term success.",
  },
];

const Blueprint = () => {
  return (
    <section className="relative bg-black flex flex-col items-center overflow-hidden py-24 px-4 sm:px-6">
      {/* ── Pill badge ── */}
      <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
        <span className="text-white/70 text-xs tracking-wide">
          The Deep Work Blueprint
        </span>
      </div>

      {/* ── Heading ── */}
      <h2
        className="text-white text-center font-bold leading-snug max-w-md mx-auto mb-20 text-3xl"
        style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
      >
        A self-paced, results-driven course designed to help you
      </h2>

      {/* ── Timeline ── */}
      <div className="relative w-75 max-w-[88vw]">
        {steps.map((step, i) => (
          <div key={i} className="relative flex gap-0 mb-12 last:mb-0">
            {/* Left column: dot + line */}
            <div className="relative flex flex-col items-center w-7 shrink-0">
              {/* Blue dot */}
              <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-500 mt-0.5 shrink-0 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />
              {/* Vertical line */}
              {i < steps.length + 1 && (
                <div className="flex-1 w-px mt-2 min-h-30 bg-[linear-gradient(to_bottom,transparent,rgba(59,130,246,0.5),rgba(59,130,246,0.15))]" />
              )}
            </div>

            {/* Right column: icon circle + text */}
            <div className="flex flex-col gap-3 pl-8">
              {/* Icon circle */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white/80 shrink-0 bg-white/5 border border-white/10">
                {step.icon}
              </div>
              {/* Text */}
              <p
                className="text-white/75 text-sm leading-relaxed max-w-50"
                style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
              >
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blueprint;
