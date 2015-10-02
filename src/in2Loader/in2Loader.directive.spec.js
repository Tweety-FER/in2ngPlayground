describe ('in2Loader.directive', function (){
	
	/*var element, scope, compile, inter;*/
	
	beforeEach(module('in2.playground.loader'));
	
	it("Should have one dot more every second, until tree dots are here. After that all again.", inject(function ($compile, $interval, $rootScope) {
		var elementHTML = angular.element('<in2-loader state="true" id="loaderId">Loading</in2-loader>');
		angular.element(document.body).append(elementHTML);
		var isolateScope = $rootScope.$new();
		elementHTML = $compile(elementHTML)(isolateScope);

		isolateScope.$digest();
		$interval.flush(1000);
		expect(elementHTML.html()).toBe('Loading');
		
		$interval.flush(1000);
		expect(elementHTML.html()).toBe('Loading.');
		
		$interval.flush(1000);
		expect(elementHTML.html()).toBe('Loading..');
		
		$interval.flush(1000);
		expect(elementHTML.html()).toBe('Loading...');
		
		$interval.flush(1000);
		expect(elementHTML.html()).toBe('Loading');
		
	}));
	
	it("Should not be loading, given that state is false.", inject(function ($compile, $interval, $rootScope) {
		var elementHTML = angular.element('<in2-loader state="false" id="loaderId">Loading</in2-loader>');
		angular.element(document.body).append(elementHTML);
		var isolateScope = $rootScope.$new();
		elementHTML = $compile(elementHTML)(isolateScope);

		isolateScope.$digest();
		$interval.flush(1000);
		expect(elementHTML.html()).toBe('');
		
	}));
	
	
});