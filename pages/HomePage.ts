const { webkit, chromium, firefox } = require('playwright');
const { test, expect } = require('@playwright/test');
import type { Browser,  Page,  Locator } from '@playwright/test'


export class HomePage {
  constructor(private page: Page) {}

  async searchProduct(product: string) {
    await this.page.fill('input[name="search"]', product);
    await this.page.click('button[class*="btn-default"]');
  }

  async clickProduct(productName: string) {
    await this.page.click(`a:has-text("${productName}")`);
  }
}