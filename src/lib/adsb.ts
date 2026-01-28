// ADS-B Exchange API client
// Documentation: https://www.adsbexchange.com/version-2-api-wip/

export interface ADSBPosition {
  hex: string;           // ICAO hex code
  flight?: string;       // Callsign
  lat?: number;          // Latitude
  lon?: number;          // Longitude
  alt_baro?: number;     // Barometric altitude (feet)
  alt_geom?: number;     // Geometric altitude (feet)
  gs?: number;           // Ground speed (knots)
  track?: number;        // Track/heading (degrees)
  baro_rate?: number;    // Vertical rate (feet/min)
  squawk?: string;       // Squawk code
  category?: string;     // Aircraft category
  nav_modes?: string[];  // Navigation modes
  nic?: number;          // Navigation Integrity Category
  rc?: number;           // Radius of containment
  seen_pos?: number;     // Seconds since last position
  version?: number;      // ADS-B version
  r?: string;            // Registration
  t?: string;            // Aircraft type
  dbFlags?: number;      // Database flags (1 = military)
  alert?: number;        // Alert flag
  spi?: number;          // Special position identification
  messages?: number;     // Message count
  seen?: number;         // Seconds since last message
  rssi?: number;         // Signal strength
}

export interface ADSBResponse {
  ac?: ADSBPosition[];
  total?: number;
  ctime?: number;
  ptime?: number;
  now?: number;
  msg?: string;
}

const ADSB_API_URL = "https://adsbexchange-com1.p.rapidapi.com/v2";

export async function fetchAircraftByHex(hexCodes: string[]): Promise<ADSBPosition[]> {
  const apiKey = process.env.RAPIDAPI_KEY;

  if (!apiKey) {
    console.warn("RAPIDAPI_KEY not set, returning mock data");
    return getMockPositions(hexCodes);
  }

  const results: ADSBPosition[] = [];

  // ADS-B Exchange API allows querying by hex code
  // We batch requests to avoid rate limits
  for (const hex of hexCodes) {
    try {
      const response = await fetch(`${ADSB_API_URL}/icao/${hex}/`, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "adsbexchange-com1.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        console.error(`Failed to fetch ${hex}: ${response.status}`);
        continue;
      }

      const data: ADSBResponse = await response.json();
      if (data.ac && data.ac.length > 0) {
        results.push(...data.ac);
      }
    } catch (error) {
      console.error(`Error fetching ${hex}:`, error);
    }
  }

  return results;
}

export async function fetchAllTrackedAircraft(hexCodes: string[]): Promise<ADSBPosition[]> {
  const apiKey = process.env.RAPIDAPI_KEY;

  if (!apiKey) {
    console.warn("RAPIDAPI_KEY not set, returning mock data");
    return getMockPositions(hexCodes);
  }

  // For bulk queries, we can use the /hex/ endpoint with comma-separated codes
  // But RapidAPI limits might apply, so we chunk
  const CHUNK_SIZE = 20;
  const results: ADSBPosition[] = [];

  for (let i = 0; i < hexCodes.length; i += CHUNK_SIZE) {
    const chunk = hexCodes.slice(i, i + CHUNK_SIZE);

    try {
      // Use individual requests for now (more reliable)
      for (const hex of chunk) {
        const response = await fetch(`${ADSB_API_URL}/icao/${hex}/`, {
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "adsbexchange-com1.p.rapidapi.com",
          },
          next: { revalidate: 30 }, // Cache for 30 seconds
        });

        if (response.ok) {
          const data: ADSBResponse = await response.json();
          if (data.ac && data.ac.length > 0) {
            results.push(...data.ac);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching chunk:", error);
    }
  }

  return results;
}

// Mock data for development without API key
function getMockPositions(hexCodes: string[]): ADSBPosition[] {
  const mockAircraft: ADSBPosition[] = [
    {
      hex: "ADFDF8",
      flight: "SAM28000",
      lat: 38.8977,
      lon: -77.0365,
      alt_baro: 0,
      gs: 0,
      track: 90,
      squawk: "0000",
      r: "82-8000",
      t: "B742",
    },
    {
      hex: "ADFEB7",
      flight: "SAM29000",
      lat: 38.9072,
      lon: -77.0369,
      alt_baro: 35000,
      gs: 450,
      track: 270,
      squawk: "1234",
      r: "98-0001",
      t: "B752",
    },
    {
      hex: "AE010D",
      flight: "EXEC1F",
      lat: 40.7128,
      lon: -74.0060,
      alt_baro: 41000,
      gs: 480,
      track: 45,
      squawk: "5678",
      r: "97-0400",
      t: "GLF5",
    },
    {
      hex: "AE0945",
      flight: "RCH301",
      lat: 51.5074,
      lon: -0.1278,
      alt_baro: 38000,
      gs: 520,
      track: 180,
      squawk: "2345",
      r: "01-0040",
      t: "B737",
    },
  ];

  // Return only aircraft that match requested hex codes
  return mockAircraft.filter((ac) => hexCodes.includes(ac.hex));
}
