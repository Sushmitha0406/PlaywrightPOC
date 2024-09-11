import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  viewport: null
  await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
  // await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
  await page.getByLabel('E-mail').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('123456789');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);
  await page.getByText(' sushmitha.thoutam@gmail.com ').click();
  await page.getByText('Logout').click();
  await page.close();
});