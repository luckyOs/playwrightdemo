// tests/addToCart.spec.ts

//const { webkit, chromium, firefox } = require('playwright');
//const { test, expect } = require('@playwright/test');
//import type { Browser,  Page,  Locator, BrowserContext } from '@playwright/test'

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('Add product to cart and validate', async ({ page }) => {

  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await page.goto('/');
  await home.searchProduct('MacBook');
  await home.clickProduct('MacBook');
  await product.addToCart();
  await cart.goToCart();
  await cart.validateProductInCart('MacBook');
});