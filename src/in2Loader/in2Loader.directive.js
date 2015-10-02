(function () {
	'use strict';

	angular
		.module('in2.playground.loader.directive', [])
		.directive('in2Loader', loader);
	
	loader.$inject = ['$interval'];

	function loader($interval) {
		return {
			scope: {
				state : '@'
			},
			controller: 'in2LoaderController',
			controllerAs: 'ctrl',
			restrict: 'AE',
			replace: true,
			template: '<div ng-hide="isHidden" state="true" id="loaderId"></div>',
			bindToController: true,
			link: function (scope, element) {
				function callAtInterval() {
						var innerHtml = angular.element(document.querySelector('#loaderId')).html();
						console.log(innerHtml);
						if (innerHtml == 'Loading...' || innerHtml.length == 0) {
							innerHtml = 'Loading';
						} else {
							innerHtml += '.';
						}
						
						angular.element(document.querySelector('#loaderId')).html(innerHtml);
					}
			
			
				scope.isHidden = true;
				if(scope.ctrl.state) {
										
					scope.isHidden = false;
					
					scope.Timer = $interval(callAtInterval, 1000);
					
					
				}
			}
		}
	}
})
();