import React from "react";
import BannerLogo from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="bg-[#0B0D10] px-3 py-4 sm:px-5 sm:py-6 md:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-[#272B33] bg-[#15181E]">

                <div
                    className="grid grid-cols-1 items-center gap-8 px-5 py-8 sm:px-7 sm:py-10 md:min-h-[430px] md:grid-cols-2 md:gap-10 md:px-10 md:py-12 lg:min-h-[470px] lg:gap-14 lg:px-16 lg:py-14 " >

                    {/* Left Content */}
                    <div className="order-1 space-y-5 text-center md:text-left lg:space-y-6">

                        <p className="text-xs font-extrabold tracking-wide text-[#B6FF00] sm:text-sm">
                            WORKOUT LIBRARY
                        </p>

                        <h1
                            className=" mx-auto max-w-[650px] text-[34px] font-black uppercase leading-[1] tracking-tight text-white sm:text-[42px] md:mx-0 md:text-[48px] lg:text-[64px]">
                            TRAIN WITH INTENT. LOG
                            <span className="block">
                                EVERY SET.
                            </span>
                        </h1>

                        <p className=" mx-auto max-w-[580px] text-sm leading-6 text-[#9CA3AF] sm:text-bas sm:leading-7 md:mx-0 md:text-base lg:text-lg">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link
                            href="/workouts"
                            className=" inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#B6FF00] px-6 text-sm font-extrabold text-black transition hover:bg-[#A6EB00] sm:w-auto sm:px-7 ">
                            BROWSE WORKOUTS
                        </Link>

                    </div>

                    {/* Right Image */}
                    <div className="order-2 flex items-center justify-center md:justify-end">
                        <Image src={BannerLogo} alt="Workout exercise"priority className=" h-auto w-[210px] object-contain sm:w-[260px]  md:w-[300px] lg:w-[390px] "/>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;