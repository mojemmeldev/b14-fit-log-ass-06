'use client'

import { LibraryContext } from '@/Context/libraryContext';
import Link from 'next/link';
import React, { useContext } from 'react';


const NavButton = () => {
    const { libraryPlan, librarySaved } = useContext(LibraryContext);



    return (
        <div className="flex items-center gap-8">


            <Link
                href="/myplan"
                className="flex items-center gap-3 text-[22px] text-[#D1D5DB]">
                <span>Plan</span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B6FF00] text-[22px] font-bold text-black">
                    {libraryPlan.length}
                </span>
            </Link>




            <Link
                href="/myplan"
                className="flex items-center gap-3 text-[22px] text-[#A3A8B3]">
                <span>Saved</span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#343A46] text-[22px] text-[#D1D5DB]">
                    {librarySaved.length}
                </span>
            </Link>

        </div>
    );
};

export default NavButton;