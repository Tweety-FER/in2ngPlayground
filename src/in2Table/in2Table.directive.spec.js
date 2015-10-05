describe ('in2Table.directive', function (){
	
	/*var element, scope, compile, inter;*/
	
	beforeEach(module('in2.playground.table'));
	
	it("Should return an error.", inject(function ($compile, $rootScope) {
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
	
	it("Should return a correct table (counting includes header).", inject(function ($compile, $rootScope) {
		var elementHTML = angular.element('<in2-table items="its" columns="cols" default="Awful"></in2-loader>');
		angular.element(document.body).append(elementHTML);
		var isolateScope = $rootScope.$new();
		isolateScope.cols = ["id", "name", "angularLevel"];
		isolateScope.its = [{id : 1, name : 'Ankica', angularLevel : 'Advanced Super Expert'}, {id : 2, name : 'Lukica'}];
		
		elementHTML = $compile(elementHTML)(isolateScope);
		isolateScope.$digest();
		expect($(elementHTML).find('table tr').length).toEqual(3);
	}));
	
	it("Should return default value of the null field.", inject(function ($compile, $rootScope) {
		var elementHTML = angular.element('<in2-table items="its" columns="cols" default="Awful"></in2-loader>');
		angular.element(document.body).append(elementHTML);
		var isolateScope = $rootScope.$new();
		isolateScope.cols = ["id", "name", "angularLevel"];
		isolateScope.its = [{id : 1, name : 'Ankica', angularLevel : 'Advanced Super Expert'}, {id : 2, name : 'Lukica'}];

		elementHTML = $compile(elementHTML)(isolateScope);
		isolateScope.$digest();
		var table = $(elementHTML).find('table tbody')[0];
		var cell = table.rows[2].cells[2];
		expect($(cell).html().trim()).toEqual('Awful');
	}));
	
	it("Should sort by name using clickable column name.", inject(function ($compile, $rootScope) {
	
		// setup html
		var elementHTML = angular.element('<in2-table items="its" columns="cols" default="Awful"></in2-loader>');
		angular.element(document.body).append(elementHTML);
		var isolateScope = $rootScope.$new();
		isolateScope.cols = ["id", "name", "angularLevel"];
		isolateScope.its = [{id : 1, name : 'Ankica', angularLevel : 'Advanced Super Expert'}, {id : 2, name : 'Lukica'}, {id : 3, name : 'Deni', angularLevel : 'Advanced Super Expert'}];
		
		// digest
		elementHTML2 = $compile(elementHTML)(isolateScope);
		isolateScope.$digest();
		
		// check that everything is defaultly loaded
		var table = $(elementHTML2).find('table tbody')[0];
		var cell = table.rows[2].cells[1];
		expect($(cell).html().trim()).toEqual('Lukica');

		
		// get scope and sort by name
		var isolateScope2 = elementHTML2.isolateScope();
		isolateScope2.order('name');
		isolateScope.$digest();
		
		// now a change in names order should be done
		var table = $(elementHTML2).find('table tbody')[0];
		
		var cell = table.rows[2].cells[1];
		expect($(cell).html().trim()).toEqual('Deni');
	}));
});