(function() {
    'use strict';

    angular
        .module('in2.playground.metrics.controller', [])
        .controller('metrics.controller', metricsController);

	metricsController.$inject = ['$scope', 'metrics'];
	
    function metricsController($scope, metrics){
		$scope.metrics = metrics;
    }
})();