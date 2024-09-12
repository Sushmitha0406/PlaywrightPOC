import { test, expect } from '@playwright/test';

test('text enter', async ({ page }) => {
  viewport: null
  await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
  await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
  await page.getByLabel('E-mail').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('123456789');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);
//   await page.locator('//button[contains(.,"Request Street Turn")]').click();
  await page.locator('//button[@id="chatbase-bubble-button"]//img[1]').click();
//   const allframes = page.frames();
//   console.log("no of frames:"+allframes.length);
await page.waitForTimeout(20000)

  await page.getByPlaceholder("Write message here...").fill("hey");
//   await page.locator('//button[@id="chatbase-bubble-button"]//div[1]').fill("hey");
  await page.waitForTimeout(20000)
})