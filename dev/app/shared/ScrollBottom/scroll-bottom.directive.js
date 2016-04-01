function ScrollBottom () {
	return {
		restrict: 'E',
		template: '<h1>LOOOL</h1>',
		scope: { scrollBottom: '=' },
		link: (scope, element, attrs) => {
			console.log(scope);
    	}
    };
}

export default ScrollBottom;