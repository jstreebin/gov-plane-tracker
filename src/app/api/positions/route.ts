import { NextResponse } from "next/server";
import { fetchAllTrackedAircraft, ADSBPosition } from "@/lib/adsb";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Hardcoded aircraft list (until database is fixed)
const TRACKED_AIRCRAFT = [
  { icaoHex: "ADFDF8", registration: "82-8000", type: "VC-25A", category: "Air Force One", operator: "USAF 89th AW" },
  { icaoHex: "ADFEB7", registration: "92-9000", type: "VC-25A", category: "Air Force One", operator: "USAF 89th AW" },
  { icaoHex: "AE010D", registration: "97-0400", type: "C-32A", category: "Air Force Two", operator: "USAF 89th AW" },
  { icaoHex: "AE0945", registration: "01-0040", type: "C-40B", category: "VIP Transport", operator: "USAF 89th AW" },
  { icaoHex: "AE0968", registration: "01-0041", type: "C-40B", category: "VIP Transport", operator: "USAF 89th AW" },
  { icaoHex: "AE222F", registration: "09-0015", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW" },
  { icaoHex: "AE2230", registration: "09-0016", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW" },
  { icaoHex: "AE2231", registration: "09-0017", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW" },
  { icaoHex: "AE4A42", registration: "17-46037", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW" },
  { icaoHex: "AE01CD", registration: "98-0001", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG" },
  { icaoHex: "AE01CE", registration: "98-0002", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG" },
  { icaoHex: "AE141D", registration: "73-1676", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG" },
  { icaoHex: "AE141E", registration: "73-1677", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG" },
];

export async function GET() {
  try {
    const hexCodes = TRACKED_AIRCRAFT.map((a) => a.icaoHex);

    // Fetch live positions from ADS-B Exchange
    const positions = await fetchAllTrackedAircraft(hexCodes);

    // Map positions to include our aircraft metadata
    const enrichedPositions = positions.map((pos: ADSBPosition) => {
      const ac = TRACKED_AIRCRAFT.find(
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
