"use client";
import Image from "next/image";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import img1 from "../../public/image (2).jpg";
import img2 from "../../public/image (3).jpg";
import img3 from "../../public/image (4).jpg";
import img4 from "../../public/image (5).jpg";
import img5 from "../../public/image (6).jpg";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Freelance Designer",
    avatar: img1,
    text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
    video: false,
  },
  {
    name: "Daniel Foster",
    role: "Content Creator",
    avatar: img2,
    text: "",
    video: true,
    bg: img2,
  },
  {
    name: "Mark Davidson",
    role: "Software Developer",
    avatar: img3,
    text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
    video: false,
  },
  {
    name: "Tom David",
    role: "Entrepreneur",
    avatar: img4,
    text: "",
    video: true,
    bg: img4,
  },
  {
    name: "James Wu",
    role: "Entrepreneur",
    avatar: img5,
    text: "Procrastination was my biggest enemy until now. This course gave me the consistency I needed. I take action every day and my results have skyrocketed.",
    video: false,
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-black overflow-hidden py-24 px-4 sm:px-8">
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 border border-blue-600/20 bg-white/5 rounded-lg px-4 py-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
          <span className="text-white/70 text-xs tracking-wide">
            Testimonials
          </span>
        </div>
      </div>

      <h2 className="text-white text-center font-normal leading-tight mb-16 text-2xl md:text-4xl">
        Real Results from
        <br />
        Real People
      </h2>

      <div className="flex items-center justify-between max-w-6xl mx-auto mb-5">
        <p className="text-white">Join with 5K other students</p>
        <div className="flex items-center gap-5">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 transition-all"
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 transition-all"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide max-w-6xl mx-auto pb-2 snap-x snap-mandatory"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`shrink-0 w-60 sm:w-65 rounded-2xl overflow-hidden relative flex flex-col justify-between border border-blue-500/20 p-5 min-h-[300px] snap-start ${t.video ? "" : "bg-white/4"}`}
          >
            {t.video && t.bg && (
              <>
                <Image
                  src={t.bg}
                  alt=""
                  width={200}
                  height={200}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </>
            )}

            <div className="relative z-10 flex flex-col justify-between h-full gap-6">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />

              {t.video ? (
                <div className="flex items-center justify-center flex-1">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FiPlay
                      size={20}
                      fill="white"
                      className="text-white ml-1"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-white/80 text-xs leading-relaxed flex-1">
                  {t.text}
                </p>
              )}

              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/70 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
