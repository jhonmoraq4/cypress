describe('Login', function() {

    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Escribir test data dentro de campos', function() {
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click();

        cy.get('.oxd-topbar-header-breadcrumb-module').should('contain.text',"Dashboard")
    })

})