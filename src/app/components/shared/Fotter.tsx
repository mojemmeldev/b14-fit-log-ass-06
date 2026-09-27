import Image from "next/image";
import React from "react";
import Flogo from "@/assets/logo.png";

const Fotter = () => {
  return (
    <footer className="border-t border-[#22262D] bg-[#0B0D10]">
      <div className="container mx-auto flex min-h-[105px] flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:py-0">

        <div className="flex items-center gap-3">
          <Image src={Flogo} alt="FitLog Logo" width={24} height={24} className="object-contain" />

          <span className="text-[18px] font-black tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-sm text-[#7F8792] md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Fotter;