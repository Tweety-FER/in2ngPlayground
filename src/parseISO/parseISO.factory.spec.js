describe('parseISO.factory', function () {

    var parseISO;
    
    beforeEach(module('in2.playground.parseiso.factory'));

    beforeEach(inject(function (_parseISO_) {
        parseISO = _parseISO_;
    }));

    it('should parse dates as expected', function () {
		var date = new Date(2017, 0);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
        expect(parseISO('2017')).toEqual(date);
		
		date = new Date(2017, 2);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		expect(parseISO('2017-03')).toEqual(date);

		date = new Date(2017, 2, 5);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		expect(parseISO('2017-03-05')).toEqual(date);
		
		date = new Date(2017, 2, 5, 20, 00);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		expect(parseISO('2017-03-05T20:00Z')).toEqual(date);
		
		date = new Date(2017, 2, 5, 20, 00, 23);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		expect(parseISO('2017-03-05T20:00:23Z')).toEqual(date);
		
		date = new Date(2017, 2, 5, 20, 00, 23, 555);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		expect(parseISO('2017-03-05T20:00:23.555Z')).toEqual(date);
		
		date = new Date(2017, 2, 5, 20, 00, 23, 555);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		date.setUTCMinutes(date.getUTCMinutes() - 191);   //UTC+03:11
		expect(parseISO('2017-03-05T20:00:23.555+03:11')).toEqual(date);
		
		date = new Date(2017, 2, 5, 20, 00, 23, 55);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		date.setUTCMinutes(date.getUTCMinutes() - 191);   //UTC+03:11
		expect(parseISO('2017-03-05T20:00:23.055+03:11')).toEqual(date);
		
		date = new Date(2017, 2, 5, 20, 00, 23, 555);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		date.setUTCMinutes(date.getUTCMinutes() - 191);   //UTC+03:11
		expect(parseISO('2017-03-05T20:00:23.555 03:11')).toEqual(date);
		
		date = new Date(2017, 2, 5, 20, 00, 23, 555);
		date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());
		date.setUTCMinutes(date.getUTCMinutes() + 191);   //UTC-03:11
		expect(parseISO('2017-03-05T20:00:23.555-03:11')).toEqual(date);
    });
	
	it('should throw exceptions because of the wrong date format', function () {
		expect(function() {parseISO('201')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('20111')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-2')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-5')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-05 20:30Z')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-05T20Z')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-05T20:30Z01:00')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-05T20:30Z+01:00')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-05T20:30C01:00')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-05T20:30C')}).toThrow('Invalid date format, ISO format required.');
		expect(function() {parseISO('2017-02-05T20:30.5555Z')}).toThrow('Invalid date format, ISO format required.');
    });
});