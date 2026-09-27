import React from 'react';
import BannerLogo from '@/assets/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="px-4 py-10 md:py-16">
            <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
                <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10 lg:p-14">

                    {/* Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                            WORKOUT LIBRARY
                        </span>

                        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                            TRAIN WITH INTENT. LOG

                            <span className="block text-emerald-400">
                                EVERY SET.
                            </span>
                        </h1>

                        <p className="max-w-lg text-base leading-7 text-slate-300 md:text-lg">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today's plan, and watch the week's work add up.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                            <button className="btn btn-success rounded-full px-7 text-white">
                                BROWSE WORKOUTS
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative flex justify-center">
                        <div className="absolute h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"></div>

                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src={BannerLogo}
                                alt="Books"
                                priority
                                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;