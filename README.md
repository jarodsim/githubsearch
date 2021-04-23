# githubsearch - Processo Seletivo Lux One

Aplicação client-side que consulta um usuário utilizando a API do Github e exibe os dados do perfil e repositórios por ordem decrescente de acordo com o número de stars.

## Tecnologias
* vue 2.6.11
* axios 0.21.1
* vue-fontawesome  2.0.2
* vue-router 3.5.1
* yarn 1.22.10
* nodejs 14.15.4 
  
 ## Rotas
 * /
 * /result/:``username``

### /
Na tela inicial o usuário entra com o usuário e ao pesquisar é redirecionado à tela result, passando pelo parâmetro de URL ``username`` o dado digitado no input de busca.

### /result/:``username``
Ao montar a tela, é buscado os dados via Github API de acordo com o parâmetro passado na URL (`username`)
| MÉTODO | AÇÃO |
|--|--|
|searchUser()  | Busca os dados do usuário, repositórios e stars |

Depois os dados são passados para os componentes
| COMPONENT | AÇÃO | PROPS|
|--|--|--|
| Navbar | Permite efetuar uma outra pesquisa sem necessidade de voltar para a página inicial |  username| 
| Informations| Exibe os dados do usuário |  repos, login, company, name, avatar_url, location, public_repos, followers, starred| 
-----
**EM CASO DE ERRO**
Caso não seja encontrado nenhum usuário é retornado o component `<UserNotFound />`

## Components
### * Home
**Descrição**: Exibe campo de busca para o usuário
**Métodos**: 
| NOME | AÇÃO
|--|--|
| redirectToResult | Redireciona para a pagina Result passando o valor do input como parâmetro `username` |


### * Result
**Descrição**: Efetua a busca dos dados e exibe os dados passando-os via props para components filhos
**Métodos**: 
| NOME | AÇÃO
|--|--|
| searchUser | Busca os dados via API, na parte de busca dos repositórios ordena os mesmos de acordo com o número de stars |

### * Informations
**Descrição**: Recebe os dados do componente pai (Result) e os exibe na tela

### * Repo
**Descrição**: Recebe os dados dos repositórios do componente pai (Informations) e os exibe na tela através de um v-for
### * NavBar
**Descrição**: Exibe um input para a ação de uma nova busca. recebe a prop `username` do componente Result como valor inicial do input. Também permite que o usuário retorne à tela inicial

### * UserNotFound
**Descrição**: Exibe uma mensagem de usuário não encontrado

### * Loading
**Descrição**: Exibe uma mensagem de loading para o usuário enquanto os dados estiberem sendo buscados na API

## Configuração do Projeto

```

yarn install

```

  

### Compilar e executar | Irá rodar na em http://localhost:8080

```

yarn serve

```

  

### Buildar para por em produção

```

yarn build

```

  

### ESLINT

```

yarn lint

```

Jarod Cavalcante - 2021