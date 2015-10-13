(function () {
	'use strict';

	angular
		.module('in2.playground.subliminal.directive', ['templates'])
		.directive('in2Subliminal', subliminal);

    subliminal.$inject = ['$templateCache'];

	function subliminal($templateCache) {
		return {
		    restrict :'E',
            controller: 'in2SubliminalController',
			controllerAs: 'subCtrl',
		    bindToController: true,
			scope: {

                text:'@',
                hidden:'=',

            },
            template: $templateCache.get("in2Subliminal/in2Subliminal.template.html" )
		};
	};
})();