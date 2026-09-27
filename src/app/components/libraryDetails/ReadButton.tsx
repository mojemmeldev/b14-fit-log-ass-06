
"use client";

import React, { useContext } from "react";

import { TLibrary } from "@/app/DataTypes/Type";
import { LibraryContext } from "@/Context/libraryContext";

type TReadButtonProps = {
  data: TLibrary;
};

const ReadButton = ({ data }: TReadButtonProps) => {
  const { libraryPlan, setLibraryPlan }  = useContext(LibraryContext);

  

  const handleAddPlan = () => {

    console.log(data , "triggerd" );

   
    setLibraryPlan( [...libraryPlan, data]);
    alert('add plan')
  };

  return (
    <button
      onClick={()=>handleAddPlan()}
      className="btn border-none bg-[#B6FF00] px-6 text-black hover:bg-[#a5e900]"
    >
      Add to today&apos;s plan
    </button>
  );
};

export default ReadButton;