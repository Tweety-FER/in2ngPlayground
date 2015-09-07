describe('parseISO.factory', function () {

    var parseISO;
    
    beforeEach(module('in2.playground.parseiso.factory'));

    beforeEach(inject(function (_parseISO_) {
        parseISO = _parseISO_;
    }));

    it('', function () {
		console.log(parseISO('2017'));
        expect(parseISO('2017')).toEqual(new Date(2017, 0));
    });
});