describe('Intercept demo',() => {

    it('Initial Validation',()=>{
        cy.visit('http://172.30.144.1:8888/')

        cy.get('.new-todo').type('test{enter}')
        cy.get('.new-todo').type('wash dishes{enter}')
        
        cy.get('.todo-list li').should('have.length',2)
        
        .and('contain','test')
        .and('contain','wash dishes')
    })

    it('Moked API response',()=>{
    
         cy.intercept('GET', '/todos', { fixture: 'intercept/interceptFixture.json' }).as('Alias-getTodos-Fixture')
        cy.visit('http://172.30.144.1:8888/')

        cy.log('test')
    })

    it('Mokect a ready todolist',()=>{

        const stubSample= [{
            "title":"Mokecd API video",
            "completed":true,
            "id":"1"
        }]

        cy.intercept('GET', '/todos',{

            body:stubSample

        }).as('getTodos-body')

    })

})