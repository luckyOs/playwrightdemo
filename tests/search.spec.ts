// tests/search.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Search functionality validation', async ({ page }) => {
  const home = new HomePage(page);
  await page.goto('/');
  await home.searchProduct('iPhone');
  await expect(page.locator('a:has-text("iPhone")')).toBeVisible();
});