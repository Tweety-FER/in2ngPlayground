(function () {
    'use strict';

    angular.module('in2.playground')
        .directive('in2Accordion', AccordionDirective);

    AccordionDirective.$inject = [];

    // a transcluded directive that creates new empty accordion element
    // accordion items are added as transcluded elements
    function AccordionDirective() {
        return {
            restrict: 'E',  // use only as an element
            transclude: true,   // enable transcluded elements
            scope: {
                title: '@'  // simple binding
            },
            controller: 'in2AccordionController',   // controller for transcluded elements to reference to
            templateUrl: 'src/in2Accordion/in2Accordion.template.html'  // template with accordion's appearance and behaviour
        };
    };
})();