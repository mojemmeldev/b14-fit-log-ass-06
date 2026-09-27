"use client";

import React, { useContext } from "react";
import { TLibrary } from "@/app/DataTypes/Type";
import { LibraryContext } from "@/Context/libraryContext";
import { toast, Bounce } from "react-toastify";

type TReadButtonProps = {
  data: TLibrary;
};

const ReadButton = ({ data }: TReadButtonProps) => {
  const context = useContext(LibraryContext);

  if (!context) return null;

  const { libraryPlan, setLibraryPlan } = context;

  const handleAddPlan = () => {
    const alreadyAdded = libraryPlan.some(
      (item) => item.id === data.id
    );

    if (alreadyAdded) {
      toast.warning("Already added to plan!");
      return;
    }

    setLibraryPlan((prev) => [...prev, data]);

    toast.success("Successfully added to plan!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={handleAddPlan}
      className="btn border-none bg-[#B6FF00] px-6 text-black hover:bg-[#a5e900]"
    >
      Add to today&apos;s plan
    </button>
  );
};

export default ReadButton;