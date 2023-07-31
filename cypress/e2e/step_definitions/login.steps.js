import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { Given, When, Then } from "@cypress/cypress-cucumber-preprocessor";


Given("A user enters to the login Page", () => {
  cy.visit("/");
});

When('A user enters the username {string}',(username)=>{ 

    cy.get('#user-name').type(username);
})

When('A user enters the password {string}',(password)=>{

    cy.get('#password').type(password)

})

When('A user enters incorrect credentials',(dataTable)=>{
    
    dataTable.hashes().forEach(row=>{
        // cy.log(row.username)
        // cy.log(row.password)
        cy.get('#user-name').type(row.username);
        cy.get('#password').type(row.password)
    })

})

When('A user clicks on the login button',()=>{
    cy.get('#login-button').click()
})

Then('A user will be logged in',()=>{
    cy.url().should('contains','/inventory.html')
})


Then('The error message `Epic sadface: Sorry, this user has been locked out.` is displayed',()=>{
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.')
})

Then('The error message {string} is displayed',(errorMessage)=>{
    cy.get('[data-test="error"]').should('have.text',errorMessage)
})
