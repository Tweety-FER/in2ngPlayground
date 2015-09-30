# AngularJS Training Track Task - Ankica

## Introduction

You are to implement a number of relatively simple elements in AngularJS, both to prove you've learned how to use the framework and to improve your grasp of it on real-world examples. In addition to the implementation itself, you must provide the following for each of the subtasks:

  - Basic documentation as comments in code
  - An adequate number of unit tests in a `.spec.js` file
  - An example of their usage (e.g. by expanding the index.html page)
  - A short description of the solution (1-2 paragraphs)

## Factory

Implement a factory called `metrics`. It should return an object with two methods - `kmToMiles` and `milesToKm`. Each should take a positive number and perform the calculation indicated by its title. If it is given a non-number, it should throw a descriptive exception. If it is given a negative number, it should throw a different, but equally descriptive (a 2% error margin is allowed) exception. Which particular instance of miles you use is up to you, just be consistent.

An example of usage:

```javascript
var kmToWalk = metrics.milesToKm(500);
var farAway = metrics.kmToMiles(40000);
var oneError = metrics.kmToMiles('String');
var otherError = metrics.milesToKm(-10);
```

As stated, include comments, unit tests, an example and provide a brief description below.

### Description:

*Include some documentation describing the directive here, in markdown*

## Filter

Implement a `reverse` filter. If given an array or string, it will reverse it. It should simply anything else it is passed. It has to work in all major browsers, including IE8.

An example:

```html
  {{ 'abba' | reverse}} is abba (helpful, I know)
  {{ 'reverse' | reverse }} is esrever
  {{ [1,2,3,4] | reverse }} is [4,3,2,1]
```

As stated, include comments, unit tests, an example and provide a brief description below.

### Description:

[`reverse`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/reverse/reverse.filter.js) is a filter used for reversing string and array values. The filter takes one argument, a `string` or an `array` and reverses its members.

The implementation outputs a variable of the same type as the inputed one, with all its elements in reverse order.

If the input parameteris not a `string` or an `array`, no reversing is done and the object is returned as it was before filtering.

## Simple Directive

Implement a `in2Loader` directive. It should have a single parameter (two-way binding) that is a boolean, called `state`. When `state` is true, the directive should be visible and active. When false, it should be hidden. When active, the directive should be display the text "Loading" and dots. It should start out with one dot, then add a second dot after some time (e.g. 0.5 seconds), then a third one after the same interval. After another interval, the dots disappear and the process restarts.

It will be used as follows:

```html
<in2-loader state="ctrl.loading"></in2-loader>
```

As stated, include comments, unit tests, an example and provide a brief description below.

### Description:

*Include some documentation describing the directive here, in markdown*

## Advanced Directive

Implement a `in2Table` directive that shows data and allows for sorting.

It has three parameters:
  - `items` [Array] - A list of objects, each representing a single item (row) in the table
  - `default` [*Optional*] [String] - A default value to show if an item in a column is null or undefined. Should default to "-"
  - `columns` [*Optional*] [Array] - An array of strings (column names). If it is defined, show these columns (or the default value if there is no value for that row). However, if this parameter is *not* defined, use the keys of the *first* object in the `items` array to determine the column names. If the `items` array is empty, throw an appropriate exception.

Clicking on a column should sort according to that column, in ascending order. It does not have to start sorted in any way.

An example of using these directives:

```html
<!-- ctrl.items = [{id : 1, name : 'Ankica', angularLevel : 'Advanced Super Expert'}, {id : 2, name : 'Lukica'}] -->
<!-- ctrl.columns = ['id', 'name', 'angularLevel'] -->

<in2-table items="ctrl.items" columns="ctrl.columns" default="Awful"></in2-table>
```

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

*Include some documentation describing the directive here, in markdown*
