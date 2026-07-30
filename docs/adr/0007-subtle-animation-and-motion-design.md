# 7. Animações Institucionais e Design de Movimento

*   **Status**: Aceito
*   **Data**: 2026-07-30

## Contexto e Problema

O website da Stussi & Reis exige uma presença digital refinada e contemporânea. No entanto, animações excessivas, deslocamentos bruscos, bibliotecas pesadas de terceiros (como GSAP ou Framer Motion) ou efeitos repetitivos durante a rolagem podem transmitir uma imagem extravagante ("cafona"), sobrecarregar o desempenho de carregamento (Core Web Vitals) e prejudicar a experiência de leitura de pessoas idosas ou sensíveis a movimento.

## Opções Consideradas

1.  **Framer Motion / GSAP (Animações Avançadas por JS)**: Alto controle de timelines e física, porém com aumento relevante no tamanho do bundle JavaScript e consumo de CPU.
2.  **CSS Nativo + IntersectionObserver (Trigger Once)**: Animações de entrada e rolagem orquestradas por utility classes do Tailwind CSS v4 / CSS nativo, combinadas com IntersectionObserver de disparo único.
3.  **Sem Animações (Totalmente Estático)**: Eliminação completa de transições.

## Decisão

Optamos pela **Opção 2: CSS Nativo + IntersectionObserver (Trigger Once)**.

Definimos as seguintes regras de implementação:
*   **Staggered Entrance no Carregamento Inicial**: A Navbar e o conteúdo da Hero section entram em cascata com atrasos calculados (100ms - 500ms), deslocamentos verticais mínimos (10px a 15px) e a curva de aceleração `cubic-bezier(0.16, 1, 0.3, 1)`.
*   **Sticky Navbar Transicional**: Fundo transparente no topo, transitando para azul-marinho translúcido com `backdrop-blur-md` e borda dourada ao rolar a página além de 50px.
*   **Revelação de Seções (ScrollReveal)**: Utilização do padrão *Trigger Once* via `IntersectionObserver`. Os elementos sobem e fazem fade-in apenas na primeira aparição em tela, sem re-animar em rolagens subsequentes.
*   **Acessibilidade (`prefers-reduced-motion`)**: Suporte nativo à supressão de movimento para usuários com preferências ativas no SO.

## Consequências

*   **Positivas**:
    *   Excelente desempenho de carregamento (zero overhead de bundles de animação em JS).
    *   Estética sóbria, elegante e de alto valor percebido.
    *   Acessibilidade e conforto visual garantidos para pessoas idosas ou com sensibilidade a movimento.
*   **Negativas**:
    *   Exige disciplina no uso de classes Utilitárias de transição e delay no Tailwind/CSS.
