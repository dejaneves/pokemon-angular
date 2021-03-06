# Pokemon Angular

Pokemon Angular é um projeto construído com o framework [Angular](https://angular.io/), para consultar a API [Pokeapi](https://pokeapi.co), exibindo seus dados em duas páginas: Página inicial e Página de detalhes. A primeira página (**Página inicial**), lista todos os pokemons existentes, e a segunda página (**Página de detalhes**) mostra todas as informações do pokemon selecionado.

[![Build Status](https://travis-ci.org/dejaneves/pokemon-angular.svg?branch=main)](https://travis-ci.org/dejaneves/pokemon-angular)

## Stack

- [Nodejs](https://nodejs.org/en/)
- [Angular](https://angular.io/)
- [Sass](https://sass-lang.com/)
- [Heroku](https://www.heroku.com/)
- [Git](https://git-scm.com/)

O Nodejs, Angular e Git precisam ser instalados localmente para executar a aplicação em sua máquina.

O projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.1.4.

![home-pokemon-angular](https://user-images.githubusercontent.com/6599252/108418446-0db5e600-7210-11eb-80f0-50c74b9c2512.png)

![pokemon-detail](https://user-images.githubusercontent.com/6599252/108418513-20301f80-7210-11eb-9880-a7f0c20eea72.png)

## Clonando o Projeto

```sh
$ git clone https://github.com/dejaneves/pokemon-angular.git
```

## Executando a Aplicação

Após clocar o projeto, vá para a página **pokemon-angular**.

```sh
$ cd pokemon-angular
```

Instale as dependências da aplicação.

```sh
$ npm install
```

Após a instalação das dependências execute `ng serve`. Geralmente o projeto é executado na porta `4200`, caso ela esteja ocupada, o Angular encontrará uma outra porta para executar a aplicação. Vamos supor que a porta `4200` esteja livre, abra seu browser nesse endereço `http://localhost:4200/`, você verá a aplicação sendo executado em modo `development`.


## Tasks

* `ng serve` Para executar o projeto localmente na versão **development**
* `npm run build` Para buildar o projeto, e disponibilizá-lo do diretório `dist`
* `npm run prod:build` Para buildar o projeto na versão de produção
* `npm run start` Para subir um servidor web para o diretório `dist`
* `npm run test` Para executar os testes unitários via Karma

