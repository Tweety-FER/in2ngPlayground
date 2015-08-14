describe('in2Accordion controller', function () {
    var accordionCtrl,
      callback;

    beforeEach(module('in2.playground.accordion.controller'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        callback = jasmine.createSpy('callback');

        var data = {
            title: 'in2Accordion'
        };

        accordionCtrl = _$controller_('in2AccordionController', _$rootScope_.$new(), data);
    }));

    it('should be defined', function () {
        expect(accordionCtrl).toBeDefined();
    });

    it('should receive parameters properly', function () {
        expect(accordionCtrl.title).toEqual('in2Accordion');
    });

    it('should add items to the array correctly', function () {
        accordionCtrl.addAccordionItem("a");
        expect(accordionCtrl.accordionItems[0]).toEqual("a");
        accordionCtrl.addAccordionItem("b");
        expect(accordionCtrl.accordionItems[1]).toEqual("b");
        accordionCtrl.addAccordionItem("c");
        expect(accordionCtrl.accordionItems[2]).toEqual("c");
    });

    it('should return accordion items correctly', function () {
        accordionCtrl.addAccordionItem("x");
        accordionCtrl.addAccordionItem("y");
        accordionCtrl.addAccordionItem("z");

        var items = accordionCtrl.getAllAccordionItems()

        expect(items[0]).toEqual("x");
        expect(items[1]).toEqual("y");
        expect(items[2]).toEqual("z");
    });
});