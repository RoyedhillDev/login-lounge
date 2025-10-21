import React, { FC } from "react";
import { Star, Tag, Clock } from "lucide-react";
import type { ServiceProvider } from "@/types";

type Props = {
  provider: ServiceProvider;
};

const ProviderCard: FC<Props> = ({ provider }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-slate-100 group">
      <div className="relative h-32 bg-gray-200 border-b-2 border-dashed">
        {provider.promo && (
          <div className="absolute top-3 left-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-r-full flex items-center gap-1">
            <Tag size={14} />
            <span className="truncate max-w-[10rem]">{provider.promo}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-grow">
            <h3 className="font-bold text-slate-800 text-lg truncate group-hover:text-indigo-600 transition-colors">
              {provider.name}
            </h3>
            <p className="text-sm text-slate-500 mb-2">{provider.category}</p>

            <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-slate-700">{provider.rating.toFixed(1)}</span>
                <span className="text-slate-400">({provider.reviews})</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{provider.eta}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {provider.tags?.map((tag) => (
                <span key={tag} className="text-xs font-medium bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
