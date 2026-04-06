"use client";
import { useRef, useState } from "react";
import { FiPlay } from "react-icons/fi";
import Image from "next/image";
import heroImg from "../../public/image (12).png";

const Hero = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="relative md:min-h-screen bg-black flex flex-col items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      <div className="pointer-events-none absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[130%] h-[80%] rounded-[50%] bg-blue-600/50 blur-[100px] z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-20 sm:pt-28 pb-12 w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-2.5 bg-black/60 border border-blue-600/20 rounded-lg px-5 py-2.5 w-fit shadow-lg mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 animate-pulse" />
          <span className="text-white/70 text-sm font-medium tracking-wide whitespace-nowrap">
            30% off until 4d : 12h : 41m : 17s
          </span>
        </div>

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight mb-5">
          Master Focus &amp; Get
          <br className="hidden sm:block" /> More Done in Less Time
        </h1>

        <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed mb-8">
          A step-by-step system to eliminate procrastination, train your brain
          for deep work, and boost productivity effortlessly.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 px-7 py-3 rounded-xl font-semibold text-white text-sm">
            Enroll now
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 active:scale-95 transition-all duration-200 px-7 py-3 rounded-xl font-semibold text-white text-sm backdrop-blur-sm">
            Curriculum
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="absolute inset-x-4 sm:inset-x-6 -top-2 bottom-14 rounded-3xl bg-blue-600/10 blur-2xl pointer-events-none" />

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/60"
          style={{
            aspectRatio: "16/9",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 0 0 1px rgba(59,130,246,0.15), 0 32px 80px rgba(29,78,216,0.35)",
          }}
        >
          <Image
            src={heroImg}
            alt="Course preview"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/30 z-10" />

          {!playing && (
            <div
              className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group"
              onClick={handlePlay}
            >
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 animate-ping" />

              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 ease-out">
                <FiPlay
                  className="text-blue-600 ml-1"
                  size={26}
                  fill="currentColor"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
