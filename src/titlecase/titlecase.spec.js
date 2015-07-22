describe('titlecase filter', function() {
  var $filter,
      titlecase;
  
  beforeEach(module('in2.playground.titlecase'));
  
  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
    titlecase = $filter('in2TitleCase');
  }));

  it('should be defined', function() {
    expect(titlecase).toBeDefined();
  });
  
  it('should set the first letter to uppercase a single word', function() {
    expect(titlecase('hey')).toEqual('Hey');
  });
  
  it('should set the other levels to lowercase in a single word', function() {
    expect(titlecase('HEY')).toEqual('Hey');
  });
  
  it('should titlecase every word when no dictionary is defined', function() {
    expect(titlecase('This is a test')).toEqual('This Is A Test');
    
  });
  
  it('should ignore words in a dictionary, if one is provided', function() {
    expect(titlecase('This is a test', ['is', 'a'])).toEqual('This is a Test');
  });
  
  it('should not take the case of the words in the dictionary into consideration', function() {
    expect(titlecase('This is a test', ['iS', 'A'])).toEqual('This is a Test');
  });
  
});