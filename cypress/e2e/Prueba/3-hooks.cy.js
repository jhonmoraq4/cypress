//hooks are from mocha

// order:
// 1- Before -> Executed once, as soon as the first Test scenario (TS)
// 2- BedoreEach -> Executed before each TS
// 3- TestExecution
// 4- afterEach -> Executed after EACH TS
// 5- after -> Executed once, as son as the last TS

describe('Hook demo', function () {

before(function(){
    cy.log('Before')
})

beforeEach(function(){
    cy.log('Before Each')
})

it.skip('TC1', function () { // it.skip to the test
    cy.log('TC1')
})

it('TC2', () => {
    cy.log('TC2')
})

it('TC3', () => {
    cy.log('TC3')
})

it('TC4', () => {     // it.only to only execute one test
    cy.log('TC3')
})

afterEach(  () => {
    cy.log('after Each')
})

after(  () => {
    cy.log('after')
})

})