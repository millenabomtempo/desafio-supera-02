# Desafio 02 - Angular

O desafio consiste na criação de um formulário para cadastro, edição e visualização dos dados.

**Requisitos**

- O formulário deve ter campos dos tipos: text, date, password, email, number, select e checkbox;
- Ao carregar a página, o formulário deve buscar os dados, caso existam no storage e mostrar nos campos desabilitados (somente visualização dos dados);
- Para editar o formulário deve-se ter um botão que habilitará os campos, permitindo assim as alterações;
- Ao salvar a edição deve-se alterar os dados no storage, e iniciar a visualização novamente.
- Caso não haja dados no storage, os campos serão mostrados vazios e habilitados, ao preenche-los e salva-los, os dados serão armazenados no storage;
- Deve-se haver campos obrigatórios e exibição de mensagens de erros por campo.
- As ações de salvar e editar só poderão ser realizadas quando o formulário estiver válido (os campos obrigatórios devem estar preenchidos);

### 🛠 Tecnologias
- [Angular](https://angular.io/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/)

### Rodando o projeto

```bash
# Clone este repositório
$ git clone https://github.com/millenabomtempo/desafio-supera-02

# Instale as dependências
$ yarn ou npm install

# Execute a aplicação backend
$ yarn server ou npm run server

# O servidor inciará na porta:3333 - acesse http://localhost:3333

# Certifique-se que tenha o angular-cli instalado

# Execute a aplicação frontend
$ ng serve

# A aplicação inciará na porta:4200 - acesse http://localhost:4200/
```

### Features

- [x] Listar usuários
- [x] Mostrar um usuário
- [ ] Editar usuário
- [ ] Cadastrar usuário
- [ ] Apagar usuário
- [ ] Validação de campos
- [ ] Adicionar mensagens de erros
- [ ] Melhoria do layout

![desafio-angular](https://user-images.githubusercontent.com/47898033/163733284-5605a0ab-0f28-497b-91a8-c248aa6de2b1.jpeg)
