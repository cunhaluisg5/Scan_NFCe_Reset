import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';
import Api from './service/Api';

jest.mock('./service/Api', () => {
  const mockApi = {
    post: jest.fn(),
  };

  return {
    __esModule: true,
    default: mockApi,
    getApiErrorMessage: (error, fallback = 'Não foi possível concluir a solicitação.') => error.response?.data?.error || fallback,
  };
});

describe('Scan_NFCe_Reset', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.history.pushState({}, 'Reset', '/token-valido');
  });

  it('valida o token e conclui a redefinição de senha', async () => {
    Api.post
      .mockResolvedValueOnce({ data: { email: 'usuario@email.com', name: 'Usuário Teste', expiresAt: '2026-07-10T12:00:00.000Z' } })
      .mockResolvedValueOnce({ data: { success: true } });

    render(<App />);

    expect(await screen.findByText('Conta')).toBeInTheDocument();
    expect(screen.getByText('usuario@email.com')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Digite sua nova senha'), { target: { value: '123456' } });
    fireEvent.change(screen.getByPlaceholderText('Repita a nova senha'), { target: { value: '123456' } });
    fireEvent.click(screen.getByText('Salvar nova senha'));

    expect(await screen.findByText('Senha redefinida')).toBeInTheDocument();
    expect(Api.post).toHaveBeenNthCalledWith(2, '/auth/reset_password', {
      token: 'token-valido',
      password: '123456',
    });
  });

  it('exibe estado de link expirado quando a validação falha por expiração', async () => {
    Api.post.mockRejectedValueOnce({ response: { data: { error: 'Token expirado' } } });

    render(<App />);

    expect(await screen.findByText('Link expirado')).toBeInTheDocument();
    expect(screen.getByText('Solicitar um novo e-mail de recuperação')).toBeInTheDocument();
  });

  it('abre a página de erro para uma rota sem token válido', async () => {
    window.history.pushState({}, 'Erro', '/rota-inexistente/extra');

    render(<App />);

    expect(await screen.findByText(/Link de redefini/i)).toBeInTheDocument();
  });
});

