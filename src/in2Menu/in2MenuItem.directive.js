(function(){
	'use strict';

	angular.module('in2.playground.menu.menuItem.directive', ['in2.playground.menu.menuItem.controller','templates'])
		.directive('in2MenuItem', menuItem);

		menuItem.$inject=['$templateCache'];

		function menuItem($templateCache) {
			return {
				require:'^^in2Menu',
				replace: true,
				restrict: 'E',
				controller: 'in2MenuItemController',
				controllerAs: 'menuItemCtrl',
				bindToController: true,
				template: $templateCache.get('in2Menu/menuItem.template.html'),
				scope: {
					title: '@'
				},
				transclude: true,
				link: function(scope, element, attrs, menuCtrl){
					menuCtrl.addItem(scope);
					scope.parentArray = menuCtrl.getItems();
					// element.bind('click', function(element){
					//  	menuCtrl.setActive(element);
					//  });

				//	scope.$$parent = menuCtrl;
				}
			};
		}
})();