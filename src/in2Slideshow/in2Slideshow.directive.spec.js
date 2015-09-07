describe ('in2Slideshow.directive', function (){
	
	var element, scope;
	
	beforeEach(module('in2.playground.slideshow'));
	
	beforeEach(inject(function($rootScope, $compile) {
		var elementHTML = 
			'<in2-slideshow>' +
				'<in2-slide id="slide1" title="Important Slideshow">' +
					'<p>transcluded text</p>' +
					'<b>Author:</b> Me' +
				'</in2-slide>' +
				'<in2-slide id="slide2" title="Facts">' +
					'Have some facts' +
				'</in2-slide>' +
				'<in2-slide id="slide3" title="Chart">' +
					'Look at this chart:' +
				'</in2-slide>' +
			'</in2-slideshow>';

		scope = $rootScope.$new();
		element  = $compile(elementHTML)(scope);
		scope.$digest();
	}));
	
	describe ('in2Slideshow.directive', function(){
		
		it('should be defined', function(){
			expect(element).toBeDefined();
		});
		
		it('should display first slide', function(){
			expect($(element).find('#slide1').eq(0).attr('class').split(/\s+/)).not.toContain('ng-hide');
			expect($(element).find('#slide2').eq(0).attr('class').split(/\s+/)).toContain('ng-hide');
			expect($(element).find('#slide3').eq(0).attr('class').split(/\s+/)).toContain('ng-hide');
		});

		it('should display second slide after clicking right arrow', function(){
			$(element).find('.slideshowRightArrow').click();
			expect($(element).find('#slide1').eq(0).attr('class').split(/\s+/)).toContain('ng-hide');
			expect($(element).find('#slide2').eq(0).attr('class').split(/\s+/)).not.toContain('ng-hide');
			expect($(element).find('#slide3').eq(0).attr('class').split(/\s+/)).toContain('ng-hide');
		});

		it('should make left arrow hidden upon initialization and then visible once right arrow is clicked', function(){
			expect($(element).find('.slideshowLeftArrow').eq(0).attr('class').split(/\s+/)).toContain('ng-hide');
			$(element).find('.slideshowRightArrow').click();
			expect($(element).find('.slideshowLeftArrow').eq(0).attr('class').split(/\s+/)).not.toContain('ng-hide');
		});
		it('should make right arrow visible upon initialization and then hidden once right arrow is twice', function(){
			expect($(element).find('.slideshowRightArrow').eq(0).attr('class').split(/\s+/)).not.toContain('ng-hide');
			$(element).find('.slideshowRightArrow').click();
			expect($(element).find('.slideshowRightArrow').eq(0).attr('class').split(/\s+/)).not.toContain('ng-hide');
			$(element).find('.slideshowRightArrow').click();
			expect($(element).find('.slideshowRightArrow').eq(0).attr('class').split(/\s+/)).toContain('ng-hide');
		});
		
	});
	
	describe ('in2Slide.directive', function(){
		
		it('should be transcluded', function(){
			var p = $(element).find('#slide1 p');

			expect(p.text()).toBe('transcluded text');

		});

		it('should bind title', function(){
			var titleH2 = $(element).find('#slide1 h2');

			expect(titleH2.text()).toBe('Important Slideshow');

			scope.$apply(function (){
				angular.element($(element).find('#slide1')).isolateScope().title = 'Title2';
			});

			expect(titleH2.text()).toBe('Title2');

		});
		
	});
});