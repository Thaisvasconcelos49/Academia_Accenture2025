class WebTablesPage {
  constructor() {
    this.BTN_ADD_REGISTRO = '#addNewRecordButton'
    this.Nome = '#firstName'
    this.Sobrenome = '#lastName'
    this.Email = '#userEmail'
    this.Idade = '#age'
    this.Salario = '#salary'
    this.Departamento = '#department'
    this.BTN_SALVAR = '#submit'
    this.Linha_Tabela = '.rt-tr-group'
    this.BTN_EDITAR = '[title="Edit"]'
    this.BTN_EXCLUIR = '[title="Delete"]'
    this.Corpo_Tabela = '.rt-tbody'
  }

  acessarPortal() {
    cy.visit('https://demoqa.com/webtables')
  }

  acessarFormulario() {
    cy.get('.modal-content').should('not.exist')
    cy.get(this.BTN_ADD_REGISTRO).click()
    cy.get('.modal-content').should('be.visible')
  }

  preencherFormularioComDados(usuario) {
    cy.get('.modal-content').should('be.visible')
    
    cy.get(this.Nome).clear().type(usuario.Nome)
    cy.get(this.Sobrenome).clear().type(usuario.Sobrenome)
    cy.get(this.Email).clear().type(usuario.Email)
    cy.get(this.Idade).clear().type(usuario.Idade)
    cy.get(this.Salario).clear().type(usuario.Salario)
    cy.get(this.Departamento).clear().type(usuario.Departamento)
  }

  submeterFormulario() {
    cy.get(this.BTN_SALVAR).click()
    cy.get('.modal-content').should('not.exist')
  }

  encontrarRegistroPorEmail(email) {
    return cy.get(this.Corpo_Tabela, { timeout: 15000 })
      .contains('.rt-td', email)
      .parent().parent()
  }

  editarRegistro(email) {
    this.encontrarRegistroPorEmail(email).within(() => {
      cy.get(this.BTN_EDITAR).click()
    })
    cy.get('.modal-content').should('be.visible')
  }

  excluirRegistro(email) {
    this.encontrarRegistroPorEmail(email).within(() => {
      cy.get(this.BTN_EXCLUIR).click()
    })
  }

  validarRemocao(email) {
    cy.get(this.Corpo_Tabela).should('not.contain', email)
  }
}

export default new WebTablesPage()