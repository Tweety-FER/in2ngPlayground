describe('in2Rate.filter', function () {

    var rate;
    
    beforeEach(module('in2.playground.rate'));

    beforeEach(inject(function (_$filter_) {
        rate = _$filter_('in2Rate');
    }));

    it('returns stars as expected with number of stars not defined', function () {
        expect(rate(1)).toEqual('★☆☆☆☆');
        expect(rate(2)).toEqual('★★☆☆☆');
        expect(rate(3)).toEqual('★★★☆☆');
        expect(rate(4)).toEqual('★★★★☆');
        expect(rate(5)).toEqual('★★★★★');
		expect(rate(4.5)).toEqual('★★★★☆');
    });
    
    it('returns stars as expected with set number of stars', function () {
        expect(rate(3, 3)).toEqual('★★★');
        expect(rate(3, 4)).toEqual('★★★☆');
        expect(rate(3, 5)).toEqual('★★★☆☆');
        expect(rate(3, 6)).toEqual('★★★☆☆☆');
        expect(rate(3, 7)).toEqual('★★★☆☆☆☆');

    });
    
    it('throws an exception when rating is greater than number of stars when that parameter is not defined', function () {
        expect(function () {
            rate(7);
        }).toThrow('Rating must be less or equal to the number of stars.');
    });
    
    it('throws an exception when rating is greater than set number of stars', function () {
        expect(function () {
            rate(4, 2);
        }).toThrow('Rating must be less or equal to the number of stars.');
    });
    
    it('throws an exception number of stars is not a number', function () {
        expect(function () {
            rate(4, 'abc');
        }).toThrow('Invalid data type for number of stars: string, number expected.');
    });
});