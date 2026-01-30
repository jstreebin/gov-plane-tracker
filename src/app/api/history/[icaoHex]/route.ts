import { NextResponse } from "next/server";
import { AIRCRAFT } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ icaoHex: string }> }
) {
  const { icaoHex } = await params;

  const aircraft = AIRCRAFT.find(
    (a) => a.icaoHex.toLowerCase() === icaoHex.toLowerCase()
  );

  if (!aircraft) {
    return NextResponse.json(
      { error: "Aircraft not found" },
      { status: 404 }
    );
  }

  // Return empty history (database not available)
  return NextResponse.json({
    aircraft,
    positions: [],
    flights: [],
  });
}
