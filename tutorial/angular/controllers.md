# Controllers

Angular controllers are used to augment angular by providing scoping and serving as isolated containers of values and functionalities. The entire application has access to the application root scope, but controllers can be used to create child scopes, forming a tree-like structure of scopes. A child scope and all of its values are only available in the HTML element the scope is attached to and its child elements and scopes. Attaching the controller to the element is done by using ngController directive.

Let's see how this works in practice. First, we need to create a controller. There are several ways to do this, and we will show you 3 of them. We will assume that `Tutorial` module is already defined. If it isn’t, this can be done with:

```javascript
angular.module('tutorial', []);
```

### Official syntax

The first way to create the controller is by using the "official" syntax seen in the official Angular tutorial:

```javascript
1	angular.module('tutorial')
2 		.controller('tutorialController1', ['$scope', function ($scope) {
3 			$scope.hello = "Hello, I'm talking from the inside of tutorial controller 1";
4 	} ]);
```

This can look a bit confusing at first, so let's break it down a little and explain what is going on.
In line 1, the module `tutorial` is selected as a source on which a new controller will be added (note that it is a module *getter*, not a module *setter*).
Line 2 has several things happening at once:

  -  `.controller()` method creates a new controller
  -  Its first parameter `tutorialController1` is the name of the controller
  -  The second parameter is a function with a list of its dependencies. As seen in a previous chapter, we can use elements defined elsewhere, but we need to inject them. Angular does this by name, so to preserve the name list for javascript minification, we need the list the names of the injected objects in the array. The last parameter in that array is the controller's constructor, which receives the injected values in the same orders that they are listed in as the preceding values of the arary.

Line 3 defines a new string variable named `hello` on its own scope. This variable, and any others defined inside the scope, is visible only inside the HTML element the controller `tutorialController1` is attached to and its children.

A controller is attached to the HTML element using ngController directive in the following way:

```html
<div ng-controller="tutorialController1">
	Trying to access child scope: {{ hello }}
</div>
```

This creates a div with a `tutorialController1` attached to it, which means that its child scope can be used inside the element. This enables us to access variable `hello` defined inside controller’s child scope and use it as a part of an Angular expression. After the HTML page is loaded and the angular expressions are compiled, we get the following:

```html
Trying to access child scope: Hello, I'm talking from the inside of tutorial controller 1
```

### Using named function and $scope

The second way to create the controller is functionally the same as the first one, but the syntax is much more readable and understandable. We break it into several parts to make it much clearer. It is done in the following way:

```javascript
angular.module('tutorial')
	.controller('tutorialController2', TutorialController2);

TutorialController2.$inject = ['$scope'];

function TutorialController2($scope) {
	$scope.hello = "Hello, I'm talking from the inside of tutorial controller 2";
};
```

The list of injected parameters is replaced by named function ` TutorialController2`. The list of injected parameters is used as an array attached to the `$inject` variable of the function `TutorialController2`. The constructor function now has a name and is written on its own. Creating the controller this way makes the code much easier to read. This controller behaves exactly the same as the `TutorialController1` in the first example.

### Using controllerAs syntax

The third and the best way to create controller is by using controllerAs syntax. Using the first two ways, the controller’s child scope is appended to the root scope and is accessed in the same way as root scope – by using its variable or function names as part of an Angular expressions. This way, it can be unclear to which scope the variable belongs to. By using controllerAs syntax, we can give each controller’s child scope a name, which can avoid a lot of possible reference issues. It is done like so:

```javascript
angular.module('tutorial')
	.controller('tutorialController3', TutorialController3);

TutorialController3.$inject = [];

function TutorialController3() {
	var my = this;
	my.hello = "Hello, I'm talking from the inside of tutorial controller 3";
};
```

Instead of injecting and appending to root scope, we can access controller’s scope via the keyword `this`. Capturing it in a variable is optional but it is a good way to keep the context of the child scope, as using keyword `this` changes context within function calls. When writing controller as this, we must use the controllerAs syntax when attaching the controller to an HTML element.

```html
<div ng-controller="tutorialController3 as ctrl3">
	Trying to access child scope: {{ ctrl3.hello }}
</div>
```

This way we attach a controller `tutorialController3` with a scope name `ctrl3` to the HTML div element. We can access the controller’s scope and its variables by using dotted notation, for example `ctrl3.hello` will access variable `hello` inside of `ctrl3` scope.

### Using multiple controllers

You can use multiple controllers, each with its own child scope, in your Angular application. This is an example of a simple HTML page that uses three previously created controllers:

```html
<!DOCTYPE html>

<html ng-app="tutorial">
    <head>
        <title>Tutorial - controller</title>       
        <script src="dev/js/angular.js"></script>
        <script src="TutorialExamples/TutorialController.js"></script>
    </head>

    <body>
       <div ng-controller="tutorialController1">
            Trying to access child scope: {{ hello }}
       </div>
       <div ng-controller="tutorialController2">
            Trying to access child scope: {{ hello }}
       </div>
        <div ng-controller="tutorialController3 as ctrl3">
            Trying to access child scope: {{ ctrl3.hello }}            
        </div>        
    </body>
</html>
```

Once loaded, the page looks like this:

```html
Trying to access child scope: Hello, I'm talking from the inside of tutorial controller 1
Trying to access child scope: Hello, I'm talking from the inside of tutorial controller 2
Trying to access child scope: Hello, I'm talking from the inside of tutorial controller 3
```

You can see that even though controllers 1 and 2 have the same variable inside the Angular expression, the result evaluates to different values because each controller has access only to its own child scope. Controller 3’s scope is named so it is much clearer to see which variable it should access. This is why using controllerAs syntax is recommended way of writing controllers.
This ends our brief overview of controllers. For more information, visit official [Angular documentation](https://docs.angularjs.org/guide/controller). Once you feel you understand the concept of controllers well enough, continue to the next step of our Angular course – [Factories](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/factories.md).
