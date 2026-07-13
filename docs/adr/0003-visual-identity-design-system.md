# ADR 0003: Identidade Visual e Design System

## Status
Accepted

## Contexto
O website da **Stussi & Reis Consultoria Jurídica** deve transmitir confiança, seriedade e autoridade aos seus clientes. O material impresso (cartão de visitas e logotipo) possui uma estética elegante baseada em um tom azul-marinho profundo e elementos dourados.

## Decisão
Decidimos que o site adotará um **Tema Dark Mode Premium por padrão**.
As diretrizes de design incluirão:
*   **Fundo (Background)**: Azul-marinho muito escuro (`#030712` a `#0A1128`).
*   **Acentos (Accent)**: Tons de Dourado/Gold (`#D4AF37`, `#C5A880` e `#E5C158`).
*   **Texto (Text)**: Branco suave (`#F8FAFC`) e cinza-claro (`#94A3B8`) para contraste confortável.
*   **Tipografia**:
    *   Títulos (`H1`, `H2`, `H3`): Fonte serifada do Google Fonts (ex: `Playfair Display` ou `Cinzel`).
    *   Corpo: Fonte sans-serif neutra e limpa (ex: `Geist` ou `Inter`).
*   **Estilo Visual**: Bordas extremamente finas douradas, gradientes de sombra sutis, e efeitos de desfoque de fundo (backdrop-filter) para seções flutuantes/cartões.

## Consequências
*   O arquivo CSS global (`globals.css`) e as definições de tema do Tailwind CSS v4 serão configurados para usar essas cores como variáveis principais.
*   Devemos importar as fontes serifadas necessárias no Next.js (utilizando `next/font/google` para otimização de performance).
