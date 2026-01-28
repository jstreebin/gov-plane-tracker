import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const ships = await prisma.ship.findMany({
      where: {
        status: { not: "Decommissioned" },
      },
      orderBy: { hullNumber: "desc" },
    });

    return NextResponse.json(ships);
  } catch (error) {
    console.error("Error fetching ships:", error);
    return NextResponse.json(
      { error: "Failed to fetch ships" },
      { status: 500 }
    );
  }
}
