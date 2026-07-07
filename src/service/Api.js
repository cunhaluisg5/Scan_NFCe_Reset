import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  timeout: Number(process.env.REACT_APP_API_TIMEOUT_MS || 20000)
});

export function getApiErrorMessage(error, fallback = 'Nao foi possivel concluir a solicitacao.') {
  if (error.response?.data?.error) {
    return error.response.data.error;
  }

  if (error.code === 'ECONNABORTED') {
    return 'A requisicao demorou mais que o esperado. Tente novamente.';
  }

  if (error.message === 'Network Error') {
    return 'Nao foi possivel se conectar ao servidor.';
  }

  return fallback;
}

export default api;
