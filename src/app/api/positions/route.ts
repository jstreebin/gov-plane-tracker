import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { fetchAllTrackedAircraft, ADSBPosition } from "@/lib/adsb";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    // Get all tracked aircraft
    const aircraft = await prisma.aircraft.findMany();
    const hexCodes = aircraft.map((a) => a.icaoHex);

    // Fetch live positions from ADS-B Exchange
    const positions = await fetchAllTrackedAircraft(hexCodes);

    // Map positions to include our aircraft metadata
    const enrichedPositions = positions.map((pos: ADSBPosition) => {
      const ac = aircraft.find(
        (a) => a.icaoHex.toLowerCase() === pos.hex.toLowerCase()
      );
      return {
        ...pos,
        aircraft: ac,
      };
    });

    // Store positions in database for history
    for (const pos of positions) {
      if (pos.lat && pos.lon) {
        const ac = aircraft.find(
          (a) => a.icaoHex.toLowerCase() === pos.hex.toLowerCase()
        );
        if (ac) {
          await prisma.position.create({
            data: {
              aircraftId: ac.id,
              latitude: pos.lat,
              longitude: pos.lon,
              altitude: pos.alt_baro || pos.alt_geom,
              groundSpeed: pos.gs,
              heading: pos.track,
              verticalRate: pos.baro_rate,
              squawk: pos.squawk,
              onGround: (pos.alt_baro || 0) < 100,
              timestamp: new Date(),
            },
          });
        }
      }
    }

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
