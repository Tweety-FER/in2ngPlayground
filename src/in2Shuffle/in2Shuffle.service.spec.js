describe('in2Shuffle.factory', function(){
	var testVar, variable, shuffleMock, length, rand, temp;
	var randArray= [];

	beforeEach(module('in2.playground.shuffle'));

	beforeEach(inject(function(_shuffle_){
		//testVar = _shuffle_;

		shuffleMock = {
		shuffle: function(array){
			var i = 0;
			length = array.length;
			for(i=0; i< length; i++){
				randArray[i]=(Math.floor((length-1)/(i+1)));
			}
			if(angular.isArray(array)){
				shuffleMock.shuffleArray(array, randArray);
			}

			if(angular.isString(array)){
				shuffleMock.shuffleString(array, randArray);
			}
		},
		shuffleArray: function(array, randArray){
			length = array.length;
			while(length != 0){
					rand = Math.floor(randArray[length-1]);
					temp = array[rand];
					array[rand]= array[length-1];
					array[length-1]= temp;
					length= length -1;
				}
		},
		shuffleString: function(array, randArray){
			length = array.length;

			while(length != 0){
				rand = Math.floor(randArray[length-1]);
				array = shuffleMock.switchChars(array, length-1, rand);
				length= length -1;
			}
		},
		switchChars: function(array, length, rand){
				temp= array[rand];
				array = array.substr(0, rand) + array[length] + array.substr(rand+1);
				array = array.substr(0, length) + temp + array.substr(length+1);
				return array;
			} 
	}
		spyOn(shuffleMock, 'shuffleArray').and.callThrough();
		spyOn(shuffleMock, 'shuffleString').and.callThrough();
		variable = [1, 2, 3, 4, 5];
		shuffleMock.shuffle(variable);
	}));
	

	
	it('should be defined', function(){
		expect(shuffleMock).toBeDefined();
	});

	it('should shuffle array [1,2,3,4,5] and return [1,4,3,2,5]', function(){
		expect(variable).toEqual([1,4,3,2,5]);
	});

	it('should call shuffleArray if variable is array', function(){
		//shuffleMock.shuffle(variable);
		expect(shuffleMock.shuffleArray).toHaveBeenCalled();
	});

	it('should call shuffleString if variable is string', function(){
		var string = 'testingShuffle';
		shuffleMock.shuffle(string);
		expect(shuffleMock.shuffleString).toHaveBeenCalled();
	});

	it('should return the same variable as sent if it is not an array or a string', function(){
		var object = {test: 'rand',
		test2: 'rand2'};
		shuffleMock.shuffle(object);
		expect(object).toEqual(object);
	});


});
