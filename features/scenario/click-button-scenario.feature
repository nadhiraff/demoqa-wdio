@tugas
Feature: Demoqa tugas 

  @1
  Scenario: Button Click
    Given I am on the homepage
    # When I try to click Elements Button
    # And I try to click Buttons
    When I try to click Button Double Click Me
    And I try to click Button Right Click Me
    Then I click Button Click Me

  @2
  Scenario: Dropable
  Given I am on the Interactions Page
  When I try to click Dropable
  Then I successfully drop and drag the box 
