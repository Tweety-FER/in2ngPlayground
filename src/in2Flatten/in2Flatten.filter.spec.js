describe('in2Flatten.filter', function(){

	beforeEach(module('in2.playground.flatten'));

	beforeEach(inject(function(_$filter_){
		flatten = _$filter_('flatten');
	}));

	it('returns flattened array if array has multiple levels', function(){
		expect(flatten([1, [2, 3], [[4], [5,6]], [2,3]])).toEqual([1, 2, 3, 4, 5, 6, 2, 3]);
	});

	it('returns variable unchanged if variable is not an array', function(){
		expect(flatten('Yo')).toEqual('Yo');
	});

});