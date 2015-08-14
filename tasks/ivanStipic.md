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

###Description:

[`in2Formatting`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Formatting/in2Formatting.service.js) is a factory with a single function - format. Format takes a string from the input and returns formatted string in which the special characters patterns are replaced by html tags in the following way:
	-  `**some content**` is replaced by `<b>some content</b>`
	-   `*some content*` is replaced by `<i>some content</i>`
	-	`#some content#` is replaced by `<code>some content</code>`

Format function consists of three methods, `checkForBold(text)`, `checkForItalic(text)` and `checkForCode(text)`, one for each special character pattern. Each method searches through input string's elements one-by-one until it finds a special character it is looking for(**, * or #). Once found, the method saves it's position in a string to a variable named formatStartPosition. It then continues the search for second special character. If it isn't found, function finishes and returns unchanged string. If second special character is found, the method saves it's position in a string to a variable named formatEndPosition. Since a pair of special characters have been found, they are replaced by matching HTML tags.

This is done with `replaceBold/Italic/Code` methods which replace a first pair of matching special characters with HTML tags. After first pair of matching special characters has been replaced, `formatStartPosition` and `formatEndPosition` variables are reset to -1. This is done so that the search can continue from the position at which the last special character was replaced. The process repeats until the search through the entire input string has finished three times, once for each special character pattern.

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

Description:

[`in2Pad`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Pad/in2Pad.filter.js) is a filter which applies padding function on a string based on two input parameters:

	- `minimumPaddedTextLength` (mandatory)
    - `paddingCharacter` (optional, defaults to '0')

Filter adds padding characters to the beginning of the input string until string length reaches minumum length.

Function `pad()` makes sure all input arguments are correctly defined in the following way:
	- If `minimumPaddedTextLength` isn't defined, it will throw an exception stating that it cannot be undefined
	- If `paddingCharacter` isn't defined, it's value is set to default value of '0'.
	- If `paddingCharacter` is set to any type other than string, it will throw an exception stating that it must be a single character string.
	- If `paddingCharacter` is a string with length greater than 1, it will throw an exception stating that padding character must be a single character.

After making sure all input arguments are correct, it will call `applyPadding()` function which will apply padding based on input arguments. If the input string is already longer than minimum length, it will be returned unchanged. Otherwise padding characters will be added to the beginning of the input string until it reaches minimum length, at which point it will be returned.

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

###Description:

[`in2BuisnessCard`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2BusinessCard/in2BusinessCard.directive.js) is a directive that implements a virtual buisness card. It represents a real buisness card and has two sides. The front side has company's logo, company's name, and employee's name and position. The back side has larger version of logo and motivational message. Those variables are binded to the directive's scope in the following way:
	- `company`, `fullName`, `position` and `image` using simple binding
	- `frontSide` using two-way binding; it represents the side the card is first turned on, default: true

The directive is binded to the controller [`in2BusinessCardController`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2BusinessCard/in2BusinessCard.controller.js).
The card's appearance and behaviour is defined with html file - [`in2BuisnessCard.html`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2BusinessCard/in2BuisnessCard.html).
The card can be flipped by clicking on it, which is defined with `ng-click` directive inside html template. It takes `frontSide` attribute from controller and changes it's value on every click. That values are then used in `ng-switch` directive which selects front or back side of the card, depending on the switched attribute value.

The directive is used by using it's name as a html element in the following way:

'''html
<in2-business-card company="IN2" full-name="Ivan Rep" position="Senior Minion", image="https://pbs.twimg.com/profile_images/557113121748160513/opy8TCJe.png"></in2-business-card>
'''

Upon loading the webpage, `<in2-business-card>` is replaced with the [`in2BuisnessCard.html`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2BusinessCard/in2BuisnessCard.html) defined in the template as a new element.

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

###Description:

[`in2Accordion`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Accordion/in2Accordion.directive.js) is a transcluded directive which also contains nested child transcluded directives called [`in2AccordionItem`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Accordion/in2AccordionItem.directive.js).
It can be used in the following way:
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
It uses controller [`in2AccordionController`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Accordion/in2Accordion.controller.js) to store and return transcluded accorion item elements. It gets it's appearance from template [`in2Accordion.template.html`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Accordion/in2Accordion.template.html).

Accordion items are defined by [`in2AccordionItem`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Accordion/in2AccordionItem.directive.js) directive, which has requirement for in2Accordion parent element. It is also a transcluded directive which contains it's text as a transcluded element. It is linked to parent's controller so it could have access to array of all items. This is required so it's controller can open selected item, while closing all others at the same time. All items are initially closed, and clicking on one of them opens it, while closing all others in the process. On first click on any item, its controller initializes its `accordionItems` array with data from all the items. This enables opening and closing of any array from any item's instance of [`in2AccordionItemController`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/src/in2Accordion/in2AccordionItem.controller.js).