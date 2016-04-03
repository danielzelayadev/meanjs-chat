let run = (rootScope, $window) => {
	rootScope.title = "MEANChat | Welcome to MEANChat!";
	rootScope.tabOpen = true;

	$window.onfocus = () => { rootScope.tabOpen = true; };
	$window.onblur  = () => { rootScope.tabOpen = false; };

};

run.$inject = [ '$rootScope', '$window' ];

export { run };