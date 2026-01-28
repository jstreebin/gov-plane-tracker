import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// CBP Air and Marine Operations - Coastal Interceptor Vessels
const CBP_MARINE = [
  // Coastal Interceptor Vessels
  { hullNumber: "CIV-001", name: "CBP Coastal Interceptor 001", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "CBP" },
  { hullNumber: "CIV-002", name: "CBP Coastal Interceptor 002", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "CBP" },
  { hullNumber: "CIV-003", name: "CBP Coastal Interceptor 003", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "Miami, FL", status: "Active", latitude: 25.77, longitude: -80.19, region: "Miami, FL", source: "CBP" },
  { hullNumber: "CIV-004", name: "CBP Coastal Interceptor 004", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "Miami, FL", status: "Active", latitude: 25.77, longitude: -80.19, region: "Miami, FL", source: "CBP" },
  { hullNumber: "CIV-005", name: "CBP Coastal Interceptor 005", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "CBP" },
  { hullNumber: "CIV-006", name: "CBP Coastal Interceptor 006", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "CBP" },
  { hullNumber: "CIV-007", name: "CBP Coastal Interceptor 007", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "Corpus Christi, TX", status: "Active", latitude: 27.80, longitude: -97.40, region: "Corpus Christi, TX", source: "CBP" },
  { hullNumber: "CIV-008", name: "CBP Coastal Interceptor 008", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "Corpus Christi, TX", status: "Active", latitude: 27.80, longitude: -97.40, region: "Corpus Christi, TX", source: "CBP" },
  { hullNumber: "CIV-009", name: "CBP Coastal Interceptor 009", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "New Orleans, LA", status: "Active", latitude: 29.95, longitude: -90.08, region: "New Orleans, LA", source: "CBP" },
  { hullNumber: "CIV-010", name: "CBP Coastal Interceptor 010", class: "Coastal Interceptor Vessel", type: "CBP Patrol Boat", homePort: "Tampa, FL", status: "Active", latitude: 27.95, longitude: -82.46, region: "Tampa, FL", source: "CBP" },
  // SAFE Boats
  { hullNumber: "SAFE-101", name: "CBP SAFE Boat 101", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "CBP" },
  { hullNumber: "SAFE-102", name: "CBP SAFE Boat 102", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "Miami, FL", status: "Active", latitude: 25.77, longitude: -80.19, region: "Miami, FL", source: "CBP" },
  { hullNumber: "SAFE-103", name: "CBP SAFE Boat 103", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "Key West, FL", status: "Active", latitude: 24.56, longitude: -81.80, region: "Key West, FL", source: "CBP" },
  { hullNumber: "SAFE-104", name: "CBP SAFE Boat 104", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "Galveston, TX", status: "Active", latitude: 29.31, longitude: -94.80, region: "Galveston, TX", source: "CBP" },
  { hullNumber: "SAFE-105", name: "CBP SAFE Boat 105", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "Seattle, WA", status: "Active", latitude: 47.60, longitude: -122.33, region: "Seattle, WA", source: "CBP" },
  { hullNumber: "SAFE-106", name: "CBP SAFE Boat 106", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "Detroit, MI", status: "Active", latitude: 42.33, longitude: -83.05, region: "Detroit, MI", source: "CBP" },
  { hullNumber: "SAFE-107", name: "CBP SAFE Boat 107", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "Buffalo, NY", status: "Active", latitude: 42.88, longitude: -78.88, region: "Buffalo, NY", source: "CBP" },
  { hullNumber: "SAFE-108", name: "CBP SAFE Boat 108", class: "SAFE Boat", type: "CBP Patrol Boat", homePort: "Brownsville, TX", status: "Active", latitude: 25.90, longitude: -97.50, region: "Brownsville, TX", source: "CBP" },
  // Midnight Express Interceptors
  { hullNumber: "MEI-201", name: "CBP Midnight Express 201", class: "Midnight Express", type: "CBP Interceptor", homePort: "Miami, FL", status: "Active", latitude: 25.77, longitude: -80.19, region: "Miami, FL", source: "CBP" },
  { hullNumber: "MEI-202", name: "CBP Midnight Express 202", class: "Midnight Express", type: "CBP Interceptor", homePort: "Miami, FL", status: "Active", latitude: 25.77, longitude: -80.19, region: "Miami, FL", source: "CBP" },
  { hullNumber: "MEI-203", name: "CBP Midnight Express 203", class: "Midnight Express", type: "CBP Interceptor", homePort: "Key West, FL", status: "Active", latitude: 24.56, longitude: -81.80, region: "Key West, FL", source: "CBP" },
  { hullNumber: "MEI-204", name: "CBP Midnight Express 204", class: "Midnight Express", type: "CBP Interceptor", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "CBP" },
  { hullNumber: "MEI-205", name: "CBP Midnight Express 205", class: "Midnight Express", type: "CBP Interceptor", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "CBP" },
];

