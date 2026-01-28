import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// US Navy Aircraft Carriers (11 active)
const CARRIERS = [
  {
    hullNumber: "CVN-78",
    name: "USS Gerald R. Ford",
    class: "Gerald R. Ford-class",
    type: "Aircraft Carrier",
    homePort: "Norfolk, VA",
    status: "Deployed",
    latitude: 15.5,
    longitude: -68.0,
    region: "Caribbean Sea",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-77",
    name: "USS George H.W. Bush",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "Norfolk, VA",
    status: "Active",
    latitude: 36.95,
    longitude: -76.33,
    region: "Norfolk, VA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-76",
    name: "USS Ronald Reagan",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "Bremerton, WA",
    status: "Active",
    latitude: 47.56,
    longitude: -122.65,
    region: "Bremerton, WA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-75",
    name: "USS Harry S. Truman",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "Norfolk, VA",
    status: "Active",
    latitude: 36.95,
    longitude: -76.33,
    region: "Norfolk, VA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-74",
    name: "USS John C. Stennis",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "Norfolk, VA",
    status: "Maintenance",
    latitude: 36.95,
    longitude: -76.33,
    region: "Norfolk, VA (RCOH)",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-73",
    name: "USS George Washington",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "Yokosuka, Japan",
    status: "Forward Deployed",
    latitude: 35.29,
    longitude: 139.67,
    region: "Yokosuka, Japan",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-72",
    name: "USS Abraham Lincoln",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "San Diego, CA",
    status: "Deployed",
    latitude: 15.0,
    longitude: 120.0,
    region: "South China Sea",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-71",
    name: "USS Theodore Roosevelt",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "San Diego, CA",
    status: "Active",
    latitude: 32.68,
    longitude: -117.23,
    region: "San Diego, CA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-70",
    name: "USS Carl Vinson",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "San Diego, CA",
    status: "Active",
    latitude: 32.68,
    longitude: -117.23,
    region: "San Diego, CA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-69",
    name: "USS Dwight D. Eisenhower",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "Norfolk, VA",
    status: "Active",
    latitude: 36.95,
    longitude: -76.33,
    region: "Norfolk, VA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "CVN-68",
    name: "USS Nimitz",
    class: "Nimitz-class",
    type: "Aircraft Carrier",
    homePort: "Bremerton, WA",
    status: "Active",
    latitude: 47.56,
    longitude: -122.65,
    region: "Bremerton, WA",
    source: "USNI Fleet Tracker",
  },
];

// Amphibious Assault Ships (LHA/LHD)
const AMPHIBS = [
  {
    hullNumber: "LHA-7",
    name: "USS Tripoli",
    class: "America-class",
    type: "Amphibious Assault Ship",
    homePort: "Sasebo, Japan",
    status: "Forward Deployed",
    latitude: 33.16,
    longitude: 129.72,
    region: "Sasebo, Japan",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHA-6",
    name: "USS America",
    class: "America-class",
    type: "Amphibious Assault Ship",
    homePort: "San Diego, CA",
    status: "Active",
    latitude: 32.68,
    longitude: -117.23,
    region: "San Diego, CA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHD-8",
    name: "USS Makin Island",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "San Diego, CA",
    status: "Active",
    latitude: 32.68,
    longitude: -117.23,
    region: "San Diego, CA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHD-7",
    name: "USS Iwo Jima",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "Norfolk, VA",
    status: "Deployed",
    latitude: 15.5,
    longitude: -68.0,
    region: "Caribbean Sea",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHD-6",
    name: "USS Bonhomme Richard",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "Decommissioned",
    status: "Decommissioned",
    latitude: null,
    longitude: null,
    region: "Decommissioned (fire damage)",
    source: "USNI",
  },
  {
    hullNumber: "LHD-5",
    name: "USS Bataan",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "Norfolk, VA",
    status: "Active",
    latitude: 36.95,
    longitude: -76.33,
    region: "Norfolk, VA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHD-4",
    name: "USS Boxer",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "San Diego, CA",
    status: "Active",
    latitude: 32.68,
    longitude: -117.23,
    region: "San Diego, CA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHD-3",
    name: "USS Kearsarge",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "Norfolk, VA",
    status: "Active",
    latitude: 36.95,
    longitude: -76.33,
    region: "Norfolk, VA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHD-2",
    name: "USS Essex",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "San Diego, CA",
    status: "Active",
    latitude: 32.68,
    longitude: -117.23,
    region: "San Diego, CA",
    source: "USNI Fleet Tracker",
  },
  {
    hullNumber: "LHD-1",
    name: "USS Wasp",
    class: "Wasp-class",
    type: "Amphibious Assault Ship",
    homePort: "Norfolk, VA",
    status: "Active",
    latitude: 36.95,
    longitude: -76.33,
    region: "Norfolk, VA",
    source: "USNI Fleet Tracker",
  },
];

async function main() {
  console.log("Adding US Navy ships...");

  const allShips = [...CARRIERS, ...AMPHIBS];
  let added = 0;

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
    }
  }

  console.log(`\nAdded ${added} ships.`);

  const ships = await prisma.ship.findMany({
    orderBy: { hullNumber: "desc" },
  });

  console.log("\nShips in database:");
  for (const ship of ships) {
    console.log(`  ${ship.hullNumber} - ${ship.name} (${ship.region})`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
