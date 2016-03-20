import HomeController from "./components/home/home.controller";

let moduleName = 'chat.controllers';

angular.module(moduleName, [])
	.controller ('HomeController', HomeController);

export { moduleName };