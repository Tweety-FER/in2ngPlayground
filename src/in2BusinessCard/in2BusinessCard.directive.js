(function () {
    'use strict';

    angular.module('in2.playground.businesscard', ['templates', 'in2.playground.businesscard.controller'])
        .directive('in2BusinessCard', BuisnessCardDirective);

    BuisnessCardDirective.$inject = ['$templateCache'];

    // directive that creates a virtual buisness card and binds it to a controller
    // it has two sides and can be flipped when clicked on
    function BuisnessCardDirective($templateCache) {
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
            template: $templateCache.get('in2BusinessCard/in2BuisnessCardTemplate.html') // template with card's appearance and behaviour
        };
    };
})();