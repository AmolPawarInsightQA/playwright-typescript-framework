import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AppointmentPage } from '../pages/AppointmentPage';
import { PageNavigation } from '../pages/pageNavigation';

type FrameworkFixtures = {
  loginPage: LoginPage;
  appointmentPage: AppointmentPage;
  pageNavigation: PageNavigation;
};

export const test = base.extend<FrameworkFixtures>({
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  appointmentPage: async ({ page }, use) => { await use(new AppointmentPage(page)); },
  pageNavigation: async ({ page }, use) => { await use(new PageNavigation(page)); }
});

export { expect } from '@playwright/test';
