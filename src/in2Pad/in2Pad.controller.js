(function () {
    'use strict';

    angular.module('in2.playground')
        .controller("in2PadController", PadCtrl);
        
    PadCtrl.$inject = [];

    function PadCtrl(pad) {
        var my = this;

        my.text = "testing";
    }
})();