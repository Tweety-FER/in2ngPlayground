# Filters

Angular filters are used for formatting the display of expression values.
They don't change the underlying data, only the way it is displayed.
They are applied to expressions by using the pipe `|` simbol after the expression, like this:

```html
{{ expression | filterName }}
```

Filters can also have optional arguments. They are written after the filter name, separated by colon `:` symbol, like this

```html
{{ expression | filterName : argument1 : argument 2 : argument 3 }}
```

## Angular built-in filters

Angular has a number of built-in filters which can be used in any expression without the need to attach any other components.
We will look at some examples of their usage, but first lets create a controller with variables we will use to test them:

```javascript
angular.module('tutorial')
    .controller('tutorialFilterController', TutorialFilterController);

TutorialFilterController.$inject = [];

function TutorialFilterController() {
    var my = this;

    my.firstName = 'AleXaNdER';
    my.lastName = 'smITh';
    my.balance = '123.456789';
    my.date = new Date(2015, 1, 14);
    my.key = 'A45B_H7TS_HLI8_1KGD';
};
```

We will be performing tests on strings `firstName`, `lastName`, and `key`, number `balance`, and date `date`.
The original display values, before using filters on them, can be displayed like this;

```html
<div ng-controller="tutorialFilterController as filterCtrl">	
	<p>Original first name: {{ filterCtrl.firstName }}</p>
	<p>Original last name: {{ filterCtrl.lastName }}</p>
	<p>Original balance: {{ filterCtrl.balance }}</p>
	<p>Original date: {{ filterCtrl.date }}</p>
	<p>Original key: {{ filterCtrl.key }}</p>
</div>
```

On page load this evaluates to:

```html
Original first name: AleXaNdER
Original last name: smITh
Original balance: 123.456789
Original date: "2015-02-13T23:00:00.000Z"
Original key: A45B_H7TS_HLI8_1KGD
```
Use this listing for comparison between the display of original values, and the ones displayed using different filters.

### Uppercase and lowercase filter

We can use filters to convert all string characters to uppercase or lowercase letters. This can be done like this:

```html
<div ng-controller="tutorialFilterController as filterCtrl">	
    <p>First name formatted with uppercase filter: {{ filterCtrl.firstName | uppercase }}</p>
    <p>First name formatted with lowercase filter: {{ filterCtrl.firstName | lowercase }}</p>
	<p>Original first name: {{ filterCtrl.firstName }}</p>
    <p>Last name formatted with uppercase filter: {{ filterCtrl.lastName | uppercase }}</p>
    <p>Last name formatted with lowercase filter: {{ filterCtrl.lastName | lowercase }}</p>
    <p>Key formatted with uppercase filter: {{ filterCtrl.key | lowercase }}</p>  
</div>
```

Which evaluates to:

```html
First name formatted with uppercase filter: ALEXANDER
First name formatted with lowercase filter: alexander
Original first name: AleXaNdER
Last name formatted with uppercase filter: SMITH
Last name formatted with lowercase filter: smith
Key formatted with uppercase filter: a45b_h7ts_hli8_1kgd
```

As you can see, using different filters on the same variable only affects the way it is displayed and not the variable's actual value.
Although we displayed first name in both uppercase and lowercase, displaying the original value after shows that it is still unchanged.

### Number filter

Angular has a number filter that can be used to limit the number of digits after decimal point.
It can be used like this:

```html
<p>Balance formatted with number filter: {{ filterCtrl.balance | number}}</p>
<p>Balance formatted with number filter with argument 2: {{ filterCtrl.balance | number : 2}}</p>
<p>Balance formatted with number filter with argument 1: {{ filterCtrl.balance | number : 1}}</p>
```

Which evaluates to:

```html
Balance formatted with number filter: 123.457
Balance formatted with number filter with argument 2: 123.46
Balance formatted with number filter with argument 1: 123.5
```

Number filter uses optional argument which determines the number of digits after decimal points it displays.
If not used, it defaults to 3.

### Date filter

Angular has a date filter capable of displaying date in a lot of different formats.
Here are some examples of its usage:

```html
<p>Date formatted with date filter without arguments: {{ filterCtrl.date | date}}</p>
<p>Date formatted with date filter as short date: {{ filterCtrl.date | date : 'shortDate'}}</p>
<p>Date formatted with date filter as medium date: {{ filterCtrl.date | date : 'mediumDate'}}</p>
<p>Date formatted with date filter as long date: {{ filterCtrl.date | date : 'longDate'}}</p>
<p>Date formatted with date filter displaying only day: {{ filterCtrl.date | date : 'dd'}}</p>
<p>Date formatted with date filter displaying only month: {{ filterCtrl.date | date : 'MMMM'}}</p>
<p>Date formatted with date filter displaying only year: {{ filterCtrl.date | date : 'yyyy'}}</p>
<p>Date formatted with date filter displaying a month and a year: {{ filterCtrl.date | date : 'MMM yyyy'}}</p>
<p>Date formatted with date filter displaying a year, month, and day: {{ filterCtrl.date | date : 'yyyy-MM-dd'}}</p>
```

Which evaluates to:

