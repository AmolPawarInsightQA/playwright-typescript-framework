import { test, expect } from '../fixtures/testFixtures';
import { env } from '../config/environment';

test.describe('Should able to make an appointment', { tag: '@regression' }, () => {
  test.beforeEach(async ({ loginPage}) => {
    await loginPage.open();
    await loginPage.login(env.app_username, env.app_password);
  });

  test('Test checkbox and radio button', async ({ appointmentPage }) => {
    await appointmentPage.checkCheckbox(appointmentPage.readmission);
    await expect(appointmentPage.readmission).toBeChecked();
    await appointmentPage.uncheckCheckbox(appointmentPage.readmission);
    await expect(appointmentPage.readmission).not.toBeChecked();

    await expect(appointmentPage.medicare).toBeChecked();
    await appointmentPage.selectRadioButton(appointmentPage.none);
    await expect(appointmentPage.none).toBeChecked();
    await expect(appointmentPage.medicare).not.toBeChecked();
  });
});
