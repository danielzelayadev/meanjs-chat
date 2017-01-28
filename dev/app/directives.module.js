import ScrollBottom from "./shared/ScrollBottom/scroll-bottom.directive";

let moduleName = 'chat.directives';

angular.module(moduleName, [])
	.directive ('scrollbottom', ScrollBottom);

export { moduleName };