```html
Date formatted with date filter without arguments: Feb 14, 2015
Date formatted with date filter as short date: 2/14/15
Date formatted with date filter as medium date: Feb 14, 2015
Date formatted with date filter as long date: February 14, 2015
Date formatted with date filter displaying only day: 14
Date formatted with date filter displaying only month: February
Date formatted with date filter displaying only year: 2015
Date formatted with date filter displaying a month and a year: Feb 2015
Date formatted with date filter displaying a year, month, and day: 2015-02-14
```

These were just some examples of date filter in action. It is capable of displaying date in a lot of different and complex ways.
For more information about date filter and its formatting possibilities, visit official [Angular documentation](https://docs.angularjs.org/api/ng/filter/date) on the subject.

### Chaining filters

Angular filters can be written as a chain in which the output of the first filter serves as an input into second one and so on.
This can be achieved by writing multiple filters in an expression, dividing each one with pipe `|` symbol:

```html
{{ expression | filter1 | filter2 | filter3 }}
```html

So in this case, expression is used as an input to filter1, its output is used as input to filter2 and so on.
Here is an example of an expression on date that uses a date filter to extract a month from it, followed by uppercase filter which displays it as in uppercase letters.

```html
<p>Date formatted with chain of date filter displaying only month and uppercase filter: {{ filterCtrl.date | date : 'MMMM' | uppercase }}</p>
```

Which evaluates as:

```html
Date formatted with chain of date filter displaying only month and uppercase filter: FEBRUARY
```

## Custom filters

Angular's built-in filters are a good way to format the display of the data, but what if you want to display it in a way that isn't supported by them?
You have to write a custom filter that will do it! Here is an example of a simple custom filter which replaces all instances of underscore `_` character in a string with a `substitutionString`:

```javascript
angular.module('tutorial')
    .filter('tutorialFilter', TutorialFilter);

function TutorialFilter(){
    return substitutionFunction;

    function substitutionFunction (text, substitutionString) {
        return substitutionFunction;

    function substitutionFunction (text, substitutionString) {
        var formattedText = text;
        
        if (typeof (text) !== 'string') { // if text isn't a string, return it unchanged            
            return formattedText;
        }
        if (substitutionString === undefined) { // if substitution string isn't defined, use default value of '-'
            substitutionString = '-';
        }
        formattedText = formattedText.split('_').join(substitutionString);  // replace each instance of character '_' with substitutionString

        return formattedText;    
    };
};
```

Custom filter is defined by using `filter()` method on a module on which it will be created on.
This method takes two arguments, the first one `tutorialFilter` is filter's name, while the second one `TutorialFilter` is a filter factory function which must be defined in every filter.
Filter factory function must return a function with at least one argument.
The first argument is always a variable on which the filter will do custom formatting.
Other arguments, if they exist, can be used to give filter more options for performing the desired formatting.
Keep in mind that second argument, if it exists, will be written as first argument after colon `:` when used in expressions.
This is because the first one it the variable the filter is applied to.
In this example, returned function is `substitutionFunction` which takes two arguments.
The first one, `text`, is an input variable on which the formatting will be performed.
The second one, `substitutionString`, is an optional variable that defines a string which will be used to replace the underscore `_` character with.
If second argument isn't supplied, it will default to value `-`.
This filter can be used in the following way:

```html
<p>Number formatted with custom filter without argument: {{ filterCtrl.balance | tutorialFilter}}</p>
<p>Date formatted with custom filter without argument: {{ filterCtrl.date | tutorialFilter}}</p>
<p>Key formatted with custom filter without argument: {{ filterCtrl.key | tutorialFilter}}</p>
<p>Key formatted with custom filter with argument '*': {{ filterCtrl.key | tutorialFilter : '*'}}</p>
<p>Key formatted with custom filter with argument '!!': {{ filterCtrl.key | tutorialFilter : '!!'}}</p>
<p>Key formatted with custom filter with argument '---': {{ filterCtrl.key | tutorialFilter : '---'}}</p>
<p>Key formatted with custom filter with argument '-_-': {{ filterCtrl.key | tutorialFilter : '-_-'}}</p>
```

Which will evaluate to:

```html
Number formatted with custom filter without argument: 123.456789
Date formatted with custom filter without argument: "2015-02-13T23:00:00.000Z"
Key formatted with custom filter without argument: A45B-H7TS-HLI8-1KGD
Key formatted with custom filter with argument '*': A45B*H7TS*HLI8*1KGD
Key formatted with custom filter with argument '!!': A45B!!H7TS!!HLI8!!1KGD
Key formatted with custom filter with argument '---': A45B---H7TS---HLI8---1KGD
Key formatted with custom filter with argument '-_-': A45B-_-H7TS-_-HLI8-_-1KGD
```

In the first two lines, the filter is applied to the variables that aren't strings so they are returned unchanged.
The third line is using the filter which doesn't use optional argument so it defaults to `-` and uses it to replace every instance of `_` character.
Each other line is using different optional argument which, as you can see from results, correctly replaces every `_` character with itself.
Don't forget that the argument after colon `:` is the first filter argument in expression, but second argument in filter factory function.

## Conclusion

In this part, we have learned what Angular filters are, how to use built-in ones, and also how to write our own.
We have learned about using filter arguments and chaining multiple filters together.
We will finish our part about filters here, but you can find more information on the subject in the official [Angular documentation](https://docs.angularjs.org/guide/filter).
While we have reached the end of the story about filters, it is not the end of our Angular journey.
In the next step we are covering most important and powerful part of Angular framework - [directives](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/directives.md).
