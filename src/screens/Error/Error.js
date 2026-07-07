import React from 'react';
import { useHistory } from 'react-router-dom';

import LogoAsset from '../../assets/logo.png';
import { Action, Body, Card, Container, Description, Hero, Logo, Panel, Title } from './Style';

export default function Error() {
  const history = useHistory();

  return (
    <Container>
      <Card>
        <Hero>
          <Logo src={LogoAsset} alt='Logo Scan NFC-e' />
          <Title>Link de redefinicao nao encontrado</Title>
          <Description>
            A pagina aberta nao corresponde a um token ativo de recuperacao de senha do Scan NFC-e.
          </Description>
        </Hero>

        <Body>
          <Panel>
            Volte ao aplicativo principal e solicite um novo e-mail de recuperacao se precisar redefinir sua senha.
          </Panel>
          <Action type='button' onClick={() => history.replace('/')}>Tentar novamente</Action>
        </Body>
      </Card>
    </Container>
  );
}
