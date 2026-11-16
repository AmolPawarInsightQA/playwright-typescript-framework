import { FullConfig } from '@playwright/test';
import fs from "fs";
import path from "path";

export default async function globalSetup(config: FullConfig) {
  console.log(`[GLOBAL SETUP] Starting tests. Projects: ${config.projects.map(p => p.name).join(', ')}`);

  console.log(`[INFO]: Global setup started projects..`);
  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log(`[INFO]: Deleting local run..`);

    //Delete allure results folder before starting the test run
    const allureResultsDir = path.resolve(process.cwd(), "allure-results");
    console.log(`allureResultsDir: ${allureResultsDir}`);
    if (fs.existsSync(allureResultsDir)) {
      fs.rmSync(allureResultsDir, { recursive: true, force: true });
    }
    console.log(`[INFO]:Old Allure-result remove successfully`);
  }
  console.log(`[INFO]: Global setup completed`);
}
