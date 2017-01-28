import HomeController from "./components/home/home.controller";
import * as noti from 'angular-notification';

let moduleName = 'chat.controllers';

angular.module(moduleName, ['notification'])
	.controller ('HomeController', HomeController);

export { moduleName };