# ADR 0006: Otimização de Motores de Busca (SEO) e Dados Estruturados

## Status
Accepted

## Contexto
O site da **Stussi & Reis Consultoria Jurídica** deve atrair potenciais clientes locais em Niterói, RJ. A presença nos motores de busca (como o Google) é fundamental, exigindo práticas sólidas de SEO técnico desde o início do desenvolvimento.

## Decisão
Decidimos focar pesadamente em SEO através das seguintes implementações:
1.  **Metadados Estáticos e Dinâmicos**:
    *   Uso da API de Metadata do Next.js em cada rota (`layout.tsx` e `page.tsx` de cada página).
    *   Definição de títulos e descrições específicos contendo termos altamente pesquisados como "advogado cível em Niterói", "escritório de advocacia de família", "direito do consumidor".
2.  **Dados Estruturados (JSON-LD Schema.org)**:
    *   Inclusão do esquema `LegalService` no cabeçalho ou corpo do layout geral do site.
    *   O esquema conterá as coordenadas geográficas fictícias/reais, endereço completo, telefone de contato, link para redes sociais, logotipo e áreas de atuação.
3.  **HTML5 Semântico**:
    *   Garantia de uma estrutura de cabeçalhos (`h1`, `h2`, `h3`) limpa e sem tags duplicadas de `h1` por página.
    *   Carregamento rápido das imagens usando o componente `next/image` com otimização automática.

## Consequências
*   Melhor indexação orgânica e exibição aprimorada (Rich Snippets) no Google Search, aumentando a taxa de clique (CTR).
*   Garantia de conformidade com os padrões modernos de acessibilidade e performance do Lighthouse.
