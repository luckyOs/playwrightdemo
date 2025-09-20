import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goToCart() {
    await this.page.click('#top-links a:has-text("Shopping Cart")');
  }

  async validateProductInCart(productName: string) {
    await this.page.locator(`a:has-text("${productName}")`).waitFor();
  }
}