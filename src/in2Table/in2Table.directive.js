(function () {
	'use strict';

	angular
		.module('in2.playground.table.directive', ['templates'])
		.directive('in2Table', table);
	
	table.$inject = ['$templateCache'];

	function table($templateCache) {
		return {
			scope: {
				items : '=',
				'default': '@',
				columns: '=?'
			},
			controller: 'in2TableController',
			controllerAs: 'ctrl',
			restrict: 'AE',
			replace: true,
			template: $templateCache.get('in2Table/in2Table.template.html'),
			bindToController: true
		}
	}
})();