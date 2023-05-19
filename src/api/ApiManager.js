import axios from 'axios';
import io from 'socket.io-client';

export const socket = io('https://4731-41-227-34-252.ngrok-free.app');

export const ApiManager = axios.create({
  baseURL: 'https://4731-41-227-34-252.ngrok-free.app',
  responseType: 'json',
  withCredentials: false,
  timeout: 60000
});

