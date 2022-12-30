import app from './app';
import { Server as websocketServer } from 'socket.io';
import http from 'http';
import { connectDB } from './db';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new websocketServer(httpServer);

console.log('server on http://localhost:3000');