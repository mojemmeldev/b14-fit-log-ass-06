

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PlanSaveCard = ({ data }) => {
    return (
       <div className="flex w-full flex-col gap-4 rounded-xl border border-[#292D35] bg-[#17191F] p-4 text-white md:flex-row md:items-center md:justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-5">

        {/* Image */}
        <div className="relative h-[90px] w-[165px] shrink-0 overflow-hidden rounded-xl">
          <Image src={data.image} alt={data.name} fill className="object-cover" />
        </div>

        {/* Details */}
        <div>
          <h2 className="text-[18px] font-black uppercase tracking-wide">
            {data.name}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {data.equipment}
          </p>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-300">

            {/* Duration */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#B6FF00]" >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

              <span>{data.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#B6FF00]" >
                <path d="M13.5 2.5c.6 3.1-.7 4.6-2 6.1-1 1.2-1.9 2.3-1.7 4 .9-.6 1.5-1.5 1.8-2.5 2.4 1.5 4 4 4 6.8 0 3.2-2.4 5.6-5.6 5.6S4.4 20 4.4 16.8c0-4.1 2.7-7.1 5.6-9.7.1 1.5.7 2.4 1.3 3.1.4-2.9 2.2-4.4 2.2-7.7Z" />
              </svg>

              <span>{data.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#B6FF00]" >
                <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
              </svg>

              <span>{data.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* Details */}
        <Link
          href={`/workouts/${data.id}`}
          className="btn rounded-full border-[#3A414D] bg-transparent px-6 font-normal text-white hover:border-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00]"
        >
          View Details
        </Link>

    
      </div>
    </div>
    );
};

export default PlanSaveCard;