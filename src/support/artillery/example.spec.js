const { test, browser, context, chromium, expect } = require('@playwright/test')
test('test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto("https://cgchat-preview.connorgp.com/chat", { timeout: 60000 });
    await page.locator("input[type='email']").fill("acltestuser01@connorgp.com");
    await page.locator("input[type='submit']").click({ timeout: 60000 });
    await page.locator("input[type='password']").fill("McbFc2SZC08RfWob1I3E");
    await page.locator("input[type='submit']").click({ timeout: 60000 });
    await page.context().storageState({ path: "src\\support\\auth\\user.json" })

})