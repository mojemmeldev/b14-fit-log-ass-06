"use client";

import { TLibrary } from "../DataTypes/Type";
import PlanSaveCard from "../components/shared/PlanSaveCard";
import PlanCard from "../components/shared/PlanCard";
import { useContext, useState } from "react";
import { LibraryContext } from "@/Context/libraryContext";
import Link from "next/link";

const MyPlanPage = () => {
    const context = useContext(LibraryContext);

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    if (!context) return null;

    const { libraryPlan, librarySaved, setLibraryPlan, setLibrarySaved } = context;

    // Remove
    const handleRemovePlan = (
        id: number,
        isSavedTab: boolean
    ) => {
        if (isSavedTab) {
            setLibrarySaved((prev) =>
                prev.filter((item) => item.id !== id)
            );
        } else {
            setLibraryPlan((prev) =>
                prev.filter((item) => item.id !== id)
            );
        }
    };

    // কোন tab active তার data
    const currentItems =
        activeTab === "plan"
            ? libraryPlan
            : librarySaved;

    // Dynamic Stats
    const totalExercises = currentItems.length;

    const totalMinutes = currentItems.reduce(
        (sum: number, plan: TLibrary) =>
            sum + (Number(plan.duration) || 0),
        0
    );

    const totalCalories = currentItems.reduce(
        (sum: number, plan: TLibrary) =>
            sum + (Number(plan.caloriesBurned) || 0),
        0
    );

    return (
        <div className="container mx-auto">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-black uppercase tracking-wide text-white">
                    MY PLAN
                </h1>

                <p className="mt-1 text-sm text-[#717684]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-6 rounded-xl border border-[#1c1e24] bg-[#13151b] p-6 px-10 max-[600px]:grid-cols-1">

                    <div>
                        <span className="mb-2 block text-xs text-[#717684]">
                            Exercises
                        </span>

                        <span className="text-4xl font-black text-[#a3e635]">
                            {totalExercises}
                        </span>
                    </div>

                    <div>
                        <span className="mb-2 block text-xs text-[#717684]">
                            Minutes
                        </span>

                        <span className="text-4xl font-black text-white">
                            {totalMinutes}
                        </span>
                    </div>

                    <div>
                        <span className="mb-2 block text-xs text-[#717684]">
                            Calories
                        </span>

                        <span className="text-4xl font-black text-white">
                            {totalCalories}
                        </span>
                    </div>

                </div>
            </div>

            {/* Sort */}
            <div className="mb-4 flex items-center justify-end gap-2">
                <span className="text-sm text-[#717684]">
                    Sort By
                </span>

                <select className="rounded-lg border border-[#1c1e24] bg-[#13151b] px-3 py-1.5 text-sm text-white">
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                </select>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-box overflow-hidden rounded-xl border border-[#1c1e24] bg-[#13151b]">

                {/* Today's Plan */}
                <input
                    type="radio"
                    name="my_tabs"
                    className="tab"
                    aria-label="Today’s Plan"
                    checked={activeTab === "plan"}
                    onChange={() => setActiveTab("plan")}
                />

                <div className="tab-content border-t border-[#1c1e24] bg-[#0d0e12] p-6">
                    <div className="grid gap-4">

                        {libraryPlan.length > 0 ? (
                            libraryPlan.map((plan) => (
                                <div
                                    key={plan.id}
                                    className="flex items-center justify-between rounded-xl border border-[#1c1e24] bg-[#13151b] p-4"
                                >
                                    <div className="flex-1">
                                        <PlanCard data={plan} />
                                    </div>

                                    <button
                                        onClick={() =>
                                            handleRemovePlan(plan.id, false)
                                        }
                                        className="ml-4 rounded-md p-1 text-[#717684] transition hover:bg-[#1c1e24] hover:text-red-500"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="flex min-h-[320px] flex-col items-center justify-center   bg-[#0D0F12] px-6 text-center">
                                <h2 className="text-2xl font-black uppercase tracking-wide text-white">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mt-2 text-sm text-[#7F8792]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/workouts"
                                    className="mt-7 rounded-full bg-[#B6FF00] px-7 py-3 text-sm font-bold text-black shadow-[0_8px_20px_rgba(182,255,0,0.20)] transition hover:bg-[#A8EC00]"
                                >
                                    Go to workouts
                                </Link>
                            </div>
                        )}

                    </div>
                </div>

                {/* Saved */}
                <input
                    type="radio"
                    name="my_tabs"
                    className="tab"
                    aria-label="Saved"
                    checked={activeTab === "saved"}
                    onChange={() => setActiveTab("saved")}
                />

                <div className="tab-content border-t border-[#1c1e24] bg-[#0d0e12] p-6">
                    <div className="grid gap-4">

                        {librarySaved.length > 0 ? (
                            librarySaved.map((plan) => (
                                <div
                                    key={plan.id}
                                    className="flex items-center justify-between rounded-xl border border-[#1c1e24] bg-[#13151b] p-4"
                                >
                                    <div className="flex-1">
                                        <PlanSaveCard data={plan} />
                                    </div>

                                    <button
                                        onClick={() =>
                                            handleRemovePlan(plan.id, true)
                                        }
                                        className="ml-4 rounded-md p-1 text-[#717684] transition hover:bg-[#1c1e24] hover:text-red-500"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="flex min-h-[320px] flex-col items-center justify-center   bg-[#0D0F12] px-6 text-center">
                                <h2 className="text-2xl font-black uppercase tracking-wide text-white">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mt-2 text-sm text-[#7F8792]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/workouts"
                                    className="mt-7 rounded-full bg-[#B6FF00] px-7 py-3 text-sm font-bold text-black shadow-[0_8px_20px_rgba(182,255,0,0.20)] transition hover:bg-[#A8EC00]"
                                >
                                    Go to workouts
                                </Link>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPlanPage;