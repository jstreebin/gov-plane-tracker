import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// Legend-class National Security Cutters (WMSL)
const NSC = [
  { hullNumber: "WMSL-750", name: "USCGC Bertholf", class: "Legend-class", type: "National Security Cutter", homePort: "Alameda, CA", status: "Active", latitude: 37.77, longitude: -122.25, region: "Alameda, CA", source: "USCG" },
  { hullNumber: "WMSL-751", name: "USCGC Waesche", class: "Legend-class", type: "National Security Cutter", homePort: "Alameda, CA", status: "Active", latitude: 37.77, longitude: -122.25, region: "Alameda, CA", source: "USCG" },
  { hullNumber: "WMSL-752", name: "USCGC Stratton", class: "Legend-class", type: "National Security Cutter", homePort: "Alameda, CA", status: "Active", latitude: 37.77, longitude: -122.25, region: "Alameda, CA", source: "USCG" },
  { hullNumber: "WMSL-753", name: "USCGC Hamilton", class: "Legend-class", type: "National Security Cutter", homePort: "Charleston, SC", status: "Active", latitude: 32.78, longitude: -79.93, region: "Charleston, SC", source: "USCG" },
  { hullNumber: "WMSL-754", name: "USCGC James", class: "Legend-class", type: "National Security Cutter", homePort: "Charleston, SC", status: "Active", latitude: 32.78, longitude: -79.93, region: "Charleston, SC", source: "USCG" },
  { hullNumber: "WMSL-755", name: "USCGC Munro", class: "Legend-class", type: "National Security Cutter", homePort: "Alameda, CA", status: "Active", latitude: 37.77, longitude: -122.25, region: "Alameda, CA", source: "USCG" },
  { hullNumber: "WMSL-756", name: "USCGC Kimball", class: "Legend-class", type: "National Security Cutter", homePort: "Honolulu, HI", status: "Active", latitude: 21.31, longitude: -157.86, region: "Honolulu, HI", source: "USCG" },
  { hullNumber: "WMSL-757", name: "USCGC Midgett", class: "Legend-class", type: "National Security Cutter", homePort: "Honolulu, HI", status: "Active", latitude: 21.31, longitude: -157.86, region: "Honolulu, HI", source: "USCG" },
  { hullNumber: "WMSL-758", name: "USCGC Stone", class: "Legend-class", type: "National Security Cutter", homePort: "Charleston, SC", status: "Active", latitude: 32.78, longitude: -79.93, region: "Charleston, SC", source: "USCG" },
  { hullNumber: "WMSL-759", name: "USCGC Calhoun", class: "Legend-class", type: "National Security Cutter", homePort: "North Charleston, SC", status: "Active", latitude: 32.85, longitude: -79.98, region: "North Charleston, SC", source: "USCG" },
];

// Heritage-class Offshore Patrol Cutters (WMSM)
const OPC = [
  { hullNumber: "WMSM-915", name: "USCGC Argus", class: "Heritage-class", type: "Offshore Patrol Cutter", homePort: "Charleston, SC", status: "Active", latitude: 32.78, longitude: -79.93, region: "Charleston, SC", source: "USCG" },
  { hullNumber: "WMSM-916", name: "USCGC Chase", class: "Heritage-class", type: "Offshore Patrol Cutter", homePort: "TBD", status: "Commissioning", latitude: null, longitude: null, region: "Building", source: "USCG" },
];

