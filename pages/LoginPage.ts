import { Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(
      "/web/index.php/auth/login",

      {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      },
    );
    // await this.page.waitForLoadState();
  }

  async verifyLoginPage() {
    // await expect(this.page.locator("input[name='username']")).toBeVisible();
    // await expect(this.page.locator("input[name='password']")).toBeVisible();
    await expect(
      this.page.getByRole("textbox", { name: "username" }),
    ).toBeVisible();
    await expect(
      this.page.getByRole("textbox", { name: "password" }),
    ).toBeVisible();
  }

  async enterUserName(username: string) {
    await this.page.getByRole("textbox", { name: "username" }).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.getByRole("textbox", { name: "password" }).fill(password);
  }

  async clickSubmit() {
    // await this.page.locator("//button[@type='submit']").click();
    await this.page.locator("button[type = 'submit']").click();
  }

  async verifyDashboard() {
    await expect(
      this.page.locator("h6.oxd-topbar-header-breadcrumb-module"),
    ).toHaveText("Dashboard");
  }

  async login(username: string, password: string) {
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.clickSubmit();

    await expect(this.page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
  }
}
