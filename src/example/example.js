(function() {
  'use strict';
  
  angular.module('in2.playground.example',[])
         .controller('ExampleController', Example);
         
  Example.$inject = [];
  
  /**
  * An example article page controller. Offers some content and comment-submitting functionality.
  */
  function Example() {
    var self = this;
    
    self.title = 'suicide cures bird flu, scientists say';
    self.text = 'Scientist John Smith that committing suicide significantly lowers risk of dying of bird flu!';
    self.user = '';
    self.comment = '';
    self.comments = [];
    
    self.submit = function() {
      if(!!self.comment && !!self.user) {
        var comment = {
          time : new Date(), //new Date() creates a new current datetime
          text : self.comment, //We can't use this here, would refer to the function, so we use the "self" we declared earlier
          username : self.user
        };
        
        self.comments.push(comment);
        self.comment = '';
        self.user = '';
        
        return true; //Signal success
      }
      
      return false; //Signal failure
    }
  }
})();