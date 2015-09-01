# Expressions

Angular expressions are used by placing them in curly brackets, such as `{{ expression }}`. Functionally, they are almost the same as the expressions used in JavaScript, but they have a few important differences:
	-	Angular expressions are evaluated against a scope object, while JavaScript ones are evaluated against the global window object
	-	Angular expressions can evaluate even if the result of their evaluation is `undefined` or `null`, while trying to do the same in JavaScript would result in `ReferenceError` or `TypeError`
	-	Angular expressions can't use conditionals, loops and exceptions, and can't be used for function declarations
	-	Angular expressions can use Angular filters to format data before displaying it

Expression placed inside curly brackets in HTML file is evaluated on loading of the page, and only the result of the evaluation is displayed. Mathematical operations `+`, `-`, `*`, `/`, `%` and paranthesis `(`, `)` can be used inside expressions and will evaluate correctly. For example, expressions:
	
```html
  1 + 2 = {{ 1 + 2}}
  15 - 5 = {{ 15 - 5 }}
  2 * 3 = {{ 2 * 3 }}
  14 / 2 = {{ 14 / 2 }}
  11 % 2 = {{ 11 % 2 }}
  2 + 2 * 2 = {{ 2 + 2 * 2}}
  (2 + 2) * 2 = {{ (2 + 2) * 2 }}
```

will evaluate as:

```html
  1 + 2 = 3
  15 - 5 = 10
  2 * 3 = 6
  14 / 2 = 7
  11 % 2 = 1
  2 + 2 * 2 = 6
  (2 + 2) * 2 = 8
```

You can also use various JavaScript methods inside expressions:

```html
  Turning string into uppercase: {{ "Make me an uppercase".toUpperCase() }}
  Or lowercase: {{ "AnD Me A LoWerCasE".toLowerCase() }}
  Searching for first occurence of a letter = {{ "Where does letter A first appear?".indexOf('A') }}
  Or last occurence of a string = {{ "red car with red windows on a red road".lastIndexOf('red') }}
```

which will evaluate as:

```html
  Turning string into uppercase: MAKE ME AN UPPERCASE
  Or lowercase: and me a lowercase
  Searching for first occurence of a letter = 18
  Or last occurence of a string = 30
```

While conditional operators cannot be used in angular expressions, it is allowed to use ternary operator. Ternary operator evaluates an expression and displays one of two possible results, depending on whether expression evaluated to true or false:

```html
  Expression that evaluates as true: {{ 1 < 2 ? "Result before colon" : "Result after colon"}}
  Expression that evaluates as false: {{ 1 > 2 ? "Result before colon" : "Result after colon" }}
```

which will evaluate as:

```html
  Expression that evaluates as true: Result before colon
  Expression that evaluates as false: Result after colon
```

For more thorough information about expressions, you can visit official [`Angular documentation`](https://docs.angularjs.org/guide/expression). If you feel you have a good enough understanding of Angular expressions, continue to the next stop of your Angular journey - [`controllers`](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/controllers.md).