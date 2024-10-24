Feature: Forgot Password Feature

    Scenario: User Forgot Password
      Given I visit the URL
      When I should see the homepage
      When I click the link Forgot Password
      And I submit the Username
      Then I click the button Reset Password
      And I Should see the successfully