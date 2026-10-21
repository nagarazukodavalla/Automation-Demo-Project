import { test, expect } from "../../fixtures/testFixtures.js";
import { LoginPage } from "../../pages/LoginPage.js";
import userData from "../../test-data/userData.json" with { type: "json" };

// test("Verify login page", async ({ loginPage }) => {
//   await loginPage.open();
//   await loginPage.verifyLoginPage();
// });

// test("Verify Login credentials @smoke", async ({ loginPage, page }) => {
//   await loginPage.open();
//   await loginPage.login(
//     userData.validUser.username,
//     userData.validUser.password,
//   );

// await loginPage.verifyLoginPage

//   const expectedUrl =
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

//   await expect(page).toHaveTitle(/OrangeHRM/);
//   await expect(page).toHaveURL(expectedUrl);
// });
