(function () {
    'use strict';

    angular.module('in2.playground.businesscard.controller', [])
        .controller("in2BusinessCardController", BuisnessCardCtrl);

    BuisnessCardCtrl.$inject = [];

    function BuisnessCardCtrl() {
        var my = this;

        my.frontSide;

        my.getFrontSide = getFrontSide;
        
        function getFrontSide() {
            if (my.frontSide === false)
                return false;
            else
                return true;
        };
    };
})();