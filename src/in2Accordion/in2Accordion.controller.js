(function () {
    'use strict';

    angular.module('in2.playground.accordion.controller', [])
        .controller('in2AccordionController', AccordionCtrl);

    AccordionCtrl.$inject = [];

    // controller for in2Accordion
    function AccordionCtrl() {
        var my = this;

        my.accordionItems = []; // an array of accordion items

        my.addAccordionItem = addAccordionItem; // add accordion item to array
        my.getAllAccordionItems = getAllAccordionItems; // return all accordion items


        //----------functions---------//


        function addAccordionItem(item) {
            my.accordionItems.push(item);
        };

        function getAllAccordionItems() {
            return my.accordionItems;
        };
    };
})();