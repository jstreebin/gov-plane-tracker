"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";

// Dynamically import Leaflet components (they require window)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface Aircraft {
  id: string;
  icaoHex: string;
  registration: string;
  operator: string;
  type: string;
  category: string;
  tags: string[];
}

interface Position {
  hex: string;
  flight?: string;
  lat?: number;
  lon?: number;
  alt_baro?: number;
  gs?: number;
  track?: number;
  aircraft?: Aircraft;
}

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

interface AircraftMapProps {
  onSelectAircraft?: (icaoHex: string) => void;
  showShips?: boolean;
}

export function AircraftMap({ onSelectAircraft, showShips = false }: AircraftMapProps) {
  const [positions, setPositions] = useState<Position[]>([]);
  const [ships, setShips] = useState<Ship[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  const fetchPositions = useCallback(async () => {
    try {
      const res = await fetch("/api/positions");
      const data = await res.json();
      if (data.positions) {
        setPositions(data.positions);
        setLastUpdate(new Date().toLocaleTimeString());
      }
    } catch (error) {
      console.error("Error fetching positions:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchShips = useCallback(async () => {
    try {
      const res = await fetch("/api/ships");
      const data = await res.json();
      setShips(data);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Error fetching ships:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    if (showShips) {
      fetchShips();
    } else {
      fetchPositions();
      // Refresh aircraft every 30 seconds
      const interval = setInterval(fetchPositions, 30000);
      return () => clearInterval(interval);
    }
  }, [fetchPositions, fetchShips, showShips]);

  if (!mounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-zinc-900">
        <p className="text-zinc-400">Loading map...</p>
      </div>
    );
  }

  const airbornePositions = positions.filter((p) => p.lat && p.lon);
  const shipsWithPosition = ships.filter((s) => s.latitude && s.longitude);

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[39.8283, -98.5795]} // Center of US
        zoom={4}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {!showShips && airbornePositions.map((pos) => (
          <Marker
            key={pos.hex}
            position={[pos.lat!, pos.lon!]}
            eventHandlers={{
              click: () => onSelectAircraft?.(pos.hex),
            }}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-bold">
                  {pos.aircraft?.type || pos.hex}
                </p>
                <p>{pos.aircraft?.registration || "Unknown"}</p>
                <p className="text-zinc-600">{pos.aircraft?.category}</p>
                {pos.flight && <p>Callsign: {pos.flight}</p>}
                {pos.alt_baro && (
                  <p>Altitude: {pos.alt_baro.toLocaleString()} ft</p>
                )}
                {pos.gs && <p>Speed: {pos.gs} kts</p>}
              </div>
            </Popup>
          </Marker>
        ))}
        {showShips && shipsWithPosition.map((ship) => (
          <Marker
            key={ship.hullNumber}
            position={[ship.latitude!, ship.longitude!]}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-bold">{ship.name}</p>
                <p>{ship.hullNumber}</p>
                <p className="text-zinc-600">{ship.class}</p>
                <p>{ship.type}</p>
                <p className="mt-1">
                  <span className="font-medium">Status:</span> {ship.status}
                </p>
                <p>
                  <span className="font-medium">Region:</span> {ship.region}
                </p>
                {ship.homePort && (
                  <p>
                    <span className="font-medium">Home Port:</span> {ship.homePort}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Status overlay */}
      <div className="absolute top-4 right-4 bg-zinc-900/90 text-white px-4 py-2 rounded-lg text-sm z-[1000]">
        <p>
          {loading
            ? "Loading..."
            : showShips
              ? `${shipsWithPosition.length} ships visible`
              : `${airbornePositions.length} aircraft visible`}
        </p>
        {lastUpdate && <p className="text-zinc-400 text-xs">Updated: {lastUpdate}</p>}
      </div>
    </div>
  );
}
