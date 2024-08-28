import { io } from 'socket.io-client';
import { useURL } from './store/store';
 
export const socket = io.connect(useURL,{
  transports: ['websocket'], // Use WebSocket transport only
  reconnection: true,        // Enable reconnection attempts
  timeout: 20000,            // Set timeout to 20 seconds
});