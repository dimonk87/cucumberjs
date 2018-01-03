Feature: Test processing points
  As admin I should be able to:
  - create new process
  - edit created process
  - copy created process
  - delete created or edited process

  Background:
    Given I am logged in in app as admin

    @process
  Scenario: Create new processing point
    When I field in all required fields
    Then I should see created processing point

