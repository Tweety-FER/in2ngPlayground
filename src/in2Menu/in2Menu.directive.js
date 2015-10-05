(function(){
	'use strict';

	angular.module('in2.playground.menu.menu.directive', ['templates'])
		.directive('in2Menu', in2Menu);

		in2Menu.$inject = ['$templateCache']

		function in2Menu($templateCache) {
			return {
				replace: true,
				restrict: 'E',
				template: $templateCache.get('in2Menu/menu.template.html'),
				controller: 'in2MenuController',
				controllerAs: 'menuCtrl',
				bindToController: true,
				transclude: true
		}}
})();