# AngularJS Training Track Task - Filip

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
- yyyy-MM-ddThh:mm:ss(+| |-)zzzz (2015-03-22T12:30:00+0200, 2015-03-22T12:30:00 0200

If the format is valid, it must return a valid date, otherwise throw an appropriate and informative exception.

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

*add_here*

## Filter

Implement a *rating filter*, `in2Rate`. It will take in a number a produce a star rating shown as full an empty stars. It can take in an optional parameter, the number of stars, which defaults to 5.

If the rating is less than 0 or greater than the maximum number of stars, raise an appropriate and informative exception.

Some examples:

```html
  {{ 3 | in2Rate }}
  {{ 3 | in2Rate:4 }}
```

Becomes:

<div>
&#9733; &#9733; &#9733; &#9734; &#9734;
&#9733; &#9733; &#9733; &#9734;
</div>

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

*add_here*

## Simple Directive

You will implement the `in2Terminal` element as an element directive. It should be a simple square element with a black background that should offer the user an input prompt and a list of previous commands, as a real terminal would look (roughly). It only has to take in user commands, reload the prompt and add the old message to the terminal listing of commands.

The prompt should begin with the like `user@machine$`, where the `user` and `machine` are input parameters to the directive, both of the type `@`. Their default values are also, respectively, *user* and *machine*.

It will be used as follows:

```html
<in2-terminal user="jack"></in2-terminal>
```

As stated, include comments, unit tests, an example and provide a brief description below.

###Description:

*add_here*

## Advanced Directive

Implement a simple slideshow functionality by writing the directive `in2-slide`, which represents a single slide, and `in2-slideshow`, which is a collection of slides. Each slide should have the title (`@`) parameter and should be *transcluded*. A set of slides should be wrapped in a slideshow, also a transcluded directive which takes no parameters, but controlls which slide is currently visible. The directives may **not** use `$broadcast` and `$on` functions for communication. Each slide should be formatted to show the title, the transcluded content as a body, and left and right arrows on the sides, if there exist a previous and next slide, respectively. If there is no previous slide, do not show the previous arrow, and the same goes for the next slide and the right arrow. By clicking on one of the arrows, the user navigates to the previous/next slide.

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

*add_here*
