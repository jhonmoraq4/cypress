Feature: Login Page

    Feature Page where the user can login to their accounts

    Scenario: Success Login
    
        Given POM A user enters to the login Page
        When POM A user enters the username "standard_user"
        And POM A user enters the password "secret_sauce"
        And POM A user clicks on the login button
        Then POM A user will be logged in

    Scenario: Fail Login
    
        Given POM A user enters to the login Page
        When POM A user enters the username "locked_out_user"
        And POM A user enters the password "secret_sauce"
        And POM A user clicks on the login button
        Then POM The error message `Epic sadface: Sorry, this user has been locked out.` is displayed