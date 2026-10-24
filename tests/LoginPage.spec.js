import { test, expect } from "@playwright/test";

test("Login Page", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  /* await page.locator("//span[normalize-space()='My Account']").click();
  await page
    .locator("//a[@class='dropdown-item'][normalize-space()='Register']")
    .click();
  await page.locator("#input-firstname").fill("Jagadeesh");
  await page.locator("#input-lastname").fill("B");
  await page.locator("#input-email").fill("bjagadeesh87902@gmail.com");
  await page.locator("#input-password").fill("Jaga@87902");
  await page.locator("//input[@name='agree']").click();
  await page.locator("//button[normalize-space()='Continue']").click;
  await page
    .locator("//h1[normalize-space()='Your Account Has Been Created!']")
    .toBeVisible();*/
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@type='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();
});
