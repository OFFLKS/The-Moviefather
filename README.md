# The-Moviefather

Este projeto é uma aplicação web desenvolvida com React para listar e exibir detalhes de filmes, utilizando a API do The Movie Database (TMDb).

## Descrição do Projeto

O 'The-Moviefather' é uma aplicação web que permite aos usuários explorar filmes em cartaz, buscar títulos específicos e visualizar informações detalhadas sobre cada produção. A aplicação oferece uma interface intuitiva para navegar pela coleção de filmes, apresentando dados como pôsteres, títulos, sinopses e avaliações.

## Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

* **React:** Uma biblioteca JavaScript para construção de interfaces de usuário dinâmicas e reativas.
* **Axios:** Um cliente HTTP baseado em Promise para fazer requisições à API, facilitando a comunicação com o serviço de filmes.
* **React Router DOM:** Uma biblioteca para roteamento declarativo no React, permitindo a navegação entre a lista de filmes e suas páginas de detalhes.
* **Tailwind CSS:** Um framework CSS utilitário que agiliza o processo de estilização, permitindo um desenvolvimento rápido e flexível da interface.
* **The Movie Database (TMDb) API:** A fonte de dados para todas as informações de filmes, incluindo dados em tempo real sobre filmes em cartaz e detalhes completos.
* **Node.js:** O ambiente de tempo de execução necessário para rodar as ferramentas de desenvolvimento do projeto (como o npm).

## Como Instalar e Rodar o Projeto

Para configurar e executar o projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (gerenciador de pacotes do Node.js) instalados em seu sistema. Você pode baixá-los do site oficial do Node.js.

### Instalação

1.  **Navegue até o diretório do projeto:**
    Abra seu terminal ou prompt de comando e entre na pasta principal do projeto. Em seguida, navegue para a subpasta `filmes_em_cartaz`:
    ```bash
    cd filmes_em_cartaz
    ```
2.  **Instale as dependências:**
    Dentro do diretório `filmes_em_cartaz`, execute o seguinte comando para instalar todas as dependências do projeto:
    ```bash
    npm install
    ```
    Este comando instalará o `axios`, `react-router-dom` e todas as outras dependências necessárias conforme especificado no `package.json`.

### Execução

1.  **Inicie o aplicativo:**
    Após a instalação bem-sucedida das dependências, execute o comando para iniciar o servidor de desenvolvimento:
    ```bash
    npm start
    ```
    Isso abrirá o aplicativo em seu navegador padrão, geralmente em `http://localhost:3000`.

---
