"use client";

import { TLibrary } from "../DataTypes/Type";
import PlanSaveCard from "../components/shared/PlanSaveCard";
import PlanCard from "../components/shared/PlanCard";
import { useContext, useState } from "react";
import { LibraryContext } from "@/Context/libraryContext";
import Link from "next/link";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const context = useContext(LibraryContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  if (!context) return null;

  const { libraryPlan, librarySaved, setLibraryPlan, setLibrarySaved, } = context;

  // Remove
  const handleRemovePlan = ( id: number, isSavedTab: boolean ) => {
    if (isSavedTab) {
      setLibrarySaved((prev) => prev.filter((item) => item.id !== id) );

      toast.success("Removed from saved workouts!");
    } 
    else {
      setLibraryPlan((prev) => prev.filter((item) => item.id !== id) );

      toast.success("Workout removed from today's plan!");
    }
  };

  // Active tab data
  const currentItems = activeTab === "plan" ? libraryPlan : librarySaved;

  // Dynamic Stats
  const totalExercises = currentItems.length;

  const totalMinutes = currentItems.reduce(
    (sum: number, plan: TLibrary) => sum + (Number(plan.duration) || 0), 0);

  const totalCalories = currentItems.reduce(
    (sum: number, plan: TLibrary) => sum + (Number(plan.caloriesBurned) || 0), 0);

  return (
    <main className="min-h-screen bg-[#0D0F12]">
      <div className=" mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 " >
        {/* ================= HEADER ================= */}
        <div className="mb-6 sm:mb-8">
          <h1 className=" text-xl font-black uppercase tracking-wide text-white sm:text-2xl lg:text-3xl " >
            MY PLAN
          </h1>

          <p className=" mt-1 text-xs leading-5 text-[#717684] sm:text-sm " >
            Cap of five lifts for today. Finish them,
            then load more.
          </p>

          {/* ================= STATS ================= */}
          <div className=" mt-5 grid grid-cols-1 gap-4 rounded-xl border border-[#1c1e24] bg-[#13151b] p-5 sm:mt-6 sm:grid-cols-3 sm:gap-6 sm:p-6 lg:px-10 " >
            {/* Exercises */}
            <div className="text-center sm:text-left">
              <span className="mb-2 block text-xs text-[#717684]">
                Exercises
              </span>

              <span className=" text-3xl font-black text-[#B6FF00] sm:text-4xl " >
                {totalExercises}
              </span>
            </div>

            {/* Minutes */}
            <div className="text-center sm:text-left">
              <span className="mb-2 block text-xs text-[#717684]">
                Minutes
              </span>

              <span className=" text-3xl font-black text-white sm:text-4xl " >
                {totalMinutes}
              </span>
            </div>

            {/* Calories */}
            <div className="text-center sm:text-left">
              <span className="mb-2 block text-xs text-[#717684]">
                Calories
              </span>

              <span className=" text-3xl font-black text-white sm:text-4xl " >
                {totalCalories}
              </span>
            </div>
          </div>
        </div>

        {/* ================= SORT ================= */}
        <div className=" mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end " >
          <span className="text-xs text-[#717684] sm:text-sm">
            Sort By
          </span>

          <select className=" w-full rounded-lg border border-[#1c1e24] bg-[#13151b] px-3 py-2 text-sm text-white outline-none sm:w-auto sm:py-1.5 " >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>
          </select>
        </div>

        {/* ================= TABS ================= */}
        <div className=" tabs tabs-box w-full overflow-hidden rounded-xl border border-[#1c1e24] bg-[#13151b] " >
          {/* ================= TODAY PLAN ================= */}
          <input type="radio" name="my_tabs" className=" tab text-xs sm:text-sm " aria-label="Today’s Plan" checked={activeTab === "plan"} onChange={() => setActiveTab("plan")} />

          <div className=" tab-content w-full border-t border-[#1c1e24] bg-[#0d0e12] p-3 sm:p-4 md:p-5 lg:p-6 " >
            <div className="grid gap-3 sm:gap-4">
              {libraryPlan.length > 0 ? (libraryPlan.map((plan) => (
                <div key={plan.id} className=" flex w-full min-w-0 flex-col gap-3 rounded-xl border border-[#1c1e24] bg-[#13151b] p-3 sm:p-4 lg:flex-row lg:items-center lg:justify-between " >
                  {/* Plan Card */}
                  <div className="w-full min-w-0 flex-1">
                    <PlanCard data={plan} />
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => handleRemovePlan(plan.id, false)}
                    className=" flex h-9 w-9 shrink-0 items-center justify-center self-end rounded-md text-[#717684] transition hover:bg-[#1c1e24] hover:text-red-500 lg:ml-3 lg:self-auto " title="Remove Plan" aria-label="Remove Plan" >
                    ✕
                  </button>
                </div>
              ))
              ) : (
                /* EMPTY */
                <div className=" flex min-h-[230px] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[280px] md:min-h-[320px] " >
                  <h2 className=" text-xl font-black uppercase tracking-wide text-white sm:text-2xl " >
                    NOTHING HERE YET
                  </h2>

                  <p className=" mt-2 max-w-md text-xs leading-5 text-[#7F8792] sm:text-sm " >
                    Browse the library and add a lift
                    to get today moving.
                  </p>

                  <Link href="/workouts" className=" mt-6 flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#B6FF00] px-6 text-sm font-bold text-black transition hover:bg-[#A8EC00] sm:w-auto sm:px-7 " >
                    Go to workouts
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* ================= SAVED ================= */}
          <input type="radio" name="my_tabs" className=" tab text-xs sm:text-sm " aria-label="Saved" checked={activeTab === "saved"} onChange={() => setActiveTab("saved")} />

          <div className=" tab-content w-full border-t border-[#1c1e24] bg-[#0d0e12] p-3 sm:p-4 md:p-5 lg:p-6 " >
            <div className="grid gap-3 sm:gap-4">
              {librarySaved.length > 0 ? (
                librarySaved.map((plan) => (
                  <div key={plan.id} className=" flex w-full min-w-0 flex-col gap-3 rounded-xl border border-[#1c1e24] bg-[#13151b] p-3 sm:p-4 lg:flex-row lg:items-center lg:justify-between " >
                    {/* Saved Card */}
                    <div className="w-full min-w-0 flex-1">
                      <PlanSaveCard
                        data={plan}
                      />
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemovePlan(plan.id, true)}
                      className=" flex h-9 w-9 shrink-0 items-center justify-center self-end rounded-md text-[#717684] transition hover:bg-[#1c1e24] hover:text-red-500 lg:ml-3 lg:self-auto " title="Remove Saved" aria-label="Remove Saved" >
                      ✕
                    </button>

                  </div>
                ))
              ) : (
                /* EMPTY */
                <div className=" flex min-h-[230px] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[280px] md:min-h-[320px] " >
                  <h2 className=" text-xl font-black uppercase tracking-wide text-white sm:text-2xl " >
                    NOTHING HERE YET
                  </h2>

                  <p className=" mt-2 max-w-md text-xs leading-5 text-[#7F8792] sm:text-sm " >
                    Browse the library and save a lift
                    to find it here.
                  </p>

                  <Link href="/workouts" className=" mt-6 flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#B6FF00] px-6 text-sm font-bold text-black transition hover:bg-[#A8EC00] sm:w-auto sm:px-7 " >
                    Go to workouts
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;