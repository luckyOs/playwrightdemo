const { webkit, chromium, firefox } = require('playwright');
const { test, expect } = require('@playwright/test');
import type { Browser,  Page,  Locator,BrowserContext  } from '@playwright/test'

test('browser test',async()=>{

    const browser:Browser = await firefox.launch({headless:false});

//browserContext_1
const browserContext_1: BrowserContext = await browser.newContext();
const page1:Page =await browserContext_1.newPage();

//browserContext_2
const browserContext_2: BrowserContext = await browser.newContext();
const page2:Page =await browserContext_2.newPage();

//browser 1
    await page1.goto("https://naveenautomationlabs.com//opencart/index.php?route=account/login");
    const emailId1:Locator = await page1.locator('#input-email');
    const password1:Locator = await page1.locator('#input-password');
    const loginButton1:Locator = await page1.locator("[value='Login']");
    
    await emailId1.fill("pwtest@opencart.com");
    await password1.fill("playwright@123");
    await loginButton1.click();


//browser 2
    await page2.goto("https://naveenautomationlabs.com//opencart/index.php?route=account/login");
    const emailId2:Locator = await page2.locator('#input-email');
    const password2:Locator = await page2.locator('#input-password');
    const loginButton2:Locator = await page2.locator("[value='Login']");
    
    await emailId2.fill("userpw@pw.com");
    await password2.fill("Test@123");
    await loginButton2.click();



    await browser.close();

    await new Promise(f =>setTimeout(f,3000));

});