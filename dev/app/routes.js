let routes = (stateProvider, urlRouterProvider) => {
		urlRouterProvider.otherwise('/');

		stateProvider
			.state ('Home', {
				url: '/',
				templateUrl: '../views/home/home.html',
				controller: 'HomeController as vm'
			});
};

export { routes };