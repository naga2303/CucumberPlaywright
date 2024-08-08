Feature: User Authentication test

    Background: 
        Given User navigates to the application
        

    Scenario: Login should be success
        And User enter the username as "DemoCsr"
        And User enter the password as "crmsfa"
        When User click on the login button
        Then login should be success

   