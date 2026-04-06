"use client";
import Image from "next/image";
import img1 from "../../public/image (2).jpg";
import img2 from "../../public/image (11).jpg";
import img3 from "../../public/image (4).jpg";

const images = [img1, img2, img3];

const Struggle = () => {
  return (
    <section className="relative bg-black flex flex-col items-center overflow-hidden py-24 px-4 sm:px-6">
      <div className="flex items-center gap-2 border border-blue-600/20 bg-white/5 rounded-xl px-4 py-2 mb-10">
        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
        <span className="text-white/70 text-xs tracking-wide">
          Are Distractions Holding You Back?
        </span>
      </div>

      <h2 className="text-center text-white md:text-5xl text-xl font-normal leading-tight max-w-3xl mx-auto mb-14">
        If you struggle to focus, feel overwhelmed by endle
        <span className="text-white/20">
          ss tasks, or procrastinate instead of making progress, you’re not
          alone.
        </span>
      </h2>

      <div className="flex items-center justify-center gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-white/10 shrink-0 md:w-32.5 md:h-32 w-24 h-28"
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
