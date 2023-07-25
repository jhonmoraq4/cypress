describe ('Retry-ability Session',() =>{  // () =>    is the same than    function ()
    
    beforeEach(function(){
        cy.visit('http://172.26.160.1:8888/') //command 1

        cy.get('.new-todo') //command 2
        .type('todo-A{enter}') //command 3
        .type('todo-B{enter}') //command 4
    })

    it('should have two <li> elements', function() {

        cy.get('.todo-list li')//command 5
        .should('have.length',2)//assertion

    })

})