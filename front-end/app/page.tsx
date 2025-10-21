"use client";

import { useState, useEffect, useMemo } from "react";
import { Bike, Package, Tag } from "lucide-react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProviderCard from "@/components/ProviderCard";
import ProviderCardSkeleton from "@/components/ProviderCardSkeleton";
import BottomNavBar from "@/components/BottomNavBar";

import { serviceProviders } from "@/data/serviceProviders";
import { serviceCategories } from "@/data/serviceCategories";
import { promotions } from "@/data/promotions";
import { ServiceCategory } from "@/types";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory["id"]>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceMode, setServiceMode] = useState<"delivery" | "pickup">("delivery");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredProviders = useMemo(() => {
    return serviceProviders
      .filter((p) => activeCategory === "all" || p.category.toLowerCase() === activeCategory)
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [activeCategory, searchTerm]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Header />
      <main className="pb-24 md:pb-8">
        <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-12">
          {/* Promotions */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Special Promotions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((promo) => (
                <div
                  key={promo.id}
                  className="bg-indigo-50 rounded-2xl p-4 flex gap-4 items-center border border-indigo-100 hover:shadow-lg hover:border-indigo-200 transition-all"
                >
                  <div className="bg-white rounded-xl p-3 text-indigo-500">
                    <Tag size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{promo.title}</h4>
                    <p className="text-sm text-slate-600">{promo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Explore Services</h3>
              <div className="bg-slate-200 p-1 rounded-full flex items-center self-start">
                <button
                  onClick={() => setServiceMode("delivery")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    serviceMode === "delivery" ? "bg-white text-slate-800 shadow" : "text-slate-500"
                  }`}
                >
                  <Bike size={16} className="inline mr-2" /> Delivery
                </button>
                <button
                  onClick={() => setServiceMode("pickup")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    serviceMode === "pickup" ? "bg-white text-slate-800 shadow" : "text-slate-500"
                  }`}
                >
                  <Package size={16} className="inline mr-2" /> Pickup
                </button>
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 pb-4 overflow-x-auto -mx-4 px-4">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-slate-600 border-transparent hover:bg-slate-100"
                  }`}
                >
                  <cat.icon className="w-5 h-5" />
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => <ProviderCardSkeleton key={i} />)
              ) : filteredProviders.length > 0 ? (
                filteredProviders.map((provider) => <ProviderCard key={provider.id} provider={provider} />)
              ) : (
                <div className="text-center py-16 px-6 bg-white rounded-2xl border border-slate-200 md:col-span-2 lg:col-span-3">
                  <p className="text-slate-600 font-medium text-lg">No providers found.</p>
                  <p className="text-slate-400 mt-1">Try adjusting your search or category.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <BottomNavBar />
    </div>
  );
}
