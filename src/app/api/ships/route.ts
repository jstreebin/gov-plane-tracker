import { NextResponse } from "next/server";
import { SHIPS } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(SHIPS);
}
