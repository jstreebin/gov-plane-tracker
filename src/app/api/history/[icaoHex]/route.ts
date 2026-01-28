import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ icaoHex: string }> }
) {
  try {
    const { icaoHex } = await params;

    const aircraft = await prisma.aircraft.findUnique({
      where: { icaoHex: icaoHex.toUpperCase() },
    });

    if (!aircraft) {
      return NextResponse.json(
        { error: "Aircraft not found" },
        { status: 404 }
      );
    }

    // Get position history for last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const positions = await prisma.position.findMany({
      where: {
        aircraftId: aircraft.id,
        timestamp: { gte: sevenDaysAgo },
      },
      orderBy: { timestamp: "desc" },
      take: 1000,
    });

    // Get flight history
    const flights = await prisma.flight.findMany({
      where: { aircraftId: aircraft.id },
      orderBy: { startTime: "desc" },
      take: 50,
    });

    return NextResponse.json({
      aircraft,
      positions,
      flights,
    });
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json(
      { error: "Failed to fetch history" },
      { status: 500 }
    );
  }
}
