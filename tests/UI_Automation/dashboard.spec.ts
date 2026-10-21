import { test, expect } from "../../fixtures/testFixtures.js";
import { LoginPage } from "../../pages/LoginPage.js";
import userData from "../../test-data/userData.json" with { type: "json" };
import { AllureUtils } from "../../utils/allureUtils.js";
import { setupCommonHooks } from "../../utils/hooksUtils.js";
const dashBoardUrl: RegExp = /\/web\/index\.php\/dashboard\/index$/;

setupCommonHooks();

// test("Login and verify Dashboard @smoke", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.open();

//   await loginPage.login(
//     userData.validUser.username,
//     userData.validUser.password,
//   );

//   await loginPage.verifyDashboard();
// });

// test("Verify Dashboard @smoke", async ({ page }) => {
//   await page.goto("https://opensource-demo.orangehrmlive.com/");

//   await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);

//   await expect(
//     page.locator("h6.oxd-topbar-header-breadcrumb-module"),
//   ).toHaveText("Dashboard");
// });

await AllureUtils.setCommonDetails("Login", "Valid Login", "critical");

test("Verify Dashboard @smoke", async ({ page }) => {
  await page.goto("/");
  await page.waitForURL(dashBoardUrl);
  await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/, {
    timeout: 15000,
  });

  await expect(
    page.locator("h6.oxd-topbar-header-breadcrumb-module"),
  ).toHaveText("Dashboard");
});
