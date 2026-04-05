"use client";
import Image from "next/image";
import img1 from "../../public/image (2).jpg";
import img2 from "../../public/image (11).jpg";
import img3 from "../../public/image (4).jpg";

const images = [img1, img2, img3];

const Struggle = () => {
  return (
    <section className="relative bg-black flex flex-col items-center overflow-hidden py-24 px-4 sm:px-6">
      <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-10">
        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
        <span className="text-white/70 text-xs tracking-wide">
          Are Distractions Holding You Back?
        </span>
      </div>

      <h2 className="text-center text-5xl font-semibold leading-tight max-w-5xl mx-auto mb-14">
        If you struggle to focus, feel overwhelmed by essential tasks, or
        procrastinate instead of making progress, you&apos;re not alone.
      </h2>

      <div className="flex items-center justify-center gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-white/10 shrink-0 w-32.5 h-25 sm:w-40 sm:h-30"
          >
            <Image
              src={src}
              alt={`frustrated person ${i + 1}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Struggle;
