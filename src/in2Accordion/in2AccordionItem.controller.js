(function () {
    'use strict';

    angular.module('in2.playground')
    .controller('in2AccordionItemController', AccordionItemCtrl);

    AccordionItemCtrl.$inject = [];

    // controller for in2AccordionItem
    function AccordionItemCtrl() {
        var my = this;
                
        my.accordionItems = []; // array of accordion items

        my.initializeAccordionItems = initializeAccordionItems; // initialize accordionItems array
        my.openTabWithId = openTabWithId;   // opens accordion tab by using it's id as a input parameter


        //----------functions----------//
       

        function initializeAccordionItems(items) {
            if (my.accordionItems.length === 0) {   // if accordionItems array is not already initialized
                for (var i = 0; i < items.length; i++) {    //  initialize it with elements from items input variable
                    my.accordionItems.push(items[i]);
                }
            }
        };

        function openTabWithId(id) {
            for (var i = 0; i < my.accordionItems.length; i++) {    // pass through all accordion items
                if (my.accordionItems[i].$id === id) {  // if currently selected item is required one
                    if (my.accordionItems[i].myClass === "accordionItemHidden")
                        my.accordionItems[i].myClass = "accordionItemVisible";  // open it if it is closed
                    else
                        my.accordionItems[i].myClass = "accordionItemHidden";   //close it if it is open
                }
                else
                    my.accordionItems[i].myClass = "accordionItemHidden";   // it is not required item so close it
            }
        };
    };
})();