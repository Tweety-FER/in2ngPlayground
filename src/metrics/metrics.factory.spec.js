describe('metrics.factory', function() {
	var metrics;
    
    beforeEach(module('in2.playground.metrics.factory'));

    beforeEach(inject(function (_metrics_) {
        metrics = _metrics_;
    }));
	
    it('It should convert kilometers to miles correctly', function () {
		var expected = metrics.kmToMiles(10);
		expect(expected).toEqual(6.21371192);
		expected = metrics.kmToMiles(25);
		expect(expected).toEqual(15.5342798);
		expected = metrics.kmToMiles(0);
		expect(expected).toEqual(0);
	});
	
	it('It should convert miles to kilometers correctly', function () {
		var expected = metrics.milesToKm(10);
		expect(expected).toEqual(16.09344);
		expected = metrics.milesToKm(25);
		expect(expected).toEqual(40.2336);
		expected = metrics.milesToKm(0);
		expect(expected).toEqual(0);
	});
	
	it('It should throw exceptions because of the values inputed were not of correct form', function () {
		expect(function() {metrics.kmToMiles(-10)}).toThrow('Negative numbers are not allowed!');
		expect(function() {metrics.kmToMiles('10')}).toThrow('Only numbers are allowed!');
		expect(function() {metrics.kmToMiles(-10)}).toThrow('Negative numbers are not allowed!');
		expect(function() {metrics.milesToKm('10')}).toThrow('Only numbers are allowed!');
    });
});