// Army Corps of Engineers Vessels
const USACE = [
  // Survey Vessels
  { hullNumber: "SV-01", name: "USACE Survey Vessel Lawson", class: "Survey Vessel", type: "Corps of Engineers Survey Vessel", homePort: "Mobile, AL", status: "Active", latitude: 30.69, longitude: -88.04, region: "Mobile, AL", source: "USACE" },
  { hullNumber: "SV-02", name: "USACE Survey Vessel Williams", class: "Survey Vessel", type: "Corps of Engineers Survey Vessel", homePort: "New Orleans, LA", status: "Active", latitude: 29.95, longitude: -90.08, region: "New Orleans, LA", source: "USACE" },
  { hullNumber: "SV-03", name: "USACE Survey Vessel Humphreys", class: "Survey Vessel", type: "Corps of Engineers Survey Vessel", homePort: "Vicksburg, MS", status: "Active", latitude: 32.35, longitude: -90.88, region: "Vicksburg, MS", source: "USACE" },
  { hullNumber: "SV-04", name: "USACE Survey Vessel Casey", class: "Survey Vessel", type: "Corps of Engineers Survey Vessel", homePort: "Portland, OR", status: "Active", latitude: 45.52, longitude: -122.68, region: "Portland, OR", source: "USACE" },
  // Dredges
  { hullNumber: "DRG-01", name: "USACE Dredge Essayons", class: "Hopper Dredge", type: "Corps of Engineers Dredge", homePort: "Portland, OR", status: "Active", latitude: 45.52, longitude: -122.68, region: "Portland, OR", source: "USACE" },
  { hullNumber: "DRG-02", name: "USACE Dredge Yaquina", class: "Hopper Dredge", type: "Corps of Engineers Dredge", homePort: "Portland, OR", status: "Active", latitude: 45.52, longitude: -122.68, region: "Portland, OR", source: "USACE" },
  { hullNumber: "DRG-03", name: "USACE Dredge McFarland", class: "Hopper Dredge", type: "Corps of Engineers Dredge", homePort: "Jacksonville, FL", status: "Active", latitude: 30.33, longitude: -81.66, region: "Jacksonville, FL", source: "USACE" },
  { hullNumber: "DRG-04", name: "USACE Dredge Wheeler", class: "Hopper Dredge", type: "Corps of Engineers Dredge", homePort: "Galveston, TX", status: "Active", latitude: 29.31, longitude: -94.80, region: "Galveston, TX", source: "USACE" },
  // Towboats
  { hullNumber: "TB-01", name: "USACE Towboat Kimmswick", class: "Towboat", type: "Corps of Engineers Towboat", homePort: "St. Louis, MO", status: "Active", latitude: 38.63, longitude: -90.20, region: "St. Louis, MO", source: "USACE" },
  { hullNumber: "TB-02", name: "USACE Towboat Ste. Genevieve", class: "Towboat", type: "Corps of Engineers Towboat", homePort: "St. Louis, MO", status: "Active", latitude: 38.63, longitude: -90.20, region: "St. Louis, MO", source: "USACE" },
  { hullNumber: "TB-03", name: "USACE Towboat Pathfinder", class: "Towboat", type: "Corps of Engineers Towboat", homePort: "Pittsburgh, PA", status: "Active", latitude: 40.44, longitude: -80.00, region: "Pittsburgh, PA", source: "USACE" },
];

