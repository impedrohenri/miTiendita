# miTiendita

Este projeto é uma aplicação web desenvolvida com React para listar produtos de uma API.

## Funcionalidades
- Listagem de produtos obtidos da [Fake Store API](https://fakestoreapi.com/).
- Exibição de informações detalhadas de cada produto.

## Pré-requisitos
Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/)

## Como rodar a aplicação

1. Clone este repositório:

   ```bash
   git clone <URL-do-repositorio>
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd miTiendita
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   O aplicativo será aberto automaticamente no navegador em [http://localhost:3000](http://localhost:3000).

## Estrutura de pastas
- `src/`: Contém o código-fonte da aplicação.
  - `components/`: Componentes reutilizáveis, como `Header` e `ButtonCategoria`.
  - `assets/`: Recursos estáticos, como imagens.
- `public/`: Arquivos públicos que não são processados pelo Webpack.

## API utilizada
- A aplicação consome dados da [Fake Store API](https://fakestoreapi.com/products).

### Endpoints principais
- **Todos os produtos:** `https://fakestoreapi.com/products`

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`
Inicia o aplicativo em modo de desenvolvimento.\
Acesse [http://localhost:3000](http://localhost:3000).

## Problemas conhecidos
- A aplicação pode demorar um pouco para carregar os produtos, dependendo da velocidade da conexão com a API.

## Contribuindo
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Envie um pull request com sua proposta!
