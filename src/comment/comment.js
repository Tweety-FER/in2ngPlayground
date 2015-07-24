/**
* @author Luka Skukan
* @version 0.1.0
*/
(function() {
  'use strict';
  
  angular.module('in2.playground.comment', ['in2.playground.titlecase'])//, 'templates']) // We will use titlecase in the template 
         .controller('in2CommentCtrl', CommentCtrl)
         .directive('in2Comment', Comment);
         
  
  CommentCtrl.$inject = [];
  
  /**
  * Constructs a simple comment controller which offers like-counting and incrementing the like counter.
  * The controller is an object instance and does not use scope. As such, controllerAs syntax must be used
  * with this controller.
  */
  function CommentCtrl() {
    var self = this;
    
    //Initialise values
    self.likes = 0;
    self.like = like;
    
    function like() {
      self.likes += 1;
      self.afterLike(); //Calling the callback provided in element initialisation
    }
  }
  
  Comment.$inject = ['$templateCache'];
  
  function Comment($templateCache) {
    return {
      restrict : 'E', //Elements only
      scope : { //Isolate scope. Cannot access ANYTHING outside the listed parameters in its scope without some hacky tricks
        username : '@', //@ means string type. It's read and parsed only once, when the directive is compiled
        text : '@',
        time : '=', //= means two-way binding. It expects any object and will keep it in sync when the outside value changes and vice-versa
        afterLike : '&' //& means function binding, a bit more complicated in a non-basic setting
      },
      replace : true,
      controller : 'in2CommentCtrl',
      controllerAs : 'comment',
      bindToController : true,
      template : $templateCache.get('comment/comment.html')
    };
  };
  
  
})();