describe('in2Shuffle.factory', function(){
	var shuffle, variable, shuffleMock, length, rand, temp, stringVar, object;
	var randArray= [];

	beforeEach(module('in2.playground.shuffle'));

	beforeEach(inject(function(_shuffle_){
		shuffle = _shuffle_;
		var rand = [0.11, 0.83, 0.78, 0.34, 0.54]; //list of values our mocked Math.random will return
		var i = 0;
		var returnRand;
		spyOn(Math, 'random').and.callFake(function(){ //we are mocking random so we can get a not random result
			returnRand = rand[i];
			i= i +1;
			return returnRand;
		});

		variable = [1, 2, 3, 4, 5];
		variable = shuffle(variable);

		i=0;
		stringVar = '1es2n';
		stringVar = shuffle(stringVar);

		i=0;
		object = {test: 'rand',
		test2: 'rand2'};
		object = shuffle(object);
	}));
	
	
	it('should be defined', function(){
		expect(shuffle).toBeDefined();
	});

	it('should shuffle array [1,2,3,4,5] and return [4,5,2,3,1]', function(){
		expect(variable).toEqual([4,5,2,3,1]);
	});

	it('should shuffle string "1es2n" and return "2nes1"', function(){
		expect(stringVar).toEqual('2nes1');
	});

	it('should return the same variable as sent if it is not an array or a string', function(){
		expect(object).toEqual(object);
	});


});
