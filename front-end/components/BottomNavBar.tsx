import React, { FC } from "react";
import { Home, ListOrdered, Settings } from "lucide-react";

const BottomNavBar: FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 md:hidden z-30">
      <div className="flex justify-around max-w-md mx-auto">
        <button className="flex flex-col items-center gap-1 p-3 text-indigo-600">
          <Home size={24} />
          <span className="text-xs font-bold">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 p-3 text-slate-500 hover:text-indigo-600 transition-colors">
          <ListOrdered size={24} />
          <span className="text-xs">Orders</span>
        </button>

        <button className="flex flex-col items-center gap-1 p-3 text-slate-500 hover:text-indigo-600 transition-colors">
          <Settings size={24} />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavBar;
