(function() {
	'use strict';
	
	angular
		.module('in2.playground.reverse.filter', [])
		.filter('reverse', reverse);
		
	function reverse() {
		return reverse;
		
		function reverse(variable) {
				var reversed, i;
				
				if (typeof variable === 'string') {
					reversed = "";
					for (i=variable.length; i>0; i--) {
						reversed += variable[i-1];
					}
				} else if (variable instanceof Array) {
					reversed = [];
					for (i=variable.length; i>0; i--) {
						reversed.push(variable[i-1]);
					}
				}
				else {
					reversed = variable;
				}
				
				return reversed;
			};
	};
})();