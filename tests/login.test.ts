import test, { chromium, firefox } from "playwright/test";

test("Login test demo", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    // const browser1 = await firefox.launch({
    //     headless: false
    // })
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://qualle-development--v3-qvh70b6k.web.app/login");
    await page.fill("//label[text()='E-mail']","sushmitha.thoutam@gmail.com");
    await page.fill("//label[text()='Password']","123456789");
    await page.click("' Log In '");
    await page.waitForTimeout(15000);

    const newcontext = await browser.newContext();
    const page1 = await newcontext.newPage();
    await page1.goto("https://qualle-development--v3-qvh70b6k.web.app/dashboard");
    await page.waitForTimeout(15000);

})