# Projeto de Testes Automatizados - WebTables DemoQA

Este projeto realiza testes automatizados end-to-end na página WebTables do DemoQA utilizando [Cypress](https://www.cypress.io/) e [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor), seguindo o padrão BDD (Behavior Driven Development).

## Objetivo

Automatizar cenários de cadastro, edição e exclusão de registros em uma tabela dinâmica, garantindo que as funcionalidades principais da página WebTables estejam funcionando conforme esperado.

## Estrutura do Projeto

```
cypress.config.js                # Configuração do Cypress e integração com Cucumber
cypress.env.json                 # Dados dos usuários utilizados nos testes
package.json                     # Dependências e scripts do projeto
cypress/
  e2e/
    webTables.feature            # Cenários de teste escritos em Gherkin
  fixtures/                      # Dados estáticos para testes (não utilizado atualmente)
  support/
    commands.js                  # Comandos customizados do Cypress (template)
    e2e.js                       # Arquivo de suporte global, importa páginas e steps
    Pages/
      webTables.Page.js          # Page Object Model para interação com WebTables
    step-definitions/
      webTables.cy.js            # Implementação dos passos dos cenários
```

## Principais Arquivos

- [`cypress/e2e/webTables.feature`](cypress/e2e/webTables.feature): Define os cenários de teste em linguagem natural (Gherkin), facilitando a compreensão dos requisitos testados.
- [`cypress/support/Pages/webTables.Page.js`](cypress/support/Pages/webTables.Page.js): Implementa o padrão Page Object, encapsulando toda a lógica de interação com os elementos da página WebTables.
- [`cypress/support/step-definitions/webTables.cy.js`](cypress/support/step-definitions/webTables.cy.js): Contém a implementação dos passos dos cenários, utilizando os métodos do Page Object.
- [`cypress.env.json`](cypress.env.json): Armazena os dados dos usuários utilizados nos testes, permitindo fácil alteração sem modificar o código.

## Funcionalidades Testadas

1. **Cadastro de novo registro**
   - Preenche o formulário com dados do usuário.
   - Submete o formulário.
   - Valida que o novo registro aparece na tabela.

2. **Edição de registro existente**
   - Localiza o registro recém-criado pelo e-mail.
   - Edita os dados do registro.
   - Valida que as informações foram atualizadas corretamente.

3. **Exclusão de registro**
   - Exclui o registro atualizado.
   - Valida que o registro não está mais presente na tabela.

## Como Executar

### Pré-requisitos

- Node.js (versão recomendada: 18+)
- npm

### Instalação

1. Clone o repositório:
   ```sh
   git clone <url-do-repositorio>
   cd projeto-cypress
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

### Execução dos Testes

- Para abrir o Cypress em modo interativo:
  ```sh
  npx cypress open
  ```
- Para rodar os testes em modo headless:
  ```sh
  npx cypress run
  ```

## Personalização dos Dados

Os dados dos usuários utilizados nos testes podem ser alterados facilmente no arquivo [`cypress.env.json`](cypress.env.json):

```json
{
  "USUARIO_NOME": "Thais",
  "USUARIO_SOBRENOME": "Silva",
  "USUARIO_EMAIL": "thais@teste.com",
  "USUARIO_SALARIO": "4000",
  "USUARIO_EDIT_SOBRENOME": "Vasconcelos",
  "USUARIO_EDIT_EMAIL": "thais.vasconcelos@teste.com"
}
```

## Observações Técnicas

- O projeto utiliza o padrão Page Object para facilitar a manutenção e reutilização dos métodos de interação com a página.
- Os cenários são escritos em português, seguindo o padrão BDD, tornando os testes mais legíveis para todos os envolvidos no projeto.
- O tratamento de exceções JavaScript está configurado para evitar falhas nos testes causadas por erros não relacionados ao fluxo testado.

## Autor

Thais Vasconcelos

