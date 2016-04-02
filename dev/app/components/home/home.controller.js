import * as io from 'socket.io-client'; 

let socket = io.connect();
let scope = {};
let session = { username: prompt('Enter your username:', 'Harry Potter') };
let timeout = {};

class HomeController {
	constructor ($scope, $timeout) {
		this.messages = [];
		timeout = $timeout;
		scope = $scope;
		scope.scrollBottom = false;

		socket.on('message', message => {
			this.messages.push({
				content: message.content,
				sender: { username: message.sender.username }
			});
			
			$scope.$apply();
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
		
		timeout(() => { scope.scrollBottom = true; }, 1);
	}

	messageIsMine (message) {
		return message.sender.username === session.username;
	}
}

HomeController.$inject = [ '$scope', '$timeout' ];

export default HomeController;