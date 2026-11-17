# Framework Understanding

## Framework Type

This is a **Playwright Test + TypeScript automation framework** using **Page Object Model (POM), custom fixtures, reusable BasePage actions, environment-driven configuration, parallel execution, reporting and CI/CD support**.

## Design

```text
Test
  -> Custom Fixture
      -> Page Object
          -> BasePage
              -> Playwright Page/Locator API
```

Configuration flow:

```text
.env -> config/environment.ts -> playwright.config.ts -> tests
```

## Main Folders

- `pages/` - POM classes. `BasePage` provides reusable web actions.
- `fixtures/` - Creates reusable page objects for tests.
- `tests/` - Playwright `.spec.ts` tests.
- `config/` - URL, environment and timeout configuration.
- `global/` - One-time global setup and teardown examples.
- `.github/workflows/` - GitHub Actions CI.

## Parallel Execution

`fullyParallel: true` allows tests to be scheduled in parallel. `workers` controls the maximum worker processes. CI uses a smaller worker count to reduce resource pressure.

## Reporting and Failure Evidence

Two reporters are configured:

1. Playwright HTML reporter
2. Allure reporter

Failure/debug artifacts:

- Screenshot: `only-on-failure`
- Video: `retain-on-failure`
- Trace: `on-first-retry`

## Timeouts

Timeout values are maintained in `.env` and loaded by `config/environment.ts`:

- Test timeout
- Expect timeout
- Action timeout
- Navigation timeout

## Hooks

`appointment.spec.ts` demonstrates `beforeEach` for login before every appointment test. Playwright also supports `beforeAll`, `afterEach`, and `afterAll` when required.

## CI/CD

- `Jenkinsfile` provides a Jenkins pipeline example.
- `.github/workflows/playwright.yml` provides GitHub Actions execution.

## How to Run

```bash
npm install
npx playwright install
npm test
```

For Chromium only:

```bash
npm run test:chrome
```

## Extension Strategy

New application screens should get their own Page Object. Common UI operations belong in `BasePage`; non-page concerns such as API, database, date or file handling should be separate utilities/fixtures instead of making `BasePage` too large.
