import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.click('#button-cart');
  }

  async getPrice() {
    return await this.page.locator('.price').textContent();
  }

  async isImageVisible() {
    return await this.page.locator('.thumbnail img').isVisible();
  }
}