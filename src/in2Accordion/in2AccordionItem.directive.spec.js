describe('in2AccordionItem directive', function () {
    var element;

    beforeEach(module('in2.playground.accordion'));
    beforeEach(module('in2.playground.accordion.item'));
    beforeEach(module('templates')); //Important! Won't pass if we don't include the templates!

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        var scope = _$rootScope_.$new();

        element = _$compile_(
            '<in2-accordion title="in2Accordion">' +
                '<in2-accordion-item title="What are directives?" id="1">' +
                    'I have no idea' +
                '</in2-accordion-item>' +
                '<in2-accordion-item title="Why use them?">' +
                    "That's what I was told to do" +
                '</in2-accordion-item>' +
                '<in2-accordion-item title="How do I write one?">' +
                    'Just mash on the keyboard until something happens' +
                '</in2-accordion-item>' +
            '</in2-accordion>'
        )(scope);

        scope.$digest(); //Must trigger a digest for proper directive testing
    }));

    it('should be defined', function () {
        expect(element).toBeDefined();
    })

    it('should properly fill in the fields', function () {
        var title = angular.element(angular.element(element.children()[0]).children()[0]);
        //var items = angular.element(angular.element(element.children()[0]).children()[1]);

        var item = angular.element(angular.element(element.children()[0]).children()[1]).find('h3');
        var transcluded = angular.element(angular.element(element.children()[0]).children()[1]).find('div');

        expect(title.text().trim()).toBe('in2Accordion');
        
        expect(item.eq(0).text().trim()).toBe('What are directives?');
        expect(item.eq(1).text().trim()).toBe('Why use them?');
        expect(item.eq(2).text().trim()).toBe('How do I write one?');
        
        expect(transcluded.eq(0).text().trim()).toBe('I have no idea');
        expect(transcluded.eq(1).text().trim()).toBe("That's what I was told to do");
        expect(transcluded.eq(2).text().trim()).toBe('Just mash on the keyboard until something happens');        
    })

    it('should have correct classes at start', function () {
        var item = angular.element(angular.element(element.children()[0]).children()[1]).find('div');

        expect(item.eq(0).hasClass('accordionItemHidden')).toBe(true);
        expect(item.eq(1).hasClass('accordionItemHidden')).toBe(true);
        expect(item.eq(2).hasClass('accordionItemHidden')).toBe(true);
    })
    
    it('should change classes correctly when clicked on', function () {
        var item = angular.element(angular.element(element.children()[0]).children()[1]).find('h3');
        var transcluded = angular.element(angular.element(element.children()[0]).children()[1]).find('div');

        angular.element(item.eq(0)).triggerHandler('click');        

        expect(transcluded.eq(0).hasClass('accordionItemVisible')).toBe(true);
        expect(transcluded.eq(1).hasClass('accordionItemHidden')).toBe(true);
        expect(transcluded.eq(2).hasClass('accordionItemHidden')).toBe(true);

        angular.element(item.eq(1)).triggerHandler('click');

        expect(transcluded.eq(0).hasClass('accordionItemHidden')).toBe(true);
        expect(transcluded.eq(1).hasClass('accordionItemVisible')).toBe(true);
        expect(transcluded.eq(2).hasClass('accordionItemHidden')).toBe(true);

        angular.element(item.eq(2)).triggerHandler('click');

        expect(transcluded.eq(0).hasClass('accordionItemHidden')).toBe(true);
        expect(transcluded.eq(1).hasClass('accordionItemHidden')).toBe(true);
        expect(transcluded.eq(2).hasClass('accordionItemVisible')).toBe(true);
    })
});