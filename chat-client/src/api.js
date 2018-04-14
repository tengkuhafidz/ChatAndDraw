import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const sendMessage = (message) => {
	socket.emit('chat', message);
}

const captureTyping = (typer) => {
	socket.emit('typing', typer);
}

export { socket, captureTyping, sendMessage }