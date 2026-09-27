
"use client";

import React, { useContext } from "react";

import { TLibrary } from "@/app/DataTypes/Type";
import { LibraryContext } from "@/Context/libraryContext";
import { toast } from "react-toastify";

type TReadButtonProps = {
  data: TLibrary;
};

const SavedButton = ({ data }: TReadButtonProps) => {
  const { librarySaved, setLibrarySaved } = useContext(LibraryContext);



  const handleSaved = () => {

    console.log(data, "saved");


    setLibrarySaved([...librarySaved, data]);
    toast.success('Saved plan')
  };

  return (
    <button
      onClick={() => handleSaved()}
      className="btn border-none bg-[#B6FF00] px-6 text-black hover:bg-[#a5e900]"
    >
      Save for later
    </button>
  );
};

export default SavedButton;