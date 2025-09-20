import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { user } from '../utils/credentials';

test('Full eCommerce flow: login, search, cart, checkout, logout', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const login = new LoginPage(page);

  // Step 1: Login
  await page.goto('https://tutorialsninja.com/demo/');
  await login.login(user.email, user.password);
  await expect(page.locator('text=My Account')).toBeVisible();

  // Step 2: Search and validate product
  await home.searchProduct('MacBook');
  await expect(page.locator('a:has-text("MacBook")')).toBeVisible();

  // Step 3: Add to cart
  await home.clickProduct('MacBook');
  await product.addToCart();
  await cart.goToCart();
  await cart.validateProductInCart('MacBook');

  // Step 4: Price and image check
  const price = await product.getPrice();
  expect(price).toContain('$');
  const imageVisible = await product.isImageVisible();
  expect(imageVisible).toBeTruthy();

  // Step 5: Checkout simulation
  await page.click('a:has-text("Checkout")');
  await expect(page).toHaveURL(/route=checkout/);

  // Step 6: Logout
  await login.logout();
  await expect(page.locator('text=Login')).toBeVisible();

  await test.step('Login to account', async () => {
  await login.login(user.email, user.password);
  await expect(page.locator('text=My Account')).toBeVisible();
});


});