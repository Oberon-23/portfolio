# Portfólio · Breno Silva

Portfólio pessoal de projetos de qualidade, processos e planejamento, apoiados em dados. Página única com Sobre, Como ajudo a operação, Competências, Projetos em destaque, Formação e Contato, em português e inglês, com tema claro (creme), escuro ou seguindo o sistema.

![Prévia](public/preview.jpg)

## Projetos apresentados

| Projeto | Tipo | Links |
|---|---|---|
| SGQ Rotalume | Sistema web de gestão da qualidade (ISO 9001) | [Sistema](https://sqgrotalume.vercel.app) · [GitHub](https://github.com/Oberon-23/SGQ-Rotalume) |
| Qualidade e processos | Painel (OEE, CEP, Pareto, PDCA) | [GitHub](https://github.com/Oberon-23/painel-qualidade-rotalume) |
| Logística | Painel (OTIF, frete, armazém) | [GitHub](https://github.com/Oberon-23/painel-logistica-rotalume) |
| Gargalos e retrabalho em um processo real | Pipeline Python/SQL (DuckDB) com base real da UCI | [GitHub](https://github.com/Oberon-23/service-desk-analytics-mvp) · [Kaggle](https://www.kaggle.com/code/brenosilvabarros/an-lise-de-chamados-de-service-desk-itsm-real) |

## Como editar

- **Textos, links e projetos:** tudo fica em [`src/content.ts`](src/content.ts), nas duas línguas. Os endereços dos painéis na Vercel estão no objeto `LINKS`.
- **Cores e layout:** [`src/index.css`](src/index.css). As cores dos temas claro e escuro são variáveis no início do arquivo.
- **Imagens dos projetos:** `src/assets/projects/` (versões clara e escura dos painéis).
- **Currículo:** `public/Breno_Silva_Curriculo.pdf`.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # gera dist/
```

## Stack

React, TypeScript, Vite e CSS próprio (Tailwind só como base). Publicado na Vercel.
