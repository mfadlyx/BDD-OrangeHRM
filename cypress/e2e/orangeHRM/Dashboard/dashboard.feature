Feature: Dashboard Feature

    Scenario: Visit Admin Page
      Given I visit the URL
      And I should see the homepage
      When I submit the Username
      And I submit the Password
      Then I click the button Login
      And I click the menu item Admin
      When I should see the Admin page

