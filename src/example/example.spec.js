describe('example controller', function() {
  var exampleCtrl;
  
  beforeEach(module('in2.playground.example'));
  
  beforeEach(inject(function(_$rootScope_, _$controller_) {
    exampleCtrl = _$controller_('ExampleController as ex', {
      $scope : _$rootScope_.$new()
    });
  }));
  
  it('should be defined', function() {
    expect(exampleCtrl).toBeDefined();
  });
  
  it('should initially have some properties', function() {
    expect(exampleCtrl.title).toBe('suicide cures bird flu, scientists say');
    expect(exampleCtrl.text).toBe('Scientist John Smith that committing suicide significantly lowers risk of dying of bird flu!');
    expect(exampleCtrl.user).toBe('');
    expect(exampleCtrl.comment).toBe('');
    expect(exampleCtrl.comments).toEqual([]);
  });
  
  it('should fail to submit a comment without an author', function() {
    exampleCtrl.comment = 'Test';
    expect(exampleCtrl.submit()).toBe(false);
    expect(exampleCtrl.comment).toBe('Test');
    expect(exampleCtrl.user).toBe('');
    expect(exampleCtrl.comments).toEqual([]);
  });
  
  it('should fail to submit a comment without a body', function() {
    exampleCtrl.user = 'Test';
    expect(exampleCtrl.submit()).toBe(false);
    expect(exampleCtrl.user).toBe('Test');
    expect(exampleCtrl.comment).toBe('');
    expect(exampleCtrl.comments).toEqual([]);
  });
  
  it('should post a valid comment', function() {
    exampleCtrl.user = 'Test';
    exampleCtrl.comment = 'Test2';
    expect(exampleCtrl.submit()).toBe(true);
    expect(exampleCtrl.user).toBe('');
    expect(exampleCtrl.comment).toBe('');
    expect(exampleCtrl.comments.length).toBe(1);
    expect(exampleCtrl.comments[0].text).toBe('Test2');
    expect(exampleCtrl.comments[0].username).toBe('Test');
  });

})