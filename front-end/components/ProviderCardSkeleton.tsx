import React, { FC } from "react";

const ProviderCardSkeleton: FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 animate-pulse">
      <div className="h-32 bg-slate-200"></div>
      <div className="p-4">
        <div className="h-6 w-3/4 bg-slate-200 rounded mb-2"></div>
        <div className="h-4 w-1/4 bg-slate-200 rounded mb-4"></div>

        <div className="flex gap-4 mb-4">
          <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
          <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
        </div>

        <div className="flex gap-2">
          <div className="h-5 w-1/4 bg-slate-200 rounded-full"></div>
          <div className="h-5 w-1/3 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCardSkeleton;
