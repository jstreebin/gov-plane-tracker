import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Hardcoded aircraft list (until database is fixed)
const AIRCRAFT = [
  { id: "1", icaoHex: "ADFDF8", registration: "82-8000", type: "VC-25A", category: "Air Force One", operator: "USAF 89th AW", tags: ["VIP", "Presidential"] },
  { id: "2", icaoHex: "ADFEB7", registration: "92-9000", type: "VC-25A", category: "Air Force One", operator: "USAF 89th AW", tags: ["VIP", "Presidential"] },
  { id: "3", icaoHex: "AE010D", registration: "97-0400", type: "C-32A", category: "Air Force Two", operator: "USAF 89th AW", tags: ["VIP"] },
  { id: "4", icaoHex: "AE0945", registration: "01-0040", type: "C-40B", category: "VIP Transport", operator: "USAF 89th AW", tags: ["VIP"] },
  { id: "5", icaoHex: "AE0968", registration: "01-0041", type: "C-40B", category: "VIP Transport", operator: "USAF 89th AW", tags: ["VIP"] },
  { id: "6", icaoHex: "AE222F", registration: "09-0015", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW", tags: ["VIP"] },
  { id: "7", icaoHex: "AE2230", registration: "09-0016", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW", tags: ["VIP"] },
  { id: "8", icaoHex: "AE2231", registration: "09-0017", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW", tags: ["VIP"] },
  { id: "9", icaoHex: "AE4A42", registration: "17-46037", type: "C-37B", category: "VIP Transport", operator: "USAF 89th AW", tags: ["VIP"] },
  { id: "10", icaoHex: "AE01CD", registration: "98-0001", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG", tags: ["NAOC", "Command"] },
  { id: "11", icaoHex: "AE01CE", registration: "98-0002", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG", tags: ["NAOC", "Command"] },
  { id: "12", icaoHex: "AE141D", registration: "73-1676", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG", tags: ["NAOC", "Command"] },
  { id: "13", icaoHex: "AE141E", registration: "73-1677", type: "E-4B", category: "Doomsday Plane", operator: "USAF 595th CG", tags: ["NAOC", "Command"] },
];

export async function GET() {
  return NextResponse.json(AIRCRAFT);
}
