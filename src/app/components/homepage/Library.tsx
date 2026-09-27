import React from "react";

import { TLibrary } from "@/app/DataTypes/Type";
import LibraryCard from "../shared/LibraryCard";
import { LibraryDataFetch } from "../LIbraryDataShare/LibraryData";

const Library = async () => {
    const datas = await LibraryDataFetch();

    return (
        <section className="bg-[#0B0D10]">
            <div className="mx-auto my-12 w-full max-w-7xl px-4 sm:my-16 sm:px-6 lg:my-20 lg:px-8" >

                {/* Section Heading */}
                <div
                    className=" mx-auto max-w-[500px] space-y-3 text-center sm:space-y-4 ">
                    <h2

                    >
                        Installed Apps
                    </h2>

                    <p
                        className=" text-sm leading-6 text-[#8B919C] sm:text-base sm:leading-7 ">
                        Explore all trending app on the market developed.
                    </p>
                </div>

                {/* Cards Grid */}
                <div
                    className=" mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-7 " >
                    {datas.map((data: TLibrary) => (
                        <LibraryCard
                            key={data.id}
                            data={data}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Library;