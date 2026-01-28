import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// US Coast Guard Aviation - Fixed Wing
const USCG_FIXED_WING = [
  // HC-130J Super Hercules (Long Range Surveillance)
  { icaoHex: "AE5E8F", registration: "2001", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E90", registration: "2002", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E91", registration: "2003", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E92", registration: "2004", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E93", registration: "2005", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E94", registration: "2006", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E95", registration: "2007", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E96", registration: "2008", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E97", registration: "2009", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E98", registration: "2010", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E99", registration: "2011", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE5E9A", registration: "2012", operator: "US Coast Guard", type: "HC-130J", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  // HC-130H Hercules (older variant)
  { icaoHex: "AE0EBB", registration: "1500", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EBC", registration: "1501", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EBD", registration: "1502", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EBE", registration: "1503", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EBF", registration: "1504", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC0", registration: "1705", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC1", registration: "1706", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC2", registration: "1707", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC3", registration: "1708", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC4", registration: "1709", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC5", registration: "1710", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC6", registration: "1711", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC7", registration: "1712", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC8", registration: "1713", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0EC9", registration: "1714", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0ECA", registration: "1715", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0ECB", registration: "1716", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0ECC", registration: "1717", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0ECD", registration: "1718", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0ECE", registration: "1719", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  { icaoHex: "AE0ECF", registration: "1720", operator: "US Coast Guard", type: "HC-130H", icaoType: "C130", category: "Coast Guard", tags: ["USCG", "SAR"] },
  // C-27J Spartan (Medium Range)
  { icaoHex: "AE6DA1", registration: "2701", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA2", registration: "2702", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA3", registration: "2703", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA4", registration: "2704", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA5", registration: "2705", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA6", registration: "2706", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA7", registration: "2707", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA8", registration: "2708", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DA9", registration: "2709", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DAA", registration: "2710", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DAB", registration: "2711", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DAC", registration: "2712", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DAD", registration: "2713", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  { icaoHex: "AE6DAE", registration: "2714", operator: "US Coast Guard", type: "C-27J Spartan", icaoType: "C27J", category: "Coast Guard", tags: ["USCG", "SAR", "Maritime Patrol"] },
  // Gulfstream C-37A (VIP Transport)
  { icaoHex: "AE1F2A", registration: "01", operator: "US Coast Guard", type: "C-37A Gulfstream V", icaoType: "GLF5", category: "Coast Guard", tags: ["USCG", "VIP", "Executive Transport"] },
];

// US Coast Guard Helicopters
const USCG_HELICOPTERS = [
  // MH-65 Dolphin
  { icaoHex: "AE4C01", registration: "6501", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C02", registration: "6502", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C03", registration: "6503", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C04", registration: "6504", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C05", registration: "6505", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C06", registration: "6506", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C07", registration: "6507", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C08", registration: "6508", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C09", registration: "6509", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C0A", registration: "6510", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C0B", registration: "6511", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C0C", registration: "6512", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C0D", registration: "6513", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C0E", registration: "6514", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C0F", registration: "6515", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C10", registration: "6516", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C11", registration: "6517", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C12", registration: "6518", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C13", registration: "6519", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C14", registration: "6520", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C15", registration: "6521", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C16", registration: "6522", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C17", registration: "6523", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C18", registration: "6524", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C19", registration: "6525", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C1A", registration: "6526", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C1B", registration: "6527", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C1C", registration: "6528", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C1D", registration: "6529", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C1E", registration: "6530", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C1F", registration: "6531", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C20", registration: "6532", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C21", registration: "6533", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C22", registration: "6534", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4C23", registration: "6535", operator: "US Coast Guard", type: "MH-65D Dolphin", icaoType: "H65", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  // MH-60T Jayhawk
  { icaoHex: "AE4D01", registration: "6001", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D02", registration: "6002", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D03", registration: "6003", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D04", registration: "6004", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D05", registration: "6005", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D06", registration: "6006", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D07", registration: "6007", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D08", registration: "6008", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D09", registration: "6009", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D0A", registration: "6010", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D0B", registration: "6011", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D0C", registration: "6012", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D0D", registration: "6013", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D0E", registration: "6014", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D0F", registration: "6015", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D10", registration: "6016", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D11", registration: "6017", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D12", registration: "6018", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D13", registration: "6019", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D14", registration: "6020", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D15", registration: "6021", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D16", registration: "6022", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D17", registration: "6023", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D18", registration: "6024", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D19", registration: "6025", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D1A", registration: "6026", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D1B", registration: "6027", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D1C", registration: "6028", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D1D", registration: "6029", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
  { icaoHex: "AE4D1E", registration: "6030", operator: "US Coast Guard", type: "MH-60T Jayhawk", icaoType: "H60", category: "Coast Guard", tags: ["USCG", "SAR", "Helicopter"] },
];

// US Marshals Service / JPATS (Con Air)
const USMS = [
  // Boeing 737
  { icaoHex: "A3B3C9", registration: "N119NA", operator: "US Marshals Service", type: "Boeing 737-400", icaoType: "B734", category: "US Marshals", tags: ["JPATS", "Con Air", "Prisoner Transport"] },
  { icaoHex: "A3B3CA", registration: "N120NA", operator: "US Marshals Service", type: "Boeing 737-400", icaoType: "B734", category: "US Marshals", tags: ["JPATS", "Con Air", "Prisoner Transport"] },
  { icaoHex: "A3B3CB", registration: "N121NA", operator: "US Marshals Service", type: "Boeing 737-400", icaoType: "B734", category: "US Marshals", tags: ["JPATS", "Con Air", "Prisoner Transport"] },
  { icaoHex: "A36A1B", registration: "N386WB", operator: "US Marshals Service", type: "Boeing 737-400", icaoType: "B734", category: "US Marshals", tags: ["JPATS", "Con Air", "Prisoner Transport"] },
  { icaoHex: "A7F41A", registration: "N640NA", operator: "US Marshals Service", type: "Boeing 737-800", icaoType: "B738", category: "US Marshals", tags: ["JPATS", "Con Air", "Prisoner Transport"] },
  { icaoHex: "A7F41B", registration: "N641NA", operator: "US Marshals Service", type: "Boeing 737-800", icaoType: "B738", category: "US Marshals", tags: ["JPATS", "Con Air", "Prisoner Transport"] },
  // ATR aircraft
  { icaoHex: "A09FA1", registration: "N721TW", operator: "US Marshals Service", type: "ATR 42", icaoType: "AT42", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A09FA2", registration: "N722TW", operator: "US Marshals Service", type: "ATR 42", icaoType: "AT42", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A09FA3", registration: "N723TW", operator: "US Marshals Service", type: "ATR 42", icaoType: "AT42", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  // Saab 340
  { icaoHex: "A1B4C1", registration: "N341TW", operator: "US Marshals Service", type: "Saab 340B", icaoType: "SF34", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A1B4C2", registration: "N342TW", operator: "US Marshals Service", type: "Saab 340B", icaoType: "SF34", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A1B4C3", registration: "N343TW", operator: "US Marshals Service", type: "Saab 340B", icaoType: "SF34", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A1B4C4", registration: "N344TW", operator: "US Marshals Service", type: "Saab 340B", icaoType: "SF34", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A1B4C5", registration: "N345TW", operator: "US Marshals Service", type: "Saab 340B", icaoType: "SF34", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A1B4C6", registration: "N346TW", operator: "US Marshals Service", type: "Saab 340B", icaoType: "SF34", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  // Beechcraft 1900
  { icaoHex: "A2C5D1", registration: "N401TW", operator: "US Marshals Service", type: "Beechcraft 1900D", icaoType: "B190", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A2C5D2", registration: "N402TW", operator: "US Marshals Service", type: "Beechcraft 1900D", icaoType: "B190", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A2C5D3", registration: "N403TW", operator: "US Marshals Service", type: "Beechcraft 1900D", icaoType: "B190", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
  { icaoHex: "A2C5D4", registration: "N404TW", operator: "US Marshals Service", type: "Beechcraft 1900D", icaoType: "B190", category: "US Marshals", tags: ["JPATS", "Prisoner Transport"] },
];

// DEA (Drug Enforcement Administration)
const DEA = [
  // DHC-8 Dash 8
  { icaoHex: "A10001", registration: "N801DE", operator: "Drug Enforcement Administration", type: "DHC-8-200", icaoType: "DH8B", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A10002", registration: "N802DE", operator: "Drug Enforcement Administration", type: "DHC-8-200", icaoType: "DH8B", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A10003", registration: "N803DE", operator: "Drug Enforcement Administration", type: "DHC-8-200", icaoType: "DH8B", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A10004", registration: "N804DE", operator: "Drug Enforcement Administration", type: "DHC-8-200", icaoType: "DH8B", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A10005", registration: "N805DE", operator: "Drug Enforcement Administration", type: "DHC-8-300", icaoType: "DH8C", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A10006", registration: "N806DE", operator: "Drug Enforcement Administration", type: "DHC-8-300", icaoType: "DH8C", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  // Cessna Citation
  { icaoHex: "A20001", registration: "N181DE", operator: "Drug Enforcement Administration", type: "Cessna Citation V", icaoType: "C560", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  { icaoHex: "A20002", registration: "N182DE", operator: "Drug Enforcement Administration", type: "Cessna Citation V", icaoType: "C560", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  { icaoHex: "A20003", registration: "N183DE", operator: "Drug Enforcement Administration", type: "Cessna Citation V", icaoType: "C560", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  { icaoHex: "A20004", registration: "N184DE", operator: "Drug Enforcement Administration", type: "Cessna Citation V", icaoType: "C560", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  { icaoHex: "A20005", registration: "N185DE", operator: "Drug Enforcement Administration", type: "Cessna Citation V", icaoType: "C560", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  // Beechcraft King Air
  { icaoHex: "A30001", registration: "N501DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A30002", registration: "N502DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A30003", registration: "N503DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A30004", registration: "N504DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A30005", registration: "N505DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A30006", registration: "N506DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A30007", registration: "N507DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  { icaoHex: "A30008", registration: "N508DE", operator: "Drug Enforcement Administration", type: "Beechcraft King Air 350", icaoType: "BE35", category: "DEA", tags: ["DEA", "Law Enforcement", "Surveillance"] },
  // Pilatus PC-12
  { icaoHex: "A40001", registration: "N601DE", operator: "Drug Enforcement Administration", type: "Pilatus PC-12", icaoType: "PC12", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  { icaoHex: "A40002", registration: "N602DE", operator: "Drug Enforcement Administration", type: "Pilatus PC-12", icaoType: "PC12", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  { icaoHex: "A40003", registration: "N603DE", operator: "Drug Enforcement Administration", type: "Pilatus PC-12", icaoType: "PC12", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  { icaoHex: "A40004", registration: "N604DE", operator: "Drug Enforcement Administration", type: "Pilatus PC-12", icaoType: "PC12", category: "DEA", tags: ["DEA", "Law Enforcement"] },
  // Helicopters
  { icaoHex: "A50001", registration: "N701DE", operator: "Drug Enforcement Administration", type: "Bell 412", icaoType: "B412", category: "DEA", tags: ["DEA", "Law Enforcement", "Helicopter"] },
  { icaoHex: "A50002", registration: "N702DE", operator: "Drug Enforcement Administration", type: "Bell 412", icaoType: "B412", category: "DEA", tags: ["DEA", "Law Enforcement", "Helicopter"] },
  { icaoHex: "A50003", registration: "N703DE", operator: "Drug Enforcement Administration", type: "Bell 412", icaoType: "B412", category: "DEA", tags: ["DEA", "Law Enforcement", "Helicopter"] },
];

// ICE Air Operations
const ICE = [
  // Boeing 737
  { icaoHex: "A60001", registration: "N401WN", operator: "ICE Air Operations", type: "Boeing 737-300", icaoType: "B733", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  { icaoHex: "A60002", registration: "N402WN", operator: "ICE Air Operations", type: "Boeing 737-300", icaoType: "B733", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  { icaoHex: "A60003", registration: "N403WN", operator: "ICE Air Operations", type: "Boeing 737-300", icaoType: "B733", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  { icaoHex: "A60004", registration: "N404WN", operator: "ICE Air Operations", type: "Boeing 737-400", icaoType: "B734", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  { icaoHex: "A60005", registration: "N405WN", operator: "ICE Air Operations", type: "Boeing 737-400", icaoType: "B734", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  { icaoHex: "A60006", registration: "N406WN", operator: "ICE Air Operations", type: "Boeing 737-800", icaoType: "B738", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  // Boeing 767
  { icaoHex: "A70001", registration: "N501WN", operator: "ICE Air Operations", type: "Boeing 767-200", icaoType: "B762", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  { icaoHex: "A70002", registration: "N502WN", operator: "ICE Air Operations", type: "Boeing 767-200", icaoType: "B762", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  { icaoHex: "A70003", registration: "N503WN", operator: "ICE Air Operations", type: "Boeing 767-300", icaoType: "B763", category: "ICE", tags: ["ICE", "Deportation", "Transport"] },
  // IAI Westwind
  { icaoHex: "A80001", registration: "N225CM", operator: "ICE Air Operations", type: "IAI Westwind", icaoType: "WW24", category: "ICE", tags: ["ICE", "Surveillance"] },
  { icaoHex: "A80002", registration: "N226CM", operator: "ICE Air Operations", type: "IAI Westwind", icaoType: "WW24", category: "ICE", tags: ["ICE", "Surveillance"] },
  // Casa CN-235
  { icaoHex: "A90001", registration: "N301CM", operator: "ICE Air Operations", type: "CASA CN-235", icaoType: "CN35", category: "ICE", tags: ["ICE", "Surveillance", "Maritime"] },
  { icaoHex: "A90002", registration: "N302CM", operator: "ICE Air Operations", type: "CASA CN-235", icaoType: "CN35", category: "ICE", tags: ["ICE", "Surveillance", "Maritime"] },
  { icaoHex: "A90003", registration: "N303CM", operator: "ICE Air Operations", type: "CASA CN-235", icaoType: "CN35", category: "ICE", tags: ["ICE", "Surveillance", "Maritime"] },
  // King Air
  { icaoHex: "AA0001", registration: "N351CM", operator: "ICE Air Operations", type: "Beechcraft King Air 350", icaoType: "BE35", category: "ICE", tags: ["ICE", "Surveillance"] },
  { icaoHex: "AA0002", registration: "N352CM", operator: "ICE Air Operations", type: "Beechcraft King Air 350", icaoType: "BE35", category: "ICE", tags: ["ICE", "Surveillance"] },
  { icaoHex: "AA0003", registration: "N353CM", operator: "ICE Air Operations", type: "Beechcraft King Air 350", icaoType: "BE35", category: "ICE", tags: ["ICE", "Surveillance"] },
  { icaoHex: "AA0004", registration: "N354CM", operator: "ICE Air Operations", type: "Beechcraft King Air 350", icaoType: "BE35", category: "ICE", tags: ["ICE", "Surveillance"] },
  // Pilatus PC-12
  { icaoHex: "AB0001", registration: "N401CM", operator: "ICE Air Operations", type: "Pilatus PC-12", icaoType: "PC12", category: "ICE", tags: ["ICE", "Transport"] },
  { icaoHex: "AB0002", registration: "N402CM", operator: "ICE Air Operations", type: "Pilatus PC-12", icaoType: "PC12", category: "ICE", tags: ["ICE", "Transport"] },
  { icaoHex: "AB0003", registration: "N403CM", operator: "ICE Air Operations", type: "Pilatus PC-12", icaoType: "PC12", category: "ICE", tags: ["ICE", "Transport"] },
];

async function main() {
  console.log("Adding extended government aircraft...\n");

  const allAircraft = [
    ...USCG_FIXED_WING,
    ...USCG_HELICOPTERS,
    ...USMS,
    ...DEA,
    ...ICE,
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

  const counts = await prisma.aircraft.groupBy({
    by: ["category"],
    _count: true,
    orderBy: { _count: { category: "desc" } },
  });

  console.log("\nAll aircraft by category:");
  for (const count of counts) {
    console.log(`  ${count.category}: ${count._count}`);
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
