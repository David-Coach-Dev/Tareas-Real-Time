import app from './app';
import { Server as websocketServer } from 'socket.io';
import http from 'http';
import { connectDB } from './db';
import { PORT } from './config';
import sockets from './socketsB';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log(`Server on port ${PORT}, http://localhost:${PORT}`);
const io = new websocketServer(httpServer);
sockets(io);