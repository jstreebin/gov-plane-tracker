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

interface AircraftListProps {
  selectedAircraft?: string;
  onSelectAircraft?: (icaoHex: string) => void;
  label?: string;
}

export function AircraftList({ selectedAircraft, onSelectAircraft, label = "aircraft" }: AircraftListProps) {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    async function fetchAircraft() {
      try {
        const res = await fetch("/api/aircraft");
        const data = await res.json();
        setAircraft(data);
      } catch (error) {
        console.error("Error fetching aircraft:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAircraft();
  }, []);

  const categories = [...new Set(aircraft.map((a) => a.category))].sort();

  const filteredAircraft = aircraft.filter((a) => {
    const matchesSearch =
      filter === "" ||
      a.registration.toLowerCase().includes(filter.toLowerCase()) ||
      a.type.toLowerCase().includes(filter.toLowerCase()) ||
      a.operator.toLowerCase().includes(filter.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || a.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const groupedByCategory = filteredAircraft.reduce(
    (acc, a) => {
      if (!acc[a.category]) acc[a.category] = [];
      acc[a.category].push(a);
      return acc;
    },
    {} as Record<string, Aircraft[]>
  );

  if (loading) {
    return (
      <div className="p-4 text-zinc-400">
        Loading aircraft...
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <div className="p-4 border-b border-zinc-800">
        <input
          type="text"
          placeholder="Search aircraft..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full mt-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 overflow-y-auto">
        {Object.entries(groupedByCategory).map(([category, planes]) => (
          <div key={category} className="border-b border-zinc-800">
            <div className="px-4 py-2 bg-zinc-900 text-zinc-400 text-sm font-medium sticky top-0">
              {category} ({planes.length})
            </div>
            {planes.map((plane) => (
              <button
                key={plane.id}
                onClick={() => onSelectAircraft?.(plane.icaoHex)}
                className={`w-full px-4 py-3 text-left hover:bg-zinc-800 transition-colors ${
                  selectedAircraft === plane.icaoHex
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
        ))}
      </div>

      <div className="p-4 border-t border-zinc-800 text-zinc-500 text-sm">
        {filteredAircraft.length} of {aircraft.length} {label}
      </div>
    </div>
  );
}
