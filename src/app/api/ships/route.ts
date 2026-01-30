import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Hardcoded ships list (until database is fixed)
const SHIPS = [
  { id: "1", hullNumber: "CVN-68", name: "USS Nimitz", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Bremerton, WA", status: "Active", latitude: 32.7, longitude: -117.2, region: "Pacific" },
  { id: "2", hullNumber: "CVN-69", name: "USS Dwight D. Eisenhower", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Active", latitude: 36.9, longitude: -76.3, region: "Atlantic" },
  { id: "3", hullNumber: "CVN-70", name: "USS Carl Vinson", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "San Diego, CA", status: "Active", latitude: 32.7, longitude: -117.2, region: "Pacific" },
  { id: "4", hullNumber: "CVN-71", name: "USS Theodore Roosevelt", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "San Diego, CA", status: "Active", latitude: 21.3, longitude: -157.9, region: "Pacific" },
  { id: "5", hullNumber: "CVN-72", name: "USS Abraham Lincoln", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "San Diego, CA", status: "Active", latitude: 32.7, longitude: -117.2, region: "Pacific" },
  { id: "6", hullNumber: "CVN-73", name: "USS George Washington", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Yokosuka, Japan", status: "Active", latitude: 35.3, longitude: 139.7, region: "Western Pacific" },
  { id: "7", hullNumber: "CVN-77", name: "USS George H.W. Bush", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Active", latitude: 36.9, longitude: -76.3, region: "Atlantic" },
  { id: "8", hullNumber: "CVN-78", name: "USS Gerald R. Ford", class: "Ford-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Active", latitude: 36.9, longitude: -76.3, region: "Atlantic" },
];

export async function GET() {
  return NextResponse.json(SHIPS);
}
