(function () {
	'use strict';

	angular
		.module('in2.playground.subliminal.directive', ['templates'])
		.directive('in2Subliminal', subliminal);

    subliminal.$inject = ['$templateCache','$interval'];

	function subliminal($templateCache,$interval) {
		return {

		    restrict :'E',
            controller: 'in2SubliminalController',
			controllerAs: 'subCtrl',

			replace: true,

			bindToController: true,
			scope: {
			    hideTime : '=?',
                showTime: '=?',
                text:'@'
			},

            template: $templateCache.get("in2Subliminal/in2Subliminal.template.html" ),

            link : function(scope, element, attrs) {

                    scope.hidden = true;
                    scope.hideTime = angular.isDefined(attrs.hideTime) ? attrs.hideTime : 3000;
                    scope.showTime = angular.isDefined(attrs.showTime) ?attrs.showTime : 500;
                    scope.noviText =scope.subCtrl.text;
                    //scope.hideTime =scope.subCtrl.hideTime;
                    //scope.showTime=scope.subCtrl.showTime;
                    $interval(showTxt,scope.hideTime,1);
                    function showTxt(){

                        scope.hidden=false;
               			$interval(hideTxt,scope.showTime,1);
                    }

                    function hideTxt(){

                        scope.hidden=true;
                		$interval(showTxt,scope.hideTime,1);
                    }




            }


		};
	};
})();