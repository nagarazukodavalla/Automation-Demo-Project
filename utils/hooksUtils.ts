import { test } from "@playwright/test";

export function setupCommonHooks() {
  test.beforeAll(async () => {
    console.log("Before All: Test suite started");
  });

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Before Each: ${testInfo.title}`);
    console.log(`URL before test: ${page.url()}`);
  });

  test.afterEach(async ({ page }, testInfo) => {
    console.log(`After Each: ${testInfo.title} | Status: ${testInfo.status}`);

    // Capture screenshot only when the test fails
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: testInfo.outputPath("failure.png"),
        fullPage: true,
      });
    }
  });

  test.afterAll(async () => {
    console.log("After All: Test suite completed");
  });
}
