# Playwright TypeScript Automation Framework

## Setup

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npx playwright install`.
4. Run `npm test`.

Run only Chromium: `npm run test:chrome`

Playwright HTML report: `npm run report`

Allure report:
- `npm run allure:generate`
- `npm run allure:open`

## Notes

`.env` contains the demo URL, credentials, worker count and timeout values. Do not commit real credentials. Failure screenshots and videos are handled by Playwright configuration. Trace is captured on the first retry.
