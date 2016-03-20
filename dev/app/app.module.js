import * as angular from "angular";
import * as routes from "angular-ui-router";
import { config } from "./config";

angular.module('MEANChat', ['ui.router'])
	.config(config);