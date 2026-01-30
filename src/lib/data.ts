// Hardcoded data for US Government assets (database-free operation)

export const AIRCRAFT = [
  // Air Force One (VC-25A)
  { id: "1", icaoHex: "ADFDF8", registration: "82-8000", operator: "US Government", type: "Boeing VC-25A", category: "Air Force One", tags: ["POTUS", "Presidential"] },
  { id: "2", icaoHex: "ADFDF9", registration: "92-9000", operator: "US Government", type: "Boeing VC-25A", category: "Air Force One", tags: ["POTUS", "Presidential"] },

  // Air Force Two (C-32A)
  { id: "3", icaoHex: "ADFEB7", registration: "98-0001", operator: "USAF", type: "Boeing C-32A", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { id: "4", icaoHex: "ADFEB8", registration: "98-0002", operator: "USAF", type: "Boeing C-32A", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { id: "5", icaoHex: "ADFEB9", registration: "99-0003", operator: "USAF", type: "Boeing C-32A", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },
  { id: "6", icaoHex: "ADFEBA", registration: "99-0004", operator: "USAF", type: "Boeing C-32A", category: "Air Force Two", tags: ["VPOTUS", "Cabinet"] },

  // C-37A (Gulfstream V) - Senior Officials
  { id: "7", icaoHex: "AE010D", registration: "97-0400", operator: "USAF", type: "Gulfstream C-37A", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { id: "8", icaoHex: "AE010E", registration: "97-0401", operator: "USAF", type: "Gulfstream C-37A", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { id: "9", icaoHex: "AE087E", registration: "01-0028", operator: "USAF", type: "Gulfstream C-37A", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { id: "10", icaoHex: "AE087F", registration: "01-0029", operator: "USAF", type: "Gulfstream C-37A", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },

  // C-37B (Gulfstream G550)
  { id: "11", icaoHex: "AE206D", registration: "06-0500", operator: "USAF", type: "Gulfstream C-37B", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { id: "12", icaoHex: "AE4A81", registration: "09-0525", operator: "USAF", type: "Gulfstream C-37B", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },
  { id: "13", icaoHex: "AE4DDD", registration: "11-0550", operator: "USAF", type: "Gulfstream C-37B", category: "VIP Transport", tags: ["Cabinet", "Senior Officials"] },

  // C-40B/C (Boeing 737) - Congressional
  { id: "14", icaoHex: "AE0945", registration: "01-0040", operator: "USAF", type: "Boeing C-40B", category: "Congressional", tags: ["Congress", "VIP"] },
  { id: "15", icaoHex: "AE11F7", registration: "01-0041", operator: "USAF", type: "Boeing C-40B", category: "Congressional", tags: ["Congress", "VIP"] },
  { id: "16", icaoHex: "AE11F8", registration: "02-0042", operator: "USAF", type: "Boeing C-40B", category: "Congressional", tags: ["Congress", "VIP"] },
  { id: "17", icaoHex: "AE1165", registration: "02-0201", operator: "USAF", type: "Boeing C-40C", category: "Congressional", tags: ["Congress", "VIP"] },
  { id: "18", icaoHex: "AE1167", registration: "02-0202", operator: "USAF", type: "Boeing C-40C", category: "Congressional", tags: ["Congress", "VIP"] },

  // Marine One
  { id: "19", icaoHex: "AE0865", registration: "159353", operator: "US Marine Corps", type: "Sikorsky VH-3D", category: "Marine One", tags: ["POTUS", "Presidential", "Helicopter"] },
  { id: "20", icaoHex: "AE5E76", registration: "169177", operator: "US Marine Corps", type: "Sikorsky VH-92A", category: "Marine One", tags: ["POTUS", "Presidential", "Helicopter"] },
  { id: "21", icaoHex: "AE5E77", registration: "169178", operator: "US Marine Corps", type: "Sikorsky VH-92A", category: "Marine One", tags: ["POTUS", "Presidential", "Helicopter"] },

  // E-4B Nightwatch (Doomsday Planes)
  { id: "22", icaoHex: "AE01CD", registration: "73-1676", operator: "USAF", type: "Boeing E-4B", category: "Doomsday Plane", tags: ["NAOC", "Command"] },
  { id: "23", icaoHex: "AE01CE", registration: "73-1677", operator: "USAF", type: "Boeing E-4B", category: "Doomsday Plane", tags: ["NAOC", "Command"] },
  { id: "24", icaoHex: "AE141D", registration: "74-0787", operator: "USAF", type: "Boeing E-4B", category: "Doomsday Plane", tags: ["NAOC", "Command"] },
  { id: "25", icaoHex: "AE141E", registration: "75-0125", operator: "USAF", type: "Boeing E-4B", category: "Doomsday Plane", tags: ["NAOC", "Command"] },

  // Navy C-40A Clippers
  { id: "26", icaoHex: "AE04D7", registration: "165829", operator: "US Navy", type: "Boeing C-40A Clipper", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { id: "27", icaoHex: "AE04D8", registration: "165830", operator: "US Navy", type: "Boeing C-40A Clipper", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { id: "28", icaoHex: "AE04D9", registration: "165831", operator: "US Navy", type: "Boeing C-40A Clipper", category: "Navy VIP", tags: ["Navy", "Logistics"] },
  { id: "29", icaoHex: "AE04DA", registration: "165832", operator: "US Navy", type: "Boeing C-40A Clipper", category: "Navy VIP", tags: ["Navy", "Logistics"] },

  // US Forest Service
  { id: "30", icaoHex: "A0F001", registration: "N130FF", operator: "US Forest Service", type: "C-130H Hercules", category: "Forest Service", tags: ["USFS", "Firefighting"] },
  { id: "31", icaoHex: "A0F002", registration: "N131FF", operator: "US Forest Service", type: "C-130H Hercules", category: "Forest Service", tags: ["USFS", "Firefighting"] },
  { id: "32", icaoHex: "A0F003", registration: "N132FF", operator: "US Forest Service", type: "C-130H Hercules", category: "Forest Service", tags: ["USFS", "Firefighting"] },

  // CBP Air and Marine
  { id: "33", icaoHex: "A00001", registration: "N501BP", operator: "CBP Air and Marine", type: "DHC-8 Dash 8", category: "Law Enforcement", tags: ["CBP", "Border Patrol"] },
  { id: "34", icaoHex: "A00002", registration: "N502BP", operator: "CBP Air and Marine", type: "DHC-8 Dash 8", category: "Law Enforcement", tags: ["CBP", "Border Patrol"] },
  { id: "35", icaoHex: "A00003", registration: "N503BP", operator: "CBP Air and Marine", type: "Pilatus PC-12", category: "Law Enforcement", tags: ["CBP", "Border Patrol"] },

  // FBI Aviation
  { id: "36", icaoHex: "A0FBI1", registration: "N1FBI", operator: "FBI", type: "Cessna Citation", category: "Law Enforcement", tags: ["FBI", "Surveillance"] },
  { id: "37", icaoHex: "A0FBI2", registration: "N2FBI", operator: "FBI", type: "Cessna Citation", category: "Law Enforcement", tags: ["FBI", "Surveillance"] },

  // DEA Aviation
  { id: "38", icaoHex: "A0DEA1", registration: "N1DEA", operator: "DEA", type: "Cessna Citation", category: "Law Enforcement", tags: ["DEA", "Counter-Narcotics"] },
  { id: "39", icaoHex: "A0DEA2", registration: "N2DEA", operator: "DEA", type: "Beechcraft King Air", category: "Law Enforcement", tags: ["DEA", "Counter-Narcotics"] },

  // Coast Guard
  { id: "40", icaoHex: "AE109A", registration: "02", operator: "US Coast Guard", type: "Gulfstream C-37A", category: "Coast Guard", tags: ["USCG", "Command"] },
  { id: "41", icaoHex: "AE10C1", registration: "01", operator: "US Coast Guard", type: "Gulfstream C-37A", category: "Coast Guard", tags: ["USCG", "Command"] },
];

export const SHIPS = [
  // Aircraft Carriers
  { id: "1", hullNumber: "CVN-78", name: "USS Gerald R. Ford", class: "Gerald R. Ford-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Deployed", latitude: 15.5, longitude: -68.0, region: "Caribbean Sea" },
  { id: "2", hullNumber: "CVN-77", name: "USS George H.W. Bush", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },
  { id: "3", hullNumber: "CVN-76", name: "USS Ronald Reagan", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Bremerton, WA", status: "Active", latitude: 47.56, longitude: -122.65, region: "Bremerton, WA" },
  { id: "4", hullNumber: "CVN-75", name: "USS Harry S. Truman", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },
  { id: "5", hullNumber: "CVN-74", name: "USS John C. Stennis", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Maintenance", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },
  { id: "6", hullNumber: "CVN-73", name: "USS George Washington", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Yokosuka, Japan", status: "Forward Deployed", latitude: 35.29, longitude: 139.67, region: "Yokosuka, Japan" },
  { id: "7", hullNumber: "CVN-72", name: "USS Abraham Lincoln", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "San Diego, CA", status: "Deployed", latitude: 15.0, longitude: 120.0, region: "South China Sea" },
  { id: "8", hullNumber: "CVN-71", name: "USS Theodore Roosevelt", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "9", hullNumber: "CVN-70", name: "USS Carl Vinson", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "10", hullNumber: "CVN-69", name: "USS Dwight D. Eisenhower", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },
  { id: "11", hullNumber: "CVN-68", name: "USS Nimitz", class: "Nimitz-class", type: "Aircraft Carrier", homePort: "Bremerton, WA", status: "Active", latitude: 47.56, longitude: -122.65, region: "Bremerton, WA" },

  // Amphibious Assault Ships
  { id: "12", hullNumber: "LHA-7", name: "USS Tripoli", class: "America-class", type: "Amphibious Assault Ship", homePort: "Sasebo, Japan", status: "Forward Deployed", latitude: 33.16, longitude: 129.72, region: "Sasebo, Japan" },
  { id: "13", hullNumber: "LHA-6", name: "USS America", class: "America-class", type: "Amphibious Assault Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "14", hullNumber: "LHD-8", name: "USS Makin Island", class: "Wasp-class", type: "Amphibious Assault Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "15", hullNumber: "LHD-7", name: "USS Iwo Jima", class: "Wasp-class", type: "Amphibious Assault Ship", homePort: "Norfolk, VA", status: "Deployed", latitude: 15.5, longitude: -68.0, region: "Caribbean Sea" },
  { id: "16", hullNumber: "LHD-5", name: "USS Bataan", class: "Wasp-class", type: "Amphibious Assault Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },
  { id: "17", hullNumber: "LHD-4", name: "USS Boxer", class: "Wasp-class", type: "Amphibious Assault Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "18", hullNumber: "LHD-3", name: "USS Kearsarge", class: "Wasp-class", type: "Amphibious Assault Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },
  { id: "19", hullNumber: "LHD-2", name: "USS Essex", class: "Wasp-class", type: "Amphibious Assault Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "20", hullNumber: "LHD-1", name: "USS Wasp", class: "Wasp-class", type: "Amphibious Assault Ship", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },

  // Submarines (approximate locations - they don't broadcast)
  { id: "21", hullNumber: "SSBN-743", name: "USS Louisiana", class: "Ohio-class", type: "Ballistic Missile Submarine", homePort: "Bangor, WA", status: "Active", latitude: 47.7, longitude: -122.7, region: "Pacific" },
  { id: "22", hullNumber: "SSN-796", name: "USS New Jersey", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Atlantic" },
  { id: "23", hullNumber: "SSN-795", name: "USS Hyman G. Rickover", class: "Virginia-class", type: "Attack Submarine", homePort: "Groton, CT", status: "Active", latitude: 41.35, longitude: -72.09, region: "Atlantic" },

  // Destroyers (sample)
  { id: "24", hullNumber: "DDG-1000", name: "USS Zumwalt", class: "Zumwalt-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "25", hullNumber: "DDG-1001", name: "USS Michael Monsoor", class: "Zumwalt-class", type: "Destroyer", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "26", hullNumber: "DDG-51", name: "USS Arleigh Burke", class: "Arleigh Burke-class", type: "Destroyer", homePort: "Norfolk, VA", status: "Active", latitude: 36.95, longitude: -76.33, region: "Norfolk, VA" },

  // Cruisers
  { id: "27", hullNumber: "CG-52", name: "USS Bunker Hill", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "28", hullNumber: "CG-53", name: "USS Mobile Bay", class: "Ticonderoga-class", type: "Cruiser", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },

  // Littoral Combat Ships
  { id: "29", hullNumber: "LCS-1", name: "USS Freedom", class: "Freedom-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
  { id: "30", hullNumber: "LCS-2", name: "USS Independence", class: "Independence-class", type: "Littoral Combat Ship", homePort: "San Diego, CA", status: "Active", latitude: 32.68, longitude: -117.23, region: "San Diego, CA" },
];
