import { test, expect } from '@playwright/test';

test('download', async ({ page }) => {
  viewport: null
  await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
  await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('123456789');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);
  await page.click('//span[normalize-space(text())="History"]')
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('//button[contains(@class,"ml-2 rounded-sm")]') 
  ])
  // const path = await download.path();
  // console.log(path);
  const filename = download[0].suggestedFilename()
  await download[0].saveAs(filename)
})

test.only('upload', async ({ page }) => {
  viewport: null
  await page.goto('https://qualle-development--v3-qvh70b6k.web.app/login');
  await page.getByLabel('E-mail').fill('sushmitha.thoutam@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('123456789');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);
  await page.click('//span[normalize-space(text())="Post Empty Container"]')
  await page.click('//div[normalize-space(text())="Your containers"]')
  await page.click('//button[contains(@class,"mx-4 rounded-sm")]/following-sibling::div[1]')
  
  const [uploadFiles] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click('//div[normalize-space(text())="Upload CSV"]') 
  ]);
  uploadFiles.setFiles('uploadItems/containers.csv');
  await page.waitForTimeout(20000);

})