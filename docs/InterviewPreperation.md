# Playwright TypeScript Interview Preparation

## Explain the Framework Simply

This framework automates browser checks for the CURA healthcare demo website. A test describes what a user does, a page object contains the actions and locators for a page, and Playwright opens the browser and checks whether the expected result happened.

A short interview explanation:

> “This is a Playwright Test framework written in TypeScript. It uses Page Object Model to keep page actions reusable, custom fixtures to provide page objects to tests, environment configuration for the URL and credentials, and Playwright and Allure reports. Tests can run in parallel, and the Jenkinsfile shows how to run them in CI.”

## Framework Structure

- `tests/`: Test scenarios, for example login and appointment tests.
- `pages/`: Page objects. `LoginPage` holds login locators and actions; `AppointmentPage` represents appointment controls.
- `pages/BasePage.ts`: Shared browser actions such as clicking, filling fields, and navigating.
- `fixtures/testFixtures.ts`: Creates page objects and provides them to tests.
- `config/environment.ts`: Reads environment variables and provides defaults for the URL, credentials, workers, and timeouts.
- `playwright.config.ts`: Sets test discovery, browser project, parallel execution, retries, timeouts, reporters, and failure artifacts.
- `global/`: Code that runs once before and after the test run.
- `Jenkinsfile`: Example pipeline for installing dependencies, running tests, and archiving results.
- `playwright-report/` and `test-results/`: Generated test reports and artifacts.

## Likely Interview Questions and Answers

### 1. What is Playwright?

Playwright is a tool that controls browsers to test websites. It can click, type, navigate, and check what is shown on the page.

### 2. What is TypeScript, and why use it with Playwright?

TypeScript is JavaScript with type checks. It can catch some mistakes while writing code, such as passing the wrong kind of value to a function.

### 3. What is Page Object Model?

It is a way to organize tests. Instead of putting every locator and browser action in a test, we keep page-specific details in a page class. This makes actions reusable and tests easier to read.

### 4. How does this framework use Page Object Model?

`LoginPage` contains login-page locators and a `login(username, password)` method. A test uses the page object to perform login rather than repeating each click and field entry.

### 5. What is a locator?

A locator tells Playwright how to find an element on the page, such as a button or text field. This framework uses accessible locators like `getByRole` and `getByLabel`.

### 6. Why use `getByRole` or `getByLabel`?

They find elements by how a user or assistive technology identifies them. They are usually easier to understand and less tied to the page’s internal HTML than a long CSS selector.

### 7. What is a fixture?

A fixture prepares something a test needs. Here, the custom fixture creates page objects such as `loginPage` and makes them available to tests.

### 8. What does `async` and `await` mean in a test?

Browser actions take time. `await` tells the test to wait for an action to finish before continuing, such as waiting for a click or field entry to complete.

### 9. What is an assertion?

An assertion checks that the result matches what we expect. For example, the login test checks that successful login reaches the appointment page and shows its heading.

### 10. What is Playwright auto-waiting?

Playwright waits for an element to be ready before acting on it, and its web-first assertions keep checking until the expected state appears or times out. This reduces the need for fixed delays.

### 11. How are credentials and environment settings handled here?

`config/environment.ts` reads values such as the base URL and credentials from environment variables, with demo defaults. The valid login test passes configured credentials into the page object's login method. Secrets for real systems should not be committed to source control.

### 12. How does this framework run tests in parallel?

`fullyParallel` enables parallel scheduling, and `workers` controls how many workers can run. The configuration reduces workers on CI. Tests should use isolated data and avoid depending on another test’s state.

### 13. What does the `@regression` tag do?

It labels tests as part of the regression group. The package script `npm run test:@regression` runs tests selected by that tag.

### 14. What are retries and timeouts?

A timeout is the maximum time allowed for a test or action to complete. Retries rerun a failed test; this framework enables two retries on CI and none locally. Retries can help diagnose intermittent failures, but they should not hide a real defect.

### 15. What reports and failure evidence does this framework produce?

It configures Playwright's HTML report and Allure results. It also captures screenshots on failure, retains video on failure, and captures a trace on the first retry. These artifacts help investigate what happened.

### 16. How does the framework run in CI?

The `Jenkinsfile` installs dependencies and browsers, runs `npm test`, and archives test artifacts. CI is a clean automated environment for running the same checks after code changes.

### 17. What would you improve in this framework?

I would keep assertions and page-specific locators in page objects where appropriate, separate test data from test logic as data-driven scenarios grow, and ensure credentials come from secure environment variables in CI. I would also add tests for important edge cases and review reports after failures.

## Be Ready to Explain These Project Details

- The valid login credentials come from `env` configuration.
- The login spec currently uses the page object for login actions, but it still uses `page` directly for some assertions. Be accurate if asked whether all locators are inside page objects.
- Only Chromium is enabled in the current Playwright project configuration; Firefox and WebKit are commented out.
- The framework runs tests in parallel, so each test should be independent.

## Topics to Prepare First

Since you are new to Playwright and TypeScript, focus on these in order:

1. TypeScript basics: variables, objects, types, classes, imports/exports, and `async`/`await`.
2. Playwright basics: `page`, locators, actions, assertions, browser contexts, and test fixtures.
3. Test design: positive and negative cases, test independence, and reliable locators.
4. Page Object Model: what belongs in a page class versus a test.
5. Configuration: environment variables, base URL, timeouts, browser projects, and tags.
6. Debugging: HTML report, screenshots, video, trace viewer, and rerunning one test.
7. CI basics: what Jenkins does and how to inspect archived artifacts.

## Simple Demo Flow

1. Explain the test-to-fixture-to-page-object flow.
2. Open `LoginPage` and show how it locates fields and groups login actions.
3. Open `login.spec.ts` and walk through valid, invalid, and empty credential scenarios.
4. Show the Playwright configuration for Chromium, parallel workers, retries, and reports.
5. Explain how you would investigate a failure using the report and captured artifacts.