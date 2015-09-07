(function () {
    'use strict';

    angular
        .module('in2.playground.slideshow.slide.directive', ['templates'])
        .directive('in2Slide', slide);
    
    slide.$inject = ['$templateCache'];

    function slide($templateCache) {
        return {
            require: '^^in2Slideshow',
            scope: {
                title: '@'
            },
            restrict: 'EA',
            controllerAs: 'ctrlSlideshow',
            template: $templateCache.get('in2Slideshow/in2Slide.template.html'),
            transclude: true,
            link: function (scope, element, attrs, ctrl) {
                ctrl.addSlide(element);
            },
        };
    }
})();