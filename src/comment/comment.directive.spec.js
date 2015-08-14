describe('comment directive', function() {
  var element;
      
  beforeEach(module('in2.playground.comment'));
  beforeEach(module('templates')); //Important! Won't pass if we don't include the templates!
  
  beforeEach(inject(function(_$rootScope_, _$compile_) {    
    var scope = _$rootScope_.$new();    
    scope.time = new Date(2015, 10, 2, 10, 30);
    scope.afterLike = function() {};
    
    element = _$compile_(
      '<in2-comment username="Mate" text="a short text" time="time" after-like="afterLike()"></in2-comment>'
    )(scope);
    
    scope.$digest(); //Must trigger a digest for proper directive testing
  }));
      
  it('should be defined', function() {
    expect(element).toBeDefined();
  })    
      
  it('should create a proper comment structure and replace the original', function() {
    var children = element.children();

    expect(children.length).toBe(3);
    expect(children[0].nodeName).toBe('DIV');
    expect(children[1].nodeName).toBe('DIV');
    expect(children[2].nodeName).toBe('DIV');
    
    var metadata = angular.element(children[0]).children();

    expect(metadata.length).toBe(2);
    expect(metadata[0].nodeName).toBe('SPAN');
    expect(metadata[1].nodeName).toBe('SPAN');
    
    var likeBar = angular.element(children[2]).children();
    expect(likeBar[0].nodeName).toBe('SPAN');
    expect(likeBar[1].nodeName).toBe('SPAN');
  }); 
  
  it('should properly fill in the fields', function() {
    //Fill in the date properly
    var dateField = angular.element(angular.element(element.children()[0]).children()[1]);
    expect(dateField.text().trim()).toBe('02.11.2015 10:30');
    
    //Fills in and filters the text properly
    var textField = angular.element(element.children()[1]);
    expect(textField.text().trim()).toEqual('a short text'); 
    
    //Shows the proper number of likes
    var likeFields = angular.element(element.children()[2]);
    var likeCounter = angular.element(likeFields.children()[1]);

    expect(likeCounter.text().trim()).toBe('0');
  })
  
})