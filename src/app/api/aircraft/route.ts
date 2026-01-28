import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const aircraft = await prisma.aircraft.findMany({
      orderBy: { category: "asc" },
    });

    return NextResponse.json(aircraft);
  } catch (error) {
    console.error("Error fetching aircraft:", error);
    return NextResponse.json(
      { error: "Failed to fetch aircraft" },
      { status: 500 }
    );
  }
}
