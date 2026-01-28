"use client";

import { useEffect, useState } from "react";

interface Aircraft {
  id: string;
  icaoHex: string;
  registration: string;
  operator: string;
  type: string;
  category: string;
  tags: string[];
}

interface Ship {
  id: string;
  hullNumber: string;
  name: string;
  class: string;
  type: string;
  homePort: string;
  status: string;
  source: string;
}

type Asset =
  | { kind: "aircraft"; data: Aircraft }
  | { kind: "ship"; data: Ship };

interface AssetListProps {
  selectedAsset?: string;
  onSelectAircraft?: (icaoHex: string) => void;
}

export function AssetList({ selectedAsset, onSelectAircraft }: AssetListProps) {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [ships, setShips] = useState<Ship[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "aircraft" | "ships">("all");

  useEffect(() => {
    async function fetchAssets() {
      try {
        const [aircraftRes, shipsRes] = await Promise.all([
          fetch("/api/aircraft"),
          fetch("/api/ships"),
        ]);
        const [aircraftData, shipsData] = await Promise.all([
          aircraftRes.json(),
          shipsRes.json(),
        ]);
        setAircraft(aircraftData);
        setShips(shipsData);
      } catch (error) {
        console.error("Error fetching assets:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAssets();
  }, []);

  const filteredAircraft = aircraft.filter((a) => {
    if (typeFilter === "ships") return false;
    const matchesSearch =
      filter === "" ||
      a.registration.toLowerCase().includes(filter.toLowerCase()) ||
      a.type.toLowerCase().includes(filter.toLowerCase()) ||
      a.operator.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch;
  });

  const filteredShips = ships.filter((s) => {
    if (typeFilter === "aircraft") return false;
    const matchesSearch =
      filter === "" ||
      s.name.toLowerCase().includes(filter.toLowerCase()) ||
      s.hullNumber.toLowerCase().includes(filter.toLowerCase()) ||
      s.type.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch;
  });

  const totalFiltered = filteredAircraft.length + filteredShips.length;
  const totalAssets = aircraft.length + ships.length;

  if (loading) {
    return (
      <div className="p-4 text-zinc-400">
        Loading assets...
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <div className="p-4 border-b border-zinc-800">
        <input
          type="text"
          placeholder="Search assets..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value as "all" | "aircraft" | "ships")}
          className="w-full mt-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
        >
          <option value="all">All Types</option>
          <option value="aircraft">Aircraft Only</option>
          <option value="ships">Ships Only</option>
        </select>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Aircraft Section */}
        {filteredAircraft.length > 0 && (
          <div className="border-b border-zinc-800">
            <div className="px-4 py-2 bg-zinc-900 text-zinc-400 text-sm font-medium sticky top-0">
              Aircraft ({filteredAircraft.length})
            </div>
            {filteredAircraft.map((plane) => (
              <button
                key={plane.id}
                onClick={() => onSelectAircraft?.(plane.icaoHex)}
                className={`w-full px-4 py-3 text-left hover:bg-zinc-800 transition-colors ${
                  selectedAsset === plane.icaoHex
                    ? "bg-zinc-800 border-l-2 border-blue-500"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{plane.registration}</p>
                    <p className="text-zinc-400 text-sm">{plane.type}</p>
                  </div>
                  <span className="text-zinc-500 text-xs">{plane.icaoHex}</span>
                </div>
                <p className="text-zinc-500 text-xs mt-1">{plane.operator}</p>
              </button>
            ))}
          </div>
        )}

        {/* Ships Section */}
        {filteredShips.length > 0 && (
          <div className="border-b border-zinc-800">
            <div className="px-4 py-2 bg-zinc-900 text-zinc-400 text-sm font-medium sticky top-0">
              Ships ({filteredShips.length})
            </div>
            {filteredShips.map((ship) => (
              <div
                key={ship.id}
                className="w-full px-4 py-3 text-left hover:bg-zinc-800 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{ship.name}</p>
                    <p className="text-zinc-400 text-sm">{ship.class}</p>
                  </div>
                  <span className="text-zinc-500 text-xs">{ship.hullNumber}</span>
                </div>
                <p className="text-zinc-500 text-xs mt-1">{ship.type}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-zinc-800 text-zinc-500 text-sm">
        {totalFiltered} of {totalAssets} assets
      </div>
    </div>
  );
}
