import React, { FC } from "react";
import { Search } from "lucide-react";

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const HeroSection: FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="relative h-72 md:h-80 rounded-b-3xl overflow-hidden bg-indigo-600">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/80 to-indigo-600/20" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2400&auto=format&fit=crop)',
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Services On-Demand</h2>
        <p className="max-w-xl mb-8 text-indigo-200">
          From car detailing to late-night cravings, get it all with LoGin Lounge.
        </p>

        <div className="w-full max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder='Search for "car wash", "pizza"...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white text-slate-800 border border-transparent rounded-full focus:ring-4 focus:ring-indigo-300 focus:outline-none transition-shadow shadow-lg"
              aria-label="Search services"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
