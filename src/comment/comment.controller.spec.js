describe('comment controller', function() {
  var commentCtrl,
      date,
      callback;
  
  beforeEach(module('in2.playground.comment'));
  
  beforeEach(inject(function(_$rootScope_, _$controller_) {
    date = new Date();
    callback = jasmine.createSpy('callback');
    
    var data = {
      text : 'This is a very interesting article. I hope you get fired and your family dies horribly.',
      time : date,
      username : 'Mate',
      afterLike : callback
    };
    
    commentCtrl = _$controller_('in2CommentCtrl', _$rootScope_.$new(), data);
  }));
  
  it('should be defined', function() {
    expect(commentCtrl).toBeDefined();
  });
  
  it('should receive parameters properly', function() {
    expect(commentCtrl.text).toEqual('This is a very interesting article. I hope you get fired and your family dies horribly.');
    expect(commentCtrl.time).toEqual(date);
    expect(commentCtrl.username).toEqual('Mate');
    expect(commentCtrl.afterLike).toBeDefined();
  });
  
  it('should initialise a like counter', function() {
    expect(commentCtrl.likes).toBeDefined();
    expect(commentCtrl.likes).toEqual(0);
  });
  
  it('should create a like function that increments the counter and calls the provided callback', function() {
    expect(commentCtrl.like).toBeDefined();
    expect(commentCtrl.likes).toEqual(0);
    
    commentCtrl.like();
    
    expect(commentCtrl.likes).toEqual(1);
    expect(callback).toHaveBeenCalled();
    
    commentCtrl.like();
    expect(commentCtrl.likes).toEqual(2);
  });
  
});