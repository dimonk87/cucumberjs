Feature: Login page test
  As an admin I want to check login page
  I want to know abaut errors with incorrect logged in
  I should be able to sign in with valid date

  @no_api
  Scenario: I see login page
    Then I should see title "LOGIN TO YOUR ACCOUNT"

  Scenario: Logged in successfull
    When I logged in on page
    Then I should see " admin"

  Scenario: Try to log in with empty fields
    When I don't fill in fields
    Then I shouldn't be able to click

  Scenario: Check validation
    When I fill in fields with incorrect data
    Then I shoul see an error message "Incorrect password or e-mail entered. Please try again."