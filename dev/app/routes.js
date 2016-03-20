let routes = (stateProvider, urlRouterProvider) => {
		urlRouterProvider.otherwise('/');

		stateProvider
			.state ('Home', {
				url: '/',
				template: '<h1>Home</h1>'
			});
};

export { routes };