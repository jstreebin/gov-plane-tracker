import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// US Executive Branch Aircraft from plane-alert-db
const EXECUTIVE_AIRCRAFT = [
  // Air Force One (VC-25A)
  { icaoHex: "ADFDF8", registration: "82-8000", operator: "US Government", type: "Boeing VC-25A", icaoType: "B742", category: "Air Force One", tags: ["POTUS", "Presidential"] },
  { icaoHex: "ADFDF9", registration: "92-9000", operator: "US Government", type: "Boeing VC-25A", icaoType: "B742", category: "Air Force One", tags: ["POTUS", "Presidential"] },

  // Air Force Two (C-32A) - Vice President, Secretary of State, Secretary of Defense
  { icaoHex: "ADFEB7", registration: "98-0001", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { icaoHex: "ADFEB8", registration: "98-0002", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { icaoHex: "ADFEB9", registration: "99-0003", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { icaoHex: "ADFEBA", registration: "99-0004", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { icaoHex: "AE4AE6", registration: "09-0015", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { icaoHex: "AE4AE8", registration: "09-0016", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { icaoHex: "AE4AEA", registration: "09-0017", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { icaoHex: "AE4AEC", registration: "19-0018", operator: "USAF", type: "Boeing C-32A", icaoType: "B752", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },

  // C-32B (Special Operations)
  { icaoHex: "AE0433", registration: "02-5001", operator: "USAF", type: "Boeing C-32B", icaoType: "B752", category: "Special Operations", tags: ["150th SOS", "Special Ops"] },
  { icaoHex: "AE0443", registration: "00-9001", operator: "USAF", type: "Boeing C-32B", icaoType: "B752", category: "Special Operations", tags: ["150th SOS", "Special Ops"] },
  { icaoHex: "AE0446", registration: "99-6143", operator: "USAF", type: "Boeing C-32B", icaoType: "B752", category: "Special Operations", tags: ["150th SOS", "Special Ops"] },
  { icaoHex: "AE0449", registration: "02-4452", operator: "USAF", type: "Boeing C-32B", icaoType: "B752", category: "Special Operations", tags: ["150th SOS", "Special Ops"] },

  // C-37A (Gulfstream V) - Senior Officials
  { icaoHex: "AE010D", registration: "97-0400", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE010E", registration: "97-0401", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE0405", registration: "97-01944", operator: "US Army", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Army", "Senior Officials"] },
  { icaoHex: "AE0406", registration: "99-0402", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE04F9", registration: "99-0404", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE087E", registration: "01-0028", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE087F", registration: "01-0029", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE0978", registration: "01-0076", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE109A", registration: "02", operator: "US Coast Guard", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Coast Guard", "Command"] },
  { icaoHex: "AE10B3", registration: "01-0065", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE10C1", registration: "01", operator: "US Coast Guard", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Coast Guard", "Command"] },
  { icaoHex: "AE10C2", registration: "166375", operator: "US Navy", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Navy", "Senior Officials"] },
  { icaoHex: "AE115E", registration: "01-1930", operator: "USAF", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE118A", registration: "02-01863", operator: "US Army", type: "Gulfstream C-37A", icaoType: "GLF5", category: "VIP Transport", tags: ["Army", "Senior Officials"] },

  // C-37B (Gulfstream G550) - Senior Officials
  { icaoHex: "AE1258", registration: "166376", operator: "US Navy", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Navy", "Senior Officials"] },
  { icaoHex: "AE13D1", registration: "04-01778", operator: "US Army", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Army", "Senior Officials"] },
  { icaoHex: "AE151A", registration: "166377", operator: "US Navy", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Navy", "Senior Officials"] },
  { icaoHex: "AE152C", registration: "166378", operator: "US Navy", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Navy", "Senior Officials"] },
  { icaoHex: "AE206D", registration: "06-0500", operator: "USAF", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE4A81", registration: "09-0525", operator: "USAF", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE4DDD", registration: "11-0550", operator: "USAF", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE6961", registration: "18-1942", operator: "USAF", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE6962", registration: "18-1947", operator: "USAF", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE6CF1", registration: "20-1941", operator: "USAF", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { icaoHex: "AE6CF2", registration: "20-1949", operator: "USAF", type: "Gulfstream C-37B", icaoType: "GLF5", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },

  // C-40B/C (Boeing 737) - VIP / Congress
  { icaoHex: "A21BE1", registration: "19-2404", operator: "USAF", type: "Boeing C-40B", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AD8B35", registration: "21-0024", operator: "USAF", type: "Boeing C-40B", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE0945", registration: "01-0040", operator: "USAF", type: "Boeing C-40B", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE115D", registration: "01-0015", operator: "USAF", type: "Boeing C-40B", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE11F6", registration: "01-1941", operator: "USAF", type: "Boeing C-40B", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE11F7", registration: "01-0041", operator: "USAF", type: "Boeing C-40B", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE11F8", registration: "02-0042", operator: "USAF", type: "Boeing C-40B", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE1165", registration: "02-0201", operator: "USAF", type: "Boeing C-40C", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE1167", registration: "02-0202", operator: "USAF", type: "Boeing C-40C", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE11FA", registration: "02-0203", operator: "USAF", type: "Boeing C-40C", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE17EF", registration: "05-0730", operator: "USAF", type: "Boeing C-40C", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE189A", registration: "05-4613", operator: "USAF", type: "Boeing C-40C", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE189C", registration: "05-0932", operator: "USAF", type: "Boeing C-40C", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },
  { icaoHex: "AE503D", registration: "09-0540", operator: "USAF", type: "Boeing C-40C", icaoType: "B737", category: "Congressional", tags: ["Congress", "VIP"] },

  // C-40A (Navy Clippers)
  { icaoHex: "AE04D7", registration: "165829", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE04D8", registration: "165830", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE04D9", registration: "165831", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE04DA", registration: "165832", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE0976", registration: "165833", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE0977", registration: "165834", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE1251", registration: "165835", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE1252", registration: "165836", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE147A", registration: "166693", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE29FD", registration: "166694", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE29FE", registration: "166695", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE4A60", registration: "166696", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE5718", registration: "168980", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE5719", registration: "168981", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE571A", registration: "169036", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE638D", registration: "169792", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE638E", registration: "169793", operator: "US Navy", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { icaoHex: "AE7457", registration: "170041", operator: "US Marine Corps", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Marine Corps", tags: ["Marines", "Logistics"] },
  { icaoHex: "AE7458", registration: "170042", operator: "US Marine Corps", type: "Boeing C-40A Clipper", icaoType: "B737", category: "Marine Corps", tags: ["Marines", "Logistics"] },

  // Marine One (VH-3D, VH-92A)
  { icaoHex: "AE0865", registration: "159353", operator: "US Marine Corps", type: "Sikorsky VH-3D", icaoType: "S61", category: "Marine One", tags: ["POTUS", "Presidential", "Helicopter"] },
  { icaoHex: "AE5E76", registration: "169177", operator: "US Marine Corps", type: "Sikorsky VH-92A", icaoType: "S92", category: "Marine One", tags: ["POTUS", "Presidential", "Helicopter"] },
  { icaoHex: "AE5E77", registration: "169178", operator: "US Marine Corps", type: "Sikorsky VH-92A", icaoType: "S92", category: "Marine One", tags: ["POTUS", "Presidential", "Helicopter"] },
  { icaoHex: "AE5E79", registration: "169180", operator: "US Marine Corps", type: "Sikorsky VH-92A", icaoType: "S92", category: "Marine One", tags: ["POTUS", "Presidential", "Helicopter"] },

  // Special - NC-37B (Missile Tracking)
  { icaoHex: "A6E762", registration: "166379", operator: "US Navy", type: "Gulfstream NC-37B", icaoType: "GLF5", category: "Special Mission", tags: ["SIGINT", "Missile Tracking"] },
];

async function main() {
  console.log("Seeding database with executive aircraft...");

  const existingCount = await prisma.aircraft.count();
  if (existingCount > 0) {
    console.log(`Database already contains ${existingCount} aircraft. Skipping seed.`);
    return;
  }

  for (const aircraft of EXECUTIVE_AIRCRAFT) {
    await prisma.aircraft.create({
      data: aircraft,
    });
  }

  console.log(`Seeded ${EXECUTIVE_AIRCRAFT.length} aircraft.`);

  // Print summary by category
  const categories = await prisma.aircraft.groupBy({
    by: ["category"],
    _count: true,
  });

  console.log("\nAircraft by category:");
  for (const cat of categories) {
    console.log(`  ${cat.category}: ${cat._count}`);
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
