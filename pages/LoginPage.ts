import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly makeAppointmentLink: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly appointmentHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.makeAppointmentLink = page.getByRole('link', { name: 'Make Appointment' });
    this.username = page.getByLabel('Username');
    this.password = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.appointmentHeading = page.locator('h2');
  }

  async open(): Promise<void> { await this.navigate('/'); }

  async login(username: string, password: string): Promise<void> {
    await this.click(this.makeAppointmentLink);
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginButton);
  }
}
