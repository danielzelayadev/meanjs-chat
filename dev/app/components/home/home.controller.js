let scope = {};
let me = { username: 'Daniel ZY' };

class HomeController {
	constructor ($scope) {
		this.messages = [];
		scope = $scope;
	}

	sendMessage (message) {
		this.messages.push({
			content: message,
			sender: { username: me.username }
		});

		scope.message = "";
	}

	messageNotMine (message) {
		return message.sender.username === me.username;
	}
}

HomeController.$inject = [ '$scope' ];

export default HomeController;