(function() {
    'use strict';

    angular
        .module('in2.playground.subliminal.controller', [])
        .controller('in2SubliminalController', subliminalCtrl);

    subliminalCtrl.$inject = ['$interval'];

    function subliminalCtrl($interval){
        var self = this;
        //define default values for hideTime and showTime
        this.hideTime = angular.isDefined(this.hideTime) ? this.hideTime : 3000;
        this.showTime = angular.isDefined(this.showTime) ? this.showTime : 500;
        //change state of displayed text periodically,started with a hidden state
        this.hidden=true;
        $interval( function(){ self.showTxt();}, this.hideTime);
        this.showTxt = function() {
            this.hidden=false;
            $interval( function(){ self.hideTxt(); }, this.showTime);
        }

        this.hideTxt = function() {
            this.hidden=true;
            $interval( function(){ self.showTxt(); }, this.hideTime);
        }

    }
})();


