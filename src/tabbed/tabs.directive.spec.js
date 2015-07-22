describe('tabs directive', function() {
  var element;
      
  beforeEach(module('in2.playground.tabbed'));
  beforeEach(module('templates')); //Important! Won't pass if we don't include the templates!
  
  beforeEach(inject(function(_$rootScope_, _$compile_) {    
    var scope = _$rootScope_.$new();
    element = _$compile_(
      '<in2-tabs></in2-tabs>'
    )(scope);
    
    scope.$digest(); //Must trigger a digest for proper directive testing
  }));
      
  it('should be defined', function() {
    expect(element).toBeDefined();
  });
  
  it('should expand into a certain structure', function() {
    expect(element[0].nodeName).toBe('DIV');
    
    var directChildren = element.children();
    

    expect(directChildren.length).toBe(2);
    expect(directChildren[0].nodeName).toBe('DIV');
    expect(directChildren[1].nodeName).toBe('DIV');
  });
})

describe('tab directive', function() {
  var element;
      
  beforeEach(module('in2.playground.tabbed'));
  beforeEach(module('templates')); //Important! Won't pass if we don't include the templates!
  
  beforeEach(inject(function(_$rootScope_, _$compile_) {    
    var scope = _$rootScope_.$new();
    element = _$compile_(
      '<in2-tabs><in2-tab></in2-tab></in2-tabs>'
    )(scope);
    
    scope.$digest(); //Must trigger a digest for proper directive testing
  }));
      
  it('should be defined', function() {
    expect(element).toBeDefined();
  });
})