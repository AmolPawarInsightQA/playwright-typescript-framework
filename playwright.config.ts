import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environment';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 2 : env.workers,
  // use timeouts from environment.ts file
  timeout: env.testTimeout,
  //use timeouts from environment.ts file
  expect: { timeout: env.expectTimeout },

  globalSetup: require.resolve('./global/global-setup'),
  globalTeardown: require.resolve('./global/global-teardown'),
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }]
  ],
  use: {
    baseURL: env.baseURL,
    actionTimeout: env.actionTimeout,
    navigationTimeout: env.navigationTimeout,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    headless: true
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ]
});
