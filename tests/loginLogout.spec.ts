// tests/loginLogout.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { user } from '../utils/credentials';

test('Login and logout flow', async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/');
  await login.login(user.email, user.password);
  await expect(page.locator('text=My Account')).toBeVisible();
  await login.logout();
  await expect(page.locator('text=Login')).toBeVisible();
});