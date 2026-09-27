import Link from 'next/link';
import React from 'react';
import PlanCard from '../shared/PlanCard';

const TodaysPlanTabsSection = () => {
    return (
        <div>
            <input type="radio" name="my_tabs" className="tab" aria-label="Today’s Plan" checked={activeTab === "plan"} onChange={() => setActiveTab("plan")} />

            <div className="tab-content border-t border-[#1c1e24] bg-[#0d0e12] p-6">
                <div className="grid gap-4">

                    {libraryPlan.length > 0 ? (
                        libraryPlan.map((plan) => (
                            <div key={plan.id} className="flex items-center justify-between rounded-xl border border-[#1c1e24] bg-[#13151b] p-4" >
                                <div className="flex-1">
                                    <PlanCard data={plan} />
                                </div>

                                <button
                                    onClick={() => handleRemovePlan(plan.id, false) } className="ml-4 rounded-md p-1 text-[#717684] transition hover:bg-[#1c1e24] hover:text-red-500" >
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
    );
};

export default TodaysPlanTabsSection;