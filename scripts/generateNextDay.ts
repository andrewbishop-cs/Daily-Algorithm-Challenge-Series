#!/usr/bin/env ts-node

/**
 * This script automates creating a new daily challenge folder by driving ChatGPT.
 *
 * Steps:
 * 1. Scan the repo root for folders matching /^Day(\d+)_/ and compute nextDay.
 * 2. Build a comma‑separated list of existing folder "topics" (inserting spaces before capitals).
 * 3. Construct a single‑shot prompt for ChatGPT (pure JSON output with folderName, starterTs, testsTs).
 * 4. Call OpenAI API (key from .env).
 * 5. Parse and validate the JSON response.
 * 6. Create the new folder (error if it exists).
 * 7. Write starter.ts, tests.ts, and an empty solution.ts inside it.
 * 8. Log success.
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";

console.log("🚀 Starting challenge generation...");

dotenv.config();
if (!process.env.OPEN_AI_KEY) {
  console.error("❌ ERROR: .env must contain OPEN_AI_KEY");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const dayDirRegex = /^Day(\d+)_/;

  // 1. Find existing Day folders
  console.log("📂 Scanning for completed challenges...");
  const existing = fs
    .readdirSync(repoRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && dayDirRegex.test(d.name))
    .map((d) => {
      const m = dayDirRegex.exec(d.name)!;
      return { name: d.name, num: parseInt(m[1], 10) };
    });

  const nextDay = existing.length > 0
    ? Math.max(...existing.map((x) => x.num)) + 1
    : 1;

  const nextDayFormatted = String(nextDay).padStart(3, '0');
  console.log(`📅 Generating challenge for Day ${nextDayFormatted}...`);

  // 2. Build covered‑topics list
  const coveredTopics = existing
    .map((x) => x.name.replace(dayDirRegex, ""))           // strip prefix
    .map((s) => s.replace(/([a-z])([A-Z])/g, "$1 $2"));    // add spaces


  // 3. Build the ChatGPT prompt
  const areas = [
    "two‑pointer", "sliding‑window", "matrix", "hashmap",
    "intervals", "stack", "linked list", "binary tree", "graphs",
    "BFS", "DFS", "backtracking", "divide & conquer", "dynamic programming"
  ].join(", ");



  const prompt = `
You are a code challenge designing bot. 

Please generate the next daily challenge (Day${nextDayFormatted}) in a "LeetCode wrapped in a practical work scenario" style.  
The challange description and code should emulate the language we would see in a work environment. Do not include language in the description or starter code about what data structures / algorithms to use - DO use language that describes the goal from a high level, employing real-world concepts. Name the starter function accordingly.  
Algorithm areas to cover: ${areas}.  
We already have Day folders covering: ${coveredTopics.join(", ") || "none"}.
Respond with a pure JSON object with exactly these fields:
{
  "folderName": "Day${nextDayFormatted}_ProblemName",
  "starterTs": "...full starter.ts contents including description, two LeetCode warm‑ups (one easy/medium, one medium/hard) relating to the topic of the problem and function stub. were needed add // TODO: implement code here",
  "testsTs": "...full tests.ts contents with harness for edge cases and typical scenarios. do not use any library, just compare inputs and outputs and print accordingly..."
}
Export the stub function created in starter.ts, import it for test usage in tests.ts (use this format: import functionName from './solution';)- use green check mark emoji if the test passes, and red X emoji if it does not. 
Output **only** a JSON object.  
- Use double‑quotes for all JSON keys and string‑values.  
- Inside each string value (starterTs, testsTs), **escape**:
    • newlines as \n  
    • tabs as \t  
    • backslashes as \\  
    • double‑quotes as \"  
No extra text or markdown fences—just the JSON. Keep lines in starter.ts description no longer than 100 characters before adding a newline
`;

  // 4. & 5. Call OpenAI
  const resp = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt.trim() }],
  });

  const content = resp.choices?.[0].message?.content;
  if (!content) throw new Error("❌ Empty response from OpenAI");

  let data: { folderName: string; starterTs: string; testsTs: string };
  try {
    data = JSON.parse(content);
  } catch (err) {
    console.error("❌ Failed to parse JSON from ChatGPT:");
    console.error(content);
    process.exit(1);
  }

  const { folderName, starterTs, testsTs } = data;
  if (!folderName || !starterTs || !testsTs) {
    console.error("❌ Response JSON missing one of folderName, starterTs, testsTs.");
    console.error(data);
    process.exit(1);
  }

  // 6. Create the new folder
  const targetDir = path.join(repoRoot, folderName);
  if (fs.existsSync(targetDir)) {
    console.error(`❌ ERROR: Folder ${folderName} already exists. Aborting.`);
    process.exit(1);
  }
  fs.mkdirSync(targetDir);

  // 7. Write files
  fs.writeFileSync(path.join(targetDir, "starter.ts"), starterTs.trim() + "\n");
  fs.writeFileSync(path.join(targetDir, "tests.ts"), testsTs.trim() + "\n");
  fs.writeFileSync(path.join(targetDir, "solution.ts"), "// TODO: implement solution\n");

  // 8. Done
  console.log(`✨ Successfully created ${folderName}/`);
  console.log("📋 Files created:");
  console.log(`   - ${folderName}/starter.ts`);
  console.log(`   - ${folderName}/tests.ts`);
  console.log(`   - ${folderName}/solution.ts`);
}

main().catch((err) => {
  console.error("❌ Unexpected error:", err);
  process.exit(1);
});
