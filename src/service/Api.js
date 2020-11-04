import axios from "axios";

const api = axios.create({
  baseURL: 'https://scannfceserver.herokuapp.com'
});

export default api;