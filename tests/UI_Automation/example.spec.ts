import { test, expect } from '@playwright/test';

test.describe('Playwright Home Page Tests', () => {

  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect title to contain Playwright
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the Get Started link
    await page.getByRole('link', { name: 'Get started' }).click();

    // Verify Installation heading is visible
    await expect(
      page.getByRole('heading', { name: 'Installation' })
    ).toBeVisible();
  });




test('Amazon home page has an Amazon title', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await expect(page).toHaveTitle(/Amazon/i);
});


});