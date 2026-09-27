import { TLibrary } from "@/app/DataTypes/Type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

type PlanCardProps = {
  data: TLibrary;
};

const PlanCard = ({ data }: PlanCardProps) => {

const [isDone, setIsDone] = useState(false);

const handleMarkDone = () => {
  setIsDone(true);
  toast.success("Workout marked as done!");
};

  return (
    <div className=" flex w-full min-w-0 flex-col gap-5 rounded-xl border border-[#292D35] bg-[#17191F] p-3 text-white sm:p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 " >
      {/* LEFT SIDE */}
      <div className=" flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 " >
        {/* Image */}
        <div className=" relative h-[180px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[110px] sm:w-[190px] md:h-[120px] md:w-[210px] lg:h-[90px] lg:w-[165px] " >
          <Image src={data.image} alt={data.name} fill sizes=" (max-width: 639px) 100vw, (max-width: 1023px) 210px, 165px " className="object-cover" />
        </div>

        {/* Details */}
        <div className="min-w-0 flex-1">
          <h2 className=" break-words text-base font-black uppercase tracking-wide sm:text-[17px] md:text-[18px] " >
            {data.name}
          </h2>

          <p className=" mt-1 break-words text-xs text-gray-400 sm:text-sm " >
            {data.equipment}
          </p>

          {/* Stats */}
          <div className=" mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300 sm:text-sm " >
            {/* Duration */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-[#B6FF00]" >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

              <span className="whitespace-nowrap">
                {data.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0 text-[#B6FF00]" >
                <path d="M13.5 2.5c.6 3.1-.7 4.6-2 6.1-1 1.2-1.9 2.3-1.7 4 .9-.6 1.5-1.5 1.8-2.5 2.4 1.5 4 4 4 6.8 0 3.2-2.4 5.6-5.6 5.6S4.4 20 4.4 16.8c0-4.1 2.7-7.1 5.6-9.7.1 1.5.7 2.4 1.3 3.1.4-2.9 2.2-4.4 2.2-7.7Z" />
              </svg>

              <span className="whitespace-nowrap">
                {data.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-[#B6FF00]" >
                <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
              </svg>

              <span>{data.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className=" flex w-full flex-col gap-2 sm:flex-row sm:gap-3 lg:w-auto lg:shrink-0 " >
        {/* View Details */}
        <Link href={`/workouts/${data.id}`} className=" btn min-h-[42px] w-full rounded-full border-[#3A414D] bg-transparent px-5 text-sm font-normal text-white hover:border-[#B6FF00] hover:bg-transparent hover:text-[#B6FF00] sm:w-auto md:px-6 " >
          View Details
        </Link>

        {/* Mark Done */}
        <button
          onClick={handleMarkDone}
          disabled={isDone}
          className="btn min-h-[42px] w-full rounded-full border-[#B6FF00] bg-[#B6FF00] px-5 text-sm font-semibold text-black sm:w-auto md:px-6"
        >
          {isDone ? "✔ Completed" : "✔ Mark as Done"}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;