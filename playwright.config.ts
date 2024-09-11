import { PlaywrightTestConfig } from "playwright/test";


const config: PlaywrightTestConfig = {
    testMatch: ["tests/basicInteractions.test.ts"],
    use:{
         headless: false,
         screenshot: "on",
         "video":"on",
         launchOptions:{
            slowMo: 1000
         }
    },
    retries: 0,
    reporter: [["dot"],["json", {
        outputFolder:"reports/jsonReport.json"
    }], ["html",{
        //outputFolder:"reports/htmlReport.html",
        open:"on-failure"
    }]]
    
};
export default config;