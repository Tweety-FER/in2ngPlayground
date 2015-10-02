(function() {
    'use strict';

    angular
        .module('in2.playground.table.controller', [])
        .controller('in2TableController', TableController);

    function TableController(){
		var self = this;
        if (self.items.length == 0) {
			throw 'List of items can not be empty!';
		}
		
		if (angular.isUndefined(self.columns)) {
			var firstItems = self.items[0];
			for (var key in firstItems) {
				self.columns.push(key);
			}
		}
    }
})();