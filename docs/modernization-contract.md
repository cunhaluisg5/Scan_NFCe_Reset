# Contrato de modernizacao do reset web

## Fluxo preservado

1. usuario recebe e-mail com token
2. acessa a rota `/:token`
3. informa e-mail e nova senha
4. backend valida token e redefine a senha

## Riscos atuais

- URL da API hardcoded
- documentacao insuficiente
- ausencia de `.env.example`

## Entregas desta fase

- API configuravel por ambiente
- README revisado
- contrato tecnico inicial
