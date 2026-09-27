import React from 'react';

export default function MyPlan() {
  // আপনি চাইলে এই ডাটাগুলো পরবর্তীতে API থেকে নিয়ে এসে dynamic করতে পারেন
  const stats = [
    { label: 'Exercises', value: '2', isHighlight: true },
    { label: 'Minutes', value: '23', isHighlight: false },
    { label: 'Calories', value: '190', isHighlight: false },
  ];

  return (
    <div className="w-full max-w-4xl p-6 bg-[#0d0e12] text-white">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-black tracking-wide uppercase">MY PLAN</h1>
        <p className="text-sm text-[#717684] mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Card Container */}
      <div className="grid grid-cols-3 gap-6 p-6 px-10 bg-[#13151b] border border-[#1c1e24] rounded-xl max-[600px]:grid-cols-1 max-[600px]:gap-6 max-[600px]:p-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col justify-center">
            <span className="text-xs text-[#717684] mb-2">{stat.label}</span>
            <span
              className={`text-4xl font-bold ${
                stat.isHighlight ? 'text-[#a3e635]' : 'text-white'
              }`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