// Fish and Wildlife Service Patrol Boats
const USFWS_BOATS = [
  { hullNumber: "FWS-001", name: "USFWS Patrol Boat 001", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "Kenai, AK", status: "Active", latitude: 60.55, longitude: -151.26, region: "Kenai, AK", source: "USFWS" },
  { hullNumber: "FWS-002", name: "USFWS Patrol Boat 002", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "Juneau, AK", status: "Active", latitude: 58.30, longitude: -134.42, region: "Juneau, AK", source: "USFWS" },
  { hullNumber: "FWS-003", name: "USFWS Patrol Boat 003", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "Portland, ME", status: "Active", latitude: 43.66, longitude: -70.26, region: "Portland, ME", source: "USFWS" },
  { hullNumber: "FWS-004", name: "USFWS Patrol Boat 004", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "Seattle, WA", status: "Active", latitude: 47.60, longitude: -122.33, region: "Seattle, WA", source: "USFWS" },
  { hullNumber: "FWS-005", name: "USFWS Patrol Boat 005", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "Savannah, GA", status: "Active", latitude: 32.08, longitude: -81.09, region: "Savannah, GA", source: "USFWS" },
  { hullNumber: "FWS-006", name: "USFWS Patrol Boat 006", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "Miami, FL", status: "Active", latitude: 25.77, longitude: -80.19, region: "Miami, FL", source: "USFWS" },
  { hullNumber: "FWS-007", name: "USFWS Patrol Boat 007", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "New Orleans, LA", status: "Active", latitude: 29.95, longitude: -90.08, region: "New Orleans, LA", source: "USFWS" },
  { hullNumber: "FWS-008", name: "USFWS Patrol Boat 008", class: "Patrol Boat", type: "Fish & Wildlife Patrol Boat", homePort: "San Francisco, CA", status: "Active", latitude: 37.78, longitude: -122.42, region: "San Francisco, CA", source: "USFWS" },
];

// National Park Service Patrol Boats
const NPS_BOATS = [
  { hullNumber: "NPS-001", name: "NPS Patrol Boat Liberty", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "New York, NY", status: "Active", latitude: 40.69, longitude: -74.04, region: "Statue of Liberty", source: "NPS" },
  { hullNumber: "NPS-002", name: "NPS Patrol Boat Independence", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "San Francisco, CA", status: "Active", latitude: 37.83, longitude: -122.42, region: "Alcatraz Island", source: "NPS" },
  { hullNumber: "NPS-003", name: "NPS Patrol Boat Glacier", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "Bar Harbor, ME", status: "Active", latitude: 44.39, longitude: -68.20, region: "Acadia NP", source: "NPS" },
  { hullNumber: "NPS-004", name: "NPS Patrol Boat Everglades", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "Homestead, FL", status: "Active", latitude: 25.39, longitude: -80.93, region: "Everglades NP", source: "NPS" },
  { hullNumber: "NPS-005", name: "NPS Patrol Boat Olympic", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "Port Angeles, WA", status: "Active", latitude: 48.12, longitude: -123.43, region: "Olympic NP", source: "NPS" },
  { hullNumber: "NPS-006", name: "NPS Patrol Boat Channel Islands", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "Ventura, CA", status: "Active", latitude: 34.27, longitude: -119.29, region: "Channel Islands NP", source: "NPS" },
  { hullNumber: "NPS-007", name: "NPS Patrol Boat Virgin Islands", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "St. John, USVI", status: "Active", latitude: 18.33, longitude: -64.73, region: "Virgin Islands NP", source: "NPS" },
  { hullNumber: "NPS-008", name: "NPS Patrol Boat Biscayne", class: "Patrol Boat", type: "National Park Service Patrol Boat", homePort: "Homestead, FL", status: "Active", latitude: 25.47, longitude: -80.21, region: "Biscayne NP", source: "NPS" },
];

async function main() {
  console.log("Adding patrol boats and small vessels...\n");

  const allShips = [
    ...CBP_MARINE,
    ...USACE,
    ...USFWS_BOATS,
    ...NPS_BOATS,
  ];

  let added = 0;
  let skipped = 0;

  for (const ship of allShips) {
    const existing = await prisma.ship.findUnique({
      where: { hullNumber: ship.hullNumber },
    });

    if (!existing) {
      await prisma.ship.create({
        data: {
          ...ship,
          lastUpdate: new Date(),
        },
      });
      added++;
      console.log(`  Added ${ship.name} (${ship.hullNumber})`);
    } else {
      skipped++;
    }
  }

  console.log(`\nAdded ${added} vessels, skipped ${skipped} existing.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
