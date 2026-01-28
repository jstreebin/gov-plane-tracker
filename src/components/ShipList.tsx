"use client";

import { useEffect, useState } from "react";

interface Ship {
  id: string;
  hullNumber: string;
  name: string;
  class: string;
  type: string;
  homePort: string | null;
  status: string;
  latitude: number | null;
  longitude: number | null;
  region: string | null;
}

interface ShipListProps {
  selectedShip?: string;
  onSelectShip?: (hullNumber: string) => void;
}

export function ShipList({ selectedShip, onSelectShip }: ShipListProps) {
  const [ships, setShips] = useState<Ship[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  useEffect(() => {
    async function fetchShips() {
      try {
        const res = await fetch("/api/ships");
        const data = await res.json();
        setShips(data);
      } catch (error) {
        console.error("Error fetching ships:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchShips();
  }, []);

  const types = [...new Set(ships.map((s) => s.type))].sort();

  const filteredShips = ships.filter((s) => {
    const matchesSearch =
      filter === "" ||
      s.name.toLowerCase().includes(filter.toLowerCase()) ||
      s.hullNumber.toLowerCase().includes(filter.toLowerCase()) ||
      s.class.toLowerCase().includes(filter.toLowerCase());

    const matchesType = typeFilter === "all" || s.type === typeFilter;

    return matchesSearch && matchesType;
  });

  const groupedByType = filteredShips.reduce(
    (acc, s) => {
      if (!acc[s.type]) acc[s.type] = [];
      acc[s.type].push(s);
      return acc;
    },
    {} as Record<string, Ship[]>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Deployed":
        return "text-green-400";
      case "Forward Deployed":
        return "text-blue-400";
      case "Active":
        return "text-zinc-300";
      case "Maintenance":
        return "text-yellow-400";
      default:
        return "text-zinc-500";
    }
  };

  if (loading) {
    return (
      <div className="p-4 text-zinc-400">
        Loading ships...
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <div className="p-4 border-b border-zinc-800">
        <input
          type="text"
          placeholder="Search ships..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="w-full mt-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
        >
          <option value="all">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 overflow-y-auto">
        {Object.entries(groupedByType).map(([type, typeShips]) => (
          <div key={type} className="border-b border-zinc-800">
            <div className="px-4 py-2 bg-zinc-900 text-zinc-400 text-sm font-medium sticky top-0">
              {type} ({typeShips.length})
            </div>
            {typeShips.map((ship) => (
              <button
                key={ship.id}
                onClick={() => onSelectShip?.(ship.hullNumber)}
                className={`w-full px-4 py-3 text-left hover:bg-zinc-800 transition-colors ${
                  selectedShip === ship.hullNumber
                    ? "bg-zinc-800 border-l-2 border-blue-500"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{ship.name}</p>
                    <p className="text-zinc-400 text-sm">{ship.class}</p>
                  </div>
                  <span className="text-zinc-500 text-xs">{ship.hullNumber}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-zinc-500 text-xs">{ship.region}</p>
                  <span className={`text-xs ${getStatusColor(ship.status)}`}>
                    {ship.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-800 text-zinc-500 text-sm">
        {filteredShips.length} of {ships.length} ships
      </div>
    </div>
  );
}
