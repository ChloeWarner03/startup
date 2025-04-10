const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
  const wss = new WebSocketServer({ noServer: true });

  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  let connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    ws.on('message', function message(data) {
      try {
        const event = JSON.parse(data);
        connections.forEach((c) => {
          if (c.id !== connection.id && c.ws.readyState === ws.OPEN) {
            c.ws.send(JSON.stringify(event));
          }
        });
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    });

    ws.on('close', () => {
      const pos = connections.findIndex((o) => o.id === connection.id);
      if (pos >= 0) {
        connections.splice(pos, 1);
      }
    });

    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  setInterval(() => {
    connections.forEach((c) => {
      if (!c.alive) {
        c.ws.terminate();
        return;
      }
      c.alive = false;
      c.ws.ping();
    });
  }, 30000);
}

module.exports = { peerProxy };
