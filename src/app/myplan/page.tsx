"use client"
import { TLibrary } from '../DataTypes/Type';
import PlanSaveCard from '../components/shared/PlanSaveCard';
import PlanCard from '../components/shared/PlanCard';
import { useContext, useState } from 'react';
import { LibraryContext } from '@/Context/libraryContext';

const MyPlanPage = () => {
    const { libraryPlan: contextPlan, librarySaved: contextSaved } = useContext(LibraryContext) ?? {
        libraryPlan: [],
        librarySaved: [],
    };

    // Context data is derived directly; local state only tracks user removals.
    const [removedPlanIds, setRemovedPlanIds] = useState<number[]>([]);
    const [removedSavedIds, setRemovedSavedIds] = useState<number[]>([]);
    const plans = (contextPlan || []).filter(plan => !removedPlanIds.includes(plan.id));
    const savedPlans = (contextSaved || []).filter(plan => !removedSavedIds.includes(plan.id));

    // ২. রিমুভ ফাংশন (ক্রস আইকনে ক্লিক করলে লিস্ট থেকে বাদ যাবে)
    const handleRemovePlan = (id: number, isSavedTab: boolean) => {
        if (isSavedTab) {
            setRemovedSavedIds(prev => prev.includes(id) ? prev : [...prev, id]);
        } else {
            setRemovedPlanIds(prev => prev.includes(id) ? prev : [...prev, id]);
        }
    };

    // ৩. সম্পূর্ণ ডাইনামিক ক্যালকুলেশন
    const totalExercises = plans.length; 
    const totalMinutes = plans.reduce((sum: number, plan: TLibrary) => {
        return sum + (Number(plan.duration) || 0); 
    }, 0);
    const totalCalories = plans.reduce((sum: number, plan: TLibrary) => {
        return sum + (Number(plan.caloriesBurned) || 0);
    }, 0);

    return (
        <div className="container mx-auto">
            
            {/* মেইন হেডার এবং কার্ড সেকশন */}
            <div className="mb-8">
                <h1 className="text-2xl font-black tracking-wide uppercase text-white">MY PLAN</h1>
                <p className="text-sm text-[#717684] mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                {/* স্ট্যাটস কার্ড কন্টেইনার */}
                <div className="grid grid-cols-3 gap-6 p-6 px-10 mt-6 bg-[#13151b] border border-[#1c1e24] rounded-xl max-[600px]:grid-cols-1 max-[600px]:gap-6 max-[600px]:p-6">
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-[#717684] mb-2 font-medium">Exercises</span>
                        <span className="text-4xl font-black text-[#a3e635]">{totalExercises}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-[#717684] mb-2 font-medium">Minutes</span>
                        <span className="text-4xl font-black text-white">{totalMinutes}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs text-[#717684] mb-2 font-medium">Calories</span>
                        <span className="text-4xl font-black text-white">{totalCalories}</span>
                    </div>
                </div>
            </div>

            {/* --- ইমেজের মতো Sort By UI সেকশন --- */}
            <div className="flex justify-end items-center gap-2 mb-4 pr-1">
                <span className="text-sm text-[#717684] font-medium">Sort By</span>
                <div className="relative">
                    <select 
                        defaultValue="duration"
                        className="appearance-none bg-[#13151b] text-white border border-[#1c1e24] text-sm rounded-lg pl-3 pr-8 py-1.5 focus:outline-none cursor-pointer hover:bg-[#1c1e24] transition-colors"
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                    </select>
                    {/* কাস্টম ডাউন অ্যারো আইকন */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-[#717684]">
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ট্যাবস সেকশন */}
            <div>
                <div className="tabs tabs-box bg-[#13151b] border border-[#1c1e24] rounded-xl overflow-hidden">
                    
                    {/* Today's Plan Tab */}
                    <input 
                        type="radio" 
                        name="my_tabs_6" 
                        className="tab text-white bg-transparent border-none checked:bg-[#1c1e24]" 
                        aria-label="Today’s Plan" 
                        defaultChecked 
                    />
                    <div className="tab-content bg-[#0d0e12] border-t border-[#1c1e24] p-6 text-white">
                        <div className="grid grid-cols-1 gap-4">
                            {plans.length > 0 ? (
                                plans.map((plan: TLibrary) => (
                                    /* কার্ড এবং ক্রস আইকনের হরিজন্টাল লেআউট */
                                    <div key={plan.id} className="flex items-center justify-between bg-[#13151b] p-4 rounded-xl border border-[#1c1e24]">
                                        <div className="flex-1">
                                            <PlanCard data={plan} />
                                        </div>
                                        {/* ইমেজের মতো ক্রস (X) রিমুভ বাটন */}
                                        <button 
                                            onClick={() => handleRemovePlan(plan.id, false)}
                                            className="text-[#717684] hover:text-red-500 ml-4 p-1 rounded-md hover:bg-[#1c1e24] transition-all"
                                            title="Remove Plan"
                                        >
                                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-[#717684]">No Added Plan</p>
                            )}
                        </div>
                    </div>

                    {/* Saved Tab */}
                    <input 
                        type="radio" 
                        name="my_tabs_6" 
                        className="tab text-white bg-transparent border-none checked:bg-[#1c1e24]" 
                        aria-label="Saved" 
                    />
                    <div className="tab-content bg-[#0d0e12] border-t border-[#1c1e24] p-6 text-white">
                        <div className="grid grid-cols-1 gap-4">
                            {savedPlans.length > 0 ? (
                                savedPlans.map((plan: TLibrary) => (
                                    <div key={plan.id} className="flex items-center justify-between bg-[#13151b] p-4 rounded-xl border border-[#1c1e24]">
                                        <div className="flex-1">
                                            <PlanSaveCard data={plan} />
                                        </div>
                                        {/* ইমেজের মতো ক্রস (X) রিমুভ বাটন */}
                                        <button 
                                            onClick={() => handleRemovePlan(plan.id, true)}
                                            className="text-[#717684] hover:text-red-500 ml-4 p-1 rounded-md hover:bg-[#1c1e24] transition-all"
                                            title="Remove Saved"
                                        >
                                            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-[#717684]">No Saved</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;
