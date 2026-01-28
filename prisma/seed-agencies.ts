import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { createReadStream } from "fs";
import { createInterface } from "readline";

const prisma = new PrismaClient();

interface CSVRow {
  icaoHex: string;
  registration: string;
  operator: string;
  type: string;
  icaoType: string;
  category: string;
  tags: string[];
}

function categorizeOperator(operator: string, tag1: string, csvCategory: string): string {
  const op = operator.toLowerCase();
  const tag = tag1.toLowerCase();

  if (op.includes("homeland") || op.includes("dhs") || op.includes("customs") || op.includes("border")) {
    return "DHS/CBP";
  }
  if (op.includes("justice") || op.includes("doj") || tag.includes("doj") || op.includes("fbi") || op.includes("marshal")) {
    return "DOJ/FBI";
  }
  if (op.includes("nasa")) {
    return "NASA";
  }
  if (op.includes("noaa")) {
    return "NOAA";
  }
  if (op.includes("faa") || op.includes("federal aviation")) {
    return "FAA";
  }
  if (op.includes("energy") || op.includes("doe")) {
    return "DOE";
  }
  if (op.includes("state police") || op.includes("highway patrol") || op.includes("sheriff")) {
    return "State Law Enforcement";
  }
  if (op.includes("dea")) {
    return "DEA";
  }
  if (op.includes("atf")) {
    return "ATF";
  }
  if (op.includes("secret service")) {
    return "Secret Service";
  }

  return csvCategory || "Other Federal";
}

async function main() {
  console.log("Adding federal agency aircraft...");

  const response = await fetch("https://raw.githubusercontent.com/sdr-enthusiasts/plane-alert-db/main/plane-alert-db.csv");
  const csvText = await response.text();
  const lines = csvText.split("\n");

  // Skip header
  const dataLines = lines.slice(1);

  const agencyPatterns = /homeland|dhs|customs|border|doj|justice|fbi|marshal|dea|atf|nasa|noaa|faa|federal aviation|doe|energy|state police|highway patrol|secret service/i;

  let added = 0;
  let skipped = 0;

  for (const line of dataLines) {
    if (!line.trim()) continue;

    // Parse CSV (handling commas in fields)
    const parts = line.split(",");
    if (parts.length < 10) continue;

    const icaoHex = parts[0];
    const registration = parts[1];
    const operator = parts[2];
    const type = parts[3];
    const icaoType = parts[4];
    const tag1 = parts[6] || "";
    const tag2 = parts[7] || "";
    const tag3 = parts[8] || "";
    const csvCategory = parts[9] || "";

    // Only US registered aircraft (hex starts with A)
    if (!icaoHex.startsWith("A")) continue;

    // Only agency aircraft
    if (!agencyPatterns.test(operator) && !agencyPatterns.test(tag1)) continue;

    // Check if already exists
    const existing = await prisma.aircraft.findUnique({
      where: { icaoHex },
    });

    if (existing) {
      skipped++;
      continue;
    }

    const category = categorizeOperator(operator, tag1, csvCategory);
    const tags = [tag1, tag2, tag3].filter(t => t && t.length > 0);

    try {
      await prisma.aircraft.create({
        data: {
          icaoHex,
          registration,
          operator,
          type,
          icaoType,
          category,
          tags,
        },
      });
      added++;

      if (added % 50 === 0) {
        console.log(`  Added ${added} aircraft...`);
      }
    } catch (error) {
      console.error(`Error adding ${icaoHex}:`, error);
    }
  }

  console.log(`\nDone! Added ${added} aircraft, skipped ${skipped} (already exist)`);

  // Print summary by category
  const categories = await prisma.aircraft.groupBy({
    by: ["category"],
    _count: true,
    orderBy: { _count: { category: "desc" } },
  });

  console.log("\nAircraft by category:");
  for (const cat of categories) {
    console.log(`  ${cat.category}: ${cat._count}`);
  }

  const total = await prisma.aircraft.count();
  console.log(`\nTotal aircraft in database: ${total}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
