(function(){
	'use strict';

	angular.module('in2.playground.img', [])
		.directive('img', img);

	function img(){
		return{
			restrict: 'E',
			link: function(scope, element, attrs){
				element.bind('error', function(){
					if(angular.element(this).attr("src") !== "src/in2Img/broken.png")
					{
						angular.element(this).attr("src", "src/in2Img/broken.png")
					}
				});
			}
		}
	}
})();