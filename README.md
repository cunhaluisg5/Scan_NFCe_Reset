# Scan NFC-e Reset

Aplicação web do ecossistema Scan NFC-e usada para validar o link recebido por e-mail e permitir a redefinição segura da senha do usuário.

## Visão geral

Este projeto funciona em conjunto com:

- `TCC_Backend`: gera, valida e conclui o fluxo de recuperação
- `Scan_NFCe`: oferece a entrada para quem esqueceu a senha
- `Scan_NFCe_Help`: explica o fluxo de suporte e recuperação

## Responsabilidade

- validar o token de redefinição enviado por e-mail
- exibir feedback claro para link válido, inválido ou expirado
- permitir o cadastro de uma nova senha com segurança
- orientar o usuário sobre o próximo passo quando o link não puder mais ser usado

## Stack

- React
- React Router DOM
- Styled Components
- Axios
- React Scripts
- Testing Library

## Variáveis de ambiente

Crie um arquivo `.env` a partir de `.env.example`.

- `REACT_APP_API_URL`: URL base da API
- `REACT_APP_API_TIMEOUT_MS`: tempo limite das requisições
- `REACT_APP_HELP_URL`: URL pública da central de ajuda

## Pré-requisitos

- Node.js compatível com o projeto
- npm
- backend `TCC_Backend` em execução

## Como executar localmente

```bash
npm install
npm run dev
```

Scripts úteis:

```bash
npm run dev
npm run build
npm run start
npm test
npm run lint
```

O modo de desenvolvimento está configurado para a porta `5000`, preservando a compatibilidade com o link enviado por e-mail em ambiente local.

## Docker

Este projeto já está preparado para execução em container, mantendo a porta pública `5000` para preservar o fluxo de recuperação em ambiente local.

### Build manual da imagem

```bash
docker build \
  --build-arg REACT_APP_API_URL=http://localhost:3000 \
  --build-arg REACT_APP_API_TIMEOUT_MS=20000 \
  --build-arg REACT_APP_HELP_URL=http://localhost:3000 \
  -t scan-nfce-reset .
```

```bash
docker run --rm -p 5000:80 scan-nfce-reset
```

### Subida com Docker Compose

```bash
docker compose up --build
```

A aplicação ficará disponível em `http://localhost:5000`.

## Fluxo funcional

1. O usuário solicita a recuperação de senha no aplicativo principal.
2. O backend envia um link com token para esta aplicação.
3. A aplicação valida o token, exibe os dados da conta e libera o formulário.
4. Após a troca da senha, o usuário volta ao aplicativo para entrar normalmente.

## Testes e CI

- testes de interface com Testing Library
- build de produção validado no GitHub Actions
- revisão de compatibilidade de Node no workflow do projeto

## Troubleshooting

- link inválido: confirme se o token foi copiado completo
- CORS ou `fetch failed`: confira a URL configurada em `REACT_APP_API_URL`
- tela em branco: valide se a API está respondendo à rota de validação do token
- link do e-mail não abre a tela correta: revise `RESET_APP_URL` no backend e mantenha a porta `5000` em ambiente local

## Publicação e operação

- mantenha `REACT_APP_API_URL` e `REACT_APP_HELP_URL` alinhadas ao ambiente real
- preserve a porta `5000` em ambiente local quando o e-mail apontar para localhost
- não exponha segredos nem credenciais no frontend
- gere uma nova imagem quando qualquer variável `REACT_APP_*` mudar, pois elas são embutidas no build

## Capturas de tela

Os prints antigos foram removidos para evitar inconsistência com a interface atual. As próximas capturas devem ser geradas diretamente da aplicação em funcionamento.

## Roadmap

- ampliar mensagens contextuais para erros excepcionais
- revisar acessibilidade do formulário de redefinição
- concluir checklist operacional de publicação