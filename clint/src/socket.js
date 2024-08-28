import { io } from 'socket.io-client';
import { useURL } from './store/store';
 
export const socket = io.connect(useURL);