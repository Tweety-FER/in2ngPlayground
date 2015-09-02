# Factories

Angular factory is a component which generates a single object or function which can be used by any other component it is injected into. It is implemented as a singleton, which means it is instantiated only once per application. It uses factory function to generate an object or function which represents the factory to the rest of the application. 

### Factory that returns an object

Here is an example of a simple factory:

```javascript
angular.module('tutorial')
    .factory('dateTimeFactory', DateTimeFactory);

function DateTimeFactory() {
    var dateTime = {};

    dateTime.date = function () {
        return new Date().toDateString();
    }
    dateTime.time = function () {
        return new Date().toTimeString();
    }

    return dateTime;
};
```

Factory is created by using `factory()` method on the `tutorial` module. The first argument, `dateTimeFactory`, is the name of the factory, while the second one, `DateTimeFactory`, is the factory function. This function can take zero or more arguments and must return exactly one object or function. In this example, factory function doesn’t take any elements and returns an object `dateTime`. It is an object which contains two functions, `date()` and `time()`, which return current date and time respectively. In order to use it, factory has to be injected into some other component. Since it is not a part of a root scope, we can gain access to its factory function by injecting it into a controller. To do this, we will create a new controller and inject `dateTimeFactory` into it:

```javascript
angular.module('tutorial')
    .controller('dateTimeController', DateTimeController);

DateTimeController.$inject = ['dateTimeFactory'];

function DateTimeController(dateTimeFactory){
    var my = this;
    my.date = dateTimeFactory.date();
    my.time = dateTimeFactory.time();
};
```

Now we can access factory function and use its returned object. Since the returned object contains two functions, `date()` and `time()`, we can assign the return values of those functions to a controller’s child scope. This way we can access them from any element the controller is attached to, for example:

```html
<div ng-controller="dateTimeController as dtCtrl">
	<p>Current date is: {{ dtCtrl.date }}</p>
	<p>Current time is: {{ dtCtrl.time }}</p>
</div>
```

On page load, the Angular expressions will be evaluated correctly and display the current date and time. 

### Factory that returns a function

Factory can also return a function, like the following factory which calculates an area of a rectangle. It takes two arguments representing length of its sides and returns its area.

```javascript
angular.module('tutorial')
    .factory('rectangleAreaFactory', RectangleAreaFactory);

function RectangleAreaFactory() {
    var rectangleArea = function (sideA, sideB) {
        var area = sideA * sideB;
        return area;
    };

    return rectangleArea;
};
```

We can use it in a following controller:

```javascript
angular.module('tutorial')
    .controller('rectangleAreaController', RectangleAreaController);

RectangleAreaController.$inject = ['rectangleAreaFactory'];

function RectangleAreaController (rectangleAreaFactory) {
    var my = this;
    my.area = rectangleAreaFactory(4, 5);
};
```

Since factory returns a function, we use it as one. We need to give it lengths of rectangle’s sides as two arguments from which it will calculate rectangle’s area and return it. We can save this value into a variable, which can then be used inside the element the controller is attached to:

```html
<div ng-controller="dateTimeController as dtCtrl">
	<p>Area of rectangle with sides 4 and 5 is: {{ dtCtrl.area}}</p>
</div>
```

When the page loads, Angular expression evaluates correctly and displays the value of 20 in its place.
With this example we end our tutorial on factories. For more information about the subject, you can visit official Angular documentation on [services]( https://docs.angularjs.org/guide/services) and [providers]( https://docs.angularjs.org/guide/providers). When you feel ready to continue, check out the next step of our tutorial, where we’re talking about [filters]( https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/filters.md).
