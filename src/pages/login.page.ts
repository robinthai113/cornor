import { config } from "../support/config";
import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  loginBtn: Locator;
  emailField: Locator;
  passwordField: Locator;
  submitBtn: Locator;
  userProfileName: Locator;
  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator("div.login button");
    this.emailField = page.locator("input[type='email']");
    this.passwordField = page.locator("input[type='password']");
    this.submitBtn = page.locator("input[type='submit']");
    this.userProfileName = page.locator("div.avatar-name");
  }

  async goToLoginPage(urlPath: string) {
    await this.page.goto(config.BASE_URL + urlPath);
    await this.loginBtn.waitFor({ state: "visible", timeout: 10 * 1000 });
  }

  async clickLoginButton() {
    await this.page.waitForTimeout(2000);
    await this.loginBtn.click();
  }

  async enterEmail() {
    await this.emailField.fill(config.USER_EMAIL);
  }

  async enterPassword() {
    await this.passwordField.fill(config.USER_PASSWORD);
  }

  async clickSubmitButton() {
    await this.submitBtn.click();
  }

  async verifyUserNameIsVisible() {
    await this.userProfileName.waitFor({ state: "visible", timeout: 2 * 60 * 1000 });
    await expect(this.userProfileName).toBeVisible();
  }
}
