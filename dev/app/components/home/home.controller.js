import * as io from 'socket.io-client';
import $ from "jquery";

let socket = io.connect();
let scope = {};
let session = { username: prompt('Enter your username:', 'Harry Potter') };
let timeout = {};

class HomeController {
	constructor ($rootScope, $scope, $window, $timeout, $notification) {
		this.messages = [];
		timeout = $timeout;
		scope = $scope;
		scope.scrollBottom = false;

		socket.on('message', message => {
			this.messages.push({
				content: message.content,
				sender: { username: message.sender.username }
			});

			if (!$(window).is(':focus')) {
				console.log(session.username);
				$notification(message.sender.username, {
			    	body: message.content,
			    	icon: '../img/temp-noti.jpg',
			    	delay: 1500,
			    	focusWindowOnClick: true
				});

				$rootScope.title = `Message from ${message.sender.username}!`; 

				$timeout( () => { 
					$rootScope.title = "MEANChat | Welcome to MEANChat!"; 
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

HomeController.$inject = [ '$rootScope', '$scope', '$window',
						   '$timeout', '$notification' ];

export default HomeController;