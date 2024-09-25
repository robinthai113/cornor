const getWorldParams = () => {
  const params = {
    foo: "bar",
  };

  return params;
};

const config = {
  tags: process.env.npm_config_TAGS || "",
  requireModule: ["ts-node/register"],
  require: ["src/**/*.ts"],
  paths: [
    `features/${process.env.npm_config_FILE ? process.env.npm_config_FILE + '.feature' : '*.feature'}`,
    `features/**/${process.env.npm_config_FILE ? process.env.npm_config_FILE + '.feature' : '*.feature'}`
  ],
  format: [
    // 'message:e2e/reports/cucumber-report.ndjson',
    `json:reports/cucumber-report-${process.env.npm_config_TAGS ? process.env.npm_config_TAGS : ''}.json`,
    `html:reports/${process.env.npm_config_TAGS ? process.env.npm_config_TAGS : ''}-report.html`,
    `junit:reports/${process.env.npm_config_TAGS ? process.env.npm_config_TAGS : ''}-report.xml`,
    "summary",
    "progress-bar",
  ],
  formatOptions: { snippetInterface: "async-await" },
  worldParameters: getWorldParams(),
  publishQuiet: true,
  actionTimeout: 5 * 60 * 1000,
  timeout: 5 * 60 * 1000,
  expect: {
    timeout: 5 * 60 * 1000,
  },
  parallel: +process.env.npm_config_PARALLEL || 1
};


if (process.env.USE_ALLURE) {
  config.format.push("./src/support/reporters/allure-reporter.ts");
} else {
  config.format.push("@cucumber/pretty-formatter");
}
export default config;
