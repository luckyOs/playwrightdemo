//import { webkit, chromium } from 'playwright'
const { webkit, chromium, firefox } = require('playwright');
const { test, expect } = require('@playwright/test');
import type { Browser,  Page,  Locator } from '@playwright/test'


test('login test',async()=>{

    const browser:Browser = await firefox.launch({headless:false});
    const page:Page = await browser.newPage();
    
    await page.goto("https://naveenautomationlabs.com//opencart/index.php?route=account/login");


    const emailId:Locator = await page.locator('#input-email');
    const password:Locator = await page.locator('#input-password');
    const loginButton:Locator = await page.locator("[value='Login']");
    
    await emailId.fill("pwtest@opencart.com");
    await password.fill("playwright@123");
    await loginButton.click();


    const title = await page.title();
    console.log("home page title:", title);
    

    await  page.screenshot({path: 'homepage.png'});

    expect(title).toEqual('My Account');

    await browser.close();

    await new Promise(f =>setTimeout(f,3000));

});