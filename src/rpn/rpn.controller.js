(function() {
    'use strict';

    angular
        .module('in2.playground.rpn.controller', [])
        .controller('rpnController', rpnController);

    rpnController.$inject = ['rpn'];

    function rpnController(rpn){
       	var vm = this;
        vm.str = "7 3 / 2 +";

        vm.test =rpn(vm.str);

    }
})();