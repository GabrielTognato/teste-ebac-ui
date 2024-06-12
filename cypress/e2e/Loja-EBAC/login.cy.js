/// <reference types="cypress"/>
const perfil= require('../../fixtures/perfil.json')

describe('funcionalidade : login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

 it ('deve fazer login com sucesso - Usando massa de dados', () => {
     cy.get('#username').type (perfil.usuario)
     cy.get('#password').type (perfil.senha)
     cy.get('.woocommerce-form > .button').click()
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gabriel-8834')
     });

 it.only ('deve fazer login com sucesso - fixture', () => {
     cy.fixture('perfil').then( dados => {
     cy.get('#username').type (dados.usuario)
     cy.get('#password').type (dados.senha , {log: false})
     cy.get('.woocommerce-form > .button').click()
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gabriel-8834')
      })
});    
   
 
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