# Projeto Contacts List

Com este app é possível:

- Listar todos os contatos
- Adicionar contatos
- Editar contatos
- Deletar contatos
- Pesquisar por contatos

## Demonstração

> Acesse uma [demonstração da aplicação aqui](https:///)

## Aprendizados e Tecnologias

### Back-end e Banco de dados

- Mongoose, Node e Express
- Utilização das arquiteturas MSC e REST na API
- Utilização de conceitos de SOLID e Clean Code para a criação de classes na API

### Front-end

- React com Context API
- Bootstrap para estilização dos componentes da UI

### Testes e Qualidade de código

- Typescript para tipagem estática
- Testes unitários e de integração com Mocha, RTL, Chai e Sinon

### DevOps

- Docker para conteinerização da aplicação

## Rodando localmente

É necessário ter [Docker](https://docs.docker.com/get-docker/) instalado na máquina.

- Clone o repositório

```shell
git clone https://github.com/khkasper/contacts-list.git
```

- Rode o app com o seguinte comando

```shell
cd contacts-list && npm run compose:up
```

O aplicativo estará disponível em http://localhost:3000