const { chromium } = require('playwright');

(async () => {
  // Launch a new browser instance
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to a webpage
  await page.goto('https://example.com');

  // Take a screenshot
  await page.screenshot({ path: 'example.png' });

  // Close the browser
  await browser.close();
})();
