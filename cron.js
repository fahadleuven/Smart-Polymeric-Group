import cron from "node-cron";
import fs from "fs";
import { fetchPublications } from "./scraper.js";

// 0 2 * * * Runs every day at 02:00 AM / every minute */1 * * * *
cron.schedule("00 11 * * *", async () => {
  try {
    console.log("🔄 Fetching live publications from Lirias...");

    const publications = await fetchPublications(false); // live fetch
    fs.writeFileSync(
      "publications.json",
      JSON.stringify(publications, null, 2),
      "utf-8"
    );

    console.log(`✅ Saved ${publications.length} publications.`);
  } catch (err) {
    console.error("❌ Cron job failed:", err.message);
  }
});

console.log("⏰ Cron job scheduled (daily at 11:00)am");

