import $ from "jquery";

function ScrollBottom () {
	return {
		restrict: 'A',
		scope: { scrollbottom: '=scrollbottom' },
		link: (scope, element, attrs) => {
			scope.$watch('scrollbottom', (newValue, oldValue) => {
				if (scope.scrollbottom === true) {
		            let $chatBody = $('.body.chat');

					$chatBody.scrollTop($chatBody[0].scrollHeight);
					scope.scrollbottom = false;
		        }
	        });
    	}
    };
}

export default ScrollBottom;