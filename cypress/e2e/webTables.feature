#utf-8
#language: pt

Funcionalidade: Tabela de registros

Cenário: Adicionar, Editar e excluir registro na tabela de webTables
Dado que acesso a página de webTables
Quando preencho o formulário com os dados do novo registro
E submeto o formulário
Então o novo registro deve ser exibido na tabela

Quando edito o registro recém-criado
Então o registro deve ser atualizado com as novas informações

Quando excluo o registro atualizado
Então o registro não deve mais ser exibido na tabela