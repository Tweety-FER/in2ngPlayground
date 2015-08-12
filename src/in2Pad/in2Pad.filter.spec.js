describe('padding filter', function () {
    var $filter,
      pad;

    beforeEach(module('in2.playground'));

    beforeEach(inject(function (_$filter_) {
        $filter = _$filter_;
        pad = $filter('in2Pad');
    }));

    it('should be defined', function () {
        expect(pad).toBeDefined();
    });

    it('should apply padding correctly for various texts', function () {

        expect(pad("t", 8, '5')).toEqual('5555555t');
        expect(pad("te", 8, '5')).toEqual('555555te');
        expect(pad("tes", 8, '5')).toEqual('55555tes');
        expect(pad("test", 8, '5')).toEqual('5555test');
        expect(pad("testt", 8, '5')).toEqual('555testt');
        expect(pad("testte", 8, '5')).toEqual('55testte');
        expect(pad("testtes", 8, '5')).toEqual('5testtes');
        expect(pad("testtest", 8, '5')).toEqual('testtest');
    });

    it('should apply padding correctly for various padding lengths', function () {

        expect(pad("test", 14, 'x')).toEqual('xxxxxxxxxxtest');
        expect(pad("test", 12, 'x')).toEqual('xxxxxxxxtest');
        expect(pad("test", 10, 'x')).toEqual('xxxxxxtest');
        expect(pad("test", 8, 'x')).toEqual('xxxxtest');
        expect(pad("test", 6, 'x')).toEqual('xxtest');
        expect(pad("test", 4, 'x')).toEqual('test');
        expect(pad("test", 2, 'x')).toEqual('test');
        expect(pad("test", 0, 'x')).toEqual('test');
    });

    it('should apply padding correctly for various padding characters', function () {

        expect(pad("test", 6, 'a')).toEqual('aatest');
        expect(pad("test", 6, 'b')).toEqual('bbtest');
        expect(pad("test", 6, 'c')).toEqual('cctest');
        expect(pad("test", 6, 'd')).toEqual('ddtest');
        expect(pad("test", 6, '1')).toEqual('11test');
        expect(pad("test", 6, '2')).toEqual('22test');
        expect(pad("test", 6, '3')).toEqual('33test');
        expect(pad("test", 6, '4')).toEqual('44test');
    });

    it('should apply padding correctly for no inputed padding character', function () {

        expect(pad("test", 6)).toEqual('00test');
    });

    it("should throw exception in case padding character is not a single character", function () {
        
        expect(function () {
            pad("test", 6, 'xy')
        }).toThrow('Invalid input - \'xy\' is not a single character');
    });

    it("should throw exception in case pad length is undefined", function () {

        expect(function () {
            pad("test")
        }).toThrow('Invalid input - padLength must be defined!');
    });	
});