import { ICustomWorld } from "./custom-world";
import { config } from "./config";

import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
  AfterStep,
} from "@cucumber/cucumber";
import {
  chromium,
  ChromiumBrowser,
  firefox,
  FirefoxBrowser,
  webkit,
  WebKitBrowser,
} from "@playwright/test";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { ensureDir } from "fs-extra";




let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
let secondBroswer: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
const tracesDir = "traces";

declare global {
  // eslint-disable-next-line no-var
  var browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
}

setDefaultTimeout(30 * 60 * 1000);

BeforeAll(async function () {
  switch (config.browser) {
    case "firefox":
      browser = await firefox.launch(config.browserOptions);
      break;
    case "webkit":
      browser = await webkit.launch(config.browserOptions);
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }
  await ensureDir(tracesDir);
});

Before({ tags: "@ignore" }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return "skipped" as any;
});

Before({ tags: "@debug" }, async function (this: ICustomWorld) {
  this.debug = true;
});

Before(async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, "-");
  // customize the [browser context](https://playwright.dev/docs/next/api/class-browser#browsernewcontextoptions)
  this.context = await browser.newContext({
    acceptDownloads: true,
    recordVideo: process.env.PWVIDEO ? { dir: "screenshots" } : undefined,
    viewport: { width: 1366, height: 768 },
    // viewport: { width: 1920, height: 1080 },
  });
  this.server = await this.context.request
  await this.context.tracing.start({ screenshots: true, snapshots: true });
  this.page = await this.context.newPage();
  this.feature = pickle;
});

Before("@multibleBrowser", async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  secondBroswer = await chromium.launch(config.browserOptions);
  this.secondContext = await secondBroswer.newContext({
    acceptDownloads: true,
    recordVideo: process.env.PWVIDEO ? { dir: "screenshots" } : undefined,
    viewport: { width: 1920, height: 1080 },
  });
  await this.secondContext.tracing.start({ screenshots: true, snapshots: true });
  this.secondPage = await this.secondContext.newPage();
  this.feature = pickle;
});

Before("@auth", async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, "-");
  await this.context?.close()
  // customize the [browser context](https://playwright.dev/docs/next/api/class-browser#browsernewcontextoptions)
  this.context = await browser.newContext({
    acceptDownloads: true,
    recordVideo: process.env.PWVIDEO ? { dir: "screenshots" } : { dir: "screenshots" },
    viewport: { width: 1800, height: 1000 },
    storageState: "./src/support/auth/user.json",
  });
  // this.server = await request.newContext({
  //   // All requests we send go to this API endpoint.
  //   // baseURL: config.BASE_API_URL,
  // });

  await this.context.tracing.start({ screenshots: true, snapshots: true });
  this.page = await this.context.newPage();
  this.feature = pickle;
});

After("@multibleBrowser", async function (this: ICustomWorld) {
  await this.secondPage?.close();
  await this.secondContext?.close();
  try {
    if (secondBroswer) {
      await secondBroswer.close();
    }
  } catch (ex) {
    console.error('Error closing Browser resources:', ex);
  }
});

AfterStep(async function (this: ICustomWorld) {
  if (this.isStepTakeScreenShot && config.takeScreenShot) {
    const image = await this.page?.screenshot();
    image && (await this.attach(image, "image/png"));
    const imageSecondPage = await this.secondPage?.screenshot();
    imageSecondPage && (await this.attach(imageSecondPage, "image/png"));
    // Check if newTab is open before taking a screenshot
    if (this.newTab && !this.newTab.isClosed()) {
      const imageTab = await this.newTab.screenshot();
      imageTab && (await this.attach(imageTab, "image/png"));
    }
  }
});
After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
  try {
    if (result) {
      await this.attach(`Status: ${result?.status}. Duration:${result.duration?.seconds}s`);

      // if (result.status !== Status.PASSED) {
      const image = await this.page?.screenshot();

      // Replace : with _ because colons aren't allowed in Windows paths
      const timePart = this.startTime?.toISOString().split(".")[0].replaceAll(":", "_");

      image && (await this.attach(image, "image/png"));

      const imageSecondPage = await this.secondPage?.screenshot();
      imageSecondPage && (await this.attach(imageSecondPage, "image/png"));

      const imageNewTab = await this.newTab?.screenshot();
      imageNewTab && (await this.attach(imageNewTab, "image/png"));
      await this.context?.tracing.stop({
        path: `${tracesDir}/${this.testName}-${timePart}trace.zip`,
      });
      // }
    }
    //close Page

    if (this.newTab) {
      await this.newTab?.close();
    }

    let pages = await this.context?.pages()
    if (pages) {

      for (let i = 0; i < pages.length; i++) {
        await pages[i].close()
      }

    }


    // if (this.page) {
    //   await this.page?.close();
    // }
  } catch (ex) {
    console.log('Error closing  Page :', ex);
  }

  try {


    if (this.context) {
      await this.context?.close();
    }
  } catch (ex) {
    console.error('Error closing Context resources:', ex);
  }


});

AfterAll(async function () {
  //close browser
  try {
    if (browser) {
      await browser.close();
    }
  } catch (ex) {
    console.error('Error closing Browser resources:', ex);
  }



});


