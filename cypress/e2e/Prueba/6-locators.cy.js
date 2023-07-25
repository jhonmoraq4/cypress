let username= "standard_user";
let password= "secret_sauce";

describe('Locators in Cypress', ()=>{

    beforeEach('Visit the web', ()=>{
        cy.visit('https://www.saucedemo.com/')
    });

    it('Get Method',function(){
        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click();

    });

    it('EQ | FIRST | LAST',function(){
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();
    })

    it('Filter method',function(){ //is looking for the DOM
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click()
    })

    it('FIND method',function(){ 
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').eq(2).click();
    })

    it('Parent method',function(){

        cy.get('form').parent().should('have.class','login-box')


    })

})