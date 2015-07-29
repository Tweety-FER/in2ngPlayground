# Modules &amp; Bootstrapping

We've seen the HTML, which we can consider the *view* of our application, in the [Introduction](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/intro.md). However, we need also need to connect our AngularJS-based JavaScript code and denote where in the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) our application lives. This is done quite simply, using Angular's `ng-app` HTML attribute, like so:

``` html
<html lang="en">
  <head>
    <script type="text/javascript" src="js/angular.js"></script>
    <script type="text/javascript" src="js/tutorial.js"></script>
    ...
  </head>
  <body ng-app="tutorial">
    <p>
      Welcome! Did you know that {{1}} + {{1}} = {{1 + 1}} ?!
    </p>
  </body>
</html>
```

This is not the only way, but it's the one most often used in practice. For more, you can see [here](https://docs.angularjs.org/guide/bootstrap). Now, you're probably wondering what the `tutorial` value for the `ng-app` is referring to. The answer is found in the `js/tutorial.js` file we are including - it's what's called a *module*. A module encapsulates some code and can be likened to namespaces or packages in other programming languages. Let us see what this JavaScript file contains:

``` javascript
/*
* We call angular to CREATE a module for us. The second argument
* a list of dependencies which we'll talk about later. In short,
* when we call angular.module with two arguments, we're CREATING
* a module
*/
angular.module('tutorial', []);


/*
* One argument - we're FETCHING the module by name
* We can do things with it later
*/
angular.module('tutorial');
```

This will allow our code to function. Now, note the empty array of *dependencies*. By specifying dependencies we get to *import* other modules into the current module and can *inject* code contained within other modules into our own module. Let's take a look at a simple example. Note that it contains *factories*, which we will discuss at a later time.

```javascript
// Ye olde module with no dependencies
angular.module('tutorial.one', []) //New module, no dependencies
       .factory('getOne', getOneFactory); //We declare a new factory. More on that later.

getOneFactory.$inject = []; //This function does not depend on other functions

// Returns a function that takes no arguments and return a 1
function getOneFactory() {
  return function() {
    return 1;
  };
}
       
// A module WITH dependencies (or a single dependency). We use some code from tutorial.one
angular.module('tutorial.two', ['tutorial.one'])
       .factory('getTwo', getTwoFactory);
       
/*
* getTwoFactory will request the getOne factory, which Angular happily resolves 
* with dependency injection - it just needs the name and access to the module!
*/
getTwoFactory.$inject = ['getOne'];

// We could also use another variable name to refer to getOne
function getTwoFactory(getOne) {
  return function() {
    return getOne() + getOne(); //We use the injected function from tutorial.one
  }
}
```

Hopefully that was enough to give you an idea of how modules work (see [here](https://docs.angularjs.org/guide/module) for more) and also features dependency injection. It is an important part of AngularJS - it will fetch resources *by name* and simply make them available in the code that requested them (assuming the current module has access to the module containing the code). Read more about dependency injection in AngularJS [here](https://docs.angularjs.org/guide/concepts#di). After you've played around with it, we can finally delve deeper into JavaScript and start coding our own AngularJS components, starting with [Controllers](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/controllers.md).