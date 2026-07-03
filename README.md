# Scan NFC-e Reset

Aplicacao web usada no fluxo de redefinicao de senha do ecossistema Scan NFC-e.

## Responsabilidade

Permitir que o usuario finalize a troca de senha a partir do token enviado por e-mail pelo backend.

## Variaveis de ambiente

Crie um `.env` a partir de `.env.example`.

- `REACT_APP_API_URL`: URL base da API do backend

## Scripts

```bash
npm install
npm run dev
npm run build
npm test
```

## Estado atual da modernizacao

Esta fase entrega:

- remocao da URL hardcoded da API
- documentacao inicial do projeto
- base para configuracao por ambiente
