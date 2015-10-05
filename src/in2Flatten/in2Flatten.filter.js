(function(){
	'use strict';

	angular.module('in2.playground.flatten', [])
		.filter('flatten', flatten);

	function flatten() {
		return flatten;

		function flatten(array){
			var flattenArray=[];
			if(angular.isArray(array)){
			flattenRecursive(array, flattenArray);
			array = flattenArray;
			}
			// if(angular.isArray(array)){
			// 	angular.forEach(array, function(value) {
			// 		flattenRecursive(value, flattenArray);
			// 	});
			// 	console.log(flattenArray);
			// 	console.log(array);
			// 	array = flattenArray;
			// 	console.log(array);
			// }
			return array;
		}

		function flattenRecursive(array, flattenArray){
			if(angular.isArray(array)){
				angular.forEach(array, function(value){
				flattenRecursive(value, flattenArray);
			})}
			else{
				flattenArray.push(array);
			}
		}
	}
})();