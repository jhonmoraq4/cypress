Feature: Login Page

Feature Page where the user can login to their accounts

Background: 
    Given A user enters to the login Page
Scenario: Success Login
 
    When A user enters the username "standard_user"
    And A user enters the password "secret_sauce"
    And A user clicks on the login button
    Then A user will be logged in

Scenario: Locked out Login

    When A user enters the username "locked_out_user"
    And A user enters the password "secret_sauce"
    And A user clicks on the login button
    Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed


Scenario: Incorrect user Login

    When A user enters incorrect credentials
    |username|password|
    |dummyUser|secret_sauce|
    |dummyUser2|secret_sauce2|
    And A user clicks on the login button
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed


Scenario: Incorrect password Login

    When A user enters incorrect credentials
    |username|password|
    |standard_user|dummyPassword|
    And A user clicks on the login button
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed