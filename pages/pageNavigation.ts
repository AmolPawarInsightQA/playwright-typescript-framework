import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PageNavigation extends BasePage {
  readonly youtubeButton: Locator;
  readonly twitterButton: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.youtubeButton = page.locator('a[href="https://youtube.com/MukeshOtwani"]').first();
    this.twitterButton = page.locator('a[href="https://twitter.com/MukeshOtwani"]').first();
    this.email = page.getByPlaceholder('Enter Email');
    this.password = page.getByPlaceholder('Enter Password');
    this.signInButton = page.getByRole('button', { name: /sign in/i });
    this.welcomeMessage = page.getByText('Welcome Admin Manager to Learn Automation Courses', { exact: true });
  }

  async openLoginPage(): Promise<void> {
    await this.page.goto('https://freelance-learn-automation.vercel.app/login');
  }

  async openSocialPage(button: Locator): Promise<Page> {
    const newPagePromise = this.page.context().waitForEvent('page');
    await button.click();
    const newPage = await newPagePromise;
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }

  async login(email: string, password: string): Promise<void> {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signInButton.click();
  }
}