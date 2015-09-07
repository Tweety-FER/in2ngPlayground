(function() {
    'use strict';

    angular
        .module('in2.playground.parseiso.controller', [])
        .controller('parseISO.controller', parseISOController);

	parseISOController.$inject = ['$scope', 'parseISO'];
	
    function parseISOController($scope, parseISO){
		$scope.parseISO = parseISO;
		$scope.test = parseISO('2001-02-02T00:00:33-01:00').toUTCString();
    }
})();