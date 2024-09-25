const report = require("multiple-cucumber-html-reporter");

const group = process.env.GROUP || 'default';
report.generate({
  jsonDir: "reports",
  reportPath: "./reports",
  reportName: group,
  displayDuration: true,
  metadata: {
    browser: {
      name: `${process.env.BROWSER}`,
      version: "115",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Enter here" },
    ],
  },
});
