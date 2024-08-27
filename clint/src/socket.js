import { io } from 'socket.io-client';
export const socket = io.connect('https://chat-app-server-one-rho.vercel.app');