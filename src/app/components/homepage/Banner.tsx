import React from "react";
import BannerLogo from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#0B0D10] px-4 py-6">
      <div className="container mx-auto overflow-hidden rounded-[20px] border border-[#272B33] bg-[#15181E]">
        <div className="grid min-h-[470px] items-center gap-8 px-7 py-10 md:grid-cols-2 md:px-14 lg:px-16">

          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm font-extrabold tracking-wide text-[#B6FF00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-[650px] text-[42px] font-black uppercase leading-[0.98] tracking-tight text-white md:text-[56px] lg:text-[64px]">
              TRAIN WITH INTENT. LOG
              <span className="block">
                EVERY SET.
              </span>
            </h1>

            <p className="max-w-[580px] text-base leading-7 text-[#9CA3AF] md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="/workouts"
              className="inline-flex h-[44px] items-center justify-center rounded-md bg-[#B6FF00] px-7 text-sm font-extrabold text-black transition hover:bg-[#A6EB00]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src={BannerLogo}
              alt="Workout exercise"
              priority
              className="h-auto w-[300px] object-contain md:w-[340px] lg:w-[390px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;