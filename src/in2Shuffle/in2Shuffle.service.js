(function(){
	'use strict';

	angular.module('in2.playground.shuffle.factory', [])
		.factory('shuffle', Shuffle);

		function Shuffle(){

			return shuffle;
			var length, temp, rand;
			function shuffle(array){
				//shuffle part
				if(angular.isArray(array)){
					shuffleArray(array);
				}

				if(angular.isString(array)){
					array = shuffleString(array);
				}
				
				return array;
			}

			function shuffleArray(array){

				length = array.length;

				while(length != 0){
					rand = Math.floor(Math.random()*(length-1));
					temp = array[rand];
					array[rand]= array[length-1];
					array[length-1]= temp;
					length= length -1;
				}
			}

			function shuffleString(array){
				
				length = array.length;

				while(length != 0){
					rand = Math.floor(Math.random()*(length-1));
					array = switchChars(array, length-1, rand);
					length= length -1;
				}
				return array;
			}

			function switchChars(array, length, rand){
				temp= array[rand];
				array = array.substr(0, rand) + array[length] + array.substr(rand+1);
				array = array.substr(0, length) + temp + array.substr(length+1);
				return array;
			}
		}

})();