# ADR 0002: Escolha de Tecnologia - Next.js e Tailwind CSS v4

## Status
Accepted

## Contexto
Tendo em vista a decisão de estruturar o site do escritório **Stussi & Reis** como uma aplicação multi-página ([ADR 0001](file:///home/cro/Projects/stussi_reis/docs/adr/0001-multi-page-structure.md)), é necessário definir o framework e a biblioteca de estilização que facilitem o desenvolvimento ágil, componentização de cabeçalho/rodapé e forneçam alta performance (através de Server Components e renderização estática).

## Decisão
Decidimos utilizar a seguinte pilha tecnológica:
*   **Next.js (App Router)**: Framework React para produção, utilizando React Server Components para otimização de SEO e performance de carregamento rápido.
*   **TypeScript**: Para garantir a tipagem estática e reduzir bugs durante o desenvolvimento.
*   **Tailwind CSS v4**: Nova versão da ferramenta de estilização utility-first, integrada ao Next.js, configurada via diretivas de CSS moderno, permitindo designs premium com menos overhead de arquivos de configuração.

## Consequências
*   A aplicação necessitará de compilação/build (`npm run build`).
*   Podemos criar componentes reutilizáveis como `Header`, `Footer` e `PracticeAreaCard`.
*   A configuração de rotas usará a estrutura de diretórios do App Router (`app/sobre/page.tsx`, `app/atuacao/page.tsx`, `app/contato/page.tsx`).
