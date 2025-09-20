// tests/checkout.spec.ts
import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('Mocked checkout simulation', async ({ page }) => {
  const cart = new CartPage(page);
  await page.goto('/');
  await cart.goToCart();
  await page.click('a:has-text("Checkout")');
  await expect(page).toHaveURL(/route=checkout/);
});