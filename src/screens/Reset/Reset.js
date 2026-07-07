import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Api, { getApiErrorMessage } from '../../service/Api';
import LogoAsset from '../../assets/logo.png';
import {
  Actions,
  Body,
  Card,
  Container,
  Description,
  Divider,
  EmptyWrap,
  Eyebrow,
  Field,
  Footer,
  Form,
  Hint,
  Hero,
  InlineLink,
  Input,
  LoadingDot,
  Logo,
  MetaLine,
  MetaPanel,
  PrimaryButton,
  ResponsiveNote,
  SecondaryButton,
  StatusBox,
  StatusText,
  StatusTitle,
  Title,
} from './Style';

function formatDateTime(value) {
  if (!value) {
    return '--';
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(parsed);
}

export default function Reset() {
  const history = useHistory();
  const { token } = useParams();
  const [status, setStatus] = useState('checking');
  const [validation, setValidation] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const passwordError = useMemo(() => {
    if (!password) {
      return '';
    }

    return password.length < 6 ? 'Use pelo menos 6 caracteres.' : '';
  }, [password]);

  const confirmError = useMemo(() => {
    if (!confirmPassword) {
      return '';
    }

    return password !== confirmPassword ? 'As senhas precisam ser iguais.' : '';
  }, [confirmPassword, password]);

  const canSubmit = Boolean(
    status === 'ready' &&
    password &&
    confirmPassword &&
    !passwordError &&
    !confirmError &&
    !submitting
  );

  useEffect(() => {
    let mounted = true;

    async function validateToken() {
      if (!token) {
        if (mounted) {
          setStatus('invalid');
          setFeedback({
            tone: 'error',
            title: 'Link incompleto',
            message: 'O endereco aberto nao contem um token de redefinicao valido.',
          });
        }
        return;
      }

      try {
        if (mounted) {
          setStatus('checking');
          setFeedback({
            tone: 'info',
            title: 'Validando acesso',
            message: 'Estamos verificando se o link de redefinicao ainda pode ser usado.',
          });
        }

        const response = await Api.post('/auth/reset_password/validate', { token });

        if (!mounted) {
          return;
        }

        setValidation(response.data);
        setStatus('ready');
        setFeedback(null);
      } catch (error) {
        if (!mounted) {
          return;
        }

        const message = getApiErrorMessage(error, 'Nao foi possivel validar o link de redefinicao.');
        const expired = /expirado/i.test(message);

        setStatus(expired ? 'expired' : 'invalid');
        setFeedback({
          tone: 'error',
          title: expired ? 'Link expirado' : 'Link invalido',
          message,
        });
      }
    }

    validateToken();

    return () => {
      mounted = false;
    };
  }, [token]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    try {
      setSubmitting(true);
      setFeedback({
        tone: 'info',
        title: 'Redefinindo senha',
        message: 'Estamos atualizando sua senha com seguranca.',
      });

      await Api.post('/auth/reset_password', {
        token,
        password,
      });

      setStatus('success');
      setPassword('');
      setConfirmPassword('');
      setFeedback({
        tone: 'success',
        title: 'Senha redefinida',
        message: 'Sua nova senha ja esta ativa. Agora voce pode voltar ao aplicativo e entrar normalmente.',
      });
    } catch (error) {
      const message = getApiErrorMessage(error, 'Nao foi possivel redefinir a senha.');
      const expired = /expirado/i.test(message);

      setStatus(expired ? 'expired' : 'ready');
      setFeedback({
        tone: 'error',
        title: expired ? 'Link expirado' : 'Falha ao redefinir',
        message,
      });
    } finally {
      setSubmitting(false);
    }
  }

  const validationEmail = validation?.email || '--';
  const validationName = validation?.name || 'Usuario';
  const validationExpiry = formatDateTime(validation?.expiresAt);

  return (
    <Container>
      <Card>
        <Hero>
          <Logo src={LogoAsset} alt='Logo Scan NFC-e' />
          <Eyebrow>Recuperacao de acesso</Eyebrow>
          <Title>Redefina sua senha com seguranca</Title>
          <Description>
            Este fluxo protege sua conta, valida o link recebido por e-mail e libera uma nova senha apenas enquanto o token estiver ativo.
          </Description>
        </Hero>

        <Body>
          {feedback ? (
            <StatusBox tone={feedback.tone}>
              <StatusTitle>
                {feedback.tone === 'info' ? <LoadingDot /> : null}
                {feedback.title}
              </StatusTitle>
              <StatusText>{feedback.message}</StatusText>
            </StatusBox>
          ) : null}

          {status === 'checking' ? (
            <EmptyWrap>
              <MetaPanel>
                <MetaLine>
                  <span>Status</span>
                  <span>Validando token</span>
                </MetaLine>
                <MetaLine>
                  <span>Seguranca</span>
                  <span>Conferencia de expiracao em andamento</span>
                </MetaLine>
              </MetaPanel>
              <Footer>Assim que a verificacao terminar, liberaremos o formulario correto para este link.</Footer>
            </EmptyWrap>
          ) : null}

          {status === 'ready' ? (
            <>
              <MetaPanel>
                <MetaLine>
                  <span>Conta</span>
                  <span>{validationEmail}</span>
                </MetaLine>
                <MetaLine>
                  <span>Usuario</span>
                  <span>{validationName}</span>
                </MetaLine>
                <MetaLine>
                  <span>Expira em</span>
                  <span>{validationExpiry}</span>
                </MetaLine>
              </MetaPanel>

              <Form onSubmit={handleSubmit}>
                <Field>
                  Nova senha
                  <Input
                    type='password'
                    placeholder='Digite sua nova senha'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    hasError={Boolean(passwordError)}
                    autoComplete='new-password'
                  />
                  <Hint tone={passwordError ? 'error' : 'neutral'}>
                    {passwordError || 'Escolha uma senha com pelo menos 6 caracteres.'}
                  </Hint>
                </Field>

                <Field>
                  Confirmar nova senha
                  <Input
                    type='password'
                    placeholder='Repita a nova senha'
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    hasError={Boolean(confirmError)}
                    autoComplete='new-password'
                  />
                  <Hint tone={confirmError ? 'error' : 'neutral'}>
                    {confirmError || 'Repita exatamente a mesma senha para concluir a troca.'}
                  </Hint>
                </Field>

                <Actions>
                  <PrimaryButton type='submit' disabled={!canSubmit}>
                    {submitting ? 'Redefinindo senha...' : 'Salvar nova senha'}
                  </PrimaryButton>
                </Actions>
              </Form>
            </>
          ) : null}

          {status === 'success' ? (
            <EmptyWrap>
              <MetaPanel>
                <MetaLine>
                  <span>Conta atualizada</span>
                  <span>{validationEmail}</span>
                </MetaLine>
                <MetaLine>
                  <span>Resultado</span>
                  <span>Senha redefinida com sucesso</span>
                </MetaLine>
              </MetaPanel>
              <ResponsiveNote>
                Se o aplicativo ainda estiver aberto no celular, volte para a tela de login e entre com a nova senha.
              </ResponsiveNote>
            </EmptyWrap>
          ) : null}

          {(status === 'invalid' || status === 'expired') ? (
            <EmptyWrap>
              <MetaPanel>
                <MetaLine>
                  <span>Diagnostico</span>
                  <span>{status === 'expired' ? 'Token expirado' : 'Token invalido'}</span>
                </MetaLine>
                <MetaLine>
                  <span>Proximo passo</span>
                  <span>Solicitar um novo e-mail de recuperacao</span>
                </MetaLine>
              </MetaPanel>
              <ResponsiveNote>
                Volte ao aplicativo principal, abra a opcao de esqueci minha senha e solicite um novo link para continuar com seguranca.
              </ResponsiveNote>
            </EmptyWrap>
          ) : null}

          <Divider />

          <Actions>
            <SecondaryButton type='button' onClick={() => history.replace('/')}>
              Abrir pagina de apoio
            </SecondaryButton>
          </Actions>

          <Footer>
            Este link foi emitido pelo ecossistema Scan NFC-e. Em caso de erro persistente, solicite um novo e-mail pelo aplicativo principal.
            {' '}
            <InlineLink href={process.env.REACT_APP_HELP_URL || '#'} onClick={(event) => {
              if ((process.env.REACT_APP_HELP_URL || '#') === '#') {
                event.preventDefault();
              }
            }}>
              Precisa de ajuda?
            </InlineLink>
          </Footer>
        </Body>
      </Card>
    </Container>
  );
}
