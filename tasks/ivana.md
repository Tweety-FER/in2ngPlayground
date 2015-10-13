# AngularJS Training Track Task *Lite* - Ivana

## Introduction

You are to implement a number of relatively simple elements in AngularJS, both to prove you've learned how to use the framework and to improve your grasp of it on real-world examples. In addition to the implementation itself, you must provide the following for each of the subtasks:

  - Basic documentation as comments in code
  - An example of their usage (e.g. by expanding the index.html page)
  - A short description of the solution (1-2 paragraphs)

## Factory

Implement a factory called `rpn`. It takes an expression in reverse polish (postfix) notation and evaluates it. It takes a string consisting of positive integers and operators `+`, `-`, `*`, `/`, `%`. These expressions are separated by one or more units of whitespace (spaces, tabs, newlines, ...). The return value should be an intereger, of type `Number`. Invalid input should throw an exception. You do *not* have to write unit tests. **Note**: The division is integer division, rounded down!

Some examples:
```javascript
rpn('3 5 2 + -') === 6
rpn('7 3 / 2 +') === 4
rpn('5.5 2 -') //Throw appropriate exception, e.g. "Not integer"
rpn('5 5 5 +') //Throw appropriate expcetion, e.g. "Invalid expression"
rpn('?') //Throw appropri-, well, you get the gist of it
```

### Description:
'rpn' is a factory used to implement an evaluation of expression given in a reverse notation. Its function takes a single parameter, an input string. First, an input string is classified into two distinctive arrays, depending on whether they are positive integers or mathematical operators. The informative execeptions are thrown for expressions containing elements that can not be classified. In the next step, the function iterates through the corresponding arrays, pulling one operator and one number array element in each step. These two elements are merged in order to build an input string for a function 'eval' which
carries out the final evaluation.

Finally, using 'eval'
## Filter

Implement a `cypher` filter. It takes a string and applies a Caesar cypher to it. It rotates ONLY characters of the English alphabet and preserves all other characters. It can optionally take a second parameter - a number of slots to rotate by. A positive number means rotation to the right and a negative one a rotation to the left. The default should be `1`. If the second parameter is invalid, it should throw an appropriate exception.

An example:

```html
{{ 'abba' | cypher}} is bccb
{{ 'abba' | cypher:-1 }} is zaaz
{{ 'abba' | cyper:2 }} is cddc
{{ 'abba' | cypher:'wut' }} is cause for error
```



### Description:

A 'cypher' function that implements a given filter takes two parameters, of which the first one represents an input string, while the second one is optional and represents a shift number value. Informative exceptions are thrown for invalid data types for both parameters. Function 'caesar' iterates through the input string, rotating each input English alphabet character by shift value, while preserving all other input characters. The rotation of each character is carried out by ASCII decoding of sum of the correspoding ASCII code and shift value.
If the result of the addition falls outside the ASCII areas of the English alphabet characters, it is properly adjusted by adding/subtracting length of observed area and the overflow value.

## Simple Directive

Implement a directive called `in2Subliminal`. This directive displays a text in regular intervals of duration *t<sub>hide</sub>*, and keeps it displayed for *t<sub>show</sub>*, covering the entire screen, before hiding it again for *t<sub>hide</sub>*. This should go on in a loop. You may use `$interval` to achieve this behaviour.

It should take these arguments:
  - **text** [String] - The text to display
  - **hideTime** [*Optional*] [Integer] - How long does it remain hidden between two showings, in ms. Defaults to 3 seconds.
  - **showTime** [*Optional*] [Integer] - How long does it remain visible once shown, in ms. Defaults to 0.5 seconds.

An example of usage:

```html
<in2-subliminal text="Buy our stuff" hide-time="5000" show-time="750"></in2-subliminal>
```



### Description:

A custom directive 'in2Subliminal' invokes a built-in directive 'ng-hide' extended with an additional functionality: an attribute that controlls the visibility of an element is periodically changed. If the hide and show periods are not defined by user, the controller assigned to directive 'in2Subliminal' initialize their values. The change of the text visibility state is also implemented inside the controller function. A directive has an isolated scope that uses 'controllerAs' which means that its properties are directly bound to the controller.


