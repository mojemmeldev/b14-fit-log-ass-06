import { LibraryDataFetch } from '@/app/components/LIbraryDataShare/LibraryData';
import ReadButton from '@/app/components/libraryDetails/ReadButton';
import SavedButton from '@/app/components/libraryDetails/SaveButton';
import { TLibrary } from '@/app/DataTypes/Type';
import Image from 'next/image';
import React from 'react';


interface LibraryPageParams {
    id: string;
}

interface TLibraryDetailsProps {
    params: Promise<LibraryPageParams>;
}



const DynamicLibraryPage =async ({params}:TLibraryDetailsProps): Promise<JSX.Element> => {
    const {id}=await params;
    const datas = await LibraryDataFetch();
    const data= datas.find((data:TLibrary)=> data.id ===Number(id));
    

    

    return (
       <section className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <div className="relative min-h-[500px] w-full lg:min-h-[700px]">
              <Image
                src={data.image}
                alt={data.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col">

            {/* Title */}
            <h1 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
              {data.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl leading-7 text-gray-400">
              {data.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {data.muscleGroups.map((group: string) => (
                <span
                  key={group}
                  className="badge border-none bg-[#B6FF00] px-4 py-3 font-semibold text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* DETAILS TABLE */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-[#292d35] bg-[#17191f]">

              <DetailRow
                label="Equipment"
                value={data.equipment}
              />

              <DetailRow
                label="Difficulty"
                value={data.difficulty}
              />

              <DetailRow
                label="Sets"
                value={data.sets}
              />

              <DetailRow
                label="Reps"
                value={data.reps}
              />

              <DetailRow
                label="Duration"
                value={`${data.duration} min`}
              />

              <DetailRow
                label="Calories"
                value={`${data.caloriesBurned} kcal`}
              />

              <DetailRow
                label="Rating"
                value={data.rating}
                last
              />
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-lg font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {data.instructions.map((instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-4 text-sm leading-6 text-gray-400"
                  >
                    <span className="text-gray-500">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Add Plan */}
              <ReadButton data={data} ></ReadButton>

              {/* Save */}
              <SavedButton data={data} ></SavedButton>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




/* ===============================
   DETAIL ROW
================================ */

type DetailRowProps = {
  label: string;
  value: string | number;
  last?: boolean;
};

const DetailRow = ({
  label,
  value,
  last = false,
}: DetailRowProps) => {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 ${
        !last ? "border-b border-[#292d35]" : ""
      }`}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </span>

      <span className="text-sm font-medium text-gray-200">
        {value}
      </span>
    </div>
    );
};

export default DynamicLibraryPage;