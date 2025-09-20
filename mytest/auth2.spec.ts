const { webkit, chromium, firefox } = require('playwright');
const { test, expect } = require('@playwright/test');
import type { Browser,  Page,  Locator, BrowserContext } from '@playwright/test'

test('auth test', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const context: BrowserContext = await browser.newContext({
    extraHTTPHeaders: {
      Authorization: createAuthHeader('admin', 'admin'),
    },
  });

  const page: Page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  await expect(page.locator('text=Congratulations')).toBeVisible();

  await browser.close();
});

function createAuthHeader(username: string, password: string): string {
  return 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
}




