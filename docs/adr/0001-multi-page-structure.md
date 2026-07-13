# ADR 0001: Estrutura do Site Multi-Página

## Status
Accepted

## Contexto
Precisamos decidir o formato de navegação e estrutura das páginas do website da **Stussi & Reis Consultoria Jurídica**.
Temos a opção de fazer uma página única (Landing Page) ou um site clássico multi-página (com arquivos separados para cada seção principal).

## Decisão
Decidimos utilizar a estrutura de **Multi-Página**.
O site contará com as seguintes páginas distintas:
*   `index.html` (Página Inicial/Home): Visão geral do escritório, resumo dos serviços e chamadas para ação.
*   `sobre.html` (Quem Somos): Foco no perfil profissional dos advogados sócios.
*   `atuacao.html` (Áreas de Atuação): Detalhamento das 4 especialidades.
*   `contato.html` (Contato): Informações de endereço, mapa de localização e canais de contato.

## Consequências
*   Melhoria no SEO (Otimização para motores de busca) a longo prazo, permitindo palavras-chave específicas e títulos de página dedicados para cada área de atuação.
*   Facilidade de expansão futura, como a adição de um Blog de notícias/artigos ou novas páginas de serviços.
*   Necessidade de manter componentes compartilhados (como o Cabeçalho e Rodapé) consistentes entre os múltiplos arquivos HTML.
