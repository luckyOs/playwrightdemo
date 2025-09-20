//import { webkit, chromium } from 'playwright'
const { webkit, chromium, firefox } = require('playwright');
const { test, expect } = require('@playwright/test');
import type { Browser,  Page,  Locator, BrowserContext } from '@playwright/test'


test('auth test',async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel: 'chrome'});
    const Context:BrowserContext  = await browser.newContext();

    const page:Page = await browser.newPage();

    const username = 'admin';
    const password = 'admin';

    
   //const authHeader = 'Basic' + btoa (username+ ':' +password);
    page.setExtraHTTPHeaders({Authorization : createAuthHeader(username, password)});
   // await page.goto('/basic_auth');
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
  
    await new Promise(() =>{});;

});

function createAuthHeader(username:any, password:any) {
return 'Basic'+ btoa (username+ ':'+password);

}