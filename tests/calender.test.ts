import { test, expect } from '@playwright/test';
import moment from "moment";

test('calender', async ({ page }) => {
  viewport: null
  await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
  await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('123456789');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);
  await page.locator('//button[contains(.,"Request Street Turn")]').click();
 
  await selectDate(12); 
  async function selectDate(date: number) {
    await page.click('//div[@class="v-menu"]/following-sibling::button[1]');
    const mmyy = page.locator("//div[@class='accent--text']//button[1]");
    const prev = page.locator("//button[@aria-label='Previous month']");
    const next = page.locator("//button[@aria-label='Next month']");
    await next.click();
    await page.click(`//div[normalize-space(text())='${date}']`);
    await page.waitForTimeout(10000); 
  }
  // let datetoselect: string = "November 2024"
  // // const thisMonth = moment().format(datetoselect, "yyyy").isBefore()
  // while(await mmyy.textContent() != datetoselect){
  //   await next.click()
  //   await page.click("//div[normalize-space(text())='20']")
  //   await page.waitForTimeout(10000);
  
})