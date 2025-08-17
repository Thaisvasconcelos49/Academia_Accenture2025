import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import WebTablesPage from '../Pages/webTables.Page'

Cypress.on('uncaught:exception', () => false)

Given('que acesso a página de webTables', () => {
  WebTablesPage.acessarPortal()
})

When('preencho o formulário com os dados do novo registro', () => {
  const Usuario_novo = {
    Nome: Cypress.env('USUARIO_NOME'),
    Sobrenome: Cypress.env('USUARIO_SOBRENOME'),
    Email: Cypress.env('USUARIO_EMAIL'),
    Idade: '29',
    Salario: Cypress.env('USUARIO_SALARIO'),
    Departamento: 'QA'
  }
  
  cy.log('Dados do novo usuário:', Usuario_novo)

  WebTablesPage.acessarFormulario()
  WebTablesPage.preencherFormularioComDados(Usuario_novo)
})

When('submeto o formulário', () => {
  WebTablesPage.submeterFormulario()
})

Then('o novo registro deve ser exibido na tabela', () => {
  const Usuario_novo = {
    Nome: Cypress.env('USUARIO_NOME'),
    Sobrenome: Cypress.env('USUARIO_SOBRENOME'),
    Email: Cypress.env('USUARIO_EMAIL'),
    Idade: '29',
    Salario: Cypress.env('USUARIO_SALARIO'),
    Departamento: 'QA'
  }
  
  WebTablesPage.encontrarRegistroPorEmail(Usuario_novo.Email)
    .within(() => {
      cy.get('.rt-td').eq(0).should('contain', Usuario_novo.Nome)
      cy.get('.rt-td').eq(1).should('contain', Usuario_novo.Sobrenome)
      cy.get('.rt-td').eq(2).should('contain', Usuario_novo.Idade)
      cy.get('.rt-td').eq(3).should('contain', Usuario_novo.Email)
      cy.get('.rt-td').eq(4).should('contain', Usuario_novo.Salario)
      cy.get('.rt-td').eq(5).should('contain', Usuario_novo.Departamento)
    })
})

When('edito o registro recém-criado', () => {
  const Usuario_novo = {
    Email: Cypress.env('USUARIO_EMAIL')
  }

  const Editar_Usuario_novo = {
    Nome: Cypress.env('USUARIO_NOME'),
    Sobrenome: Cypress.env('USUARIO_EDIT_SOBRENOME'),
    Email: Cypress.env('USUARIO_EDIT_EMAIL'),
    Idade: '29',
    Salario: Cypress.env('USUARIO_SALARIO'),
    Departamento: 'QA'
  }

  WebTablesPage.editarRegistro(Usuario_novo.Email)
  WebTablesPage.preencherFormularioComDados(Editar_Usuario_novo)
  WebTablesPage.submeterFormulario()
})

Then('o registro deve ser atualizado com as novas informações', () => {
  const Editar_Usuario_novo = {
    Nome: Cypress.env('USUARIO_NOME'),
    Sobrenome: Cypress.env('USUARIO_EDIT_SOBRENOME'),
    Email: Cypress.env('USUARIO_EDIT_EMAIL'),
    Idade: '29',
    Salario: Cypress.env('USUARIO_SALARIO'),
    Departamento: 'QA'
  }
  
  WebTablesPage.encontrarRegistroPorEmail(Editar_Usuario_novo.Email)
    .should('be.visible')
    .within(() => {
      cy.get('.rt-td:nth-child(1)').should('contain', Editar_Usuario_novo.Nome)
      cy.get('.rt-td:nth-child(2)').should('contain', Editar_Usuario_novo.Sobrenome)
      cy.get('.rt-td:nth-child(3)').should('contain', Editar_Usuario_novo.Idade)
      cy.get('.rt-td:nth-child(4)').should('contain', Editar_Usuario_novo.Email)
      cy.get('.rt-td:nth-child(5)').should('contain', Editar_Usuario_novo.Salario)
      cy.get('.rt-td:nth-child(6)').should('contain', Editar_Usuario_novo.Departamento)
    })
})

When('excluo o registro atualizado', () => {
  const Editar_Usuario_novo = {
    Email: Cypress.env('USUARIO_EDIT_EMAIL')
  }
  WebTablesPage.excluirRegistro(Editar_Usuario_novo.Email)
})

Then('o registro não deve mais ser exibido na tabela', () => {
  const Editar_Usuario_novo = {
    Email: Cypress.env('USUARIO_EDIT_EMAIL')
  }
  WebTablesPage.validarRemocao(Editar_Usuario_novo.Email)
})