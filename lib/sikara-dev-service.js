import fs from "fs";
import path from "path";

export async function siteContent() {
  const jsonDataPath = path.join(process.cwd(), "/data/sikara-dev.json");
  const data = fs.readFileSync(jsonDataPath, "utf-8");
  return JSON.parse(data);
}
