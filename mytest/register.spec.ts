const { webkit, chromium, firefox } = require('playwright');
const { test, expect } = require('@playwright/test');
import type { Browser,  Page,  Locator } from '@playwright/test'

test('register test',async()=>{

    const browser:Browser = await firefox.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");


    const firstname:Locator = await page.locator('id=input-firstname');
    const lastname:Locator = await page.locator('id=input-lastname');   
    
    //1.Id:unique
    await firstname.fill("oshani");
    await lastname.fill("lakchani");

    //2.Class name : logo
    const logo:Locator=page.locator('text=Register Account');
    const logoExit=await logo.isEnabled();
    console.log(logoExit);

     //3.text
    const header:Locator=page.locator('.img-responsive');
    const headerExit=await header.isEnabled();
    console.log(headerExit);

    const continuebtn:Locator=page.locator('text=Continue');
    const ContinueExit=await continuebtn.isEnabled();
    console.log(ContinueExit);

    const forgottenPwdLink:Locator=page.locator('text=Forgotten Password');
    const forgottenPwdLinkExit=await forgottenPwdLink.isEnabled();
    console.log(forgottenPwdLinkExit);

    const email:Locator = await page.locator('css=input#input-email');   
    const telephone:Locator = await page.locator('css=input[name="telephone"]');  
    const privacyCheckBox:Locator=page.locator('css=input[type="checkbox"]');
    const password:Locator = await page.locator('xpath=//input[@id="input-password"]');   
    const search:Locator = await page.locator('xpath=//input[@name="search" and @type="text"]');    
    const confirm:Locator = await page.locator('css=input#input-confirm');    

    await email.fill("oshanilakchani@gmail.com");
    await telephone.fill("0123654789");
    await privacyCheckBox.click();

     await password.fill("test1234");
     await confirm.fill("test1234");

   const Continue:Locator = await page.locator("[value='Continue']");
   await Continue.click();

    await browser.close();

    await new Promise(f =>setTimeout(f,3000));

});