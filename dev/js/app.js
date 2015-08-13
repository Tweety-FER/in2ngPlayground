/**
* @author Luka Skukan
* @version 0.1.0
*/
(function() {
  'use strict';
  
  angular.module('in2.playground', [
    'in2.playground.titlecase',
    'in2.playground.objectify',
    'in2.playground.tabbed',
    'in2.playground.comment',
    'in2.playground.example',
    'in2.playground.accordion',
    'in2.playground.businesscard'
  ]);
  
  
})();
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
/**
* @author Luka Skukan
* @version 0.1.0
*/
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
(function () {
    'use strict';

    angular.module('in2.playground.accordion.controller', [])
        .controller('in2AccordionController', AccordionCtrl);

    AccordionCtrl.$inject = [];

    // controller for in2Accordion
    function AccordionCtrl() {
        var my = this;

        my.accordionItems = []; // an array of accordion items

        my.addAccordionItem = addAccordionItem; // add accordion item to array
        my.getAllAccordionItems = getAllAccordionItems; // return all accordion items


        //----------functions---------//


        function addAccordionItem(item) {
            my.accordionItems.push(item);
        };

        function getAllAccordionItems() {
            return my.accordionItems;
        };
    };
})();
(function () {
    'use strict';

    angular.module('in2.playground.accordion', ['in2.playground.accordion.controller', 'templates'])
        .directive('in2Accordion', AccordionDirective);

    AccordionDirective.$inject = ['$templateCache'];

    // a transcluded directive that creates new empty accordion element
    // accordion items are added as transcluded elements
    function AccordionDirective($templateCache) {
        return {
            restrict: 'E',  // use only as an element
            transclude: true,   // enable transcluded elements
            scope: {
                title: '@'  // simple binding
            },
            controller: 'in2AccordionController',   // controller for transcluded elements to reference to
            template: $templateCache.get('in2Accordion/in2Accordion.template.html') // template with accordion's appearance and behaviour
        };
    };
})();
(function () {
    'use strict';

    angular.module('in2.playground.accordion.item.controller', [])
    .controller('in2AccordionItemController', AccordionItemCtrl);

    AccordionItemCtrl.$inject = [];

    // controller for in2AccordionItem
    function AccordionItemCtrl() {
        var my = this;
                
        my.accordionItems = []; // array of accordion items

        my.initializeAccordionItems = initializeAccordionItems; // initialize accordionItems array
        my.openTabWithId = openTabWithId;   // opens accordion tab by using it's id as a input parameter


        //----------functions----------//
       

        function initializeAccordionItems(items) {
            if (my.accordionItems.length === 0) {   // if accordionItems array is not already initialized
                for (var i = 0; i < items.length; i++) {    //  initialize it with elements from items input variable
                    my.accordionItems.push(items[i]);
                }
            }
        };

        function openTabWithId(id) {
            for (var i = 0; i < my.accordionItems.length; i++) {    // pass through all accordion items
                if (my.accordionItems[i].$id === id) {  // if currently selected item is required one
                    if (my.accordionItems[i].myClass === "accordionItemHidden")
                        my.accordionItems[i].myClass = "accordionItemVisible";  // open it if it is closed
                    else
                        my.accordionItems[i].myClass = "accordionItemHidden";   //close it if it is open
                }
                else
                    my.accordionItems[i].myClass = "accordionItemHidden";   // it is not required item so close it
            }
        };
    };
})();
(function () {
    'use strict';

    angular.module('in2.playground.accordion.item', ['in2.playground.accordion.item.controller', 'templates'])
        .directive('in2AccordionItem', AccordionItemDirective);

    AccordionItemDirective.$inject = ['$templateCache'];

    // a transcluded directive that creates new accordion item
    // accordion item text is added as a transcluded element
    function AccordionItemDirective($templateCache) {
        // link function which adds an accordion item's data to the parent's controller for each item in the accordion
        var addAccordionItemToController = function (scope, element, attrs, accordionController) {
            accordionController.addAccordionItem(scope);    // add this item's data to parent's controller
            scope.parentArray = accordionController.getAllAccordionItems();     // get all accordion items from parent's controller
        };
        
        return {
            restrict: 'E',  // use only as an element
            require: '^^in2Accordion',   //  requires in2Accordion parent 
            transclude: true,   // enables transcluded elements
            scope: {
                title: '@'  // simple binding
            },
            controller: 'in2AccordionItemController',   // controller for accordion items
            controllerAs: 'accordionItemCtrl',  // controller name to use in template
            bindToController: true,     // bind controller to the template
            link: addAccordionItemToController, // link function with parent's controller
            template: $templateCache.get('in2Accordion/in2AccordionItem.template.html')  // template with item's appearance and behaviour
        };
    };
})();
(function () {
    'use strict';

    angular.module('in2.playground.businesscard.controller', [])
        .controller("in2BusinessCardController", BuisnessCardCtrl);

    BuisnessCardCtrl.$inject = [];

    function BuisnessCardCtrl() {
        var my = this;

        my.frontSide;

        my.getFrontSide = getFrontSide;
        
        function getFrontSide() {
            if (my.frontSide === false)
                return false;
            else
                return true;
        };
    };
})();
(function () {
    'use strict';

    angular.module('in2.playground.businesscard', ['templates', 'in2.playground.businesscard.controller'])
        .directive('in2BusinessCard', BuisnessCardDirective);

    BuisnessCardDirective.$inject = ['$templateCache'];

    // directive that creates a virtual buisness card and binds it to a controller
    // it has two sides and can be flipped when clicked on
    function BuisnessCardDirective($templateCache) {
        return {
            scope: {
                company: '@',   // simple binding
                fullName: '@',  // simple binding
                position: '@',  // simple binding
                image: '@', // simple binding
                frontSide: '='  // two-way binding
            },            
            controller: 'in2BusinessCardController',    // controller to bind the service to
            controllerAs: 'ctrl',   // controller name
            bindToController: true, // declare binding to controller
            template: $templateCache.get('in2BusinessCard/in2BuisnessCardTemplate.html') // template with card's appearance and behaviour
        };
    };
})();
(function () {
    'use strict';

    angular.module('in2.playground')
        .controller('in2FormattingController', FormattingCtrl);

    FormattingCtrl.$inject = ['in2Formatting'];

    function FormattingCtrl(format) {
        var my = this;

        my.text = "**text** *text* #text#";
        
        my.test = format(my.text);        
    }
})();  
(function () {
    'use strict';

    angular.module('in2.playground')
        .factory('in2Formatting', format);

    format.$inject = [];

    // factory in2Formatting takes an input string and returns formatted string in which the special 
    // characters are replaced by html tags in the following way:
    //  ->  **some content** is replaced by <b>some content</b>
    //  ->   *some content*  is replaced by <i>some content</i>
    //  ->   #some content#  is replaced by <code>some content</code>
    // special characters must be in pairs with some content in between them, single characters will not be replaced
    function format() {
        return format;       
        
        // format function, checks input text for bold, italic and code special characters
        function format(text) {
            var formattedText = text;

            if (!angular.isString(text)) {
                throw 'Invalid data type: ' + (typeof text) + ', expected string!';
            }

            formattedText = checkForBold(formattedText);
            formattedText = checkForItalic(formattedText);
            formattedText = checkForCode(formattedText);

            return formattedText;
        };

        // function that checks input string for all instances of **some content** patterns
        // for each found instance, another function that replaces pattern with <b>some content</b> is called
        function checkForBold(text) {
            var formattedText = text;
            var formatStartPosition = -1;
            var formatEndPosition = -1;            
            
            for (var i = 0; i < formattedText.length; i++) {
                if (formattedText[i] === '*' && formattedText[i + 1] === '*' && formatStartPosition === -1) {
                    formatStartPosition = i;
                    i += 2;     // skip **
                }
                if (formattedText[i] === '*' && formattedText[i + 1] === '*' && formatStartPosition !== -1 && formatEndPosition === -1 && i !== formatStartPosition + 2) {
                    formatEndPosition = i;
                    i += 2;      // skip **
                    formattedText = replaceBold(formattedText, formatStartPosition, formatEndPosition); // call function that replaces special pattern
                    formatStartPosition = -1;
                    formatEndPosition = -1;
                }
            }            
            return formattedText;
        };

        // function that replaces one instance of **some content** with <b>some content</b>
        // startPosition and endPosition are positions in an input text where ** start and end
        function replaceBold(text, startPosition, endPosition) {
            var formattedText = text;

            formattedText = formattedText.substr(0, startPosition) + "<b>" + formattedText.substr(startPosition + 2, endPosition - startPosition - 2) +
            "</b>" + formattedText.substr(endPosition + 2, text.length - endPosition + 2);

            return formattedText;
        };


        // function that checks input string for all instances of *some content* patterns
        // for each found instance, another function that replaces pattern with <i>some content</i> is called
        function checkForItalic(text) {
            var formattedText = text;
            var formatStartPosition = -1;
            var formatEndPosition = -1;
            
            for (var i = 0; i < formattedText.length; i++) {
                if (formattedText[i] === '*' && formatStartPosition === -1) {
                    formatStartPosition = i;
                    i += 1;     // skip *
                }
                if (formattedText[i] === '*' && formatStartPosition !== -1 && formatEndPosition === -1 && i !== formatStartPosition + 1) {
                    formatEndPosition = i;
                    i += 1;     // skip *
                    formattedText = replaceItalic(formattedText, formatStartPosition, formatEndPosition);    // call function that replaces special pattern
                    formatStartPosition = -1;
                    formatEndPosition = -1;
                }
            }            
            return formattedText;
        };

        // function that replaces one instance of *some content* with <i>some content</i>
        // startPosition and endPosition are positions in an input text where * start and end
        function replaceItalic(text, startPosition, endPosition) {
            var formattedText = text;

            formattedText = formattedText.substr(0, startPosition) + "<i>" + formattedText.substr(startPosition + 1, endPosition - startPosition - 1) +
            "</i>" + formattedText.substr(endPosition + 1, text.length - endPosition + 1);

            return formattedText;
        };

        // function that checks input string for all instances of #some content# patterns
        // for each found instance, another function that replaces pattern with <#>some content</#> is called
        function checkForCode(text) {
            var formattedText = text;
            var formatStartPosition = -1;
            var formatEndPosition = -1;
            
            for (var i = 0; i < formattedText.length; i++) {
                if (formattedText[i] === '#' && formatStartPosition === -1) {
                    formatStartPosition = i;
                    i += 1;     // skip #
                }
                if (formattedText[i] === '#' && formatStartPosition !== -1 && formatEndPosition === -1 && i !== formatStartPosition + 1) {
                    formatEndPosition = i;
                    i += 1;     // skip #
                    formattedText = replaceCode(formattedText, formatStartPosition, formatEndPosition);
                    formatStartPosition = -1;
                    formatEndPosition = -1;
                }
            }            
            return formattedText;
        };

        // function that replaces one instance of #some content# with <code>some content</code>
        // startPosition and endPosition are positions in an input text where # start and end
        function replaceCode(text, startPosition, endPosition) {
            var formattedText = text;

            formattedText = formattedText.substr(0, startPosition) + "<code>" + formattedText.substr(startPosition + 1, endPosition - startPosition - 1) +
            "</code>" + formattedText.substr(endPosition + 1, text.length - endPosition + 1);

            return formattedText;
        };
    }
})();
(function () {
    'use strict';

    angular.module('in2.playground')
        .controller("in2PadController", PadCtrl);
        
    PadCtrl.$inject = [];

    function PadCtrl(pad) {
        var my = this;

        my.text = "testing";
    }
})();
(function () {
    'use strict';

    angular.module('in2.playground')
        .filter('in2Pad', Pad);

    Pad.$inject = [];

    // in2Pad is a filter that applies padding to an input string based on two arguments:
    // - Minimum length to pad to (mandatory)
    // - Padding character (optional, defaults to '0')
    // filter adds padding characters to the start of the string until the string has size of at least Minimum length argument number
    function Pad() {
        return pad;

        // function that makes sure all input agruments are defined correctly, and then proceeds to call function that adds character padding
        function pad(inputText, minimumPaddedTextLength, paddingCharacter) {
            var paddedText = inputText;
            var minimumLength = minimumPaddedTextLength;
            var padCharacter = "0";

            if (typeof minimumLength === 'undefined')  // check if padding character is defined
            {
                throw 'Invalid input - padLength must be defined!';
            }

            if (typeof paddingCharacter !== 'undefined')  // check if padding character is defined
            {
                padCharacter = paddingCharacter; // set padding character to input argument, or default it to '0' if agrument is undefined
            }

            if (!angular.isString(padCharacter) || padCharacter.length !== 1) { // check for correct input for padding character
                throw 'Invalid input - \'' + padCharacter + '\' is not a single character';  // throw exception if padding character is not a single character
            }

            paddedText = applyPadding(paddedText, minimumLength, padCharacter); // call function for character padding

            return paddedText;
        };

        // function that adds padding characters at the beginning of the input string until string reaches minimum length
        function applyPadding(inputText, minimumLength, paddingCharacter) {
            var paddedText = inputText;
            var paddedTextLength = paddedText.length;

            if (paddedText.length >= minimumLength)
                return paddedText;  //  if string is already longer than minimum length, return unchanged string
            else {
                for (var i = 0; i < minimumLength - paddedTextLength; i++) {
                    paddedText = paddingCharacter + paddedText;  //  add a single character to the start of the string, repeating this until string reaches minimum length
                };
                return paddedText;  // return padded string
            }
        };
    };
})();
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
/**
* @author Luka Skukan
* @version 0.1.0
*/
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
/**
* @author Luka Skukan
* @version 0.1.0
*/
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
    * @return - Given string, only with words transformed to a titlecase format
    */
    return function(value, notCapitalisedList) {
      var words = value.split(' ');
      var processed = []; //A list that will be filled with processed words

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