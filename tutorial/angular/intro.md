# AngularJS - An Introduction

Let us slowly ease ourselves into the world of AngularJS. As you can guess from the "JS" part, AngularJS is a JavaScript framework. More specifically, it a so-called [MV*](http://www.sitepoint.com/anatomy-javascript-mv-framework/) (read as: "MV-whatever") framework, a concept similar to the MVC (Model-View-Controller) pattern common in the back-end. To start writing AngularJS code, we simply need to include the JavaScript source file into our HTML source, like we would do with jQuery or some other library, and *bootstrap* our application (we'll talk about that in the next chapter).

Why would we use AngularJS at all? After all, there are already a plenty of good front-end tools out there? Well, in short, AngularJS is used to write a *whole application* in the front-end (note that there are others frameworks that do this). All one needs from the back-end is an API which talks in JSON - everything else happens in the front-end. Furthermore, AngularJS is very declarative. Unlike with jQuery, where we use selectors to find elements and then execute actions on them, AngularJS takes on a different approach. An AngularJS programmer uses a sort of an expanded HTML to add functionality to it. As a simple example, one could use AngularJS to populate a table:

``` html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <!-- One row is added for EVERY element in the a list referenced by the people variable (more on where the variable is later) -->
  <tr ng-repeat="person in people">
    <td>{{person.name}}</td>
    <td>{{person.age}}</td>
  </tr>
</table>
```

Due to this, AngularJS is pretty readable even to non-programmers! A pretty large part of the magic happens right here, in the markup. However, some JavaScript *is* required and we'll see what and where later. If you want to read more, check out the [AngularJS site](https://angularjs.org/). Otherwise, let's talk about [bootstrapping and modules](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/bootstrapping.md).