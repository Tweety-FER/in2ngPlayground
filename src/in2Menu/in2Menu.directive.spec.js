describe('in2Menu.menu.controller', function(){
	var element, $compile, $rootScope, elementItem, item, $timeout, myCtrl;
	beforeEach(module('in2.playground.menu'));

	beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_, $controller){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$timeout = _$timeout_;

		element= angular.element("<in2-menu><in2-menu-item id='menuItem1' title='prvi naslov'>prvitest</in2-menu-item><in2-menu-item id='menuItem2' title='drugi naslov'>drugi</in2-menu-item><in2-menu-item id='menuItem3'>treci</in2-menu-item><in2-menu-item id='menuItem4'>cetvrti</in2-menu-item></in2-menu>");
		$compile(element)($rootScope);

		$rootScope.$digest();

		//click on first menu item so it would be active and we can test different cases below
		$(element).find('#menuItem1').click();
	}));

	it('should be defined', function(){
		expect(element).toBeDefined();
	});

	it('first menu item should be active', function(){
		expect($(element).find('#menuItem1').attr('class')).toContain('active');
		expect($(element).find('#menuItem2').attr('class')).not.toContain('active');
		expect($(element).find('#menuItem3').attr('class')).not.toContain('active');
		expect($(element).find('#menuItem4').attr('class')).not.toContain('active');
	});

	it('after click on second item only second item should be active', function(){
		$(element).find('#menuItem2').click();
		expect($(element).find('#menuItem1').attr('class')).not.toContain('active');
		expect($(element).find('#menuItem2').attr('class')).toContain('active');
		expect($(element).find('#menuItem3').attr('class')).not.toContain('active');
		expect($(element).find('#menuItem4').attr('class')).not.toContain('active');
	});

	it('text should be transcluded', function(){
		expect($(element).find("#menuItem1").text()).toContain('prvitest');
		expect($(element).find("#menuItem1").text()).toContain('prvi naslov');
		expect($(element).find("#menuItem3").text()).toContain('treci');
	})
});