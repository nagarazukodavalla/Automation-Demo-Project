import { test, expect } from "@playwright/test";

test("Get User API - validate response", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1",
  );
  expect(response.status()).toBe(200);
  console.log("User response", response);
  const user = await response.json();
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();
  expect(user.email).toContain("@");
  console.log("user name", user.name);
  console.log("user email", user.email);
});
