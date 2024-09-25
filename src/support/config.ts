import { LaunchOptions } from "@playwright/test";
import("dotenv/config");

const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"],
  firefoxUserPrefs: {
    "media.navigator.streams.fake": true,
    "media.navigator.permission.disabled": true,
  },
  headless: false,
  timeout: 60000,
};

export const config = {
  browser: process.env.BROWSER || "chromium",
  browserOptions,
  BASE_URL: "https://beta-app.connorgp.com/",
  USER_EMAIL: "russ.dan@soldenservices.com",
  USER_PASSWORD: "AllUrBaseAreBelong2us!HaHaHAHA",
  SLACK_APP_URL: "https://slack.com/",
  contextOptions: {
    permissions: ["clipboard-read", "clipboard-write", "accessibility-events"],
  },
  takeScreenShot: true,
};
