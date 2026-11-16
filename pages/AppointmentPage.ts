import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AppointmentPage extends BasePage {
  readonly readmission: Locator;
  readonly medicare: Locator;
  readonly none: Locator;

  constructor(page: Page) {
    super(page);
    this.readmission = page.getByLabel('Apply for hospital readmission');
    this.medicare = page.getByLabel('Medicare');
    this.none = page.getByLabel('None');
  }
}
