/// <reference types="cypress" />
describe('My Title', () => {
    it('Empty Test', () => {
        cy.visit('http://localhost:4200/')
        cy.title('welcome')
        // cy.title.should('be.visible').contains('welcome ')
    })
})