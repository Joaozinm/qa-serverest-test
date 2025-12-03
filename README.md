## 🧪 ServerRest QA Challenge – Cypress

Projeto completo de automação de testes API + Frontend (E2E) utilizando Cypress + JavaScript, seguindo boas práticas, Page Objects e abordagem híbrida (API + GUI).

Este repositório foi desenvolvido como solução para o desafio técnico de QA Engineer.

## 🚀 Tecnologias Utilizadas

- **Cypress** — Framework de testes E2E e API
- **JavaScript (ES6+)** — Linguagem principal
- **@faker-js/faker** — Massa de dados dinâmica
- **GitHub Actions** — CI/CD para regressão automática
- **Page Objects Pattern** — Arquitetura para testes GUI
- **Custom Cypress Commands** — Centralização da camada de API

## 🏗️ Arquitetura do Projeto

A automação segue uma organização modular, separando responsabilidades entre:
Actions, Elements, Specs e Custom Commands.

### 📁 Estrutura de Pastas
```text
cypress/
├── e2e/
│   ├── api/               # Testes de API (GET, POST, DELETE, Login)
│   │   ├── delete_user.cy.js
│   │   ├── get_users.cy.js
│   │   ├── post_user_autentication.cy.js
│   │   └── post_users_login.cy.js
│   └── gui/               # Testes E2E Frontend
│       ├── list.cy.js
│       ├── login.cy.js
│       └── register.cy.js
│
├── fixtures/              # Massa estática (se necessário)
│   └── example.json
│
├── support/
│   ├── commands.js        # Comandos customizados (API)
│   ├── e2e.js             # Config global
│   └── pages/             # Page Objects
│       ├── actions/       # Métodos semânticos
│       │   ├── HomeActions.js
│       │   ├── LoginActions.js
│       │   └── RegisterActions.js
│       └── elements/      # Seletores CSS/ID
│           ├── HomeElements.js
│           ├── LoginElements.js
│           └── RegisterElements.js
│
├── .gitignore
├── .eslintignore
├── cypress.config.js
└── package.json
```

## 🧩 Padrões e Boas Práticas

### ✔ Page Objects + Actions
- **Elements** → Apenas mapeamento de seletores
- **Actions** → Métodos reutilizáveis, semânticos e limpos
- **Specs** → Apenas fluxos e asserções

### ✔ API First
Para melhorar performance e estabilidade:
- Usuários criados via API
- Testes GUI usam massa gerada via comando customizado

### ✔ Massa aleatória com Faker
Garante que execuções repetidas não falhem por duplicidade.

## 🔌 Comandos Customizados (API Layer)

Os comandos criados incluem:
- `cy.api_createUser()`
- `cy.api_login(email, password)`

Isso centraliza as chamadas HTTP e deixa os testes mais limpos.

## 🧪 Cenários Cobertos

### 🌐 API Tests (3 Cenários + 1 Extra)

| Cenário | Endpoint | Status |
|---------|----------|--------|
| Listar usuários | `GET /usuarios` | ✅ |
| Criar usuário | `POST /usuarios` | ✅ |
| Autenticação | `POST /login` | ✅ |
| Deletar usuário | `DELETE /usuarios/{id}` | ✅ (cenário extra) |

### 🖥️ Teste E2E GUI (3 Cenários)

| Cenário | Descrição |
|---------|-----------|
| Cadastro de usuário | Fluxo completo no frontend |
| Login com sucesso | Criando usuário via API (abordagem híbrida) |
| Adicionar produto ao carrinho | Testando fluxo de compra |

## ▶️ Como Executar

### 1. Instale as dependências
```bash
npm install
```
### 2. Abrir o Cypress (modo interativo)
```bash
npm run cy:open
```
### 3.Rodar em modo headless
```bash
npm run cy:run
```
## ⚙️ GitHub Actions (CI/CD)

Este projeto já inclui um workflow para executar a suíte automaticamente:

`.github/workflows/main.yml`

Executa os testes a cada push/pull request.

## 📄 Aplicações Testadas

- **Frontend**: https://front.serverest.dev/
- **API Swagger**: https://serverest.dev/

## 👤 Autor

**João Melo** – QA Engineer
LinkedIn: https://linkedin.com/in/joaomeloit

## 🎯 Conclusão

Este projeto adiciona:

- ✅ Arquitetura escalável
- ✅ Boas práticas
- ✅ Page Objects
- ✅ Massa dinâmica
- ✅ CI/CD