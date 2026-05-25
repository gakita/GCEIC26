# Bibliotecas Utilizadas

Este documento descreve as principais bibliotecas instaladas no projeto e o motivo da sua escolha.

## Framework HTTP

### Fastify
O **Fastify** foi escolhido por ser o framework web mais performático para Node.js atualmente. Oferece uma excelente experiência de desenvolvimento com tipagem nativa (TypeScript), sistema de plugins robusto e ótima integração com o Swagger para documentação.

## Validação de Dados

### Zod
O **Zod** é utilizado para validação de esquemas. Em um projeto de cálculo de impostos, a integridade dos dados (como valor do produto, alíquotas, estado, etc.) é crítica. O Zod ajuda a:
- Validar o corpo das requisições (body) e parâmetros (query/params).
- Evitar crashes da aplicação por dados mal formatados.
- Gerar tipos TypeScript automaticamente a partir dos esquemas de validação.

## Documentação

### @fastify/swagger & @fastify/swagger-ui
Essas bibliotecas permitem a geração automática de documentação da API.
- Facilita o teste dos endpoints.
- Serve como documentação viva para quem for consumir ou avaliar o projeto (como o professor).
- Reduz o trabalho manual de manter um README atualizado com todos os endpoints.

## Testes

### Vitest
O **Vitest** é o padrão moderno para testes em ecossistemas TypeScript. É extremamente rápido, compatível com a API do Jest e requer configuração mínima.

### Supertest
Utilizado em conjunto com o Vitest para realizar testes de integração HTTP. Permite testar os endpoints (`/icms`, `/ipi`, etc.) validando códigos de status e retornos JSON.

## Qualidade de Código

### Biome
O **Biome** substitui ferramentas como ESLint e Prettier em uma única ferramenta extremamente rápida e simples de configurar, garantindo a padronização e qualidade do código fonte.
