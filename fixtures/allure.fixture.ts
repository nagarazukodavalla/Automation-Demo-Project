import { test as base } from "@playwright/test";
import * as allure from "allure-js-commons";

export const test = base.extend<{ allureCommon: undefined }>({
  allureCommon: [
    async ({}, use) => {
      await allure.owner("Nagaraju");
      await use(undefined);
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
