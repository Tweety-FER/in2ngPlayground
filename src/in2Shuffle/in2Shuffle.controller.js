(function(){
	'use strict';

	angular.module('in2.playground.shuffle.controller', [])
	.controller('in2ShuffleController', in2ShuffleCtrl);

	in2ShuffleCtrl.$inject=['shuffle'];
	function in2ShuffleCtrl(shuffle){
		var vm = this;
		vm.array = [1, 2, 3, 4, 5, 6];
		vm.string = 'test4';

		vm.shuffledString = shuffle(vm.string);
		vm.shuffledArray = shuffle(vm.array);
		
	}

})();