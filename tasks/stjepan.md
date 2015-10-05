# AngularJS Training Track Task - Stjepan

## Introduction

You are to implement a number of relatively simple elements in AngularJS, both to prove you've learned how to use the framework and to improve your grasp of it on real-world examples. In addition to the implementation itself, you must provide the following for each of the subtasks:

  - Basic documentation as comments in code
  - An adequate number of unit tests in a `.spec.js` file
  - An example of their usage (e.g. by expanding the index.html page)
  - A short description of the solution (1-2 paragraphs)

## Factory

Implement a factory called `shuffle`. It should return a function that takes an an array or string and returns it shuffled (pseudo-randomly, of course). You may use external libraries if you wish. Make sure it works in older browsers, such as IE8.

An example of usage:

```javascript
var arr = [1,2,3,4,5];
var str = 'abcde';
var shuffledArr = shuffle(arr);
var shuffledStr = shuffle(str);

var causesAnError = shuffle({example : 'fails'});
```

As stated, include comments, unit tests, an example and provide a brief description below.

### Description:

`shuffle` is a factory used to randomly shuffle given array or a string. The function takes a single argument, array or a string, which we wish to shuffle.
Shuffle is implemented using Math.Random function which gives a random value between zero and (length-1) of given array or string. We shuffle one element at a time and we go through our array or string element by element and switch current element with element at index which our random function gave us.
Depending if our argument is array or string different function is called which switches places of two elements.
If argument passed to factory isn't string or array, factory returns passed argument unchanged.

## Filter

Implement a `flatten` filter. If given an array it will flatten its structure. That means that arrays within the array will have their elements inserted into the original array instead. This process is recursive. If it is given an argument that is *not* an array, it should simply return it unchanged.

An example:

```html
  {{ [1, [2, 3], [[4], [5,6]]] | flatten }} is [1,2,3,4,5,6]
```

As stated, include comments, unit tests, an example and provide a brief description below.

### Description:

`flatten` is a filter which takes an array and if the array has array as an element it takes that array and returns its elements as elements of original array. Which means, an array with multiple level depth will become an array with one level depth. 

## Simple Directive

Implement an `img` directive. It will simply be an extension of the normal `img` HTML element. It should add the following functionality:

When the `src` or `ng-src` resource point towards an unavailable resource, display a default image instead (of your choosing). If the image is available, do not change the default functionality.

It will be used as follows:

```html
This shows a default image:

<img ng-src="broken.png"/>
```

As stated, include comments, unit tests, an example and provide a brief description below.

### Description:

`in2Img` is a directive which extends the normal html img element. It adds a new functionalitiy which in case of unavailable resource sets a default image instead. If the image is loaded correctly, the default functionality is the same.

## Advanced Directive

Implement a simple menu. You have to write the `in2Menu` and `in2MenuItem` directives. The menu should simply transclude its content. The item directive should have an optional `title` property that displays a bold title at the top of the menu item, and should also be transcluded for its basic textual content. The orientation of the menu (horizontal or vertical) does not matter, choose one. When an item is clicked on, it becomes **active** and if there is another active item it stops being active at this point. Emphasize the active item in some way. The directives may **not** use `$broadcast` and `$on` functions for communication. Use some other method of communication, such as `require` or a shared factory/service.

An example of using these directives:

```html
<in2-menu>
  <in2-menu-item title="Home">
    Go Home
  </in2-menu-item>
  <in2-menu-item>
    About
  </in2-menu-item>
  <in2-menu-item >
    Donate Kidney
  </in2-menu-item>
</in2-menu>
```

As stated, include comments, unit tests, an example and provide a brief description below.

### Description:

`in2Menu` and `in2MenuItem` are directives used for creating a navigaton menu. Each in2MenuItem element represents a menu item and multiple in2MenuItems can be placed inside a single in2Menu item.
Each in2MenuItem is registered to in2MenuController which handles which in2MenuItem is active. Clicking on a in2MenuItem calls a setActive function which adds an active class to that element and removes it from other active in2MenuItem element.
