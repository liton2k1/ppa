"use client";
import Image from "next/image";
import img1 from "../../public/image (3).jpg";
import img2 from "../../public/image (8).jpg";
import img3 from "../../public/image (10).jpg";
import img4 from "../../public/image (1).jpg";
import img5 from "../../public/image (13).jpg";
import img6 from "../../public/image (14).jpg";
import img7 from "../../public/image (15).jpg";

const avatars = [img5, img6, img7];
const thumbnails = [img2, img3, img4];

const Meeting = () => {
  return (
    <section className="w-full bg-black py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-5">
        <div className="relative lg:w-[42%] rounded-3xl overflow-hidden min-h-125 lg:min-h-155 hidden lg:block">
          <Image
            src={img1}
            alt="Person concentrating on laptop"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="relative w-full lg:w-[58%] rounded-3xl bg-[#181818] min-h-125 lg:min-h-155">
          <div className="flex flex-col sm:flex-row items-start justify-between px-7 pt-7 gap-4 sm:gap-0">
            <div className="flex items-center gap-2 bg-white/5 border border-blue-600/20 rounded-lg px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 animate-pulse" />
              <span className="text-white/70 text-sm tracking-wide">
                No worries
              </span>
            </div>

            <div className="flex flex-col items-start sm:items-center gap-1.5">
              <div className="flex">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#181818]"
                    style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 3 - i }}
                  >
                    <Image
                      src={src}
                      alt="Student"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <span className="text-white/60 text-[11px] tracking-wide text-center">
                Join with 5K other students
              </span>
            </div>
          </div>

          <div className="sm:absolute sm:bottom-30 sm:left-7 flex flex-col gap-3 px-7 pt-10 sm:px-0 sm:pt-0 md:max-w-[54%]">
            <p className="text-white/60 text-sm leading-relaxed">
              The ability to concentrate deeply is the ultimate productivity
              hack
            </p>
            <h2 className="text-white text-xl md:text-3xl font-semibold leading-snug tracking-tight">
              And fortunately it&apos;s a skill you can train &amp; develop.
            </h2>
          </div>

          <div className="sm:absolute sm:right-7 sm:top-1/2 sm:-translate-y-1/2 sm:flex-col sm:mt-10 flex flex-row gap-3 px-7 pt-6 pb-7 sm:px-0 sm:pt-0 sm:pb-0">
            {thumbnails.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl border border-white/8 shrink-0 flex-1 sm:flex-none sm:w-25 sm:h-27.5 h-27.5"
              >
                <Image
                  src={src}
                  alt={`Student ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 100px, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
