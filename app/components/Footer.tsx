"use client";
import Image from "next/image";
import img1 from "../../public/image (2).jpg";
import img2 from "../../public/image (3).jpg";
import img3 from "../../public/image (4).jpg";

const Footer = () => {
  return (
    <footer className="bg-black px-6 sm:px-10 pt-16 pb-8">
      {/* ── Top row ── */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
        {/* Left: title + subtitle */}
        <div>
          <h2
            className="text-white font-bold text-3xl sm:text-4xl leading-tight mb-2"
            style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
          >
            The Deep
            <br />
            Work Blueprint
          </h2>
          <p className="text-white/40 text-sm">
            Master Focus & Get More Done in Less Time
          </p>
        </div>

        {/* Right: blue CTA card */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-4 w-full sm:w-65 shrink-0"
          style={{ background: "#2563eb" }}
        >
          {/* Avatars + arrow */}
          <div className="flex items-center justify-between">
            {/* Stacked avatars */}
            <div className="flex -space-x-2">
              {[img1, img2, img3].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover"
                />
              ))}
            </div>
            {/* Arrow button */}
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#2563eb"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p
            className="text-white font-semibold text-sm"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Join with 5K other students
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-blue-600 to-transparent mb-6" />

      {/* ── Bottom row ── */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs">
          © Copyright 2024, All Rights Reserved
        </p>
        <div className="flex items-center gap-6">
          {["Terms & conditions", "Refund policy", "Pricing", "Support"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 hover:text-white/80 text-xs transition-colors"
              >
                {link}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
