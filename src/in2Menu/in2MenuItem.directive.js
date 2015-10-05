(function(){
	'use strict';

	angular.module('in2.playground.menu.menuItem.directive', ['templates'])
		.directive('in2MenuItem', menuItem);

		menuItem.$inject=['$templateCache'];

		function menuItem($templateCache) {
			return {
				require:'^^in2Menu',
				replace: true,
				restrict: 'E',
				template: $templateCache.get('in2Menu/menuItem.template.html'),
				scope: {
					title: '@'
				},
				transclude: true,
				link: function(scope, element, attrs, menuCtrl){
					menuCtrl.addItem(element);
					element.bind('click', function(element){
					 	menuCtrl.setActive(element);
					 });

				//	scope.$$parent = menuCtrl;
				}
			};
		}
})();