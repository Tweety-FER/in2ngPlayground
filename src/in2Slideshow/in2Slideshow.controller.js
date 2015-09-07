(function () {
    'use strict';

    angular
        .module('in2.playground.slideshow.controller', [])
        .controller('in2SlideshowController', SlideshowController);

    function SlideshowController() {
        var vm = this;

        vm.slides = []; //DOM elements
        vm.visibleSlide = 0; //currently visible slide
        vm.numSlides = 0; //number of slides
        vm.showLeftArrow = false;
        vm.showRightArrow = false;
        
        vm.addSlide = addSlide;
        vm.slideRight = slideRight;
        vm.slideLeft = slideLeft;

        //adds a reference to the slide's scope to an array
        function addSlide(slide) {
            vm.slides.push(slide);
            if (vm.visibleSlide != vm.numSlides) {
                slide.addClass('ng-hide');
            }
            vm.numSlides++;
            refreshArrows();
        }

        //handles sliding to the right
        function slideRight() {
            if (vm.visibleSlide < vm.numSlides - 1) {
                vm.slides[vm.visibleSlide].addClass('ng-hide');
                vm.visibleSlide++;
                vm.slides[vm.visibleSlide].removeClass('ng-hide');
            }
            refreshArrows();
        }

        //handles sliding to the left
        function slideLeft() {
            if (vm.visibleSlide > 0) {
                vm.slides[vm.visibleSlide].addClass('ng-hide');
                vm.visibleSlide--;
                vm.slides[vm.visibleSlide].removeClass('ng-hide');
            }
            refreshArrows();
        }
        
        //
        function refreshArrows() {
            vm.showLeftArrow = (vm.visibleSlide == 0) ? false : true;
            vm.showRightArrow = (vm.visibleSlide == vm.numSlides - 1) ? false : true;
            
        }
    }
})();