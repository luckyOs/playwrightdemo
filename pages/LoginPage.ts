import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page.click('text=My Account');
    await this.page.click('text=Login');
    await this.page.fill('#input-email', email);
    await this.page.fill('#input-password', password);
    await this.page.click('input[value="Login"]');
  }

  async logout() {
    await this.page.click('text=My Account');
    await this.page.click('text=Logout');
  }
}