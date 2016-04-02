import * as angular from "angular";
import * as routes from "angular-ui-router";
import * as controllers from "./controllers.module";
import * as directives from "./directives.module";
import { config } from "./config";

angular.module('MEANChat', ['ui.router', controllers.moduleName, directives.moduleName ])
	.config(config);