# AngularJS Training Track Task - Filip Kontić

## Introduction

You are to implement a number of relatively simple elements in AngularJS, both to prove you've learned how to use the framework and to improve your grasp of it on real-world examples. In addition to the implementation itself, you must provide the following for each of the subtasks:

  - Basic documentation as comments in code
  - An adequate number of unit tests in a `.spec.js` file
  - An example of their usage (e.g. by expanding the index.html page)
  - A short description of the solution (1-2 paragraphs)

## Factory

You are to implement a factory called `parseISO`. It must produce a function that will take in an ISO datetime string and will return a date, if the string is valid. Make sure it works in older browsers, such as IE8. You may use external libraries. The valid formats are:

- yyyy-MM-dd (2015-03-22)
- yyyy-MM-ddThh:mm:ss (2015-03-22T12:30:00)
- yyyy-MM-ddThh:mm:ss(+| |-)zzzz (2015-03-22T12:30:00+0200 *or* 2015-03-22T12:30:00 0200)

If the format is valid, it must return a valid date, otherwise throw an appropriate and informative exception.

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

[`parseISO`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/parseISO/parseISO.factory.js) is a factory used for creating a function for parsing dates in ISO format. The function takes a single argument - date string in ISO format.

Parsing is implemented using a regular expressin which extracts parts from the date string. Using those parts we create a new Date object and modify it's time zone offset. It is worth noting that months in Date constructor are 0-based meaning we have to subtract 1 from our parsed month of the date string.

If the function parameter is not a string an exception with a message 'Invalid object, date string required.' is thrown. If the parameter is a string but in the wrong format an exception with a 'Invalid date format, ISO format required.' message is thrown.

## Filter

Implement a *rating filter*, `in2Rate`. It will take in a number a produce a star rating shown as full an empty stars. It can take in an optional parameter, the number of stars, which defaults to 5.

If the rating is less than 0 or greater than the maximum number of stars, raise an appropriate and informative exception.

Some examples:

```html
  {{ 3 | in2Rate }}
  {{ 3 | in2Rate:4 }}
```

Becomes:

&#9733; &#9733; &#9733; &#9734; &#9734;

&#9733; &#9733; &#9733; &#9734;

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

[`in2Rate`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Rate/in2Rate.filter.js) is a filter used for formatting ratings so that they are represented with full and empty stars. The filter takes two arguments: `rating` and `number of stars` (optional). If number of stars parameter is not defined 5 is used as the default value.

The implementation is simple - output a string with `rating` number of full stars and `number of stars` - `rating` number of empty stars.

If the input parameters are not numbers an appropriate exception is raised. If `rating` is greater than `number of stars` of if `number of stars` is less or equal to 0 an appropriate exception is also raised.

## Simple Directive

You will implement the `in2Terminal` element as an element directive. It should be a simple square element with a black background that should offer the user an input prompt and a list of previous commands, as a real terminal would look (roughly). It only has to take in user commands, reload the prompt and add the old message to the terminal listing of commands.

The prompt should begin with the like `user@machine$`, where the `user` and `machine` are input parameters to the directive, both of the type `@`. Their default values are also, respectively, *user* and *machine*.

It will be used as follows:

```html
<in2-terminal user="jack"></in2-terminal>
```

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

[`in2Terminal`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Terminal/in2Terminal.directive.js) is a directive used for creating a terminal-like element. It takes two optional parameters `user` and `machine`, representing username and machine name respectively.

The created element is made of an input field and a containter containing previously entered commands. The input field uses `ng-keypress` directive to call a controller function for adding commands to the command history. The command container uses `ng-repeat` directive for displaying commands from an array containing previously entered commands. It is worth noting that `track by $index` must be used, otherwise `ng-repeat` directive wont work properly if the array containing previously entered commands contains duplicates.

## Advanced Directive

Implement a simple slideshow functionality by writing the directive `in2-slide`, which represents a single slide, and `in2-slideshow`, which is a collection of slides. Each slide should have the title (`@`) parameter and should be *transcluded*. A set of slides should be wrapped in a slideshow, also a transcluded directive which takes no parameters, but controlls which slide is currently visible. The directives may **not** use `$broadcast` and `$on` functions for communication. Use some other method of communication, such as `require` or a shared factory/service.

Each slide should be formatted to show the title, the transcluded content as a body, and left and right arrows on the sides, if there exist a previous and next slide, respectively. If there is no previous slide, do not show the previous arrow, and the same goes for the next slide and the right arrow. By clicking on one of the arrows, the user navigates to the previous/next slide.

An example of using these directives:

```html
<in2-slideshow>
  <in2-slide title="Important Slideshow">
    <b>Author:</b> Me
  </in2-slide>
  <in2-slide title="Facts">
    Have some facts
  </in2-slide>
  <in2-slide title="Chart">
    Look at this chart: <img src="appropriate/source.jpeg" />
  </in2-slide>
</in2-slideshow>
```

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

[`in2Slideshow`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Slideshow/in2Slideshow.directive.js) and [`in2Slide`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Slideshow/in2Slide.directive.js) are directives used for ceating a slideshow element. `in2Slide` elements represent slides and must be placed inside a single `in2Slideshow` element.

Each `in2Slide` element is registered (in a link function) to [`in2SlideshowController`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Slideshow/in2Slideshow.controller.js) which then handles sliding. That controller stores `visibleSlide` variable which represents the currently visible slide. `in2Slideshow` also contains left and right arrows which, when clicked, trigger sliding left or right respectively. Sliding is implemented with controller functions `slideLeft` and `slideRight` which add and remove `ng-hide` class to appropriate slides upon execution.
