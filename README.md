# Automated Testing with Playwright and Cucumber


## Introduction

Welcome to the "Automated Testing with Playwright and Cucumber" project! In this repository, we explore a powerful combination of tools for automating web application testing. Playwright, a modern end-to-end testing library, and Cucumber, a popular behavior-driven development (BDD) framework, come together to provide an efficient and user-friendly way to automate tests and ensure the quality of your web applications.


## Getting Started

## Requirements

Before you can run the tests for this project, ensure you have the following software and dependencies installed on your system:

- **Node.js**: You need Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- **npm or yarn**: You'll also need a package manager like npm or yarn. npm comes bundled with Node.js, but you can install yarn separately from [yarnpkg.com](https://yarnpkg.com/).

- **Playwright**: This project uses Playwright for browser automation. You can install it globally using npm or yarn with the following command:

  ```bash
  npm install -g playwright
  # or
  yarn global add playwright


### Installation Process

To get started, follow these simple steps:

1. Clone the repository to your local machine:

git clone git@ssh.dev.azure.com:v3/ConnorGroupRaD/Workspace/Connor.Automation.MemoCoach


2. Navigate to the project directory:

cd Connor.Automation.MemoCoach


3. Install the project dependencies using:
```
npm install
```

4. Update AUT URL in ```
config.ts```
 file

5. Update data test account in ```
dataInfo.ts```
 file

## Setting up Local Environment with .env File
To run your project locally, you'll need to create an .env file to store configuration variables. Follow the steps below to create your .env file:

1. Create a New File:

 - Open your preferred text editor.
 - Create a new file in the root of your project.
Add Configuration Variables:

# .env

   ```
RUSS_DAN_PASSWORD=*****
ACL02_PASSWORD=****
   ```

Running Tests
To run tests using Playwright, use the following command:
run all test not in parellel mode
```
npm run test 
```
run all test in a features file
```
npm test --FILE="library"
```
run all test in a features file With Tags
```
npm test --FILE="library" --TAGS="@auth"
```
or run in Parallel mode

```
npm run test:parallel
```
run all test not in parellel mode
*Note* config the run-test.js
```
npm runalltest
```
## Writing Tests in Feature Files

### Feature Files

Feature files are at the core of behavior-driven development. They serve as a human-readable way to express the expected behavior of your software system. You'll create a feature file for each feature or functionality you want to test. Feature files use the Gherkin syntax to define scenarios and steps.

- **Create a Feature File**: Start by creating a `.feature` file. For example, you might have a `login.feature` file to test the login functionality.

- **Write Scenarios**: Within the feature file, write scenarios using Given, When, and Then steps to describe the state, actions, and expected outcomes. Here's an example:

```gherkin
Feature: User Login
  Scenario: Valid User Login
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be logged in successfully
```
## Implement Step Definitions
Implement the step definitions in your chosen programming language. These functions should perform the actions described in the scenarios.

```gherkin

Given('the user is on the registration page', async () => {
  // Navigate to the registration page
});

When('the user enters valid registration details', async () => {
  // Enter valid registration details
});

Then('the user should be successfully registered', async () => {
  // Check if the user is successfully registered
});
```
## Implement Action page
In the Action Page file, define actions using Playwright's API to interact with the web elements. Utilize string-based locators to identify the elements for test automation.

This file contains methods that encapsulate the interaction logic with web elements using Playwright's powerful API.

For example, create functions for performing actions like clicking buttons, filling forms, or navigating through pages. Use explicit, string-based locators to target elements within the web page.

Here's an example of defining actions within the Action Page using Playwright's API:
``` javascript

class ActionPage {
  constructor(page) {
    this.page = page;
  }

  async clickButton(selector) {
    await this.page.click(selector);
  }

  async fillInput(selector, text) {
    await this.page.fill(selector, text);
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }
  // Additional methods for other interactions
}

```


### Reporting Test Results
The test results should be stored in the "../project/reports" directory

