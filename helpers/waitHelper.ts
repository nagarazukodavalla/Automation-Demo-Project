import { Page, Locator } from "@playwright/test";

export class WaitHelper {
  constructor(private page: Page) {}

  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: "visible",
      timeout: 10000,
    });
  }

  async waitForURL(urlPattern: RegExp): Promise<void> {
    await this.page.waitForURL(urlPattern, {
      timeout: 15000,
    });
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }
}
