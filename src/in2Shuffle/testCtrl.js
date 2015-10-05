angular.module('testCtrl', [])
	.controller("TestController", function(){
		var vm = this;
		vm.array = [1, 2, 3, 5, 6];
	});

	// in2ShuffleCtrl.$inject=['in2Shuffle'];
	// function in2ShuffleCtrl(){
	// 	var vm = this;
	// 	vm.array = [1, 2, 3, 4, 5];
	// 	vm.string = 'test4';

	// 	// vm.shuffledArray = Shuffle(vm.array);
	// 	// vm.shuffledString = Shuffle(vm.string);
	// }
