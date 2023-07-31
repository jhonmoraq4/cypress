import homeSaucePage from '../../pages/saucedemo/homeSaucePage'
import inventoryPage from '../../pages/saucedemo/InventoryPage'

describe ('POM implementation',() => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('should login in inventory page',() => {
        homeSaucePage.typeUserName('standard_user');
        homeSaucePage.typePassowrd('secret_sauce');
        homeSaucePage.clickLogin();

        inventoryPage.elements.titleSpan().should('have.text','Products');
    });

    it('should logked out message',() => {
        homeSaucePage.typeUserName('locked_out_user');
        homeSaucePage.typePassowrd('secret_sauce');
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.');
    });

    it('should fail username message',() => {
        homeSaucePage.typeUserName('dummyUserName');
        homeSaucePage.typePassowrd('secret_sauce');
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service');
    });

})
