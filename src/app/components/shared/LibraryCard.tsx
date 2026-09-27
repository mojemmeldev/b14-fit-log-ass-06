import { TLibrary } from "@/app/DataTypes/Type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ICardProps {
    data: TLibrary;
}

const LibraryCard = ({ data }: ICardProps) => {
    return (
        <Link href={`/workouts/${data.id}`} className="block w-full" >
            <div className=" card w-full overflow-hidden rounded-2xl border border-[#292D35] bg-[#17191F] shadow-xl transition duration-300 hover:-translate-y-1 sm:rounded-[20px] lg:rounded-[24px] " >
                {/* Image */}
                <figure className=" relative h-[190px] w-full sm:h-[220px] md:h-[230px] lg:h-[240px] " >
                    <Image src={data.image} alt={data.name} fill sizes=" (max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw " className="object-cover" />
                </figure>

                {/* Card Body */}
                <div className=" card-body p-4 sm:p-5 md:p-6 lg:p-8 " >

                    {/* Muscle Group */}
                    <div className="flex flex-wrap gap-2">
                        {data.muscleGroups.map((group: string) => (
                            <span key={group} className=" badge border-none bg-[#B6FF00] px-3 py-2.5 text-[10px] font-extrabold uppercase text-black sm:px-4 sm:py-3 sm:text-xs " >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Exercise Name */}
                    <h2
                        className=" mt-3 break-words text-lg font-black uppercase leading-tight tracking-wide text-white sm:text-xl lg:text-[22px] " >
                        {data.name}
                    </h2>

                    {/* Equipment */}
                    <p className=" -mt-1 break-words text-sm text-gray-400 sm:text-base " >
                        {data.equipment}
                    </p>

                    {/* Divider */}
                    <div className="divider my-1 before:bg-[#292D35] after:bg-[#292D35]" />

                    {/* Stats */}
                    <div className=" flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-gray-400 sm:text-sm lg:gap-x-6 lg:text-[15px] " >
                        {/* Duration */}
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" >
                                <circle cx="12" cy="12" r="9" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                            </svg>

                            <span className="whitespace-nowrap">
                                {data.duration} min
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" >
                                <path d="M12.6 2.2c.8 3.7-1.1 5.2-2.3 7.1-.8 1.2-1.2 2.5-.5 4 1-.8 1.7-1.9 2-3.1 2.5 1.6 4.1 4.1 4.1 7 0 3-2.4 5.5-5.5 5.5S5 20.2 5 17.2c0-4 2.5-7.1 5.3-9.5.1 1.5.6 2.4 1.2 3 .4-3 2.3-4.7 1.1-8.5Z" />
                            </svg>

                            <span className="whitespace-nowrap">
                                {data.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
                            </svg>

                            <span>{data.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;