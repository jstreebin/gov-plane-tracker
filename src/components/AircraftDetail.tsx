"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

interface Aircraft {
  id: string;
  icaoHex: string;
  registration: string;
  operator: string;
  type: string;
  icaoType: string;
  category: string;
  tags: string[];
}

interface Position {
  id: string;
  latitude: number;
  longitude: number;
  altitude: number | null;
  groundSpeed: number | null;
  heading: number | null;
  timestamp: string;
  onGround: boolean;
}

interface Flight {
  id: string;
  callsign: string | null;
  startTime: string;
  endTime: string | null;
  origin: string | null;
  destination: string | null;
}

interface AircraftDetailProps {
  icaoHex: string | null;
  onClose?: () => void;
}

export function AircraftDetail({ icaoHex, onClose }: AircraftDetailProps) {
  const [aircraft, setAircraft] = useState<Aircraft | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!icaoHex) {
      setAircraft(null);
      setPositions([]);
      setFlights([]);
      return;
    }

    async function fetchHistory() {
      setLoading(true);
      try {
        const res = await fetch(`/api/history/${icaoHex}`);
        const data = await res.json();
        setAircraft(data.aircraft);
        setPositions(data.positions || []);
        setFlights(data.flights || []);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, [icaoHex]);

  if (!icaoHex) {
    return (
      <div className="h-full flex items-center justify-center text-zinc-500 p-4">
        Select an aircraft to view details
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center text-zinc-400 p-4">
        Loading...
      </div>
    );
  }

  if (!aircraft) {
    return (
      <div className="h-full flex items-center justify-center text-zinc-500 p-4">
        Aircraft not found
      </div>
    );
  }

  const latestPosition = positions[0];

  return (
    <div className="h-full overflow-y-auto bg-zinc-950">
      <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-4 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-white">{aircraft.registration}</h2>
          <p className="text-zinc-400">{aircraft.type}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1"
          >
            ✕
          </button>
        )}
      </div>

      <div className="p-4 space-y-6">
        {/* Aircraft Info */}
        <section>
          <h3 className="text-sm font-medium text-zinc-400 mb-2">Aircraft Info</h3>
          <div className="bg-zinc-900 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-zinc-400">ICAO Hex</span>
              <span className="text-white font-mono">{aircraft.icaoHex}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Operator</span>
              <span className="text-white">{aircraft.operator}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Category</span>
              <span className="text-white">{aircraft.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Type Code</span>
              <span className="text-white font-mono">{aircraft.icaoType}</span>
            </div>
            {aircraft.tags.length > 0 && (
              <div className="pt-2">
                <span className="text-zinc-400 block mb-1">Tags</span>
                <div className="flex flex-wrap gap-1">
                  {aircraft.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-zinc-800 text-zinc-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Current Position */}
        {latestPosition && (
          <section>
            <h3 className="text-sm font-medium text-zinc-400 mb-2">Last Known Position</h3>
            <div className="bg-zinc-900 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-400">Location</span>
                <span className="text-white font-mono">
                  {latestPosition.latitude.toFixed(4)}, {latestPosition.longitude.toFixed(4)}
                </span>
              </div>
              {latestPosition.altitude && (
                <div className="flex justify-between">
                  <span className="text-zinc-400">Altitude</span>
                  <span className="text-white">
                    {latestPosition.altitude.toLocaleString()} ft
                  </span>
                </div>
              )}
              {latestPosition.groundSpeed && (
                <div className="flex justify-between">
                  <span className="text-zinc-400">Ground Speed</span>
                  <span className="text-white">{latestPosition.groundSpeed} kts</span>
                </div>
              )}
              {latestPosition.heading && (
                <div className="flex justify-between">
                  <span className="text-zinc-400">Heading</span>
                  <span className="text-white">{latestPosition.heading}°</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-zinc-400">Status</span>
                <span className={latestPosition.onGround ? "text-yellow-500" : "text-green-500"}>
                  {latestPosition.onGround ? "On Ground" : "Airborne"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Updated</span>
                <span className="text-zinc-300">
                  {formatDistanceToNow(new Date(latestPosition.timestamp), { addSuffix: true })}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Position History */}
        <section>
          <h3 className="text-sm font-medium text-zinc-400 mb-2">
            Position History ({positions.length} records)
          </h3>
          {positions.length === 0 ? (
            <p className="text-zinc-500 text-sm">No position data recorded yet</p>
          ) : (
            <div className="bg-zinc-900 rounded-lg divide-y divide-zinc-800 max-h-64 overflow-y-auto">
              {positions.slice(0, 20).map((pos) => (
                <div key={pos.id} className="p-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white font-mono">
                      {pos.latitude.toFixed(4)}, {pos.longitude.toFixed(4)}
                    </span>
                    <span className="text-zinc-500">
                      {pos.altitude ? `${pos.altitude.toLocaleString()} ft` : "N/A"}
                    </span>
                  </div>
                  <div className="text-zinc-500 text-xs mt-1">
                    {new Date(pos.timestamp).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Flight History */}
        <section>
          <h3 className="text-sm font-medium text-zinc-400 mb-2">
            Flight History ({flights.length} flights)
          </h3>
          {flights.length === 0 ? (
            <p className="text-zinc-500 text-sm">No flights recorded yet</p>
          ) : (
            <div className="bg-zinc-900 rounded-lg divide-y divide-zinc-800">
              {flights.map((flight) => (
                <div key={flight.id} className="p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-white font-medium">
                        {flight.callsign || "Unknown"}
                      </span>
                      {(flight.origin || flight.destination) && (
                        <p className="text-zinc-400 text-sm">
                          {flight.origin || "?"} → {flight.destination || "?"}
                        </p>
                      )}
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        flight.endTime
                          ? "bg-zinc-800 text-zinc-400"
                          : "bg-green-900 text-green-300"
                      }`}
                    >
                      {flight.endTime ? "Completed" : "Active"}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-xs mt-1">
                    {new Date(flight.startTime).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
