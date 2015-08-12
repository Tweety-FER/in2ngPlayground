(function () {
    'use strict';

    angular.module('in2.playground')
        .directive('in2AccordionItem', AccordionItemDirective);

    AccordionItemDirective.$inject = [];

    // a transcluded directive that creates new accordion item
    // accordion item text is added as a transcluded element
    function AccordionItemDirective() {
        // link function which adds an accordion item's data to the parent's controller for each item in the accordion
        var addAccordionItemToController = function (scope, element, attrs, accordionController) {
            accordionController.addAccordionItem(scope);    // add this item's data to parent's controller
            scope.parentArray = accordionController.getAllAccordionItems();     // get all accordion items from parent's controller
        };
        
        return {
            restrict: 'E',  // use only as an element
            require: '^^in2Accordion',   //  requires in2Accordion parent 
            transclude: true,   // enables transcluded elements
            scope: {
                title: '@'  // simple binding
            },
            controller: 'in2AccordionItemController',   // controller for accordion items
            controllerAs: 'accordionItemCtrl',  // controller name to use in template
            bindToController: true,     // bind controller to the template
            link: addAccordionItemToController, // link function with parent's controller
            templateUrl: 'src/in2Accordion/in2AccordionItem.template.html'  // template with item's appearance and behaviour
        };
    };
})();