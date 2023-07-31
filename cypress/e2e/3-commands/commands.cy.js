describe('Command example', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
      
    })

    it('Success Login Test',function(){
        cy.typeLogin('standard_user','secret_sauce')
        cy.get('.title').should('contain.text','Products');
        cy.logout();
        cy.url().should('eq','https://www.saucedemo.com/');
    })

    it('Failure Login Test',function(){
        cy.typeLogin('standard_user','dummyPassword');
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    })

    // afterEach(function(){
    //     cy.logout();
    // })

})