import * as io from 'socket.io-client'; 

let socket = io.connect();
let scope = {};
let session = { username: prompt('Enter your username:', 'Harry Potter') };

class HomeController {
	constructor ($scope) {
		this.messages = [];
		scope = $scope;

		socket.on('message', message => {
			this.messages.push({
				content: message.content,
				sender: { username: message.sender.username }
			});
		});
	}

	sendMessage (message) {
		let messageObj = {
			content: message,
			sender: { username: session.username }
		};

		this.messages.push(messageObj);

		socket.emit('message', messageObj);

		scope.message = "";
	}

	messageIsMine (message) {
		return message.sender.username === session.username;
	}
}

HomeController.$inject = [ '$scope' ];

export default HomeController;