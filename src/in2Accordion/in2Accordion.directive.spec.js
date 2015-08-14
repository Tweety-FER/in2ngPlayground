describe('in2Accordion directive', function () {
    var element;

    beforeEach(module('in2.playground.accordion'));    
    beforeEach(module('templates')); //Important! Won't pass if we don't include the templates!

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        var scope = _$rootScope_.$new();

        element = _$compile_(
            '<in2-accordion title="in2Accordion">Transcluded text</in2-accordion>'
        )(scope);

        scope.$digest(); //Must trigger a digest for proper directive testing
    }));

    it('should be defined', function () {
        expect(element).toBeDefined();
    })

    it('should properly fill in the fields', function () {        
        var title = angular.element(angular.element(element.children()[0]).children()[0]);
        var text = angular.element(angular.element(element.children()[0]).children()[1]);
        expect(title.text().trim()).toBe('in2Accordion');
        expect(text.text().trim()).toBe('Transcluded text');  
    })
});