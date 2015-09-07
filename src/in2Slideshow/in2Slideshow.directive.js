(function () {
	'use strict';

	angular
		.module('in2.playground.slideshow.directive', ['templates'])
		.directive('in2Slideshow', slideshow);
    
	slideshow.$inject = ['$templateCache'];

	function slideshow($templateCache) {
		return {
            scope: {},
			controller: 'in2SlideshowController',
			controllerAs: 'ctrl',
            bindToController: true,
			restrict: 'EA',
            template: $templateCache.get('in2Slideshow/in2Slideshow.template.html'),
            transclude: true
		};
	}
})();