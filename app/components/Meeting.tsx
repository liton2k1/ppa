"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&q=80",
];

const THUMB_URLS = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80",
];

export default function Meeting() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-260 mx-auto flex flex-col lg:flex-row gap-4">
        {/* ══════════════════════════════
            LEFT CARD — hero photo
        ══════════════════════════════ */}
        <div
          className={`relative overflow-hidden rounded-3xl flex-1 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ minHeight: 560 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85"
            alt="Person concentrating on laptop"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* ══════════════════════════════
            RIGHT CARD — content
        ══════════════════════════════ */}
        <div
          className={`relative flex-1 rounded-3xl overflow-hidden transition-all duration-700 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ background: "#1a1a1a", minHeight: 560 }}
        >
          {/* TOP-LEFT — "No worries" pill */}
          <div
            className="absolute top-7 left-7 flex items-center gap-2 px-3.5 py-1.5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 animate-pulse" />
            <span className="text-[13px] text-white/55 tracking-wide">
              No worries
            </span>
          </div>

          {/* TOP-RIGHT — Avatar stack + label */}
          <div className="absolute top-7 right-7 flex flex-col items-end gap-1.5">
            <div className="flex">
              {AVATAR_URLS.map((src, i) => (
                <div
                  key={i}
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: 32,
                    height: 32,
                    border: "2px solid #1a1a1a",
                    marginLeft: i === 0 ? 0 : -10,
                    zIndex: AVATAR_URLS.length - i,
                    position: "relative",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Student ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="32px"
                  />
                </div>
              ))}
            </div>
            <span className="text-[11px] text-white/35 tracking-wide">
              Join with 5K other students
            </span>
          </div>

          {/* RIGHT EDGE — stacked thumbnails, vertically centered */}
          <div
            className="absolute right-7 flex flex-col gap-3"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            {THUMB_URLS.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden transition-all duration-500 ease-out ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.08)",
                  transitionDelay: `${250 + i * 80}ms`,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={src}
                  alt={`Student thumbnail ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="88px"
                />
              </div>
            ))}
          </div>

          {/* CENTER-BOTTOM — copy block at ~58% down, left side */}
          <div
            className="absolute left-7 flex flex-col gap-3"
            style={{ top: "45%", maxWidth: "55%" }}
          >
            <p className="text-[14px] leading-[1.7] text-white/40">
              The ability to concentrate deeply is the ultimate productivity
              hack
            </p>
            <h2
              className="text-white font-semibold leading-snug tracking-tight"
              style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
            >
              And fortunately it&rsquo;s a skill you can train &amp; develop.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
