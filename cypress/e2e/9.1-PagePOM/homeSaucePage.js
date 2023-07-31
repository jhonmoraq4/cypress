class homeSaucePage{

    elements = {
        usernameInput: ()=> cy.get('#user-name'),
        passwordInput: ()=> cy.get('#password'),
        loginButton: ()=> cy.get('#login-button'),
        errorMessage: ()=> cy.get('h3[data-test="error"'),
    }

    typeUserName(username) {
        this.elements.usernameInput().type(username);
    }

    typePassowrd(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }



}

module.exports = new homeSaucePage();