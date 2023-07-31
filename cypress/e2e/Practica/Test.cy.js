describe('Pie Chart integrations', function(){
    beforeEach(() => {
        cy.visit('https://apexcharts.com/samples/react/pie/simple-donut.html')
    })

    it('check data validation', function(){
        cy.get('.apexcharts-donut-series').should('be.visible').find('text').should('countains','Series A:')
    })

})