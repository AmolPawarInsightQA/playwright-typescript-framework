import { test, expect } from '../fixtures/testFixtures';
import { env } from '../config/environment';

test('User should login successfully', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(env.app_username, env.app_password);
  await expect(loginPage.appointmentHeading).toContainText('Make Appointment');
});
