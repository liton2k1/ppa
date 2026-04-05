"use client";
import { MdCheckCircle } from "react-icons/md";

const bonuses = [
  "Bonus: 1:1 coaching session to boost focus.",
  "Discount: Save 30% when you enroll now!",
];

const perks = [
  "6h of videos – Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others.",
];

const Pricing = () => {
  return (
    <section className="bg-black py-24 px-4 sm:px-8">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-2xl overflow-hidden">
        {/* ── Left ── */}
        <div className="p-10 flex flex-col gap-8 border border-white/8 bg-white/5 rounded-2xl">
          {/* Pill */}
          <div className="w-fit flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-white/70 text-xs">Introducing</span>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <h2
              className="text-white font-bold text-3xl sm:text-4xl leading-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              The Deep Work Blueprint
            </h2>
            <p className="text-white/50 text-sm">
              What extra you will get if you enroll now
            </p>
          </div>

          {/* Bonus rows */}
          <div className="flex flex-col gap-3">
            {bonuses.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/5 border border-white/8"
              >
                <MdCheckCircle className="text-blue-500 shrink-0" size={18} />
                <span className="text-white/80 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div className="p-10 flex flex-col gap-6 border border-blue-500/20 bg-linear-to-t from-black/80 to-black/50 rounded-2xl">
          {/* Price + badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <span
                className="text-white font-bold text-5xl"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                $349
              </span>
              <span className="text-red-400 text-2xl font-medium line-through">
                $500
              </span>
            </div>
            <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl">
              30% off
            </span>
          </div>

          {/* Countdown */}
          <p className="text-white/40 text-sm">
            30% off until 4d : 2h : 41m : 17s
          </p>

          <div className="h-px bg-white/8" />

          {/* Perks */}
          <div className="flex flex-col gap-4">
            {perks.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <MdCheckCircle
                  className="text-blue-500 shrink-0 mt-0.5"
                  size={17}
                />
                <span className="text-white/75 text-sm leading-snug">{p}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all py-4 rounded-xl text-white font-semibold text-sm mt-auto">
            Enroll now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
