Feature: Test users tab
  As admin I should be able to:
  - create new users
  - edit created users
  - delete created or edited users

  Scenario: Create new user
    When I open Add user form and fill in all field with valid date
    Then I should see created user