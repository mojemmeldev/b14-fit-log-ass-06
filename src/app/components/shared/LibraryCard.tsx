import { TLibrary } from '@/app/DataTypes/Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ICardProps {
    data:TLibrary;
}



const LibraryCard = ({ data }:ICardProps) => {
    return (

        <Link href={`/workouts/${data.id}`}>
        
        
        <div className="card w-full max-w-[490px] overflow-hidden rounded-[24px] border border-[#292D35] bg-[#17191F] shadow-xl">

            {/* Image */}
            <figure className="relative h-[240px] w-full">
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-8">

                {/* Muscle Group */}
                <div className="flex flex-wrap gap-2">
                    {data.muscleGroups.map((group: string) => (
                        <span
                            key={group}
                            className="badge border-none bg-[#B6FF00] px-4 py-3 text-xs font-extrabold uppercase text-black"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                {/* Exercise Name */}
                <h2 className="mt-3 text-[22px] font-black uppercase tracking-wide text-white">
                    {data.name}
                </h2>

                {/* Equipment */}
                <p className="-mt-2 text-base text-gray-400">
                    {data.equipment}
                </p>

                {/* Divider */}
                <div className="divider my-1 before:bg-[#292D35] after:bg-[#292D35]" />

                {/* Stats */}
                <div className="flex items-center gap-6 text-[15px] text-gray-400">

                    {/* Duration */}
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 7v5l3 2"
                            />
                        </svg>

                        <span>{data.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5"
                        >
                            <path d="M12.6 2.2c.8 3.7-1.1 5.2-2.3 7.1-.8 1.2-1.2 2.5-.5 4 1-.8 1.7-1.9 2-3.1 2.5 1.6 4.1 4.1 4.1 7 0 3-2.4 5.5-5.5 5.5S5 20.2 5 17.2c0-4 2.5-7.1 5.3-9.5.1 1.5.6 2.4 1.2 3 .4-3 2.3-4.7 1.1-8.5Z" />
                        </svg>

                        <span>{data.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"
                            />
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