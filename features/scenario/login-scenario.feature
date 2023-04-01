@1
Feature: Demoqa tugas pertama

  # @button
  # Scenario: Button Clicl
  #   Given I am on the homepage
  #   When I try to click:
  #     | itemName        |
  #     | Elements        |
  #     | Buttons         |
  #     | Double Click Me |
  #     | Right Click Me  |
  #     | Click Me        |

  @button
  Scenario: Button Click
    Given I am on the homepage
    # When I try to click Elements Button
    # And I try to click Buttons
    When I try to click Button Double Click Me
    And I try to click Button Right Click Me
    Then I click Button Click Me
