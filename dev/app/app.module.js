import * as angular from "angular";
import * as routes from "angular-ui-router";
import * as controllers from "./controllers.module";
import { config } from "./config";

angular.module('MEANChat', ['ui.router', controllers.moduleName ])
	.config(config);