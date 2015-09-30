describe('reverse.filter', function() {
	var reverse;
	
	beforeEach(module('in2.playground.reverse'));
	
	beforeEach(inject(function (_$filter_) {
        reverse = _$filter_('reverse');
    }));
	
	it('returns reversed strings and arrays as expected', function() {
		expect(reverse('abba')).toEqual('abba');
		expect(reverse('reverse')).toEqual('esrever');
		expect(reverse([1,2,3,4])).toEqual([4,3,2,1]);
	});
	
	it('returns non strings and non arrays untouched as expected', function() {
		expect(reverse(12)).toEqual(12);
		expect(reverse({a : 2})).toEqual({a : 2});
	});
});