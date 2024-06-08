/// <reference types="cypress"/>

describe('funcionalidade : login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

 it('Deve fazer login com sucesso', () => {
    
    cy.get('#username').type ('gabriel@teste.com.br')
    cy.get('#password').type ('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gabriel-8834')
 })

 it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
    
    cy.get('#username').type ('gabriell@teste.com.br')
    cy.get('#password').type ('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should ('exist')

 });
 it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {

    cy.get('#username').type ('gabriel@teste.com.br')
    cy.get('#password').type ('teste@@@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should ('contain', 'Erro: A senha fornecida para o e-mail gabriel@teste.com.br está incorreta.')
    cy.get('.woocommerce-error > li').should ('exist')

 });

})