(function () {
    'use strict';
    angular
        .module('in2.playground.metrics.factory', [])
        .factory('metrics', Metrics);
		
		var kilometersToMilesConst = 0.621371192;
		var milesToKilometersConst = 1.609344;
		
		function Metrics() {
			
		
			var metrics = {
				kmToMiles : kmToMiles,			
				milesToKm : milesToKm
			};
			
			return metrics;
		
		}
		
		function kmToMiles(milesOrKilometers) {
			if (angular.isNumber(milesOrKilometers)) {
				if (milesOrKilometers < 0 ) {
					throw 'Negative numbers are not allowed!';
				} else {
					return milesOrKilometers * kilometersToMilesConst;
				}
			} else {
				throw 'Only numbers are allowed!';
			}
		}
		
		function milesToKm (milesOrKilometers) {
			if (angular.isNumber(milesOrKilometers)) {
				if (milesOrKilometers < 0 ) {
					throw 'Negative numbers are not allowed!';
				} else {
					return milesOrKilometers * milesToKilometersConst;
				}
			} else {
				throw 'Only numbers are allowed!';
			}
		}
	
	}
)();