describe('in2AccordionItem controller', function () {
    var accordionItemCtrl,
      callback;

    beforeEach(module('in2.playground.accordion.item.controller'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        callback = jasmine.createSpy('callback');

        var data = {
            title: 'Transcluded title 1'
        };

        accordionItemCtrl = _$controller_('in2AccordionItemController', _$rootScope_.$new(), data);
    }));

    it('should be defined', function () {
        expect(accordionItemCtrl).toBeDefined();
    });

    it('should receive parameters properly', function () {
        expect(accordionItemCtrl.title).toEqual('Transcluded title 1');
    });

    it('should initialize items to the array correctly and only once', function () {

        var items1 = ["a", "b", "c"];
        var items2 = ["x", "y", "z"];
        var items3 = ["1", "2", "3"];

        accordionItemCtrl.initializeAccordionItems(items1);

        expect(accordionItemCtrl.accordionItems[0]).toEqual("a");
        expect(accordionItemCtrl.accordionItems[1]).toEqual("b");
        expect(accordionItemCtrl.accordionItems[2]).toEqual("c");
    });

    it('should open tab correctly', function () {

        var items = [{ myClass: "accordionItemHidden", $id: 1 }, { myClass: "accordionItemHidden", $id: 2 }, { myClass: "accordionItemHidden", $id: 3}];

        accordionItemCtrl.initializeAccordionItems(items);

        accordionItemCtrl.openTabWithId(1);

        expect(accordionItemCtrl.accordionItems[0].myClass).toEqual("accordionItemVisible");
        expect(accordionItemCtrl.accordionItems[1].myClass).toEqual("accordionItemHidden");
        expect(accordionItemCtrl.accordionItems[2].myClass).toEqual("accordionItemHidden");

        accordionItemCtrl.openTabWithId(2);

        expect(accordionItemCtrl.accordionItems[0].myClass).toEqual("accordionItemHidden");
        expect(accordionItemCtrl.accordionItems[1].myClass).toEqual("accordionItemVisible");
        expect(accordionItemCtrl.accordionItems[2].myClass).toEqual("accordionItemHidden");

        accordionItemCtrl.openTabWithId(3);

        expect(accordionItemCtrl.accordionItems[0].myClass).toEqual("accordionItemHidden");
        expect(accordionItemCtrl.accordionItems[1].myClass).toEqual("accordionItemHidden");
        expect(accordionItemCtrl.accordionItems[2].myClass).toEqual("accordionItemVisible");
    });
});