// Famous-class Medium Endurance Cutters (WMEC) - Bear class
const FAMOUS_CLASS = [
  { hullNumber: "WMEC-901", name: "USCGC Bear", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Portsmouth, VA", status: "Active", latitude: 36.82, longitude: -76.29, region: "Portsmouth, VA", source: "USCG" },
  { hullNumber: "WMEC-902", name: "USCGC Tampa", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Portsmouth, VA", status: "Active", latitude: 36.82, longitude: -76.29, region: "Portsmouth, VA", source: "USCG" },
  { hullNumber: "WMEC-903", name: "USCGC Harriet Lane", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Portsmouth, VA", status: "Active", latitude: 36.82, longitude: -76.29, region: "Portsmouth, VA", source: "USCG" },
  { hullNumber: "WMEC-904", name: "USCGC Northland", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Portsmouth, VA", status: "Active", latitude: 36.82, longitude: -76.29, region: "Portsmouth, VA", source: "USCG" },
  { hullNumber: "WMEC-905", name: "USCGC Spencer", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Boston, MA", status: "Active", latitude: 42.36, longitude: -71.05, region: "Boston, MA", source: "USCG" },
  { hullNumber: "WMEC-906", name: "USCGC Seneca", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Boston, MA", status: "Active", latitude: 42.36, longitude: -71.05, region: "Boston, MA", source: "USCG" },
  { hullNumber: "WMEC-907", name: "USCGC Escanaba", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Boston, MA", status: "Active", latitude: 42.36, longitude: -71.05, region: "Boston, MA", source: "USCG" },
  { hullNumber: "WMEC-908", name: "USCGC Tahoma", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "New Castle, NH", status: "Active", latitude: 43.07, longitude: -70.71, region: "New Castle, NH", source: "USCG" },
  { hullNumber: "WMEC-909", name: "USCGC Campbell", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Kittery, ME", status: "Active", latitude: 43.08, longitude: -70.74, region: "Kittery, ME", source: "USCG" },
  { hullNumber: "WMEC-910", name: "USCGC Thetis", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Key West, FL", status: "Active", latitude: 24.56, longitude: -81.80, region: "Key West, FL", source: "USCG" },
  { hullNumber: "WMEC-911", name: "USCGC Forward", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Portsmouth, VA", status: "Active", latitude: 36.82, longitude: -76.29, region: "Portsmouth, VA", source: "USCG" },
  { hullNumber: "WMEC-912", name: "USCGC Legare", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Portsmouth, VA", status: "Active", latitude: 36.82, longitude: -76.29, region: "Portsmouth, VA", source: "USCG" },
  { hullNumber: "WMEC-913", name: "USCGC Mohawk", class: "Famous-class", type: "Medium Endurance Cutter", homePort: "Key West, FL", status: "Active", latitude: 24.56, longitude: -81.80, region: "Key West, FL", source: "USCG" },
];

// Reliance-class Medium Endurance Cutters (WMEC)
const RELIANCE_CLASS = [
  { hullNumber: "WMEC-615", name: "USCGC Reliance", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Kittery, ME", status: "Active", latitude: 43.08, longitude: -70.74, region: "Kittery, ME", source: "USCG" },
  { hullNumber: "WMEC-616", name: "USCGC Diligence", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Wilmington, NC", status: "Active", latitude: 34.24, longitude: -77.95, region: "Wilmington, NC", source: "USCG" },
  { hullNumber: "WMEC-617", name: "USCGC Vigilant", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Cape Canaveral, FL", status: "Active", latitude: 28.41, longitude: -80.61, region: "Cape Canaveral, FL", source: "USCG" },
  { hullNumber: "WMEC-618", name: "USCGC Active", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Port Angeles, WA", status: "Active", latitude: 48.12, longitude: -123.43, region: "Port Angeles, WA", source: "USCG" },
  { hullNumber: "WMEC-619", name: "USCGC Confidence", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Cape Canaveral, FL", status: "Active", latitude: 28.41, longitude: -80.61, region: "Cape Canaveral, FL", source: "USCG" },
  { hullNumber: "WMEC-620", name: "USCGC Resolute", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "St. Petersburg, FL", status: "Active", latitude: 27.77, longitude: -82.64, region: "St. Petersburg, FL", source: "USCG" },
  { hullNumber: "WMEC-621", name: "USCGC Valiant", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Jacksonville, FL", status: "Active", latitude: 30.33, longitude: -81.66, region: "Jacksonville, FL", source: "USCG" },
  { hullNumber: "WMEC-623", name: "USCGC Steadfast", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Astoria, OR", status: "Active", latitude: 46.19, longitude: -123.83, region: "Astoria, OR", source: "USCG" },
  { hullNumber: "WMEC-624", name: "USCGC Dauntless", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Galveston, TX", status: "Active", latitude: 29.31, longitude: -94.80, region: "Galveston, TX", source: "USCG" },
  { hullNumber: "WMEC-625", name: "USCGC Venturous", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "St. Petersburg, FL", status: "Active", latitude: 27.77, longitude: -82.64, region: "St. Petersburg, FL", source: "USCG" },
  { hullNumber: "WMEC-626", name: "USCGC Dependable", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Cape May, NJ", status: "Active", latitude: 38.94, longitude: -74.91, region: "Cape May, NJ", source: "USCG" },
  { hullNumber: "WMEC-627", name: "USCGC Vigorous", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Cape May, NJ", status: "Active", latitude: 38.94, longitude: -74.91, region: "Cape May, NJ", source: "USCG" },
  { hullNumber: "WMEC-628", name: "USCGC Durable", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "St. Petersburg, FL", status: "Active", latitude: 27.77, longitude: -82.64, region: "St. Petersburg, FL", source: "USCG" },
  { hullNumber: "WMEC-629", name: "USCGC Decisive", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Pascagoula, MS", status: "Active", latitude: 30.37, longitude: -88.55, region: "Pascagoula, MS", source: "USCG" },
  { hullNumber: "WMEC-630", name: "USCGC Alert", class: "Reliance-class", type: "Medium Endurance Cutter", homePort: "Astoria, OR", status: "Active", latitude: 46.19, longitude: -123.83, region: "Astoria, OR", source: "USCG" },
];

// Polar Icebreakers and Research Icebreaker
const ICEBREAKERS = [
  { hullNumber: "WAGB-10", name: "USCGC Polar Star", class: "Polar-class", type: "Heavy Icebreaker", homePort: "Seattle, WA", status: "Active", latitude: 47.60, longitude: -122.33, region: "Seattle, WA", source: "USCG" },
  { hullNumber: "WAGB-20", name: "USCGC Healy", class: "Healy-class", type: "Medium Icebreaker", homePort: "Seattle, WA", status: "Active", latitude: 47.60, longitude: -122.33, region: "Seattle, WA", source: "USCG" },
];

// Sentinel-class Fast Response Cutters (WPC)
const FRC = [
  { hullNumber: "WPC-1101", name: "USCGC Bernard C. Webber", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Miami Beach, FL", status: "Active", latitude: 25.77, longitude: -80.13, region: "Miami Beach, FL", source: "USCG" },
  { hullNumber: "WPC-1102", name: "USCGC Richard Etheridge", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Cape May, NJ", status: "Active", latitude: 38.94, longitude: -74.91, region: "Cape May, NJ", source: "USCG" },
  { hullNumber: "WPC-1103", name: "USCGC William Flores", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Key West, FL", status: "Active", latitude: 24.56, longitude: -81.80, region: "Key West, FL", source: "USCG" },
  { hullNumber: "WPC-1104", name: "USCGC Heriberto Hernandez", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Cape May, NJ", status: "Active", latitude: 38.94, longitude: -74.91, region: "Cape May, NJ", source: "USCG" },
  { hullNumber: "WPC-1105", name: "USCGC Margaret Norvell", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Miami Beach, FL", status: "Active", latitude: 25.77, longitude: -80.13, region: "Miami Beach, FL", source: "USCG" },
  { hullNumber: "WPC-1106", name: "USCGC Paul Clark", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "USCG" },
  { hullNumber: "WPC-1107", name: "USCGC Charles David Jr.", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Key West, FL", status: "Active", latitude: 24.56, longitude: -81.80, region: "Key West, FL", source: "USCG" },
  { hullNumber: "WPC-1108", name: "USCGC Charles Sexton", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Key West, FL", status: "Active", latitude: 24.56, longitude: -81.80, region: "Key West, FL", source: "USCG" },
  { hullNumber: "WPC-1109", name: "USCGC Kathleen Moore", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Miami Beach, FL", status: "Active", latitude: 25.77, longitude: -80.13, region: "Miami Beach, FL", source: "USCG" },
  { hullNumber: "WPC-1110", name: "USCGC Lawrence Lawson", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Philadelphia, PA", status: "Active", latitude: 39.95, longitude: -75.16, region: "Philadelphia, PA", source: "USCG" },
  { hullNumber: "WPC-1111", name: "USCGC Rollin Fritch", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "USCG" },
  { hullNumber: "WPC-1112", name: "USCGC Raymond Evans", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Honolulu, HI", status: "Active", latitude: 21.31, longitude: -157.86, region: "Honolulu, HI", source: "USCG" },
  { hullNumber: "WPC-1113", name: "USCGC Robert Goldman", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Port Hueneme, CA", status: "Active", latitude: 34.15, longitude: -119.21, region: "Port Hueneme, CA", source: "USCG" },
  { hullNumber: "WPC-1114", name: "USCGC Forrest Rednour", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "San Pedro, CA", status: "Active", latitude: 33.73, longitude: -118.27, region: "San Pedro, CA", source: "USCG" },
  { hullNumber: "WPC-1115", name: "USCGC Joseph Tezanos", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "USCG" },
  { hullNumber: "WPC-1116", name: "USCGC Joseph Napier", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Miami Beach, FL", status: "Active", latitude: 25.77, longitude: -80.13, region: "Miami Beach, FL", source: "USCG" },
  { hullNumber: "WPC-1117", name: "USCGC Donald Horsley", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "USCG" },
  { hullNumber: "WPC-1118", name: "USCGC John Scheuerman", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Guam", status: "Active", latitude: 13.45, longitude: 144.75, region: "Guam", source: "USCG" },
  { hullNumber: "WPC-1119", name: "USCGC Clarence Sutphin Jr.", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Cape May, NJ", status: "Active", latitude: 38.94, longitude: -74.91, region: "Cape May, NJ", source: "USCG" },
  { hullNumber: "WPC-1120", name: "USCGC Oliver Henry", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Guam", status: "Active", latitude: 13.45, longitude: 144.75, region: "Guam", source: "USCG" },
  { hullNumber: "WPC-1121", name: "USCGC Myrtle Hazard", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Guam", status: "Active", latitude: 13.45, longitude: 144.75, region: "Guam", source: "USCG" },
  { hullNumber: "WPC-1122", name: "USCGC William Hart", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "San Pedro, CA", status: "Active", latitude: 33.73, longitude: -118.27, region: "San Pedro, CA", source: "USCG" },
  { hullNumber: "WPC-1123", name: "USCGC Joseph Gerczak", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Honolulu, HI", status: "Active", latitude: 21.31, longitude: -157.86, region: "Honolulu, HI", source: "USCG" },
  { hullNumber: "WPC-1124", name: "USCGC Benjamin Bottoms", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Corpus Christi, TX", status: "Active", latitude: 27.80, longitude: -97.40, region: "Corpus Christi, TX", source: "USCG" },
  { hullNumber: "WPC-1125", name: "USCGC Celia Jackson", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Corpus Christi, TX", status: "Active", latitude: 27.80, longitude: -97.40, region: "Corpus Christi, TX", source: "USCG" },
  { hullNumber: "WPC-1126", name: "USCGC Glenn Harris", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Honolulu, HI", status: "Active", latitude: 21.31, longitude: -157.86, region: "Honolulu, HI", source: "USCG" },
  { hullNumber: "WPC-1127", name: "USCGC Emlen Tunnell", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "New Orleans, LA", status: "Active", latitude: 29.95, longitude: -90.08, region: "New Orleans, LA", source: "USCG" },
  { hullNumber: "WPC-1128", name: "USCGC Richard Dixon", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Galveston, TX", status: "Active", latitude: 29.31, longitude: -94.80, region: "Galveston, TX", source: "USCG" },
  { hullNumber: "WPC-1129", name: "USCGC Nathan Bruckenthal", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Boston, MA", status: "Active", latitude: 42.36, longitude: -71.05, region: "Boston, MA", source: "USCG" },
  { hullNumber: "WPC-1130", name: "USCGC George Cobb", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector San Francisco, CA", status: "Active", latitude: 37.78, longitude: -122.39, region: "San Francisco, CA", source: "USCG" },
  { hullNumber: "WPC-1131", name: "USCGC Terrell Horne", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "San Pedro, CA", status: "Active", latitude: 33.73, longitude: -118.27, region: "San Pedro, CA", source: "USCG" },
  { hullNumber: "WPC-1132", name: "USCGC John Witherspoon", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector San Francisco, CA", status: "Active", latitude: 37.78, longitude: -122.39, region: "San Francisco, CA", source: "USCG" },
  { hullNumber: "WPC-1133", name: "USCGC Melvin Bell", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Ketchikan, AK", status: "Active", latitude: 55.34, longitude: -131.65, region: "Ketchikan, AK", source: "USCG" },
  { hullNumber: "WPC-1134", name: "USCGC Arie Funaki", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Puget Sound, WA", status: "Active", latitude: 47.60, longitude: -122.33, region: "Seattle, WA", source: "USCG" },
  { hullNumber: "WPC-1135", name: "USCGC Herbert Adkins", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Kodiak, AK", status: "Active", latitude: 57.79, longitude: -152.39, region: "Kodiak, AK", source: "USCG" },
  { hullNumber: "WPC-1136", name: "USCGC Reginald Tibbetts", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Long Island Sound, CT", status: "Active", latitude: 41.05, longitude: -73.53, region: "New Haven, CT", source: "USCG" },
  { hullNumber: "WPC-1137", name: "USCGC Maurice Jester", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Little Creek, VA", status: "Active", latitude: 36.92, longitude: -76.19, region: "Little Creek, VA", source: "USCG" },
  { hullNumber: "WPC-1138", name: "USCGC Walter Foster", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Ketchikan, AK", status: "Active", latitude: 55.34, longitude: -131.65, region: "Ketchikan, AK", source: "USCG" },
  { hullNumber: "WPC-1139", name: "USCGC Calvin Lanoue", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Mobile, AL", status: "Active", latitude: 30.69, longitude: -88.04, region: "Mobile, AL", source: "USCG" },
  { hullNumber: "WPC-1140", name: "USCGC William Sparling", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "New Orleans, LA", status: "Active", latitude: 29.95, longitude: -90.08, region: "New Orleans, LA", source: "USCG" },
  { hullNumber: "WPC-1141", name: "USCGC Daniel Tarr", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Mobile, AL", status: "Active", latitude: 30.69, longitude: -88.04, region: "Mobile, AL", source: "USCG" },
  { hullNumber: "WPC-1142", name: "USCGC Bailey Barco", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Juneau, AK", status: "Active", latitude: 58.30, longitude: -134.42, region: "Juneau, AK", source: "USCG" },
  { hullNumber: "WPC-1143", name: "USCGC Harold Miller", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Puget Sound, WA", status: "Active", latitude: 47.60, longitude: -122.33, region: "Seattle, WA", source: "USCG" },
  { hullNumber: "WPC-1144", name: "USCGC Frank Eckard", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Humboldt Bay, CA", status: "Active", latitude: 40.77, longitude: -124.18, region: "Eureka, CA", source: "USCG" },
  { hullNumber: "WPC-1145", name: "USCGC Edgar Culbertson", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector North Bend, OR", status: "Active", latitude: 43.42, longitude: -124.22, region: "North Bend, OR", source: "USCG" },
  { hullNumber: "WPC-1146", name: "USCGC Glen Guymann", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector San Juan, PR", status: "Active", latitude: 18.47, longitude: -66.12, region: "San Juan, PR", source: "USCG" },
  { hullNumber: "WPC-1147", name: "USCGC Francesco Valenti", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Wilmington, NC", status: "Active", latitude: 34.24, longitude: -77.95, region: "Wilmington, NC", source: "USCG" },
  { hullNumber: "WPC-1148", name: "USCGC Evergreen", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Charleston, SC", status: "Active", latitude: 32.78, longitude: -79.93, region: "Charleston, SC", source: "USCG" },
  { hullNumber: "WPC-1149", name: "USCGC Sweetgum", class: "Sentinel-class", type: "Fast Response Cutter", homePort: "Sector Jacksonville, FL", status: "Active", latitude: 30.33, longitude: -81.66, region: "Jacksonville, FL", source: "USCG" },
];

// NOAA Ships (Civilian research vessels)
const NOAA_SHIPS = [
  { hullNumber: "R 104", name: "NOAAS Ronald H. Brown", class: "Oceanographer-class", type: "Research Ship", homePort: "Charleston, SC", status: "Active", latitude: 32.78, longitude: -79.93, region: "Charleston, SC", source: "NOAA" },
  { hullNumber: "S 220", name: "NOAAS Fairweather", class: "Fairweather-class", type: "Hydrographic Survey Ship", homePort: "Ketchikan, AK", status: "Active", latitude: 55.34, longitude: -131.65, region: "Ketchikan, AK", source: "NOAA" },
  { hullNumber: "S 221", name: "NOAAS Rainier", class: "Fairweather-class", type: "Hydrographic Survey Ship", homePort: "Newport, OR", status: "Active", latitude: 44.63, longitude: -124.05, region: "Newport, OR", source: "NOAA" },
  { hullNumber: "R 227", name: "NOAAS Okeanos Explorer", class: "Okeanos-class", type: "Research Ship", homePort: "North Kingstown, RI", status: "Active", latitude: 41.58, longitude: -71.45, region: "North Kingstown, RI", source: "NOAA" },
  { hullNumber: "R 332", name: "NOAAS Bell M. Shimada", class: "Fishery Survey Ship", type: "Research Ship", homePort: "Newport, OR", status: "Active", latitude: 44.63, longitude: -124.05, region: "Newport, OR", source: "NOAA" },
  { hullNumber: "R 333", name: "NOAAS Henry B. Bigelow", class: "Fishery Survey Ship", type: "Research Ship", homePort: "Newport, RI", status: "Active", latitude: 41.49, longitude: -71.32, region: "Newport, RI", source: "NOAA" },
  { hullNumber: "R 334", name: "NOAAS Reuben Lasker", class: "Fishery Survey Ship", type: "Research Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "NOAA" },
  { hullNumber: "R 335", name: "NOAAS Oscar Dyson", class: "Fishery Survey Ship", type: "Research Ship", homePort: "Kodiak, AK", status: "Active", latitude: 57.79, longitude: -152.39, region: "Kodiak, AK", source: "NOAA" },
  { hullNumber: "R 336", name: "NOAAS Pisces", class: "Fishery Survey Ship", type: "Research Ship", homePort: "Pascagoula, MS", status: "Active", latitude: 30.37, longitude: -88.55, region: "Pascagoula, MS", source: "NOAA" },
  { hullNumber: "S 222", name: "NOAAS Thomas Jefferson", class: "Thomas Jefferson-class", type: "Hydrographic Survey Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "NOAA" },
  { hullNumber: "S 226", name: "NOAAS Nancy Foster", class: "Swath-class", type: "Research Ship", homePort: "Charleston, SC", status: "Active", latitude: 32.78, longitude: -79.93, region: "Charleston, SC", source: "NOAA" },
  { hullNumber: "R 337", name: "NOAAS Oscar Elton Sette", class: "Fishery Survey Ship", type: "Research Ship", homePort: "Honolulu, HI", status: "Active", latitude: 21.31, longitude: -157.86, region: "Honolulu, HI", source: "NOAA" },
  { hullNumber: "R 352", name: "NOAAS Hi'ialakai", class: "Research Ship", type: "Research Ship", homePort: "Honolulu, HI", status: "Active", latitude: 21.31, longitude: -157.86, region: "Honolulu, HI", source: "NOAA" },
  { hullNumber: "S 230", name: "NOAAS Ferdinand R. Hassler", class: "Survey Ship", type: "Hydrographic Survey Ship", homePort: "New Castle, NH", status: "Active", latitude: 43.07, longitude: -70.71, region: "New Castle, NH", source: "NOAA" },
];

async function main() {
  console.log("Adding US Coast Guard and NOAA vessels...\n");

  const allShips = [
    ...NSC,
    ...OPC,
    ...FAMOUS_CLASS,
    ...RELIANCE_CLASS,
    ...ICEBREAKERS,
    ...FRC,
    ...NOAA_SHIPS,
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

  const shipCounts = await prisma.ship.groupBy({
    by: ["type"],
    _count: true,
    orderBy: { _count: { type: "desc" } },
  });

  console.log("\nAll vessels by type:");
  for (const count of shipCounts) {
    console.log(`  ${count.type}: ${count._count}`);
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
