"use client";

import { useState } from "react";
import { AircraftMap } from "@/components/AircraftMap";
import { AircraftList } from "@/components/AircraftList";
import { AircraftDetail } from "@/components/AircraftDetail";
import { ShipList } from "@/components/ShipList";

export default function Home() {
  const [selectedAircraft, setSelectedAircraft] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "aircraft" | "ships">("all");

  return (
    <div className="h-screen flex flex-col bg-zinc-950">
      {/* Header */}
      <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xl">🇺🇸</span>
          <h1 className="text-lg font-semibold text-white">USA Track</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-zinc-900 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                activeTab === "all"
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("aircraft")}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                activeTab === "aircraft"
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Aircraft
            </button>
            <button
              onClick={() => setActiveTab("ships")}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                activeTab === "ships"
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Ships
            </button>
          </div>
          <div className="text-zinc-400 text-sm">
            US Government Assets
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar */}
        <div className="w-72 border-r border-zinc-800 shrink-0">
          {activeTab === "ships" ? (
            <ShipList />
          ) : (
            <AircraftList
              selectedAircraft={selectedAircraft || undefined}
              onSelectAircraft={setSelectedAircraft}
            />
          )}
        </div>

        {/* Center - Map */}
        <div className="flex-1">
          <AircraftMap
            onSelectAircraft={setSelectedAircraft}
            showShips={activeTab === "all" || activeTab === "ships"}
            showAircraft={activeTab === "all" || activeTab === "aircraft"}
          />
        </div>

        {/* Right sidebar - Details */}
        <div className="w-80 border-l border-zinc-800 shrink-0">
          <AircraftDetail
            icaoHex={selectedAircraft}
            onClose={() => setSelectedAircraft(null)}
          />
        </div>
      </div>
    </div>
  );
}
