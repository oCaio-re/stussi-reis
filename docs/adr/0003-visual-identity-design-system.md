# ADR 0003: Identidade Visual e Design System

## Status
Accepted (Refined and Approved via Grilling session)

## Contexto
O website da **Stussi & Reis Consultoria Jurídica** deve transmitir confiança, seriedade e autoridade aos seus clientes. Para evitar que o site pareça plano ("cru") no modo claro, refinamos o design system para usar um Light Mode editorial clássico e unificado.

## Decisão
Decidimos adotar um **Tema Light Mode Editorial Premium** com as seguintes especificações:
1.  **Fundo Unificado (Background)**: O fundo geral de todas as páginas será uniformemente off-white/cinza-claro (`#f8fafc`), evitando misturar faixas pretas ou bege inteiras no meio da rolagem para manter a coesão.
2.  **Tratamento de Cards (Depth)**: Os cards de conteúdo usarão fundo branco puro (`bg-white`), contorno dourado metálico fino (`border-gold-base/15`) e sombra ampla de elevação (`shadow-[0_12px_40px_-12px_rgba(10,17,40,0.06)]`). No hover, elevam-se suavemente.
3.  **Tipografia Editorial**:
    *   Títulos (`h1`, `h2`): Fonte serifada (`Playfair Display`) em azul-marinho profundo (`#0a1128`).
    *   Subtítulos: Caixa alta, espaçados (`tracking-widest`) na cor dourado metálico escuro (`#8c7653`).
    *   Corpo: Fonte sans-serif (`Inter`) em cinza-escuro (`#334155`) com espaçamento relaxado (`leading-relaxed`).
4.  **Cabeçalho e Rodapé (Moldura)**:
    *   Cabeçalho claro translúcido (`bg-white/90` com backdrop-blur) e contorno inferior dourado.
    *   Rodapé e cards de Call to Action (CTA) de fechamento em azul-marinho profundo (`bg-navy-dark` / `from-navy-dark to-navy-base`), ancorando as páginas.

## Consequências
*   O arquivo CSS global (`globals.css`) e os arquivos de rota (`page.tsx`, `sobre/page.tsx`, `atuacao/page.tsx`, `contato/page.tsx`) serão refatorados de forma coordenada para seguir estritamente essas quatro diretrizes unificadas.

