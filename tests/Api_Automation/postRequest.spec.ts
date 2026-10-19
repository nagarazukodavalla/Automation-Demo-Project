import { test, expect } from "@playwright/test";
import testdata from "../../testdata/userData.json" with { type: "json" };

test("POST - create user", async ({ request }) => {
  const requestBody = {
    name: "Nagaraju",
    username: "nagaraju",
    email: "nagaraju@gmail.com",
  };

  const response = await request.post("/users", { data: requestBody });
  console.log("Status", response.status());

  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  console.log("Response", requestBody);

  expect(requestBody.name).toBe("Nagaraju");
  expect(requestBody.username).toBe("nagaraju");
  expect(requestBody.email).toBe("nagaraju@gmail.com");
});
