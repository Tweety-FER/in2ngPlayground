(function () {
    'use strict';

    angular
        .module('in2.playground.rate.filter', [])
        .filter('in2Rate', rate);

    function rate() {
        
        return rate;
        
        function rate(rating, numStars){
            var rateString = '';
            
            if (!angular.isNumber(rating)){
                throw 'Invalid data type for rating: ' + typeof(rating) + ', number expected.';
            }
            //if number of stars is not defined set it to 5 (default)
            if (angular.isUndefined(numStars)){
                numStars = 5;
            }
            if (!angular.isNumber(numStars)){
                throw 'Invalid data type for number of stars: ' + typeof(numStars) + ', number expected.';
            }
            if (numStars <= 0){
                throw 'Number of stars must be greater than 0.';
            }
            if (rating > numStars){
                throw 'Rating must be less or equal to the number of stars.';
            }
            
            rateString += Array(rating + 1).join(String.fromCharCode(9733));  //add (rate) number of full stars
            rateString += Array(numStars - rating + 1).join(String.fromCharCode(9734));  //add (numStars-rating) number of empty stars
            return rateString;
        }
    }
})();