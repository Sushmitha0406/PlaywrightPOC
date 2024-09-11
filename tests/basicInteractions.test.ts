import { test, expect } from '@playwright/test';

test('text enter', async ({ page }) => {
  viewport: null
  await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
  await page.getByLabel('E-mail').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('123456789');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);
  await page.locator('//button[contains(.,"Request Street Turn")]').click();
  const enterreference = page.locator('//label[normalize-space(text())="Ref *""]');
  expect(enterreference).toHaveClass('v-label theme--light')

});

test('radiocheck', async ({ page }) => {
    viewport: null
  await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
  await page.getByLabel('E-mail').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('123456789');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);
  await page.locator('//button[contains(.,"Request Street Turn")]').click();
  const radio = page.locator('//label[normalize-space(text())="Pool Chassis"]');
  expect(radio).not.toBeChecked();
  await radio.check();
  expect(radio).toBeChecked();
})
test.only('handling dropdowns', async ({page})=>{
    await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
    await page.getByLabel('E-mail').press('Tab');
    await page.getByLabel('Password', { exact: true }).fill('123456789');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(10000);
    await page.locator('//button[contains(.,"Request Street Turn")]').click();
    await page.click('//label[text()="Line *"]/following-sibling::div');
    await page.locator("//div[contains(@class,'v-list v-select-list')]")
    .locator("//div[normalize-space(text())='Maersk']").click();
    await page.waitForTimeout(5000); 
})