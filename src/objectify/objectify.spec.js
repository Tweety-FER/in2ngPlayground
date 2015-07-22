describe('objectify array to object transformation service', function() {
  var objectify;
  
  beforeEach(module('in2.playground.objectify'));
  
  beforeEach(inject(function(_in2Objectify_) {
    objectify = _in2Objectify_;
  }));

  it('should be defined', function() {
    expect(objectify).toBeDefined();
  });
  
  it('should fail for non-array inputs', function() {
    expect(function() {
      objectify({a : 'b'});
    }).toThrow('Invalid data type: object, expected array!');
    
    expect(function() {
      objectify(1);
    }).toThrow('Invalid data type: number, expected array!');
    
    expect(function() {
      objectify(1.1);
    }).toThrow('Invalid data type: number, expected array!');
    
    expect(function() {
      objectify("test");
    }).toThrow('Invalid data type: string, expected array!')
  });
  
  it('should fail for non-array array members', function() {
    expect(function() {
      objectify([{}]);
    }).toThrow('Invalid inner type: object, expected array!');
    
    expect(function() {
      objectify([1]);
    }).toThrow('Invalid inner type: number, expected array!');
    
    expect(function() {
      objectify([1.1]);
    }).toThrow('Invalid inner type: number, expected array!');
    
    expect(function() {
      objectify(["test"]);
    }).toThrow('Invalid inner type: string, expected array!')
  });
  
  it('should fail for any arrays with sub-array of length other than two', function() {
    expect(function() {
      objectify([[1, 2, 3]])
    }).toThrow('Only sub-arrays of length 2 are permitted!');
    
    expect(function() {
      objectify([[1, 2, 3]])
    }).toThrow('Only sub-arrays of length 2 are permitted!');
    
    expect(function() {
      objectify([['c']])
    }).toThrow('Only sub-arrays of length 2 are permitted!');
    
    expect(function() {
      objectify([[]])
    }).toThrow('Only sub-arrays of length 2 are permitted!');
  })
  
  it('should fail for non-string keys', function() {
    expect(function() {
      objectify([[1, 2], [3, 4]]);
    }).toThrow('Invalid key type: number, expected string!');
    
    expect(function() {
      objectify([[{}, 2]]);
    }).toThrow('Invalid key type: object, expected string!');
    
    expect(function() {
      objectify([[null, 4]]);
    }).toThrow('Invalid key type: object, expected string!');   
  });
  
  it('should create a proper object for well-formed array', function() {
    var pairs = [['name', 'Testko'], ['age', 10], ['pet', { type : 'Dog', name : 'Puppy'}]];
    
    expect(objectify(pairs)).toEqual({
      name : 'Testko',
      age : 10,
      pet : {
        type : 'Dog',
        name : 'Puppy'
      }
    });
  });
  
});