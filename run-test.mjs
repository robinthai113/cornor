/* eslint-disable no-console */
import { exec } from "child_process";
// List of feature files
const group_1 = [
  "@9361_feedBackManagement",
  "@engagementCustomField",
  "@slackNotification",
  "@8729_exportTaskFromProject",
  "@addExternalUserTaskFlyOut",
  "@documentManagage",
];
const group_2 = [
  "@invitationExternalUser",
  "@projectNameSearch",
  "@editProjectFlyOut",
  "@todoItemsTab",
  "@8729_exportTaskFromEngagement",
  "@adminportallPermission",
];
const group_3 = [
  "@projectTaskFlyOut",
  "@library",
  "@engagementRuleBuilder",
  "@unpublishSolution",
  "@updateEngagementTaskView",
  "@9582_RedDueDate",
];
const group_4 = [
  "@login",
  "@shareTaskToProject",
  "@filterFunction",
  "@projectCustomField",
  "@adminRequestManager",
  "@editTaskFlyOut",
  "@projectStandAloneView",
];

const group = process.env.GROUP;
let selectedScenarios;

if (group === "group_1") {
  selectedScenarios = group_1;
} else if (group === "group_2") {
  selectedScenarios = group_2;
} else if (group === "group_3") {
  selectedScenarios = group_3;
} else if (group === "group_4") {
  selectedScenarios = group_4;
} else {
  console.error(`Error: Invalid or no group provided. Please specify a valid group.`);
  process.exit(1);
}
const runTest = async (testTag) => {
  return new Promise((resolve) => {
    // Always resolve
    console.log(`run command : npm test --TAGS="${testTag}"`);
    exec(`npm test --TAGS="${testTag}"`, (error, stdout) => {
      if (error) {
        console.error(`Error executing ${testTag}: ${error}`);
        // Resolve even in case of error to ensure all tests are run
        resolve(`Failed: ${testTag}`);
      } else {
        console.log(stdout);
        resolve(`Passed: ${testTag}`);
      }
    });
  });
};

const runAllTests = async () => {
  let index = 0;
  // number of feature in parallel in an agent 1 is not parallel
  const runInParalell = 4;
  while (index < selectedScenarios.length) {
    // Slice selectedScenarios array to get the next 1 scenarios
    const scenarioSubset = selectedScenarios.slice(index, index + runInParalell);

    // Run those 1 scenarios in parallel
    await Promise.all(scenarioSubset.map(runTest));
    index += runInParalell;
  }
  // After all tests are done, run the report generation script
  exec("npx ts-node report.ts", (error, stdout) => {
    if (error) {
      console.error(`Error generating report: ${error}`);
      return;
    }
    console.log("Report generated successfully:");
    console.log(stdout);
  });
};
runAllTests().catch((error) => {
  console.error("Failed to run all tests:", error);
  process.exit(1);
});
