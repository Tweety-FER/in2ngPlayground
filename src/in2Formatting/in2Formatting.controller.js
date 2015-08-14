(function () {
    'use strict';

    angular.module('in2.playground.formatting.controller', [])
        .controller('in2FormattingController', FormattingCtrl);

    FormattingCtrl.$inject = ['in2Formatting'];

    function FormattingCtrl(format) {
        var my = this;

        my.text = "**text** *text* #text#";
        
        my.test = format(my.text);        
    }
})();  