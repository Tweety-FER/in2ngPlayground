(function() {
    'use strict';

    angular
        .module('in2.playground.loader.controller', [])
        .controller('in2LoaderController', LoaderController);

    function LoaderController($scope){
        $scope.isHidden = false;
		$scope.loading = true;
    }
})();