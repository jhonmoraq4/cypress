describe('Location demo',function() {

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should have title tag', function() {
        cy.title().should('eq','Swag Labs');
    });

    it('should have correct URL', function() {
        cy.url().should('eq','https://www.saucedemo.com/');
    });

    it('should be HTTPS', function() {
        cy.location('protocol').should('contains','https');
    });

    it('The hostname should be www.saucedemo.com', function() {
        cy.location('hostname').should('eq','www.saucedemo.com');
    });

    it('should redirecto to inventory.html', function() {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.location('pathname').should('eq','/inventory.html');
    });

})