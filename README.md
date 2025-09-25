# Sistema de Autenticação Aprimorado com Next.js

![Badge de Licença](https://img.shields.io/badge/license-MIT-blue.svg)

Um projeto de estudo focado na implementação de um sistema de autenticação robusto em Next.js, incluindo validação de credenciais, gerenciamento de estado global com Context API e um sistema de temas (claro/escuro).


---

## ✨ Funcionalidades Implementadas

-   [x] **Validação de Credenciais:** Feedback visual e mensagens de erro para o usuário.
-   [x] **Header Dinâmico:** Componente de cabeçalho que altera a navegação com base no status de login.
-   [x] **Sistema de Temas:** Alternância entre os modos claro (light) e escuro (dark).
-   [x] **Persistência de Login:** Mantém o usuário conectado mesmo após fechar e reabrir o navegador.
-   [x] **Página de Conteúdo:** Uma página principal simples para demonstrar o acesso pós-autenticação.

---

## 🚀 Tecnologias Utilizadas

-   **Next.js:** Framework React para produção.
-   **React:** Biblioteca para construção de interfaces de usuário.
-   **Tailwind CSS:** Framework de estilização utilitário para um design consistente e rápido.
-   **Context API:** Para gerenciamento de estado global (tema e autenticação).

---

## 🔧 Como Executar

Siga os passos abaixo para rodar o projeto em seu ambiente local.

**Pré-requisitos:**
* Node.js (versão 18 ou superior)
* npm ou yarn

**Passos:**
1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    ```
2.  **Acesse o diretório do projeto:**
    ```bash
    cd nome-do-seu-projeto
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
5.  **Acesse no navegador:**
    Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação.

---

## 🔑 Credenciais de Teste

Para facilitar a verificação, utilize as seguintes credenciais:

-   **Usuário:** `admin`
-   **Senha:** `admin123`

---

## 📝 Decisões Técnicas

-   **Gerenciamento de Estado:** Utilizamos a **Context API** do React para gerenciar o estado de autenticação e do tema, evitando a necessidade de bibliotecas externas para uma aplicação de escopo reduzido.
-   **Validação:** A validação de credenciais foi implementada puramente no **front-end** para fins de simplicidade. Em um projeto de produção, essa lógica deve ser transferida para o **back-end** para garantir a segurança.
-   **Estilização:** Adotamos o **Tailwind CSS** por sua agilidade no desenvolvimento e pela facilidade em manter a consistência visual em toda a aplicação.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

