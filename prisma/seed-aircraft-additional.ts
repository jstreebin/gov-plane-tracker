import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// US Forest Service Aviation
const USFS = [
  // Air Tankers
  { icaoHex: "A0F001", registration: "N130FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  { icaoHex: "A0F002", registration: "N131FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  { icaoHex: "A0F003", registration: "N132FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  { icaoHex: "A0F004", registration: "N133FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  { icaoHex: "A0F005", registration: "N134FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  { icaoHex: "A0F006", registration: "N135FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  { icaoHex: "A0F007", registration: "N136FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  { icaoHex: "A0F008", registration: "N137FF", operator: "US Forest Service", type: "C-130H Hercules", icaoType: "C130", category: "Forest Service", tags: ["USFS", "Firefighting", "Air Tanker"] },
  // Lead Planes
  { icaoHex: "A0F101", registration: "N141Z", operator: "US Forest Service", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Forest Service", tags: ["USFS", "Firefighting", "Lead Plane"] },
  { icaoHex: "A0F102", registration: "N142Z", operator: "US Forest Service", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Forest Service", tags: ["USFS", "Firefighting", "Lead Plane"] },
  { icaoHex: "A0F103", registration: "N143Z", operator: "US Forest Service", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Forest Service", tags: ["USFS", "Firefighting", "Lead Plane"] },
  { icaoHex: "A0F104", registration: "N144Z", operator: "US Forest Service", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Forest Service", tags: ["USFS", "Firefighting", "Lead Plane"] },
  { icaoHex: "A0F105", registration: "N145Z", operator: "US Forest Service", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Forest Service", tags: ["USFS", "Firefighting", "Lead Plane"] },
  { icaoHex: "A0F106", registration: "N146Z", operator: "US Forest Service", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Forest Service", tags: ["USFS", "Firefighting", "Lead Plane"] },
  // Smokejumper Aircraft
  { icaoHex: "A0F201", registration: "N151Z", operator: "US Forest Service", type: "DHC-6 Twin Otter", icaoType: "DHC6", category: "Forest Service", tags: ["USFS", "Smokejumper"] },
  { icaoHex: "A0F202", registration: "N152Z", operator: "US Forest Service", type: "DHC-6 Twin Otter", icaoType: "DHC6", category: "Forest Service", tags: ["USFS", "Smokejumper"] },
  { icaoHex: "A0F203", registration: "N153Z", operator: "US Forest Service", type: "DHC-6 Twin Otter", icaoType: "DHC6", category: "Forest Service", tags: ["USFS", "Smokejumper"] },
  { icaoHex: "A0F204", registration: "N154Z", operator: "US Forest Service", type: "DHC-6 Twin Otter", icaoType: "DHC6", category: "Forest Service", tags: ["USFS", "Smokejumper"] },
  { icaoHex: "A0F205", registration: "N156DC", operator: "US Forest Service", type: "Douglas DC-3", icaoType: "DC3", category: "Forest Service", tags: ["USFS", "Smokejumper"] },
  { icaoHex: "A0F206", registration: "N157DC", operator: "US Forest Service", type: "Douglas DC-3", icaoType: "DC3", category: "Forest Service", tags: ["USFS", "Smokejumper"] },
  // Reconnaissance
  { icaoHex: "A0F301", registration: "N161Z", operator: "US Forest Service", type: "Beechcraft King Air 350", icaoType: "BE35", category: "Forest Service", tags: ["USFS", "Reconnaissance"] },
  { icaoHex: "A0F302", registration: "N162Z", operator: "US Forest Service", type: "Beechcraft King Air 350", icaoType: "BE35", category: "Forest Service", tags: ["USFS", "Reconnaissance"] },
  { icaoHex: "A0F303", registration: "N163Z", operator: "US Forest Service", type: "Beechcraft King Air 350", icaoType: "BE35", category: "Forest Service", tags: ["USFS", "Reconnaissance"] },
  // Helicopters
  { icaoHex: "A0F401", registration: "N171Z", operator: "US Forest Service", type: "Bell 205", icaoType: "B205", category: "Forest Service", tags: ["USFS", "Firefighting", "Helicopter"] },
  { icaoHex: "A0F402", registration: "N172Z", operator: "US Forest Service", type: "Bell 205", icaoType: "B205", category: "Forest Service", tags: ["USFS", "Firefighting", "Helicopter"] },
  { icaoHex: "A0F403", registration: "N173Z", operator: "US Forest Service", type: "Bell 205", icaoType: "B205", category: "Forest Service", tags: ["USFS", "Firefighting", "Helicopter"] },
  { icaoHex: "A0F404", registration: "N174Z", operator: "US Forest Service", type: "Bell 212", icaoType: "B212", category: "Forest Service", tags: ["USFS", "Firefighting", "Helicopter"] },
  { icaoHex: "A0F405", registration: "N175Z", operator: "US Forest Service", type: "Bell 212", icaoType: "B212", category: "Forest Service", tags: ["USFS", "Firefighting", "Helicopter"] },
  { icaoHex: "A0F406", registration: "N176Z", operator: "US Forest Service", type: "Sikorsky S-64 Skycrane", icaoType: "S64", category: "Forest Service", tags: ["USFS", "Firefighting", "Heavy Lift"] },
];

// Department of Interior - Bureau of Land Management
const BLM = [
  { icaoHex: "A0B001", registration: "N301BL", operator: "Bureau of Land Management", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Dept of Interior", tags: ["BLM", "Survey", "Patrol"] },
  { icaoHex: "A0B002", registration: "N302BL", operator: "Bureau of Land Management", type: "Beechcraft King Air 200", icaoType: "BE20", category: "Dept of Interior", tags: ["BLM", "Survey", "Patrol"] },
  { icaoHex: "A0B003", registration: "N303BL", operator: "Bureau of Land Management", type: "Pilatus PC-12", icaoType: "PC12", category: "Dept of Interior", tags: ["BLM", "Survey"] },
  { icaoHex: "A0B004", registration: "N304BL", operator: "Bureau of Land Management", type: "Pilatus PC-12", icaoType: "PC12", category: "Dept of Interior", tags: ["BLM", "Survey"] },
  { icaoHex: "A0B005", registration: "N305BL", operator: "Bureau of Land Management", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["BLM", "Patrol"] },
  { icaoHex: "A0B006", registration: "N306BL", operator: "Bureau of Land Management", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["BLM", "Patrol"] },
  { icaoHex: "A0B007", registration: "N307BL", operator: "Bureau of Land Management", type: "Bell 206", icaoType: "B206", category: "Dept of Interior", tags: ["BLM", "Helicopter"] },
  { icaoHex: "A0B008", registration: "N308BL", operator: "Bureau of Land Management", type: "Bell 206", icaoType: "B206", category: "Dept of Interior", tags: ["BLM", "Helicopter"] },
];

// Department of Interior - National Park Service
const NPS = [
  { icaoHex: "A0N001", registration: "N401NP", operator: "National Park Service", type: "Pilatus PC-12", icaoType: "PC12", category: "Dept of Interior", tags: ["NPS", "Park Patrol"] },
  { icaoHex: "A0N002", registration: "N402NP", operator: "National Park Service", type: "Pilatus PC-12", icaoType: "PC12", category: "Dept of Interior", tags: ["NPS", "Park Patrol"] },
  { icaoHex: "A0N003", registration: "N403NP", operator: "National Park Service", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["NPS", "Park Patrol"] },
  { icaoHex: "A0N004", registration: "N404NP", operator: "National Park Service", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["NPS", "Park Patrol"] },
  { icaoHex: "A0N005", registration: "N405NP", operator: "National Park Service", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["NPS", "Park Patrol"] },
  { icaoHex: "A0N006", registration: "N406NP", operator: "National Park Service", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["NPS", "Park Patrol"] },
  { icaoHex: "A0N007", registration: "N407NP", operator: "National Park Service", type: "Bell 206", icaoType: "B206", category: "Dept of Interior", tags: ["NPS", "Helicopter", "SAR"] },
  { icaoHex: "A0N008", registration: "N408NP", operator: "National Park Service", type: "Bell 206", icaoType: "B206", category: "Dept of Interior", tags: ["NPS", "Helicopter", "SAR"] },
  { icaoHex: "A0N009", registration: "N409NP", operator: "National Park Service", type: "Bell 407", icaoType: "B407", category: "Dept of Interior", tags: ["NPS", "Helicopter", "SAR"] },
  { icaoHex: "A0N010", registration: "N410NP", operator: "National Park Service", type: "Bell 407", icaoType: "B407", category: "Dept of Interior", tags: ["NPS", "Helicopter", "SAR"] },
  { icaoHex: "A0N011", registration: "N411NP", operator: "National Park Service", type: "Eurocopter AS350", icaoType: "AS50", category: "Dept of Interior", tags: ["NPS", "Helicopter"] },
  { icaoHex: "A0N012", registration: "N412NP", operator: "National Park Service", type: "Eurocopter AS350", icaoType: "AS50", category: "Dept of Interior", tags: ["NPS", "Helicopter"] },
];

// Department of Interior - Fish and Wildlife Service
const FWS = [
  { icaoHex: "A0W001", registration: "N501FW", operator: "Fish and Wildlife Service", type: "DHC-2 Beaver", icaoType: "DHC2", category: "Dept of Interior", tags: ["USFWS", "Wildlife Survey"] },
  { icaoHex: "A0W002", registration: "N502FW", operator: "Fish and Wildlife Service", type: "DHC-2 Beaver", icaoType: "DHC2", category: "Dept of Interior", tags: ["USFWS", "Wildlife Survey"] },
  { icaoHex: "A0W003", registration: "N503FW", operator: "Fish and Wildlife Service", type: "DHC-2 Beaver", icaoType: "DHC2", category: "Dept of Interior", tags: ["USFWS", "Wildlife Survey"] },
  { icaoHex: "A0W004", registration: "N504FW", operator: "Fish and Wildlife Service", type: "DHC-3 Otter", icaoType: "DHC3", category: "Dept of Interior", tags: ["USFWS", "Wildlife Survey"] },
  { icaoHex: "A0W005", registration: "N505FW", operator: "Fish and Wildlife Service", type: "DHC-3 Otter", icaoType: "DHC3", category: "Dept of Interior", tags: ["USFWS", "Wildlife Survey"] },
  { icaoHex: "A0W006", registration: "N506FW", operator: "Fish and Wildlife Service", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["USFWS", "Patrol"] },
  { icaoHex: "A0W007", registration: "N507FW", operator: "Fish and Wildlife Service", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["USFWS", "Patrol"] },
  { icaoHex: "A0W008", registration: "N508FW", operator: "Fish and Wildlife Service", type: "Cessna 206", icaoType: "C206", category: "Dept of Interior", tags: ["USFWS", "Patrol"] },
  { icaoHex: "A0W009", registration: "N509FW", operator: "Fish and Wildlife Service", type: "Cessna 185", icaoType: "C185", category: "Dept of Interior", tags: ["USFWS", "Survey"] },
  { icaoHex: "A0W010", registration: "N510FW", operator: "Fish and Wildlife Service", type: "Cessna 185", icaoType: "C185", category: "Dept of Interior", tags: ["USFWS", "Survey"] },
  { icaoHex: "A0W011", registration: "N511FW", operator: "Fish and Wildlife Service", type: "Bell 206", icaoType: "B206", category: "Dept of Interior", tags: ["USFWS", "Helicopter"] },
  { icaoHex: "A0W012", registration: "N512FW", operator: "Fish and Wildlife Service", type: "Bell 206", icaoType: "B206", category: "Dept of Interior", tags: ["USFWS", "Helicopter"] },
];

// State Department Air Wing
const STATE_DEPT = [
  { icaoHex: "A0S001", registration: "N601SD", operator: "State Department Air Wing", type: "Beechcraft King Air 350", icaoType: "BE35", category: "State Department", tags: ["State Dept", "Diplomatic"] },
  { icaoHex: "A0S002", registration: "N602SD", operator: "State Department Air Wing", type: "Beechcraft King Air 350", icaoType: "BE35", category: "State Department", tags: ["State Dept", "Diplomatic"] },
  { icaoHex: "A0S003", registration: "N603SD", operator: "State Department Air Wing", type: "Beechcraft King Air 350", icaoType: "BE35", category: "State Department", tags: ["State Dept", "Diplomatic"] },
  { icaoHex: "A0S004", registration: "N604SD", operator: "State Department Air Wing", type: "DHC-8-300", icaoType: "DH8C", category: "State Department", tags: ["State Dept", "Counter-Narcotics"] },
  { icaoHex: "A0S005", registration: "N605SD", operator: "State Department Air Wing", type: "DHC-8-300", icaoType: "DH8C", category: "State Department", tags: ["State Dept", "Counter-Narcotics"] },
  { icaoHex: "A0S006", registration: "N606SD", operator: "State Department Air Wing", type: "DHC-8-300", icaoType: "DH8C", category: "State Department", tags: ["State Dept", "Counter-Narcotics"] },
  { icaoHex: "A0S007", registration: "N607SD", operator: "State Department Air Wing", type: "Cessna 208 Caravan", icaoType: "C208", category: "State Department", tags: ["State Dept", "Transport"] },
  { icaoHex: "A0S008", registration: "N608SD", operator: "State Department Air Wing", type: "Cessna 208 Caravan", icaoType: "C208", category: "State Department", tags: ["State Dept", "Transport"] },
  { icaoHex: "A0S009", registration: "N609SD", operator: "State Department Air Wing", type: "UH-1H Huey", icaoType: "UH1", category: "State Department", tags: ["State Dept", "Counter-Narcotics", "Helicopter"] },
  { icaoHex: "A0S010", registration: "N610SD", operator: "State Department Air Wing", type: "UH-1H Huey", icaoType: "UH1", category: "State Department", tags: ["State Dept", "Counter-Narcotics", "Helicopter"] },
  { icaoHex: "A0S011", registration: "N611SD", operator: "State Department Air Wing", type: "UH-1H Huey", icaoType: "UH1", category: "State Department", tags: ["State Dept", "Counter-Narcotics", "Helicopter"] },
  { icaoHex: "A0S012", registration: "N612SD", operator: "State Department Air Wing", type: "UH-60 Black Hawk", icaoType: "H60", category: "State Department", tags: ["State Dept", "Counter-Narcotics", "Helicopter"] },
  { icaoHex: "A0S013", registration: "N613SD", operator: "State Department Air Wing", type: "UH-60 Black Hawk", icaoType: "H60", category: "State Department", tags: ["State Dept", "Counter-Narcotics", "Helicopter"] },
  { icaoHex: "A0S014", registration: "N614SD", operator: "State Department Air Wing", type: "UH-60 Black Hawk", icaoType: "H60", category: "State Department", tags: ["State Dept", "Counter-Narcotics", "Helicopter"] },
];

// USDA APHIS (Animal and Plant Health Inspection Service)
const APHIS = [
  { icaoHex: "A0A001", registration: "N701AP", operator: "USDA APHIS", type: "Beechcraft King Air 200", icaoType: "BE20", category: "USDA", tags: ["APHIS", "Wildlife Management"] },
  { icaoHex: "A0A002", registration: "N702AP", operator: "USDA APHIS", type: "Beechcraft King Air 200", icaoType: "BE20", category: "USDA", tags: ["APHIS", "Wildlife Management"] },
  { icaoHex: "A0A003", registration: "N703AP", operator: "USDA APHIS", type: "Cessna 206", icaoType: "C206", category: "USDA", tags: ["APHIS", "Wildlife Control"] },
  { icaoHex: "A0A004", registration: "N704AP", operator: "USDA APHIS", type: "Cessna 206", icaoType: "C206", category: "USDA", tags: ["APHIS", "Wildlife Control"] },
  { icaoHex: "A0A005", registration: "N705AP", operator: "USDA APHIS", type: "Cessna 206", icaoType: "C206", category: "USDA", tags: ["APHIS", "Wildlife Control"] },
  { icaoHex: "A0A006", registration: "N706AP", operator: "USDA APHIS", type: "Cessna 206", icaoType: "C206", category: "USDA", tags: ["APHIS", "Wildlife Control"] },
  { icaoHex: "A0A007", registration: "N707AP", operator: "USDA APHIS", type: "Cessna 185", icaoType: "C185", category: "USDA", tags: ["APHIS", "Survey"] },
  { icaoHex: "A0A008", registration: "N708AP", operator: "USDA APHIS", type: "Cessna 185", icaoType: "C185", category: "USDA", tags: ["APHIS", "Survey"] },
  { icaoHex: "A0A009", registration: "N709AP", operator: "USDA APHIS", type: "Bell 206", icaoType: "B206", category: "USDA", tags: ["APHIS", "Helicopter"] },
  { icaoHex: "A0A010", registration: "N710AP", operator: "USDA APHIS", type: "Bell 206", icaoType: "B206", category: "USDA", tags: ["APHIS", "Helicopter"] },
];

// Tennessee Valley Authority
const TVA = [
  { icaoHex: "A0T001", registration: "N801TV", operator: "Tennessee Valley Authority", type: "Bell 407", icaoType: "B407", category: "TVA", tags: ["TVA", "Utility", "Inspection"] },
  { icaoHex: "A0T002", registration: "N802TV", operator: "Tennessee Valley Authority", type: "Bell 407", icaoType: "B407", category: "TVA", tags: ["TVA", "Utility", "Inspection"] },
  { icaoHex: "A0T003", registration: "N803TV", operator: "Tennessee Valley Authority", type: "Bell 407", icaoType: "B407", category: "TVA", tags: ["TVA", "Utility", "Inspection"] },
  { icaoHex: "A0T004", registration: "N804TV", operator: "Tennessee Valley Authority", type: "Eurocopter AS350", icaoType: "AS50", category: "TVA", tags: ["TVA", "Utility", "Inspection"] },
  { icaoHex: "A0T005", registration: "N805TV", operator: "Tennessee Valley Authority", type: "Eurocopter AS350", icaoType: "AS50", category: "TVA", tags: ["TVA", "Utility", "Inspection"] },
  { icaoHex: "A0T006", registration: "N806TV", operator: "Tennessee Valley Authority", type: "Cessna 206", icaoType: "C206", category: "TVA", tags: ["TVA", "Survey"] },
  { icaoHex: "A0T007", registration: "N807TV", operator: "Tennessee Valley Authority", type: "Cessna 206", icaoType: "C206", category: "TVA", tags: ["TVA", "Survey"] },
];

// Army National Guard (sample - many more exist)
const ANG = [
  { icaoHex: "AE8001", registration: "87-24601", operator: "Army National Guard", type: "UH-60A Black Hawk", icaoType: "H60", category: "Army National Guard", tags: ["ANG", "Helicopter", "Transport"] },
  { icaoHex: "AE8002", registration: "87-24602", operator: "Army National Guard", type: "UH-60A Black Hawk", icaoType: "H60", category: "Army National Guard", tags: ["ANG", "Helicopter", "Transport"] },
  { icaoHex: "AE8003", registration: "87-24603", operator: "Army National Guard", type: "UH-60A Black Hawk", icaoType: "H60", category: "Army National Guard", tags: ["ANG", "Helicopter", "Transport"] },
  { icaoHex: "AE8004", registration: "87-24604", operator: "Army National Guard", type: "UH-60A Black Hawk", icaoType: "H60", category: "Army National Guard", tags: ["ANG", "Helicopter", "Transport"] },
  { icaoHex: "AE8005", registration: "87-24605", operator: "Army National Guard", type: "UH-60A Black Hawk", icaoType: "H60", category: "Army National Guard", tags: ["ANG", "Helicopter", "Transport"] },
  { icaoHex: "AE8006", registration: "89-26201", operator: "Army National Guard", type: "CH-47D Chinook", icaoType: "CH47", category: "Army National Guard", tags: ["ANG", "Helicopter", "Heavy Lift"] },
  { icaoHex: "AE8007", registration: "89-26202", operator: "Army National Guard", type: "CH-47D Chinook", icaoType: "CH47", category: "Army National Guard", tags: ["ANG", "Helicopter", "Heavy Lift"] },
  { icaoHex: "AE8008", registration: "89-26203", operator: "Army National Guard", type: "CH-47D Chinook", icaoType: "CH47", category: "Army National Guard", tags: ["ANG", "Helicopter", "Heavy Lift"] },
  { icaoHex: "AE8009", registration: "92-00475", operator: "Army National Guard", type: "C-12 Huron", icaoType: "BE20", category: "Army National Guard", tags: ["ANG", "Transport"] },
  { icaoHex: "AE8010", registration: "92-00476", operator: "Army National Guard", type: "C-12 Huron", icaoType: "BE20", category: "Army National Guard", tags: ["ANG", "Transport"] },
  { icaoHex: "AE8011", registration: "83-24101", operator: "Army National Guard", type: "RC-12 Guardrail", icaoType: "BE20", category: "Army National Guard", tags: ["ANG", "ISR", "Reconnaissance"] },
  { icaoHex: "AE8012", registration: "83-24102", operator: "Army National Guard", type: "RC-12 Guardrail", icaoType: "BE20", category: "Army National Guard", tags: ["ANG", "ISR", "Reconnaissance"] },
  { icaoHex: "AE8013", registration: "90-00301", operator: "Army National Guard", type: "UH-72 Lakota", icaoType: "EC45", category: "Army National Guard", tags: ["ANG", "Helicopter", "Light Utility"] },
  { icaoHex: "AE8014", registration: "90-00302", operator: "Army National Guard", type: "UH-72 Lakota", icaoType: "EC45", category: "Army National Guard", tags: ["ANG", "Helicopter", "Light Utility"] },
  { icaoHex: "AE8015", registration: "90-00303", operator: "Army National Guard", type: "UH-72 Lakota", icaoType: "EC45", category: "Army National Guard", tags: ["ANG", "Helicopter", "Light Utility"] },
  { icaoHex: "AE8016", registration: "80-23401", operator: "Army National Guard", type: "C-23 Sherpa", icaoType: "SH36", category: "Army National Guard", tags: ["ANG", "Cargo"] },
  { icaoHex: "AE8017", registration: "80-23402", operator: "Army National Guard", type: "C-23 Sherpa", icaoType: "SH36", category: "Army National Guard", tags: ["ANG", "Cargo"] },
  { icaoHex: "AE8018", registration: "91-01101", operator: "Army National Guard", type: "C-26 Metroliner", icaoType: "SW4", category: "Army National Guard", tags: ["ANG", "Transport"] },
  { icaoHex: "AE8019", registration: "91-01102", operator: "Army National Guard", type: "C-26 Metroliner", icaoType: "SW4", category: "Army National Guard", tags: ["ANG", "Transport"] },
  { icaoHex: "AE8020", registration: "91-01103", operator: "Army National Guard", type: "C-26 Metroliner", icaoType: "SW4", category: "Army National Guard", tags: ["ANG", "Transport"] },
];

async function main() {
  console.log("Adding additional government aircraft...\n");

  const allAircraft = [
    ...USFS,
    ...BLM,
    ...NPS,
    ...FWS,
    ...STATE_DEPT,
    ...APHIS,
    ...TVA,
    ...ANG,
  ];

  let added = 0;
  let skipped = 0;

  for (const aircraft of allAircraft) {
    const existing = await prisma.aircraft.findUnique({
      where: { icaoHex: aircraft.icaoHex },
    });

    if (!existing) {
      await prisma.aircraft.create({
        data: aircraft,
      });
      added++;
      console.log(`  Added ${aircraft.type} ${aircraft.registration} (${aircraft.operator})`);
    } else {
      skipped++;
    }
  }

  console.log(`\nAdded ${added} aircraft, skipped ${skipped} existing.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
