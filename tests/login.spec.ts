import { test, expect } from '../fixtures/testFixtures';
import { env } from '../config/environment';

const loginFailureMessage = 'Login failed! Please ensure the username and password are valid.';

test.describe('Login', { tag: '@regression' }, () => {
  test('Successful login with valid demo credentials', async ({ page, loginPage }) => {
    // 1. Open the CURA home page and complete login with valid demo credentials.
    await loginPage.open();
    await loginPage.login(env.app_username, env.app_password);

    await expect(page).toHaveURL(/#appointment$/);
    await expect(loginPage.appointmentHeading).toBeVisible();
  });

  test('Reject invalid username and password', async ({ page, loginPage }) => {
    // 1. Open the CURA home page and submit invalid credentials.
    await loginPage.open();
    await loginPage.login('invalid-user', 'invalid-password');

    await expect(page).toHaveURL(/profile\.php#login$/);
    await expect(page.getByText(loginFailureMessage)).toBeVisible();
    await expect(loginPage.appointmentHeading).not.toBeVisible();
  });

  test('Reject empty username and password', async ({ page, loginPage }) => {
    // 1. Open the CURA home page and submit empty credentials.
    await loginPage.open();
    await loginPage.login('', '');

    await expect(page).toHaveURL(/profile\.php#login$/);
    await expect(page.getByText(loginFailureMessage)).toBeVisible();
    await expect(loginPage.appointmentHeading).not.toBeVisible();
  });
});
