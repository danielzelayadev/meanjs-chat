import * as io from 'socket.io-client';

let socket = io.connect();
let scope = {};
let session = { username: prompt('Enter your username:', 'Harry Potter') };
let timeout = {};
let rs = {};

class HomeController {
	constructor ($rootScope, $scope, $timeout, $notification) {
		this.messages = [];
		timeout = $timeout;
		scope = $scope;
		scope.scrollBottom = false;
		rs = $rootScope;

		socket.on('message', message => {
			this.messages.push({
				content: message.content,
				sender: { username: message.sender.username }
			});

			if (!rs.tabOpen) {
				$notification(message.sender.username, {
			    	body: message.content,
			    	icon: '../img/temp-noti.jpg',
			    	delay: 1500,
			    	focusWindowOnClick: true
				});

				rs.title = `Message from ${message.sender.username}!`; 

				$timeout( () => { 
					rs.title = "MEANChat | Welcome to MEANChat!"; 
				}, 1000);
			}

			$scope.$apply();
		});
	}

	sendMessage (message) {
		if (message.length === 0) return;

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

HomeController.$inject = [ '$rootScope', '$scope',
						   '$timeout', '$notification' ];

export default HomeController;