import { LoginPage } from "../pages/login.page";
import { Then, Given, When } from "@cucumber/cucumber";

Given("I open the HomePage", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.goToLoginPage("workspace/home");
});

When("I enter credential and submit", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLoginButton();
  await loginPage.enterEmail();
  await loginPage.clickSubmitButton();
  await loginPage.enterPassword();
  await loginPage.clickSubmitButton();
});

Then("I navigated to Homepage successful!", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.verifyUserNameIsVisible();
});
