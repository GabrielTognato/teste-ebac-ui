/// <reference types="cypress" />
const perfil= require('../../fixtures/perfil.json')

describe('Funcionalidade: detalhes da conta ', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login(perfil.usuario, perfil.senha)
        
    });
    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Gabriel', "Tognato", "GabrielHT")
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });
    
});