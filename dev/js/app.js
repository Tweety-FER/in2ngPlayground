(function() {
  'use strict';
  
  angular.module('in2.playground', [
    'in2.playground.titlecase',
    'in2.playground.objectify',
    'in2.playground.tabbed',
    'in2.playground.comment',
    'in2.playground.example'
  ]);
  
  
})();
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
(function() {
  'use strict';
  
  angular.module('in2.playground.tabbed', ['templates']) //We are using the template importing mechanism
         .directive('in2Tabs', Tabs)
         .controller('in2TabsController', TabsCtrl)
         .directive('in2Tab', Tab);
   
  //Explicitly define the dependencies as strings. If we don't do this, minification breaks the code.
  Tabs.$inject = ['$templateCache'];
  
  /**
  * Tabs (tab container) directive declaration.
  * It transcludes children tab panels (in2Tab) and creates the tabs themselves.
  * The in2TabsController is used to control the tab-switching logic.
  *
  * The directive takes no parameters.
  */
  function Tabs($templateCache) {
    return {
      restrict : 'E', //The directive is used as an element
      transclude : true, //Transcluded directives use ng-transclude in the template and place the content within
      replace : true, //Remove the <in2-tabs> element with the content of the template 
      template : $templateCache.get('tabbed/tabs.html'), //The template is fetched from the templateCache, bundled with the application
      controller : 'in2TabsController',
      controllerAs : 'tabs' //Use a controller as a named instance
    };
  }
  
  TabsCtrl.$inject = [];
  
  /**
  * Constructs a controller which controls tabs and tab-switching object.
  * It contains a list of named tabs and enables the user to append new tabs, both named and unnamed
  * (in which case a name is auto-generated). It supports tab activation, ensuring that there is
  * always one (and only one) active tab, provided there is at least one tab.
  *
  * It keeps all values on its instance and does NOT use scope, which means it has to be used with the
  * controllerAs syntax.
  */
  function TabsCtrl() {
    var self = this;
    
    var lastNumber = 0; //Last added unnamed tab
    self.tabs = {}; //Tab by name dictionary
    self.activate = activate; //Activation function
    self.registerTab = register; //Tab registeration function

    /**
    * Activates a tab from the internal list of tabs by name. All other tabs are deactivated.
    * The (de)activating is done by setting a tab's active property to true (active) or false (inactive).
    * If no such tab exists, nothing happens.
    *
    * @param tabName : string - The name of the tab to activate
    */
    function activate(tabName) {
      //Do nothing if there is no such tab
      if(Object.keys(self.tabs).indexOf(tabName) === -1) {
        return;
      }

      angular.forEach(self.tabs, function(tab, name) {
        if(name === tabName) {
          tab.active = true;
        } else {
          tab.active = false;
        }
      });
    }
    
    /**
    * Registers a new tab to the internal list of tabs, by name.
    * Sets the tab to inactive, unless it's the first tab being added,
    * in which case it's set to active by default.
    *
    * @param tabName : string - The name of the tab. Default to Tab<OrdinalNumber> if not defined.
    * @return : string - The name of the tab; Same as tabName if provided, otherwise the generated name.
    */
    function register(tabName) {
      var isFirstTab = Object.keys(self.tabs).length === 0;
      var name = tabName || ('Tab' + (lastNumber++));
      self.tabs[name] = {
        active : isFirstTab
      };
      
      return name; //Give the caller their name back
    }
  }
  
    Tab.$inject = ['$templateCache'];
  
  function Tab($templateCache) {
    /**
    * Register yourself to a parent tab controller. Use a name if provided as an attribute on the element,
    * otherwise let the parent autogenerate the name. Store the name for later use.
    */
    function linkTab(scope, elem, attrs, tabsCtrl) {
      scope.name = tabsCtrl.registerTab(attrs.name); //Register self to tabs environment using your name attribute
    }
    
    return {
      restrict : 'E', //Create an element directive
      transclude : true,
      replace : true,
      require : '^in2Tabs', //There MUST be a parent in2Tabs directive and we can (and do) use it as the fourth argument of the link function
      link : linkTab, //The link function can alter the element and the scope
      scope : true, //Create your own scope, but do not make it isolate
      template : $templateCache.get('tabbed/tab.html')
    };
  }
  
})();
(function() {
  'use strict';
  
  angular.module('in2.playground.titlecase', [])
         .filter('in2TitleCase', TitleCase);
         
  
  TitleCase.$inject = [];
  
  function TitleCase() {
    /**
    * Constructs and returns a filter which takes a string and transforms its words to title case.
    * An optional second argument can be provided. All words in that dictionary, if any, are lowercased
    * instead of titlecased.
    *
    * @param value : string - String to titlecase (word-based titlecase)
    * @param notCapitalisedList : [string] - Optional list of string to lowercase instead of titlecase
    * @return - Given string, only with words transformed to titlecase
    */
    return function(value, notCapitalisedList) {
      var words = value.split(' ');
      var processed = []; //A list of processed words

      //If a list was given, lowercase its word for easier comparison. Default to empty list of words.
      notCapitalisedList = !!notCapitalisedList ? notCapitalisedList.map(function(v)  {return v.toLowerCase()}) : [];
      
      //Use angular's forEach function for easy iteration
      angular.forEach(words, function(word)  { //ES6 function declaration. Like a normal functions, only uses outside context's this variable.
        var lowerWord = word.toLowerCase();
                
        if(notCapitalisedList.indexOf(lowerWord) === -1) { //indexOf returns index of element in list or -1 if not in list
          processed.push(lowerWord[0].toUpperCase() + lowerWord.slice(1)); //Uppercase first and merge with the tail of the word
        } else {
          processed.push(lowerWord); //Is good, just push it
        }
        
      });
      
      return processed.join(' '); //Join the words back up with spaces
    };
  }
  
  
})();