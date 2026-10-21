import * as allure from "allure-js-commons";

export class AllureUtils {
  static async setCommonDetails(
    feature: string,
    story: string,
    severity:
      | "blocker"
      | "critical"
      | "normal"
      | "minor"
      | "trivial" = "normal",
  ) {
    await allure.owner("Nagaraju");
    await allure.severity(severity);
    await allure.feature(feature);
    await allure.story(story);
  }
}
