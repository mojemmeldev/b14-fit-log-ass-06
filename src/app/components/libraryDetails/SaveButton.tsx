"use client";

import React, { useContext } from "react";
import { TLibrary } from "@/app/DataTypes/Type";
import { LibraryContext } from "@/Context/libraryContext";
import { toast } from "react-toastify";

type TReadButtonProps = {
  data: TLibrary;
};

const SavedButton = ({ data }: TReadButtonProps) => {
  const context = useContext(LibraryContext);

  if (!context) return null;

  const { librarySaved, setLibrarySaved } = context;

  const handleSaved = () => {
    const alreadySaved = librarySaved.some(
      (item) => item.id === data.id
    );

    if (alreadySaved) {
      toast.warning("Already saved!");
      return;
    }

    setLibrarySaved((prev) => [...prev, data]);

    toast.success("Saved for later!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <button
      onClick={handleSaved}
      className="btn border-none bg-[#B6FF00] px-6 text-black hover:bg-[#a5e900]"
    >
      Save for later
    </button>
  );
};

export default SavedButton;