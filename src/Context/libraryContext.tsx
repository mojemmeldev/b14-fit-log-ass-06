"use client";

import { TLibrary } from "@/app/DataTypes/Type";
import React, {
  createContext,
  ReactNode,
  useState,
} from "react";

type TLibraryContext = {
  libraryPlan: TLibrary[];
  setLibraryPlan: React.Dispatch<
    React.SetStateAction<TLibrary[]>
  >;

  librarySaved: TLibrary[];
  setLibrarySaved: React.Dispatch<
    React.SetStateAction<TLibrary[]>
  >;
};

export const LibraryContext =
  createContext<TLibraryContext | null>(null);

type TLibraryProviderProps = {
  children: ReactNode;
};

const LibraryProvider = ({
  children,
}: TLibraryProviderProps) => {
  const [libraryPlan, setLibraryPlan] =
    useState<TLibrary[]>([]);

  const [librarySaved, setLibrarySaved] =
    useState<TLibrary[]>([]);

  return (
    <LibraryContext.Provider
      value={{
        libraryPlan,
        setLibraryPlan,
        librarySaved,
        setLibrarySaved,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;