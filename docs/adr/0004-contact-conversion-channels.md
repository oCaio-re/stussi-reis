# ADR 0004: Canais de Contato e Conversão

## Status
Accepted

## Contexto
O site deve funcionar como um canal de captação e triagem de novos clientes para o escritório **Stussi & Reis**. Clientes de advocacia buscam resoluções rápidas (WhatsApp), mas também podem preferir contatos mais formais ou detalhados (E-mail/Formulário).

## Decisão
Decidimos implementar ambos os canais de contato de forma complementar:
1.  **WhatsApp Direto e Segmentado**:
    *   Presença de um botão flutuante e chamadas de ação (CTAs) em seções estratégicas.
    *   O usuário poderá escolher com quem deseja falar ou o site direcionará de acordo com a área de atuação (Felipe Reis ou Saulo Pedroso).
2.  **Formulário de Contato**:
    *   Um formulário estruturado na página `/contato` para captação de leads mais formais.

## Consequências
*   Necessidade de desenvolver um componente de modal ou dropdown flutuante para seleção de advogado caso o usuário clique no botão geral de WhatsApp.
*   Criação de links de WhatsApp pré-formatados com mensagens personalizadas (ex: `Olá, gostaria de falar sobre direito de família...`).
*   Configuração do formulário de contato (validação de campos no frontend e esqueleto de envio no backend/API route).
