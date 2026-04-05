"use client";
import { useState } from "react";
import { FiPlay } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";

const modules = [
  {
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
      },
      { title: "The Science Behind Deep Work", time: "22:51" },
      { title: "Identifying Your Productivity Killers", time: "34:42" },
      { title: "How to Strengthen Your Attention Span", time: "27:08" },
    ],
  },
  {
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
      },
      { title: "The Science Behind Deep Work", time: "22:51" },
      { title: "Identifying Your Productivity Killers", time: "34:42" },
      { title: "How to Strengthen Your Attention Span", time: "27:08" },
    ],
  },
  {
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
      },
      { title: "The Science Behind Deep Work", time: "22:51" },
      { title: "Identifying Your Productivity Killers", time: "34:42" },
      { title: "How to Strengthen Your Attention Span", time: "27:08" },
    ],
  },
  {
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        preview: true,
      },
      { title: "The Science Behind Deep Work", time: "22:51" },
      { title: "Identifying Your Productivity Killers", time: "34:42" },
      { title: "How to Strengthen Your Attention Span", time: "27:08" },
    ],
  },
];

const perks = [
  "6h of videos – Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others.",
];

const GradientLine = () => (
  <div className="h-px w-full bg-linear-to-r from-transparent via-blue-600 to-transparent" />
);

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-black flex flex-col items-center overflow-hidden py-24 px-4 sm:px-6">
      {/* ── Pill badge ── */}
      <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
        <span className="text-white/70 text-xs tracking-wide">
          Course Curriculum
        </span>
      </div>

      {/* ── Heading ── */}
      <h2
        className="text-white text-center font-bold leading-tight max-w-xl mx-auto mb-16 text-[clamp(1.8rem,4vw,2.6rem)]"
        style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
      >
        Mastering Deep Work: A Structured Path to Peak Productivity
      </h2>

      {/* ── Two column layout ── */}
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* ── Left: Accordion ── */}
        <div className="flex-1 w-full">
          {modules.map((mod, i) => (
            <div key={i}>
              {/* Top gradient border */}
              <GradientLine />

              {/* Module header */}
              <button
                className="w-full flex items-start justify-between py-5 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div>
                  <p
                    className="text-white font-semibold text-sm sm:text-base"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {mod.title}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{mod.duration}</p>
                </div>
                <span className="text-white mt-1 shrink-0">
                  {openIndex === i ? (
                    <IoMdArrowDropup size={28} />
                  ) : (
                    <IoMdArrowDropdown size={28} />
                  )}
                </span>
              </button>

              {/* Lessons */}
              {openIndex === i && mod.lessons.length > 0 && (
                <div className="pb-4 flex flex-col">
                  {mod.lessons.map((lesson, j) => (
                    <div key={j}>
                      <GradientLine />
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                              lesson.preview
                                ? "bg-white text-blue-600"
                                : "text-black bg-white/20"
                            }`}
                          >
                            <FiPlay
                              size={12}
                              fill="currentColor"
                              className="ml-0.5"
                            />
                          </div>
                          <span
                            className="text-white/80 text-sm"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                          >
                            {lesson.title}
                          </span>
                          {lesson.preview && (
                            <span className="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full px-2 py-0.5 leading-none">
                              Preview
                            </span>
                          )}
                        </div>
                        <span className="text-white/40 text-xs shrink-0 ml-4">
                          {lesson.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Bottom border */}
          <GradientLine />
        </div>

        {/* ── Right: Sticky card ── */}
        <div className="w-full lg:w-75 shrink-0 rounded-2xl p-6 flex flex-col gap-5 lg:sticky lg:top-8 border border-blue-500/20 bg-linear-to-t from-black/80 to-black/50">
          <h3
            className="text-white font-bold text-lg leading-snug"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Not only video lessons!
          </h3>

          <ul className="flex flex-col gap-3">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-start gap-3">
                <MdCheckCircle
                  className="text-blue-500 shrink-0 mt-0.5"
                  size={16}
                />
                <span
                  className="text-white/70 text-sm leading-snug"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {perk}
                </span>
              </li>
            ))}
          </ul>

          <button className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 text-white font-semibold text-sm py-3 rounded-xl mt-2 shadow-lg shadow-blue-700/30">
            Enroll now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
