/**
* @author Luka Skukan
* @version 0.1.0
*/
(function() {
  'use strict';
  
  angular.module('in2.playground.objectify', [])
         .service('in2Objectify', Objectify);
  
  Objectify.$inject = [];
  
  function Objectify() {
    /**
    * Transforms an object-like array into an object. It works only on arrays of two-long arrays where the first element of the sub-array is
    * a string. Example:
    *
    * [['name', 'Dog'], ['age' : 7], ['favouriteFoods', ['chocolate', 'ice-cream']]]
    * 
    * is transformed into
    *
    * {
    *  name : 'Dog',
    *  age : 7,
    *  favouriteFoods : ['chocolate', 'ice-cream']
    * }
    *
    * @param arr : [[string, *]] - Mock-object array
    * @return : object - Array transformed into object by association mapping
    */
    return function(arr) {
      var obj = {};
      
      if(!angular.isArray(arr)) {
        throw 'Invalid data type: ' + (typeof arr) + ', expected array!';
      }
      
      angular.forEach(arr, function(val) {
        if(!angular.isArray(val)) {
          throw 'Invalid inner type: ' + (typeof val) + ', expected array!';
        }
        
        if(val.length !== 2) {
          throw 'Only sub-arrays of length 2 are permitted!';
        }
        
        if(typeof val[0] !== 'string') {
          throw 'Invalid key type: ' + (typeof val[0]) + ', expected string!';
        }
        
        obj[val[0]] = val[1];
      });
      
      return obj;
    };
  };
  
})();