import { Page, Locator, expect } from "@playwright/test";

export class ElementHelper {
  constructor(private page: Page) {}

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async enterText(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async verifyVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async verifyText(locator: Locator, expectedText: string): Promise<void> {
    await expect(locator).toHaveText(expectedText);
  }

  async getText(locator: Locator): Promise<string | null> {
    return await locator.textContent();
  }
}
