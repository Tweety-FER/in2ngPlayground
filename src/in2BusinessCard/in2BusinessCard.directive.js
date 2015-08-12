(function () {
    'use strict';

    angular.module('in2.playground')
        .directive('in2BusinessCard', BuisnessCardDirective);

    BuisnessCardDirective.$inject = [];

    // directive that creates a virtual buisness card and binds it to a controller
    // it has two sides and can be flipped when clicked on
    function BuisnessCardDirective() {
        return {
            scope: {
                company: '@',   // simple binding
                fullName: '@',  // simple binding
                position: '@',  // simple binding
                image: '@', // simple binding
                frontSide: '='  // two-way binding
            },            
            controller: 'in2BusinessCardController',    // controller to bind the service to
            controllerAs: 'ctrl',   // controller name
            bindToController: true, // declare binding to controller
            templateUrl: 'src/in2BusinessCard/in2BuisnessCardTemplate.html' // template with card's appearance and behaviour
        };
    };
})();