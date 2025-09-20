// tests/priceImage.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('Validate price and image visibility', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);

  await page.goto('/');
  await home.searchProduct('Canon EOS 5D');
  await home.clickProduct('Canon EOS 5D');

  const price = await product.getPrice();
  expect(price).toContain('$');

  const imageVisible = await product.isImageVisible();
  expect(imageVisible).toBeTruthy();
});