import { LibraryDataFetch } from "@/app/components/LIbraryDataShare/LibraryData";
import ReadButton from "@/app/components/libraryDetails/ReadButton";
import SavedButton from "@/app/components/libraryDetails/SaveButton";
import { TLibrary } from "@/app/DataTypes/Type";

import Image from "next/image";
import { notFound } from "next/navigation";
import React, { JSX } from "react";

interface LibraryPageParams {
  id: string;
}

interface TLibraryDetailsProps {
  params: Promise<LibraryPageParams>;
}

const DynamicLibraryPage = async ({ params, }: TLibraryDetailsProps): Promise<JSX.Element> => {
  const { id } = await params;

  const datas = await LibraryDataFetch();

  const data = datas.find((item: TLibrary) => item.id === Number(id));

  if (!data) {
    notFound();
  }

  return (
    <section className=" min-h-screen bg-[#0d0f12] px-4 py-6 text-white sm:px-6 sm:py-8 md:py-10 lg:px-8 lg:py-12 " >
      <div className="mx-auto w-full max-w-7xl">

        {/* Main Grid */}
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-12 " >

          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl"> <div className=" relative h-[320px] w-full sm:h-[420px] md:h-[560px] lg:h-[680px] xl:h-[720px] " >
            <Image src={data.image} alt={data.name} fill priority sizes=" (max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw " className="object-cover" />
          </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex min-w-0 flex-col">

            {/* Title */}
            <h1 className=" text-2xl font-black uppercase leading-tight tracking-wide text-white sm:text-3xl md:text-[34px] lg:text-4xl xl:text-5xl " >
              {data.name}
            </h1>

            {/* Description */}
            <p className=" mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 " >
              {data.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2"> {data.muscleGroups.map((group: string) => (
              <span key={group} className=" rounded-full border-none bg-[#B6FF00] px-3 py-1.5 text-xs font-semibold text-black sm:px-4 sm:py-2 " >
                {group}
              </span>
            ))}
            </div>

            {/* DETAILS TABLE */}
            <div className=" mt-6 overflow-hidden rounded-xl border border-[#292d35] bg-[#17191f] sm:mt-7 sm:rounded-2xl " >
              <DetailRow label="Equipment" value={data.equipment} />

              <DetailRow label="Difficulty" value={data.difficulty} />

              <DetailRow label="Sets" value={data.sets} />

              <DetailRow label="Reps" value={data.reps} />

              <DetailRow label="Duration" value={`${data.duration} min`} />

              <DetailRow label="Calories" value={`${data.caloriesBurned} kcal`} />

              <DetailRow label="Rating" value={data.rating} last /> </div>

            {/* Instructions */}
            <div className="mt-7 sm:mt-8"> <h2 className=" text-base font-extrabold uppercase tracking-wide sm:text-lg " >
              Instructions
            </h2>

              <ol className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {data.instructions.map((instruction: string, index: number) => (<li key={index} className=" flex gap-3 text-sm leading-6 text-gray-400 sm:gap-4 " >
                  <span className="shrink-0 text-gray-500">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>
                </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className=" mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap " >
              <ReadButton data={data} />

              <SavedButton data={data} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================
   DETAIL ROW
================================== */

type DetailRowProps = {
  label: string;
  value: string | number;
  last?: boolean;
};

const DetailRow = ({ label, value, last = false, }: DetailRowProps) => {
  return (
    <div className={` flex flex-col gap-1.5 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4 ${!last ? "border-b border-[#292d35]" : ""} `} >
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </span>

      <span className=" break-words text-sm font-medium text-gray-200 sm:text-right " >
        {value}
      </span>
    </div>
  );
};

export default DynamicLibraryPage;