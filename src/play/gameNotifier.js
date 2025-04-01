const GameEvent = {
  System: 'system',
  End: 'gameEnd',
  Start: 'gameStart',
  Score: 'score'
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];
  socket = null;
  reconnectAttempts = 0;
  maxReconnectAttempts = 5;

  constructor() {
    this.connectWebSocket();
  }

  connectWebSocket() {
    if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
      return;
    }

    const port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    this.socket.onopen = () => {
      this.reconnectAttempts = 0;
      this.receiveEvent(new EventMessage('System', GameEvent.System, { msg: 'connected' }));
    };

    this.socket.onclose = () => {
      this.receiveEvent(new EventMessage('System', GameEvent.System, { msg: 'disconnected' }));
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        setTimeout(() => this.connectWebSocket(), 1000 * this.reconnectAttempts);
      }
    };

    this.socket.onmessage = (msg) => {
      try {
        const event = JSON.parse(msg.data);
        this.receiveEvent(event);
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(event));
    } else {
      console.warn('WebSocket not connected, attempting to reconnect...');
      this.connectWebSocket();
    }
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => handler(event));
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
