describe('in2buisnessCard directive', function () {
    var element;

    beforeEach(module('in2.playground.businesscard'));
    beforeEach(module('templates')); //Important! Won't pass if we don't include the templates!

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        var scope = _$rootScope_.$new();

        element = _$compile_(
            '<in2-business-card company="IN2" full-name="Ivan Rep" position="Senior Minion" image="https://pbs.twimg.com/profile_images/557113121748160513/opy8TCJe.png"></in2-business-card>'
    )(scope);

        scope.$digest(); //Must trigger a digest for proper directive testing
    }));

    it('should be defined', function () {
        expect(element).toBeDefined();
    })

    it('should properly fill in the fields', function () {
        var info = angular.element(element.children()[0]);
        expect(info.text().trim()).toContain('IN2');
        expect(info.text().trim()).toContain('Ivan Rep');
        expect(info.text().trim()).toContain('Senior Minion');
    })

    it('should flip correctly', function () {
        angular.element(element.children()[0]).triggerHandler('click');

        var info = angular.element(element.children()[0]);

        expect(info.text().trim()).toContain('Have a nice day');
    })
})