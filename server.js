import data from './db.json';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.enve.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);