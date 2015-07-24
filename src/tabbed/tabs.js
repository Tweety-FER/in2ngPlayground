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