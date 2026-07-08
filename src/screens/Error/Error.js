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
          <Title>Link de redefinição não encontrado</Title>
          <Description>
            A página aberta não corresponde a um link ativo de recuperação de senha do Scan NFC-e.
          </Description>
        </Hero>

        <Body>
          <Panel>
            Volte ao aplicativo principal e solicite um novo e-mail de recuperação se precisar redefinir sua senha.
          </Panel>
          <Action type='button' onClick={() => history.replace('/')}>Tentar novamente</Action>
        </Body>
      </Card>
    </Container>
  );
}

