import { test, expect } from "@playwright/test";

test.only(
  "Bearer Token Authentication",
  { tag: "@bearerToken" },
  async ({ request }) => {
    const loginRequest = await request.post(
      "https://dummyjson.com/auth/login",
      {
        data: {
          username: "emilys",
          password: "emilyspass",
        },
      },
    );

    expect(loginRequest.status()).toBe(200);
    const loginBody = await loginRequest.json();
    console.log(loginBody);
    const accessToken = loginBody.accessToken;
    console.log(accessToken);

    const profileResponse = await request.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    expect(profileResponse.status()).toBe(200);

    const profileBody = await profileResponse.json();

    console.log(profileBody);

    expect(profileBody.username).toBe("emilys");
    expect(profileBody.email).toBe("emily.johnson@x.dummyjson.com");
    expect(profileBody.firstName).toBe("Emily");
  },
);

test.only(
  "Bearer Token Authontication",
  { tag: "@bearerToken" },
  async ({ request }) => {
    const loginRequest = await request.post("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: "Bearer ${accessToken}",

        // data: {
        //     username: 'emilys',
        //     password: 'emilyspass'
      },
    });

    expect(loginRequest.status()).toBe(200);
    const loginBody = await loginRequest.json();
    console.log(loginBody);
    const accessToken = loginBody.accessToken;
    console.log(accessToken);
  },
);

test("GET - Get user request @userrequest", async ({ request }) => {
  const userRequest = await request.get("https://dummyjson.com/users");

  console.log("Get request status:", userRequest.status());

  expect(userRequest.status()).toBe(200);

  const responseBody = await userRequest.json();

  console.log(responseBody);
});

//Get All users
test("GET - Get all users", async ({ request }) => {
  const response = await request.get("/users");
  console.log("Status", response.status());
  expect(response.status()).toBe(200);
  const users = await response.json();
  console.log(users);
  expect(users.length).toBeGreaterThan(0);
});

//Get Single User

test("GET - Get single user", async ({ request }) => {
  const response = await request.get("/users/1");
  console.log("Status", response.status());
  expect(response.status()).toBe(200);
  const user = await response.json();
  console.log(user);

  expect(user.id).toBe(1);
  expect(user.name).toBe("Leanne Graham");
  expect(user.username).toBe("Bret");
  expect(user.email).toBeTruthy();
});

//Validate Response headers
test("GET - Get single user @contentType", async ({ request }) => {
  const response = await request.get("/users/1");
  console.log("Status", response.status());
  expect(response.status()).toBe(200);
  const contentType = response.headers()["content-type"];
  console.log("Content-Type", contentType);
  expect(contentType).toContain("application/json");
});
