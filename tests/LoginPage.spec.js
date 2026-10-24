import { test, expect } from "@playwright/test";

test("Login Page", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@type='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();

  console.log("I added the new line");
});
