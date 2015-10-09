describe('in2Img.directive', function(){

	var $compile, $rootScope, element;
	beforeEach(module('in2.playground.img'));

	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('sets an image to default broken.png when image fails to load', function(done){

		element= angular.element("<img src='willFail.png' />");
		$compile(element)($rootScope);
		$rootScope.$digest();

		setTimeout(function(){
			expect(element.attr('src')).toEqual('src/in2Img/broken.png');
			done();
		}, 2000)
	});

	it('has a default behavior if image loads correctly', function(done){
		element = angular.element("<img src='https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300-rw' />");
		$compile(element)($rootScope);
		$rootScope.$digest();

		setTimeout(function(){
			expect(element.attr('src')).toEqual('https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300-rw');
			done();
		}, 2000)
	});

});