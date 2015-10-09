(function(){
	'use strict';

	angular.module('in2.playground.menu.menu.controller', [])
		.controller('in2MenuController', in2MenuCtrl);

		function in2MenuCtrl($timeout) {
			var vm = this;

			vm.menuItems = [];
			vm.addItem = addItem;
			vm.activeItem = 0;
			vm.setActive = setActive;
			//$scope.setActive = setActive;

			function addItem(menuItem){
				vm.menuItems.push(menuItem);
			}

			function setActive(element){
				angular.forEach(vm.menuItems, function(item){
					item.removeClass('active');
				});
				angular.element(element.currentTarget).addClass('active');
			}
		}
})();
