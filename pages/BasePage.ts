import { Locator, Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {}

  async navigate(path = "/"): Promise<void> {
    await this.page.goto(path);
  }
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }
  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }
  async selectDropdown(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }
  async checkCheckbox(locator: Locator): Promise<void> {
    await locator.check();
  }
  async uncheckCheckbox(locator: Locator): Promise<void> {
    await locator.uncheck();
  }
  async selectRadioButton(locator: Locator): Promise<void> {
    await locator.check();
  }
  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({ state: "visible" });
  }
  async getText(locator: Locator): Promise<string> {
    //Get the element's text → remove extra spaces → if there is no text, return an empty string.
    return (await locator.textContent())?.trim() ?? "";
  }
  async verifyVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }
}
