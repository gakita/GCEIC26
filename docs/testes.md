# Documentacao de Testes

## Testes unitarios da API

Local: `api/tests/funcoes.test.js`.

Cenarios cobertos:

- calculo de mao de obra e horas faturaveis;
- calculo de despesas operacionais;
- calculo de margem, impostos e preco final;
- calculo consolidado;
- cenarios de freelancer, consultor part-time e MEI;
- validacoes de entradas invalidas.

Comando:

```bash
cd api
npm test
```

## Testes de integracao da API

Local: `api/tests/api.test.js`.

Cenarios cobertos:

- `GET /health`;
- `GET /api/tabelas`;
- `POST /api/csh/labor-cost`;
- `POST /api/csh/operating-cost`;
- `POST /api/csh/final-price`;
- `POST /api/calcular`;
- retrocompatibilidade com calculo de area.

## Testes do app React

Local: `app/src/App.test.jsx`.

Cenarios cobertos:

- login renderizado;
- erro de credenciais invalidas;
- login valido;
- calculo com mock da API;
- erro retornado pela API;
- navegacao para Sobre;
- navegacao para Ajuda;
- logout.

Comando:

```bash
cd app
npm test
```

## Testes funcionais Selenium

Local: `e2e-tests/tests/base.test.js`.

Cenarios cobertos:

- acesso ao app;
- login invalido;
- login valido;
- calculo completo consumindo a API;
- exibicao do preco final;
- tela Sobre;
- tela Ajuda;
- logout.

Comando:

```bash
cd e2e-tests
npm test
```

Variaveis:

- `APP_URL`: URL do app web.
- `API_URL`: URL da API, usada pelo app quando aplicavel.

Evidencias:

- screenshots em `e2e-tests/screenshots`;
- artifacts no workflow GitHub Actions.
