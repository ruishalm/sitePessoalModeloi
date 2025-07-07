# Site Pessoal - Template

Este projeto é um template base para a criação de sites pessoais para psicólogos, desenvolvido com React e Vite.

## Estrutura e Tecnologias

- **Framework:** React
- **Build Tool:** Vite
- **Estilização:** CSS Modules
- **Deployment:** GitHub Pages com GitHub Actions

---

## Fluxo de Trabalho para Clientes (Deploy Automático)

Este repositório está configurado para fazer o deploy automático de diferentes versões do site, facilitando a demonstração para cada cliente.

### Como Funciona:

1.  **Branch `main`:** A branch `main` serve como o template principal. O site gerado a partir dela está disponível em:
    - `https://ruishalm.github.io/sitePessoalModeloi/`

2.  **Branches de Clientes:** Para personalizar o site para um novo cliente, crie uma nova branch a partir da `main` seguindo o padrão `cliente-nomeDoCliente`.
    - **Exemplo:** `git checkout -b cliente-joana-silva`

3.  **Deploy Automático:** Ao fazer `push` de uma nova branch de cliente para o GitHub, uma nova versão do site será automaticamente compilada e publicada. A URL seguirá o padrão:
    - `https://ruishalm.github.io/sitePessoalModeloi/nome-da-branch/`
    - **Exemplo para a branch `cliente-joana-silva`:** `https://ruishalm.github.io/sitePessoalModeloi/cliente-joana-silva/`

Este processo permite que cada cliente tenha uma URL de demonstração exclusiva para revisar o trabalho em andamento sem afetar o template principal ou o site de outros clientes.