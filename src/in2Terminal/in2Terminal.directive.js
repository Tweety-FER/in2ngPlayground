(function () {
	'use strict';

	angular
		.module('in2.playground.terminal.directive', ['templates'])
		.directive('in2Terminal', terminal);
	
	terminal.$inject = ['$templateCache'];

	function terminal($templateCache) {
		return {
			scope: {
				user: '@',
				machine: '@'
			},
			controller: 'in2TerminalController',
			controllerAs: 'ctrl',
			restrict: 'EA',
			template: $templateCache.get('in2Terminal/in2Terminal.template.html'),
			bindToController: true
		};
	}
})();