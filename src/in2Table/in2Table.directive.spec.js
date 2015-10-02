describe ('in2Table.directive', function (){
	
	/*var element, scope, compile, inter;*/
	
	beforeEach(module('in2.playground.table'));
	
	it("Should return an error.", inject(function ($compile, $controller, $rootScope) {
		var elementHTML = angular.element('<in2-table items="[]" columns="cols" default="Awful"></in2-loader>');
		angular.element(document.body).append(elementHTML);
		var isolateScope = $rootScope.$new();
		isolateScope.cols = ["id", "name", "angularLevel"];
		

		
		expect(function() {
			elementHTML = $compile(elementHTML)(isolateScope);
			isolateScope.$digest()
			})
			.toThrow('List of items can not be empty!');
	}));
	
	it("Should return a correct table (counting includes header).", inject(function ($compile, $controller, $rootScope) {
		var elementHTML = angular.element('<in2-table items="its" columns="cols" default="Awful"></in2-loader>');
		angular.element(document.body).append(elementHTML);
		var isolateScope = $rootScope.$new();
		isolateScope.cols = ["id", "name", "angularLevel"];
		isolateScope.its = [{id : 1, name : 'Ankica', angularLevel : 'Advanced Super Expert'}, {id : 2, name : 'Lukica'}];

		elementHTML = $compile(elementHTML)(isolateScope);
		isolateScope.$digest();
		console.log(elementHTML);
		expect($(elementHTML).find('table tr').length).toEqual(3);
	}));
});