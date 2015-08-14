describe('in2BuisnessCard controller', function () {
    var buisnessCardCtrl,
      callback;

    beforeEach(module('in2.playground.businesscard.controller'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        callback = jasmine.createSpy('callback');

        var data = {
            company: 'IN2',
            fullName: 'Ivan Rep',
            position: 'Senior Minion',
            image: 'https://pbs.twimg.com/profile_images/557113121748160513/opy8TCJe.png',
            frontSide: true
        };

        buisnessCardCtrl = _$controller_('in2BusinessCardController', _$rootScope_.$new(), data);
    }));

    it('should be defined', function () {
        expect(buisnessCardCtrl).toBeDefined();
    });

    it('should receive parameters properly', function () {
        expect(buisnessCardCtrl.company).toEqual('IN2');
        expect(buisnessCardCtrl.fullName).toEqual('Ivan Rep');
        expect(buisnessCardCtrl.position).toEqual('Senior Minion');
        expect(buisnessCardCtrl.image).toEqual('https://pbs.twimg.com/profile_images/557113121748160513/opy8TCJe.png');
        expect(buisnessCardCtrl.frontSide).toEqual(true);
    });

    it('should return side correctly', function () {
        expect(buisnessCardCtrl.getFrontSide).toBeDefined();

        buisnessCardCtrl.frontSide = true;
        var side = buisnessCardCtrl.getFrontSide();
        expect(side).toEqual(true);

        buisnessCardCtrl.frontSide = false;
        var side = buisnessCardCtrl.getFrontSide();
        expect(side).toEqual(false);
    });
});