import React, { FC } from "react";
import { MapPin, User, ChevronDown } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:px-8">
      <div className="flex items-center gap-2">
        <div className="bg-white text-indigo-600 font-bold text-xl rounded-lg w-10 h-10 flex items-center justify-center shadow-md">
          L
        </div>
        <h1 className="text-2xl font-bold text-white hidden sm:block">Login Lounge</h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 text-white font-semibold bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full hover:bg-black/40 transition-colors"
          aria-label="Location"
        >
          <MapPin size={16} />
          <span className="hidden md:inline">Kampala, UG</span>
          <ChevronDown size={16} />
        </button>

        <button
          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:bg-white transition-colors shadow-sm"
          aria-label="Profile"
        >
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
