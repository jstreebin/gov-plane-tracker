import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// Military Sealift Command (MSC) - Combat Logistics Force
const CLF_SHIPS = [
  // Henry J. Kaiser-class Fleet Replenishment Oilers (T-AO)
  { hullNumber: "T-AO-187", name: "USNS Henry J. Kaiser", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-188", name: "USNS Joshua Humphreys", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-189", name: "USNS John Lenthall", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-190", name: "USNS Andrew J. Higgins", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-191", name: "USNS Benjamin Isherwood", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-192", name: "USNS Henry Eckford", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-193", name: "USNS Walter S. Diehl", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-194", name: "USNS John Ericsson", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-195", name: "USNS Leroy Grumman", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-196", name: "USNS Kanawha", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-197", name: "USNS Pecos", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-198", name: "USNS Big Horn", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-199", name: "USNS Tippecanoe", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Guam", status: "Forward Deployed", latitude: 13.45, longitude: 144.75, region: "Guam", source: "MSC" },
  { hullNumber: "T-AO-200", name: "USNS Guadalupe", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-201", name: "USNS Patuxent", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-202", name: "USNS Yukon", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-203", name: "USNS Laramie", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-204", name: "USNS Rappahannock", class: "Henry J. Kaiser-class", type: "Fleet Replenishment Oiler", homePort: "Singapore", status: "Forward Deployed", latitude: 1.29, longitude: 103.85, region: "Singapore", source: "MSC" },

  // John Lewis-class Fleet Replenishment Oilers (T-AO)
  { hullNumber: "T-AO-205", name: "USNS John Lewis", class: "John Lewis-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-206", name: "USNS Harvey Milk", class: "John Lewis-class", type: "Fleet Replenishment Oiler", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AO-207", name: "USNS Earl Warren", class: "John Lewis-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AO-208", name: "USNS Robert F. Kennedy", class: "John Lewis-class", type: "Fleet Replenishment Oiler", homePort: "Norfolk, VA", status: "Building", latitude: null, longitude: null, region: "Building", source: "MSC" },
  { hullNumber: "T-AO-209", name: "USNS Lucy Stone", class: "John Lewis-class", type: "Fleet Replenishment Oiler", homePort: "TBD", status: "Building", latitude: null, longitude: null, region: "Building", source: "MSC" },
  { hullNumber: "T-AO-210", name: "USNS Sojourner Truth", class: "John Lewis-class", type: "Fleet Replenishment Oiler", homePort: "TBD", status: "Building", latitude: null, longitude: null, region: "Building", source: "MSC" },

  // Lewis and Clark-class Dry Cargo/Ammunition Ships (T-AKE)
  { hullNumber: "T-AKE-1", name: "USNS Lewis and Clark", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AKE-2", name: "USNS Sacagawea", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AKE-3", name: "USNS Alan Shepard", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AKE-4", name: "USNS Richard E. Byrd", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AKE-5", name: "USNS Robert E. Peary", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AKE-6", name: "USNS Amelia Earhart", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "Guam", status: "Forward Deployed", latitude: 13.45, longitude: 144.75, region: "Guam", source: "MSC" },
  { hullNumber: "T-AKE-7", name: "USNS Carl Brashear", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AKE-8", name: "USNS Wally Schirra", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AKE-9", name: "USNS Matthew Perry", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "Singapore", status: "Forward Deployed", latitude: 1.29, longitude: 103.85, region: "Singapore", source: "MSC" },
  { hullNumber: "T-AKE-10", name: "USNS Charles Drew", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AKE-11", name: "USNS Washington Chambers", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AKE-12", name: "USNS William McLean", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AKE-13", name: "USNS Medgar Evers", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-AKE-14", name: "USNS Cesar Chavez", class: "Lewis and Clark-class", type: "Dry Cargo Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
];

// Sealift Ships
const SEALIFT_SHIPS = [
  // Bob Hope-class Vehicle Cargo Ships (T-AKR)
  { hullNumber: "T-AKR-300", name: "USNS Bob Hope", class: "Bob Hope-class", type: "Vehicle Cargo Ship", homePort: "Baltimore, MD", status: "Ready Reserve", latitude: 39.27, longitude: -76.58, region: "Baltimore, MD", source: "MSC" },
  { hullNumber: "T-AKR-301", name: "USNS Fisher", class: "Bob Hope-class", type: "Vehicle Cargo Ship", homePort: "Baltimore, MD", status: "Ready Reserve", latitude: 39.27, longitude: -76.58, region: "Baltimore, MD", source: "MSC" },
  { hullNumber: "T-AKR-302", name: "USNS Seay", class: "Bob Hope-class", type: "Vehicle Cargo Ship", homePort: "Blount Island, FL", status: "Ready Reserve", latitude: 30.40, longitude: -81.53, region: "Jacksonville, FL", source: "MSC" },
  { hullNumber: "T-AKR-303", name: "USNS Mendonca", class: "Bob Hope-class", type: "Vehicle Cargo Ship", homePort: "Blount Island, FL", status: "Ready Reserve", latitude: 30.40, longitude: -81.53, region: "Jacksonville, FL", source: "MSC" },
  { hullNumber: "T-AKR-304", name: "USNS Pililaau", class: "Bob Hope-class", type: "Vehicle Cargo Ship", homePort: "San Diego, CA", status: "Ready Reserve", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AKR-305", name: "USNS Brittin", class: "Bob Hope-class", type: "Vehicle Cargo Ship", homePort: "Beaumont, TX", status: "Ready Reserve", latitude: 30.08, longitude: -94.10, region: "Beaumont, TX", source: "MSC" },
  { hullNumber: "T-AKR-306", name: "USNS Benavidez", class: "Bob Hope-class", type: "Vehicle Cargo Ship", homePort: "San Diego, CA", status: "Ready Reserve", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },

  // Watson-class Vehicle Cargo Ships (T-AKR)
  { hullNumber: "T-AKR-310", name: "USNS Watson", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Diego Garcia", status: "Prepositioning", latitude: -7.32, longitude: 72.42, region: "Diego Garcia", source: "MSC" },
  { hullNumber: "T-AKR-311", name: "USNS Sisler", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Diego Garcia", status: "Prepositioning", latitude: -7.32, longitude: 72.42, region: "Diego Garcia", source: "MSC" },
  { hullNumber: "T-AKR-312", name: "USNS Dahl", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Diego Garcia", status: "Prepositioning", latitude: -7.32, longitude: 72.42, region: "Diego Garcia", source: "MSC" },
  { hullNumber: "T-AKR-313", name: "USNS Red Cloud", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Diego Garcia", status: "Prepositioning", latitude: -7.32, longitude: 72.42, region: "Diego Garcia", source: "MSC" },
  { hullNumber: "T-AKR-314", name: "USNS Charlton", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Diego Garcia", status: "Prepositioning", latitude: -7.32, longitude: -72.42, region: "Diego Garcia", source: "MSC" },
  { hullNumber: "T-AKR-315", name: "USNS Watkins", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Saipan", status: "Prepositioning", latitude: 15.21, longitude: 145.75, region: "Saipan", source: "MSC" },
  { hullNumber: "T-AKR-316", name: "USNS Pomeroy", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Saipan", status: "Prepositioning", latitude: 15.21, longitude: 145.75, region: "Saipan", source: "MSC" },
  { hullNumber: "T-AKR-317", name: "USNS Soderman", class: "Watson-class", type: "Vehicle Cargo Ship", homePort: "Guam", status: "Prepositioning", latitude: 13.45, longitude: 144.75, region: "Guam", source: "MSC" },
];

// Special Mission Ships
const SPECIAL_MISSION_SHIPS = [
  // Submarine Tenders (AS)
  { hullNumber: "AS-39", name: "USS Emory S. Land", class: "Emory S. Land-class", type: "Submarine Tender", homePort: "Guam", status: "Forward Deployed", latitude: 13.45, longitude: 144.75, region: "Guam", source: "USN" },
  { hullNumber: "AS-40", name: "USS Frank Cable", class: "Emory S. Land-class", type: "Submarine Tender", homePort: "Guam", status: "Forward Deployed", latitude: 13.45, longitude: 144.75, region: "Guam", source: "USN" },

  // Ocean Surveillance Ships (T-AGOS)
  { hullNumber: "T-AGOS-19", name: "USNS Victorious", class: "Victorious-class", type: "Ocean Surveillance Ship", homePort: "Yokohama, Japan", status: "Active", latitude: 35.44, longitude: 139.64, region: "Yokohama, Japan", source: "MSC" },
  { hullNumber: "T-AGOS-20", name: "USNS Able", class: "Victorious-class", type: "Ocean Surveillance Ship", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "MSC" },
  { hullNumber: "T-AGOS-21", name: "USNS Effective", class: "Victorious-class", type: "Ocean Surveillance Ship", homePort: "Yokohama, Japan", status: "Active", latitude: 35.44, longitude: 139.64, region: "Yokohama, Japan", source: "MSC" },
  { hullNumber: "T-AGOS-22", name: "USNS Loyal", class: "Victorious-class", type: "Ocean Surveillance Ship", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "MSC" },
  { hullNumber: "T-AGOS-23", name: "USNS Impeccable", class: "Impeccable-class", type: "Ocean Surveillance Ship", homePort: "Yokohama, Japan", status: "Active", latitude: 35.44, longitude: 139.64, region: "Yokohama, Japan", source: "MSC" },

  // Missile Range Instrumentation Ships (T-AGM)
  { hullNumber: "T-AGM-23", name: "USNS Observation Island", class: "Observation Island-class", type: "Missile Range Ship", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "MSC" },
  { hullNumber: "T-AGM-25", name: "USNS Howard O. Lorenzen", class: "Howard O. Lorenzen-class", type: "Missile Range Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },

  // Cable Laying Ships (T-ARC)
  { hullNumber: "T-ARC-7", name: "USNS Zeus", class: "Zeus-class", type: "Cable Ship", homePort: "Guam", status: "Active", latitude: 13.45, longitude: 144.75, region: "Guam", source: "MSC" },

  // Rescue and Salvage Ships (T-ARS)
  { hullNumber: "T-ARS-50", name: "USNS Safeguard", class: "Safeguard-class", type: "Rescue and Salvage Ship", homePort: "Sasebo, Japan", status: "Active", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "MSC" },
  { hullNumber: "T-ARS-51", name: "USNS Grasp", class: "Safeguard-class", type: "Rescue and Salvage Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
  { hullNumber: "T-ARS-52", name: "USNS Salvor", class: "Safeguard-class", type: "Rescue and Salvage Ship", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "MSC" },
  { hullNumber: "T-ARS-53", name: "USNS Grapple", class: "Safeguard-class", type: "Rescue and Salvage Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },

  // Fleet Ocean Tugs (T-ATF)
  { hullNumber: "T-ATF-166", name: "USNS Powhatan", class: "Powhatan-class", type: "Fleet Ocean Tug", homePort: "Little Creek, VA", status: "Active", latitude: 36.92, longitude: -76.19, region: "Little Creek, VA", source: "MSC" },
  { hullNumber: "T-ATF-168", name: "USNS Catawba", class: "Powhatan-class", type: "Fleet Ocean Tug", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-ATF-169", name: "USNS Navajo", class: "Powhatan-class", type: "Fleet Ocean Tug", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "MSC" },
  { hullNumber: "T-ATF-170", name: "USNS Mohawk", class: "Powhatan-class", type: "Fleet Ocean Tug", homePort: "Rota, Spain", status: "Forward Deployed", latitude: 36.62, longitude: -6.35, region: "Rota, Spain", source: "MSC" },
  { hullNumber: "T-ATF-171", name: "USNS Sioux", class: "Powhatan-class", type: "Fleet Ocean Tug", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "MSC" },
  { hullNumber: "T-ATF-172", name: "USNS Apache", class: "Powhatan-class", type: "Fleet Ocean Tug", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
];

// Navy Mine Countermeasures Ships (MCM)
const MCM_SHIPS = [
  { hullNumber: "MCM-1", name: "USS Avenger", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USN" },
  { hullNumber: "MCM-4", name: "USS Champion", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USN" },
  { hullNumber: "MCM-5", name: "USS Guardian", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "USN" },
  { hullNumber: "MCM-6", name: "USS Devastator", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "USN" },
  { hullNumber: "MCM-7", name: "USS Patriot", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "USN" },
  { hullNumber: "MCM-9", name: "USS Pioneer", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "USN" },
  { hullNumber: "MCM-11", name: "USS Gladiator", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USN" },
  { hullNumber: "MCM-14", name: "USS Chief", class: "Avenger-class", type: "Mine Countermeasures Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USN" },
];

// Navy Patrol Craft (PC) - Cyclone-class
const PC_SHIPS = [
  { hullNumber: "PC-1", name: "USS Cyclone", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-3", name: "USS Hurricane", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-4", name: "USS Monsoon", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-5", name: "USS Typhoon", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-6", name: "USS Sirocco", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-8", name: "USS Zephyr", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-9", name: "USS Chinook", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-10", name: "USS Firebolt", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-11", name: "USS Whirlwind", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
  { hullNumber: "PC-12", name: "USS Thunderbolt", class: "Cyclone-class", type: "Patrol Craft", homePort: "Manama, Bahrain", status: "Forward Deployed", latitude: 26.23, longitude: 50.59, region: "Bahrain", source: "USN" },
];

async function main() {
  console.log("Adding Military Sealift Command and additional Navy vessels...\n");

  const allShips = [
    ...CLF_SHIPS,
    ...SEALIFT_SHIPS,
    ...SPECIAL_MISSION_SHIPS,
    ...MCM_SHIPS,
    ...PC_SHIPS,
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

  console.log(`\nAdded ${added} ships, skipped ${skipped} existing.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
