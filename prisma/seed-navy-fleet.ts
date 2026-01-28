import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

// Ticonderoga-class Cruisers (CG)
const CRUISERS = [
  { hullNumber: "CG-52", name: "USS Bunker Hill", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "CG-53", name: "USS Mobile Bay", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "CG-54", name: "USS Antietam", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "CG-55", name: "USS Leyte Gulf", class: "Ticonderoga-class", type: "Cruiser", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "CG-56", name: "USS San Jacinto", class: "Ticonderoga-class", type: "Cruiser", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "CG-57", name: "USS Lake Champlain", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "CG-58", name: "USS Philippine Sea", class: "Ticonderoga-class", type: "Cruiser", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "CG-59", name: "USS Princeton", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "CG-60", name: "USS Normandy", class: "Ticonderoga-class", type: "Cruiser", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "CG-61", name: "USS Monterey", class: "Ticonderoga-class", type: "Cruiser", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "CG-62", name: "USS Chancellorsville", class: "Ticonderoga-class", type: "Cruiser", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "CG-63", name: "USS Cowpens", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "CG-64", name: "USS Gettysburg", class: "Ticonderoga-class", type: "Cruiser", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "CG-65", name: "USS Chosin", class: "Ticonderoga-class", type: "Cruiser", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "CG-66", name: "USS Hue City", class: "Ticonderoga-class", type: "Cruiser", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "CG-67", name: "USS Shiloh", class: "Ticonderoga-class", type: "Cruiser", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "CG-68", name: "USS Anzio", class: "Ticonderoga-class", type: "Cruiser", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "CG-69", name: "USS Vicksburg", class: "Ticonderoga-class", type: "Cruiser", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "CG-70", name: "USS Lake Erie", class: "Ticonderoga-class", type: "Cruiser", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "CG-71", name: "USS Cape St. George", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "CG-72", name: "USS Vella Gulf", class: "Ticonderoga-class", type: "Cruiser", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "CG-73", name: "USS Port Royal", class: "Ticonderoga-class", type: "Cruiser", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
];

// Arleigh Burke-class Destroyers (DDG)
const DESTROYERS = [
  { hullNumber: "DDG-51", name: "USS Arleigh Burke", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-52", name: "USS Barry", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-53", name: "USS John Paul Jones", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-54", name: "USS Curtis Wilbur", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-55", name: "USS Stout", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-56", name: "USS John S. McCain", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-57", name: "USS Mitscher", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-58", name: "USS Laboon", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-59", name: "USS Russell", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-60", name: "USS Paul Hamilton", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-61", name: "USS Ramage", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-62", name: "USS Fitzgerald", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-63", name: "USS Stethem", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-64", name: "USS Carney", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "DDG-65", name: "USS Benfold", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-66", name: "USS Gonzalez", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-67", name: "USS Cole", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-68", name: "USS The Sullivans", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "DDG-69", name: "USS Milius", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-70", name: "USS Hopper", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-71", name: "USS Ross", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Rota, Spain", status: "Forward Deployed", latitude: 36.62, longitude: -6.35, region: "Rota, Spain", source: "USNI" },
  { hullNumber: "DDG-72", name: "USS Mahan", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-73", name: "USS Decatur", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-74", name: "USS McFaul", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-75", name: "USS Donald Cook", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Rota, Spain", status: "Forward Deployed", latitude: 36.62, longitude: -6.35, region: "Rota, Spain", source: "USNI" },
  { hullNumber: "DDG-76", name: "USS Higgins", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-77", name: "USS O'Kane", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-78", name: "USS Porter", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Rota, Spain", status: "Forward Deployed", latitude: 36.62, longitude: -6.35, region: "Rota, Spain", source: "USNI" },
  { hullNumber: "DDG-79", name: "USS Oscar Austin", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-80", name: "USS Roosevelt", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "DDG-81", name: "USS Winston S. Churchill", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-82", name: "USS Lassen", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-83", name: "USS Howard", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-84", name: "USS Bulkeley", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-85", name: "USS McCampbell", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-86", name: "USS Shoup", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Everett, WA", status: "Active", latitude: 47.98, longitude: -122.22, region: "Everett, WA", source: "USNI" },
  { hullNumber: "DDG-87", name: "USS Mason", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-88", name: "USS Preble", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-89", name: "USS Mustin", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan", source: "USNI" },
  { hullNumber: "DDG-90", name: "USS Chafee", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-91", name: "USS Pinckney", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-92", name: "USS Momsen", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Everett, WA", status: "Active", latitude: 47.98, longitude: -122.22, region: "Everett, WA", source: "USNI" },
  { hullNumber: "DDG-93", name: "USS Chung-Hoon", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-94", name: "USS Nitze", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-95", name: "USS James E. Williams", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-96", name: "USS Bainbridge", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-97", name: "USS Halsey", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-98", name: "USS Forrest Sherman", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-99", name: "USS Farragut", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "DDG-100", name: "USS Kidd", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Everett, WA", status: "Active", latitude: 47.98, longitude: -122.22, region: "Everett, WA", source: "USNI" },
  { hullNumber: "DDG-101", name: "USS Gridley", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-102", name: "USS Sampson", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Everett, WA", status: "Active", latitude: 47.98, longitude: -122.22, region: "Everett, WA", source: "USNI" },
  { hullNumber: "DDG-103", name: "USS Truxtun", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-104", name: "USS Sterett", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-105", name: "USS Dewey", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-106", name: "USS Stockdale", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-107", name: "USS Gravely", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-108", name: "USS Wayne E. Meyer", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-109", name: "USS Jason Dunham", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-110", name: "USS William P. Lawrence", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-111", name: "USS Spruance", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-112", name: "USS Michael Murphy", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-113", name: "USS John Finn", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-114", name: "USS Ralph Johnson", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Everett, WA", status: "Active", latitude: 47.98, longitude: -122.22, region: "Everett, WA", source: "USNI" },
  { hullNumber: "DDG-115", name: "USS Rafael Peralta", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-116", name: "USS Thomas Hudner", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "DDG-117", name: "USS Paul Ignatius", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Rota, Spain", status: "Forward Deployed", latitude: 36.62, longitude: -6.35, region: "Rota, Spain", source: "USNI" },
  { hullNumber: "DDG-118", name: "USS Daniel Inouye", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "DDG-119", name: "USS Delbert D. Black", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "DDG-120", name: "USS Carl M. Levin", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-121", name: "USS Frank E. Petersen Jr.", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-122", name: "USS John Basilone", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-123", name: "USS Lenah H. Sutcliffe Higbee", class: "Arleigh Burke-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-124", name: "USS Harvey C. Barnum Jr.", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "DDG-125", name: "USS Jack H. Lucas", class: "Arleigh Burke-class Flight III", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-126", name: "USS Louis H. Wilson Jr.", class: "Arleigh Burke-class Flight III", type: "Destroyer", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
];

// Zumwalt-class Destroyers
const ZUMWALTS = [
  { hullNumber: "DDG-1000", name: "USS Zumwalt", class: "Zumwalt-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-1001", name: "USS Michael Monsoor", class: "Zumwalt-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "DDG-1002", name: "USS Lyndon B. Johnson", class: "Zumwalt-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
];

// Littoral Combat Ships (LCS)
const LCS = [
  { hullNumber: "LCS-1", name: "USS Freedom", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-2", name: "USS Independence", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-3", name: "USS Fort Worth", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-4", name: "USS Coronado", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-5", name: "USS Milwaukee", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-6", name: "USS Jackson", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-7", name: "USS Detroit", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-8", name: "USS Montgomery", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-9", name: "USS Little Rock", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-10", name: "USS Gabrielle Giffords", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-11", name: "USS Sioux City", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-12", name: "USS Omaha", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-13", name: "USS Wichita", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-14", name: "USS Manchester", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-15", name: "USS Billings", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-16", name: "USS Tulsa", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-18", name: "USS Charleston", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-19", name: "USS St. Louis", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-20", name: "USS Cincinnati", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-21", name: "USS Minneapolis-Saint Paul", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-22", name: "USS Kansas City", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-23", name: "USS Cooperstown", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-24", name: "USS Oakland", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-25", name: "USS Marinette", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "Mayport, FL", status: "Active", latitude: 30.39, longitude: -81.43, region: "Mayport, FL", source: "USNI" },
  { hullNumber: "LCS-26", name: "USS Mobile", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-28", name: "USS Savannah", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-30", name: "USS Canberra", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LCS-32", name: "USS Santa Barbara", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
];

// Attack Submarines (SSN)
const ATTACK_SUBS = [
  // Virginia-class
  { hullNumber: "SSN-774", name: "USS Virginia", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-775", name: "USS Texas", class: "Virginia-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-776", name: "USS Hawaii", class: "Virginia-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-777", name: "USS North Carolina", class: "Virginia-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-778", name: "USS New Hampshire", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-779", name: "USS New Mexico", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-780", name: "USS Missouri", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-781", name: "USS California", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-782", name: "USS Mississippi", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-783", name: "USS Minnesota", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-784", name: "USS North Dakota", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-785", name: "USS John Warner", class: "Virginia-class", type: "Attack Submarine", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "SSN-786", name: "USS Illinois", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-787", name: "USS Washington", class: "Virginia-class", type: "Attack Submarine", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "SSN-788", name: "USS Colorado", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-789", name: "USS Indiana", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-790", name: "USS South Dakota", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-791", name: "USS Delaware", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-792", name: "USS Vermont", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-793", name: "USS Oregon", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-794", name: "USS Montana", class: "Virginia-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-795", name: "USS Hyman G. Rickover", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-796", name: "USS New Jersey", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-797", name: "USS Iowa", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-798", name: "USS Massachusetts", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  // Seawolf-class
  { hullNumber: "SSN-21", name: "USS Seawolf", class: "Seawolf-class", type: "Attack Submarine", homePort: "Bremerton, WA", status: "Active", latitude: 47.56, longitude: -122.65, region: "Bremerton, WA", source: "USNI" },
  { hullNumber: "SSN-22", name: "USS Connecticut", class: "Seawolf-class", type: "Attack Submarine", homePort: "Bremerton, WA", status: "Maintenance", latitude: 47.56, longitude: -122.65, region: "Bremerton, WA", source: "USNI" },
  { hullNumber: "SSN-23", name: "USS Jimmy Carter", class: "Seawolf-class", type: "Attack Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  // Los Angeles-class (remaining active)
  { hullNumber: "SSN-719", name: "USS Providence", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-720", name: "USS Pittsburgh", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-721", name: "USS Chicago", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-722", name: "USS Key West", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-723", name: "USS Oklahoma City", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Guam", status: "Forward Deployed", latitude: 13.45, longitude: 144.75, region: "Guam", source: "USNI" },
  { hullNumber: "SSN-724", name: "USS Louisville", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-725", name: "USS Helena", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "SSN-750", name: "USS Newport News", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "SSN-751", name: "USS San Juan", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-752", name: "USS Pasadena", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-753", name: "USS Albany", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "SSN-754", name: "USS Topeka", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "SSN-755", name: "USS Miami", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Decommissioned", latitude: null, longitude: null, region: "Decommissioned", source: "USNI" },
  { hullNumber: "SSN-756", name: "USS Scranton", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "SSN-757", name: "USS Alexandria", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-758", name: "USS Asheville", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "SSN-759", name: "USS Jefferson City", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "SSN-760", name: "USS Annapolis", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "SSN-761", name: "USS Springfield", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-762", name: "USS Columbus", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-763", name: "USS Santa Fe", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Guam", status: "Forward Deployed", latitude: 13.45, longitude: 144.75, region: "Guam", source: "USNI" },
  { hullNumber: "SSN-764", name: "USS Boise", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Norfolk, VA", status: "Maintenance", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "SSN-765", name: "USS Montpelier", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "SSN-766", name: "USS Charlotte", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-767", name: "USS Hampton", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "SSN-768", name: "USS Hartford", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-769", name: "USS Toledo", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Groton, CT", source: "USNI" },
  { hullNumber: "SSN-770", name: "USS Tucson", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "SSN-771", name: "USS Columbia", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-772", name: "USS Greeneville", class: "Los Angeles-class", type: "Attack Submarine", homePort: "Pearl Harbor, HI", status: "Active", latitude: 21.35, longitude: -157.95, region: "Pearl Harbor, HI", source: "USNI" },
  { hullNumber: "SSN-773", name: "USS Cheyenne", class: "Los Angeles-class", type: "Attack Submarine", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
];

// Ballistic Missile Submarines (SSBN)
const BALLISTIC_SUBS = [
  { hullNumber: "SSBN-730", name: "USS Henry M. Jackson", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-731", name: "USS Alabama", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-732", name: "USS Alaska", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-733", name: "USS Nevada", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-734", name: "USS Tennessee", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Kings Bay, GA", status: "Active", latitude: 30.80, longitude: -81.50, region: "Kings Bay, GA", source: "USNI" },
  { hullNumber: "SSBN-735", name: "USS Pennsylvania", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-736", name: "USS West Virginia", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Kings Bay, GA", status: "Active", latitude: 30.80, longitude: -81.50, region: "Kings Bay, GA", source: "USNI" },
  { hullNumber: "SSBN-737", name: "USS Kentucky", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-738", name: "USS Maryland", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Kings Bay, GA", status: "Active", latitude: 30.80, longitude: -81.50, region: "Kings Bay, GA", source: "USNI" },
  { hullNumber: "SSBN-739", name: "USS Nebraska", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-740", name: "USS Rhode Island", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Kings Bay, GA", status: "Active", latitude: 30.80, longitude: -81.50, region: "Kings Bay, GA", source: "USNI" },
  { hullNumber: "SSBN-741", name: "USS Maine", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSBN-742", name: "USS Wyoming", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Kings Bay, GA", status: "Active", latitude: 30.80, longitude: -81.50, region: "Kings Bay, GA", source: "USNI" },
  { hullNumber: "SSBN-743", name: "USS Louisiana", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
];

// Guided Missile Submarines (SSGN)
const GUIDED_MISSILE_SUBS = [
  { hullNumber: "SSGN-726", name: "USS Ohio", class: "Ohio-class", type: "Guided Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSGN-727", name: "USS Michigan", class: "Ohio-class", type: "Guided Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.73, longitude: -122.71, region: "Bangor, WA", source: "USNI" },
  { hullNumber: "SSGN-728", name: "USS Florida", class: "Ohio-class", type: "Guided Missile Submarine", homePort: "Kings Bay, GA", status: "Active", latitude: 30.80, longitude: -81.50, region: "Kings Bay, GA", source: "USNI" },
  { hullNumber: "SSGN-729", name: "USS Georgia", class: "Ohio-class", type: "Guided Missile Submarine", homePort: "Kings Bay, GA", status: "Active", latitude: 30.80, longitude: -81.50, region: "Kings Bay, GA", source: "USNI" },
];

// Amphibious Transport Docks (LPD)
const LPDS = [
  { hullNumber: "LPD-17", name: "USS San Antonio", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LPD-18", name: "USS New Orleans", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LPD-19", name: "USS Mesa Verde", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LPD-20", name: "USS Green Bay", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "USNI" },
  { hullNumber: "LPD-21", name: "USS New York", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LPD-22", name: "USS San Diego", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LPD-23", name: "USS Anchorage", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LPD-24", name: "USS Arlington", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LPD-25", name: "USS Somerset", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LPD-26", name: "USS John P. Murtha", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LPD-27", name: "USS Portland", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LPD-28", name: "USS Fort Lauderdale", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LPD-29", name: "USS Richard M. McCool Jr.", class: "San Antonio-class", type: "Amphibious Transport Dock", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
];

// Dock Landing Ships (LSD)
const LSDS = [
  { hullNumber: "LSD-41", name: "USS Whidbey Island", class: "Whidbey Island-class", type: "Dock Landing Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LSD-42", name: "USS Germantown", class: "Whidbey Island-class", type: "Dock Landing Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LSD-43", name: "USS Fort McHenry", class: "Whidbey Island-class", type: "Dock Landing Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LSD-44", name: "USS Gunston Hall", class: "Whidbey Island-class", type: "Dock Landing Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LSD-45", name: "USS Comstock", class: "Whidbey Island-class", type: "Dock Landing Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LSD-46", name: "USS Tortuga", class: "Whidbey Island-class", type: "Dock Landing Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LSD-48", name: "USS Ashland", class: "Whidbey Island-class", type: "Dock Landing Ship", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan", source: "USNI" },
  { hullNumber: "LSD-49", name: "USS Harpers Ferry", class: "Harpers Ferry-class", type: "Dock Landing Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
  { hullNumber: "LSD-50", name: "USS Carter Hall", class: "Harpers Ferry-class", type: "Dock Landing Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LSD-51", name: "USS Oak Hill", class: "Harpers Ferry-class", type: "Dock Landing Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "USNI" },
  { hullNumber: "LSD-52", name: "USS Pearl Harbor", class: "Harpers Ferry-class", type: "Dock Landing Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "USNI" },
];

// Hospital Ships
const HOSPITAL_SHIPS = [
  { hullNumber: "T-AH-19", name: "USNS Mercy", class: "Mercy-class", type: "Hospital Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA", source: "MSC" },
  { hullNumber: "T-AH-20", name: "USNS Comfort", class: "Mercy-class", type: "Hospital Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA", source: "MSC" },
];

async function main() {
  console.log("Adding US Navy Fleet...\n");

  const allShips = [
    ...CRUISERS,
    ...DESTROYERS,
    ...ZUMWALTS,
    ...LCS,
    ...ATTACK_SUBS,
    ...BALLISTIC_SUBS,
    ...GUIDED_MISSILE_SUBS,
    ...LPDS,
    ...LSDS,
    ...HOSPITAL_SHIPS,
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

  console.log("\nShips by type:");
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
