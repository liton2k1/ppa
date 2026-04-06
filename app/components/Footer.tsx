"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../../public/image (2).jpg";
import img2 from "../../public/image (3).jpg";
import img3 from "../../public/image (4).jpg";

const avatars = [img1, img2, img3];
const links = ["Terms & conditions", "Refund policy", "Pricing", "Support"];

const Footer = () => {
  return (
    <footer className="bg-black/95 px-6 sm:px-10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
        <div>
          <h2 className="lg:text-start text-center text-white font-normal text-3xl sm:text-4xl leading-tight mb-2">
            The Deep
            <br />
            Work Blueprint
          </h2>
          <p className="lg:text-start text-center text-white/70 text-sm">
            Master Focus & Get More Done in Less Time
          </p>
        </div>

        <div className="rounded-2xl p-5 flex flex-col gap-4 w-full sm:w-65 shrink-0 bg-blue-600">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
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
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <FiArrowRight size={16} className="text-blue-600" />
            </div>
          </div>
          <p className="text-white font-semibold text-sm">
            Join with 5K other students
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto h-px bg-linear-to-r from-transparent via-blue-600 to-transparent mb-6" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-xs">
          © Copyright 2024, All Rights Reserved
        </p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/70 hover:text-white/80 text-xs transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
