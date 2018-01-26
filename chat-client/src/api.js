import io from 'socket.io-client';

const socket = io('http://172.25.101.194:4000');

const sendMessage = (message) => {
	socket.emit('chat', message);
}

const captureTyping = (typer) => {
	socket.emit('typing', typer);
}

export { socket, captureTyping, sendMessage }