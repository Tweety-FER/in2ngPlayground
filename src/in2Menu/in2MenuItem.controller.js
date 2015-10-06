(function(){
	'use strict';

	angular.module('in2.playground.menu.menuItem.controller', [])
		.controller('in2MenuItemController', in2MenuItemCtrl);

		function in2MenuItemCtrl() {
			var vm = this;
			vm.menuItems= [];
			vm.setActive= setActive;
			vm.initMenuItems = initMenuItems;

			function setActive(id){
				angular.forEach(vm.menuItems, function(item){
					if(item.$id === id){
						item.activeClass = 'active';
					}
					else{
						item.activeClass = '';
					}
				});
			}

			function initMenuItems(items){
				if(vm.menuItems.length===0){
					for(var i = 0; i< items.length; i++){
						vm.menuItems.push(items[i]);
					}	
				}
			}
		}
})();