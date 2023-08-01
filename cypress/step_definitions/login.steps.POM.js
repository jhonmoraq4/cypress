import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { Given, When, Then } from "@cypress/cypress-cucumber-preprocessor";
const homeSaucePage = require('../e2e/9.1-PagePOM/homeSaucePage')


Given("POM A user enters to the login Page", () => {
  cy.visit("/");
});

When('POM A user enters the username {string}',(username)=>{ 

    homeSaucePage.typeUserName(username);
    
})

When('POM A user enters the password {string}',(password)=>{

    homeSaucePage.typePassowrd(password);

})

When('POM A user enters incorrect credentials',(dataTable)=>{
    
    dataTable.hashes().forEach(row=>{
        // cy.log(row.username)
        // cy.log(row.password)
        cy.get('#user-name').type(row.username);
        cy.get('#password').type(row.password)
    })

})

When('POM A user clicks on the login button',()=>{
    homeSaucePage.clickLogin();
})

Then('POM A user will be logged in',()=>{
    cy.url().should('contains','/inventory.html')
})


Then('POM The error message `Epic sadface: Sorry, this user has been locked out.` is displayed',()=>{
   homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.')
})

Then('POM The error message {string} is displayed',(errorMessage)=>{
    cy.get('[data-test="error"]').should('have.text',errorMessage)
})
