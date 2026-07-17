'use strict';

const createWebSocketStream = require('../node_modules/ws/lib/stream');
const extension = require('../node_modules/ws/lib/extension');
const PerMessageDeflate = require('../node_modules/ws/lib/permessage-deflate');
const Receiver = require('../node_modules/ws/lib/receiver');
const Sender = require('../node_modules/ws/lib/sender');
const subprotocol = require('../node_modules/ws/lib/subprotocol');
const WebSocket = require('../node_modules/ws/lib/websocket');
const WebSocketServer = require('../node_modules/ws/lib/websocket-server');

WebSocket.createWebSocketStream = createWebSocketStream;
WebSocket.extension = extension;
WebSocket.PerMessageDeflate = PerMessageDeflate;
WebSocket.Receiver = Receiver;
WebSocket.Sender = Sender;
WebSocket.Server = WebSocketServer;
WebSocket.subprotocol = subprotocol;
WebSocket.WebSocket = WebSocket;
WebSocket.WebSocketServer = WebSocketServer;

module.exports = WebSocket;







//const WebSocket = require('ws')
const server = new WebSocket.Server({port: '8080'})

server.on('connection', socket => {


    socket.on('message', message => {

        socket.send(`Roger that! ${message}`);
    });
});
