import dotenv from 'dotenv';
dotenv.config();

const numberValue = (name: string, fallback: number): number => {
  const value = Number(process.env[name] ?? fallback);
  return Number.isFinite(value) ? value : fallback;
};

export const env = {
  name: process.env.ENV,
  baseURL: process.env.BASE_URL,
  app_username: process.env.APP_USERNAME,
  app_password: process.env.APP_PASSWORD,
  testTimeout: numberValue('TEST_TIMEOUT', 60_000),
  expectTimeout: numberValue('EXPECT_TIMEOUT', 10_000),
  actionTimeout: numberValue('ACTION_TIMEOUT', 15_000),
  navigationTimeout: numberValue('NAVIGATION_TIMEOUT', 30_000),
  workers: numberValue('WORKERS', 3)
};
