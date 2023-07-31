describe('Fixtures Demo', function() {

    beforeEach(function() { 
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('FixtureTest/7.1sauceCredentias')
        .then(credentials => {
            this.credentials = credentials;
        })
    });

    it('Standard Users', function()  {
        cy.get('[data-test="username"]').type(this.credentials.standardUserName);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword); 
        cy.get('[data-test="login-button"]').click();

        cy.get('.title').should('contain.text','Products')

    })

    it('incorrect userName', function(){

        cy.get('[data-test="username"]').type(this.credentials.dummyUserName);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword); 
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')

    })

    it('incorrect password', function(){

        cy.get('[data-test="username"]').type(this.credentials.standardUserName);
        cy.get('[data-test="password"]').type(this.credentials.dummyPassword); 
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')

    })

    it('Lockout user ', function(){

        cy.get('[data-test="username"]').type(this.credentials.lockUserName);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword); 
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.')

    })

})