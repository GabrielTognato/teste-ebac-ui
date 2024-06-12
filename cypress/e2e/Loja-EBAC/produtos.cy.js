/// <reference types="cypress"/>

describe('Funcionalidade: produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains('Apollo Running Short')
            .click()
            cy.get('#tab-description > :nth-child(2)').should('exist')
        
    });
});