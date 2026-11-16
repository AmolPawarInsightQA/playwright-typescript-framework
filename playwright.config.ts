import { defineConfig, devices } from '@playwright/test';
import { env } from './config/environment';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : env.workers,
  timeout: env.testTimeout,
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
