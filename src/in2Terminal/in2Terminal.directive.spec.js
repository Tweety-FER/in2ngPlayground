describe ('in2Slideshow.directive', function (){
	
	var element, scope, compile;
	
	beforeEach(module('in2.playground.terminal'));
    beforeEach(module('templates'));
	
	beforeEach(inject(function($rootScope, $compile) {
		var elementHTML = '<in2-terminal></in2-terminal>';
		scope = $rootScope.$new();
		compile = $compile;
		element  = $compile(elementHTML)(scope);
		scope.$digest();
	}));
	
	it('should display default prefix before input field', function(){
		expect($(element).find('label').text()).toBe('user@machine$ ');
	});
	
	it('should display custom prefix before input field', function(){
		var elementHTML = '<in2-terminal user="korisnik" machine="masina"></in2-terminal>';
		element  = compile(elementHTML)(scope);
		scope.$digest();
		expect($(element).find('label').text()).toBe('korisnik@masina$ ');
	});
	
	it('should clear input field after submitting a command', function(){
		var e = $.Event("keypress", {keyCode: 13});
		
		$(element).find('input').val('komanda');  //write a command in input field
		expect($(element).find('input').val()).toBe('komanda');
				
		angular.element($(element).find('input')).triggerHandler(e);  //simulate pressing the enter key
		expect($(element).find('input').val()).toBe('');
	});
	
	it('should add a command to the command history after submitting the command', function(){
		var e = $.Event("keypress", {keyCode: 13});

		element.isolateScope().ctrl.command = 'komanda';
		angular.element($(element).find('input')).triggerHandler(e);  //simulate pressing the enter key

		expect($($(element).find('.terminalContainer').children()[0]).text().trim()).toBe('user@machine$ komanda');
	});
});