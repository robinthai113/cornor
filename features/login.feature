@autoTraining
Feature: Login and verify the Profile name appears

    Scenario: Validate user can login
      Given I open the HomePage
      When I enter credential and submit
      Then I navigated to Homepage successful!
      