# AngularJS Training Track Task - Ivan Stipić

## Introduction

You are to implement a number of relatively simple elements in AngularJS, both to prove you've learned how to use the framework and to improve your grasp of it on real-world examples. In addition to the implementation itself, you must provide the following for each of the subtasks:

  - Basic documentation as comments in code
  - An adequate number of unit tests in a `.spec.js` file
  - An example of their usage (e.g. by expanding the index.html page)
  - A short description of the solution (1-2 paragraphs)
  
## Factory

You are to implement a factory called `in2Formatting`. It must produce a function that will take in a string and will return the string, processed as follows:

  - All instances of `**some content**` will be replaced with `<b>some content</b>`
  - All instances of `*some content*` will be replaced with `<em>some content</em>`
  - All instances of `#some content#` will be replaced with `<code>some content</code>`
  
It should work as follows (module names may vary):

```javascript
angular.module('test', ['in2.tutorial.format'])
       .controller('testCtrl', Test);
       
Test.$inject = ['in2Formatting'];

function Test(format) {
  this.text = '***testing***';
  
  console.log(format(this.text)); //Outputs <b><i>testing</i></b> or <i><b>testing</b></i>
}

```
  
As stated, include comments, unit tests, an example and provide a brief description below.

*insert_description_here*

## Filter

Implement a *padding filter*, `in2Pad`. It will process a given string according to two arguments:

  - Minimum length to pad to (mandatory)
  - Padding character (optional, defaults to '0')
  
If the padding character is not a string of length 1, raise a descriptive exception.
  
Some examples:

```html
  {{ '12' | in2Pad:4 }} becomes 0012
  {{ '123' | in2Pad:3 }} becomes 123
  {{ '1234' | in2Pad:3 }} becomes 1234
  {{ 'yz' | in2Pad:4:'x' }} becomes xxyz
```

As stated, include comments, unit tests, an example and provide a brief description below.

*insert_description_here*

## Simple Directive

You will implement the `in2BusinessCard` element directive, which implements a virtual business card. It should emulate a real business card in appearance. The front side will show a small version of the logo and some basic data: the company name and employee name and position. The back side will display a larger version of the logo and a motivational message of your choosing. It will have two sides and must be flippable (for example, by clicking on it; hint: ng-click, ng-switch). It *must* use controllerAs syntax and make no explicit use of the `$scope` variable. It will take the following arguments:

  - `company`, a string representing the company name, it will use simple binding (@)
  - `fullName`, a string representing the employee's name, simple binding (@)
  - `position`, a string that represents the employee's position in the company, simple binding (@)
  - `image`, the image URL as a string, uses simple binding (@)
  - `frontSide`, a boolean. If it's true, it starts with the front side displayed, otherwise it's the back side. Default to `true`. It uses two-way binding (=)
  
It will be used as follows:

```html
<in2-business-card company="IN2" full-name="Ivan Rep" position="Senior Minion", image="https://pbs.twimg.com/profile_images/557113121748160513/opy8TCJe.png"></in2-business-card>
```
  
As stated, include comments, unit tests, an example and provide a brief description below.

*insert_description_here*

## Advanced Directive

Implement an accordion directive called `in2Accordion`. It should be a *transcluded* directive which also contains nested child transcluded directives called `in2AccordionItem`. It should function similarly to the basic accordion in [this example](http://semantic-ui.com/modules/accordion.html). Both directives must use controllerAs syntax, not the `$scope`, where applicable. They may **not** use `$broadcast` and `$on` functions for communication. If they need to communicate, use some other mean of communication (e.g. `require` in the directive declaration or a shared service). Other implementation details are up to you. It should be used like so (you may add other parameters if you wish):

```html
<in2-accordion>
  <in2-accordion-item title="What are directives?">
    I have no idea
  </in2-accordion-item>
  <in2-accordion-item title="Why use them?">
    That's what I was told to do
  </in2-accordion-item>
  <in2-accordion-item title="How do I write one?">
    Just mash on the keyboard until something happens
  </in2-accordion-item>
</in2-accordion>
```

As stated, include comments, unit tests, an example and provide a brief description below.

*insert_description_here*