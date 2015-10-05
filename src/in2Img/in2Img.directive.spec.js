describe('in2Img.directive', function(){

	var $compile, $rootScope, element;
	beforeEach(module('in2.playground.img'));

	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		element= angular.element("<img src='willFail.png' />")
		//spyOn(element, 'bind').and.returnValue('error');

		//element = $compile("<img src='willFail'/>")($rootScope);
		$compile(element)($rootScope);
		$rootScope.$digest();
	}));

	it('sets an image to default broken.png when image fails to load', function(done){
		setTimeout(function(){
			expect(element.attr('src')).toEqual('src/in2Img/broken.png');
			done();
		}, 2000)
	});

});