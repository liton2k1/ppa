"use client";
import { BsPatchPlusFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

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
        <div className="md:p-10 p-5 flex flex-col gap-8 border border-white/8 bg-white/5 rounded-2xl">
          <div className="w-fit flex items-center gap-2 border border-blue-600/20 bg-white/5 rounded-lg px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-white/70 text-xs">Introducing</span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-white font-normal text-2xl md:text-4xl leading-tight">
              The Deep Work Blueprint
            </h2>
            <p className="text-white/90 text-sm">
              What extra you will get if you enroll now
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {bonuses.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <BsPatchPlusFill className="text-white shrink-0" size={18} />
                <span className="text-white/70 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:p-10 p-5 flex flex-col gap-6 border border-blue-600/20 bg-linear-to-t from-black/80 to-black/50 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <span className="text-white font-bold md:text-5xl text-2xl">
                $349
              </span>
              <span className="relative text-white/80 md:text-2xl font-medium">
                $500
                <span className="absolute inset-0 flex items-center">
                  <span className="w-full h-0.5 bg-red-500 rotate-10" />
                </span>
              </span>
            </div>
            <span className="bg-blue-600 text-white text-sm font-normal px-4 py-2 rounded-xl">
              30% off
            </span>
          </div>

          <p className="text-white/80 text-sm">
            30% off until 4d : 2h : 41m : 17s
          </p>

          <div className="h-px bg-white/8" />

          <div className="flex flex-col gap-4">
            {perks.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <MdVerified className="text-white shrink-0 mt-0.5" size={17} />
                <span className="text-white/75 text-sm leading-snug">{p}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all py-3 rounded-xl text-white font-semibold text-sm mt-auto">
            Enroll now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
