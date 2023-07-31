describe('Basic API testing - Part #1', function() {

    beforeEach(function() {
        cy.request('GET','http://172.26.160.1:8888/initialData.json').as('ToDos')
    })

    it('body length - test', function() {

        cy.request('http://172.26.160.1:8888/initialData.json')
        //    .then((response) => {//         Access the response body and check its length
        //         expect(response.body).to.have.length(2);});
        .its('body')
        .should('have.length',2)

    })

    it('Request status - Test', function() {

        cy.request('http://172.26.160.1:8888/#/')
        //    .then((response) => {//         Access the response body and check its length
        //         expect(response.body).to.have.length(2);});
        .its('status')
        .should('eq',200)

    })

    it('Request status - Test', function() {

        cy.request('http://172.26.160.1:8888/initialData.json')
        .its('headers')
        .its('content-type')
        .should('include','application/json')
        //.and('include','charset=utf-8')

    });

    const apiItems= [
        {
            "id": "1",
            "title": "Buy groceries",
            "completed": false
          },
          {
            "id": "2",
            "title": "Do laundry",
            "completed": false
          }
    ]

    it('Initial items from EndPoint', function() {

        cy.request('http://172.26.160.1:8888/initialData.json')
        .its('body')
        .should('deep.eq',apiItems)

    });

    it('JSON schema check', function() {

        cy.request('http://172.26.160.1:8888/initialData.json')
        .its('body')
        .each( value => {
            expect (value).to.have.all.keys('title','completed','id')
        })

    });

    it('Using Alias Request', function() {

        cy.get('@ToDos').should(response=>{
            expect(response.body).to.have.length(2);
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })


    });


})