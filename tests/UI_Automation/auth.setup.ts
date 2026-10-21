import { test as setup, expect } from "@playwright/test";
import userData from "../../test-data/userData.json" with { type: "json" };
const authFile = "playwright/.auth/user.json";

//LoginPage Locators
const userName: string = "username";
const password: string = "password";
const loginSubmit: string = "button[type = 'submit']";


setup("Authenticate and save session", async ({ page }) => {
  await page.goto(
    "/web/index.php/auth/login",

    {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    },
  );

  await page
    .getByRole("textbox", { name: userName })
    .fill(userData.validUser.username);
  await page
    .getByRole("textbox", { name: password })
    .fill(userData.validUser.password);

  await page.locator(loginSubmit).click();
 
  // await expect(page).toHaveURL(dashBoardUrl);

  await page.context().storageState({ path: authFile });
});
