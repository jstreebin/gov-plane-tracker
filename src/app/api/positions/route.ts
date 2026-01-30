import { NextResponse } from "next/server";
import { fetchAllTrackedAircraft, ADSBPosition } from "@/lib/adsb";
import { AIRCRAFT } from "@/lib/data";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const hexCodes = AIRCRAFT.map((a) => a.icaoHex);

    // Fetch live positions from ADS-B Exchange
    const positions = await fetchAllTrackedAircraft(hexCodes);

    // Map positions to include our aircraft metadata
    const enrichedPositions = positions.map((pos: ADSBPosition) => {
      const ac = AIRCRAFT.find(
        (a) => a.icaoHex.toLowerCase() === pos.hex.toLowerCase()
      );
      return {
        ...pos,
        aircraft: ac,
      };
    });

    return NextResponse.json({
      positions: enrichedPositions,
      total: enrichedPositions.length,
      trackedCount: hexCodes.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching positions:", error);
    return NextResponse.json(
      { error: "Failed to fetch positions" },
      { status: 500 }
    );
  }
}
