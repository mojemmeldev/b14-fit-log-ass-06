'use client'

import { LibraryContext } from '@/Context/libraryContext';
import Link from 'next/link';
import React, { useContext } from 'react';


const NavButton = () => {
     const { libraryPlan, librarySaved } = useContext(LibraryContext);
    
    
               
    return (
        <div>
            <Link href="/workouts" className="btn">
            <button>plan </button>
            <h2>{libraryPlan.length}</h2>
            </Link>
        <Link href="/workouts" className="btn">
            <button>Saved </button>
            <h2>{librarySaved.length}</h2>
            </Link>
        </div>
    );
};

export default NavButton;