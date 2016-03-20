import { routes } from "./routes";

let config = (stateProvider, urlRouterProvider) => {
	routes(stateProvider, urlRouterProvider);
};

config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export { config };