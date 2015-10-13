(function() {
    'use strict';

    angular
        .module('in2.playground.subliminal.controller', [])
        .controller('in2SubliminalController', subliminalCtrl);



    function subliminalCtrl($scope, $element,$attrs){
         /*var vm=this;
         this.text ="buy our stuff";
         this.hideTime = angular.isDefined(this.hideTime) ? this.hideTime : 3000;
         this.showTime = angular.isDefined(this.showTime) ? this.showTime : 500;
         */
         $scope.text =$attrs.text;
       
    }
})();