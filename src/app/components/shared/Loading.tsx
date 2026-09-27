import React from 'react';

const Loading = () => {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center gap-4 bg-[#0B0D10]">
      <span className="loading loading-spinner loading-lg text-[#B6FF00]"></span>

      <p className="text-sm text-[#8B919C]">
        Loading exercises...
      </p>
    </div>
  );
};

export default Loading;