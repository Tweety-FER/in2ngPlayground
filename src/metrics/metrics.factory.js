(function () {
    'use strict';
    angular
        .module('in2.playground.metrics.factory', [])
        .factory('metrics', Metrics);
		
	function Metrics() {
		
			var metrics = {
				kmToMiles : function(milesOrKilometers) {
					if (typeof milesOrKilometers === 'number') {
						if (milesOrKilometers < 0 ) {
							throw 'Negative numbers are not allowed!';
						} else {
							return milesOrKilometers * 0.621371192;
						}
					} else {
						throw 'Only numbers are allowed!';
					}
				},
				
				milesToKm : function(milesOrKilometers) {
					if (typeof milesOrKilometers === 'number') {
						if (milesOrKilometers < 0 ) {
							throw 'Negative numbers are not allowed!';
						} else {
							return milesOrKilometers * 1.609344;
						}
					} else {
						throw 'Only numbers are allowed!';
					}
				}
			};
			
			return metrics;
		
		}
	
	}
)();