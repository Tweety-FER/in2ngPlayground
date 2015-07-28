# Gulp

Back in the chapter about [node and NPM](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/automation/node.md) we explained how to install our build tools. Now it's time to explain the basics of using them for simple, but tedious tasks, like concatenating code, translating [LESS](http://lesscss.org) to CSS or [CoffeeScript](http://coffeescript.org/) to JavaScript, etc. The helpful Gulp tool reduces these tasks to a simple command.

The user (that's you!) can define various commands and then execute them from the command line. Furthermore, there is a nifty *watch* feature, which allows you to specify a command to execute every time your source code changes. For example, it might be a good idea to run all your unit tests after you've made some changes, to make sure nothing is broken.

Another nice feature of Gulp is the ability to define *dependencies*. One task can require one or more tasks be run *before* it. For example, let us imagine you're not writing your code in JavaScript, but instead in [CoffeeScript](http://coffeescript.org/). To run the tests, you first need to compile all that CoffeeScript code into JavaScript. In other words, the test task **depends** on the coffeescript compilation task.

All of the heavy lifting in Gulp is done by plugins. Someone has already written a plugin which compiles CoffeeScript and you just need to install it (using NPM and --save-dev), require it and call it.

So, how are the plugins required? How are they called? How are tasks and their dependencies defined? Meet the gulpfile! The gulpfile ([here is ours](https://github.com/Tweety-FER/in2ngPlayground/blob/master/gulpfile.js)) is a simple file written in JavaScript which declares all of those things for us. Let us break it into smaller pieces.

First of all, to use a plugin, you need to *require* it. For example, to use the `gulp-concat` plugin we would do this:

``` javascript
var concat = require('gulp-concat')
```

Now we have access to all that juicy concat functionality in a single JavaScript variable! Now we simply need to define a task to do that for us. In short, we need to define a name for it, then tell it three things:
 
  - Which files to do something to, using the *src*
  - What do to them, using a plugin (or chain of plugins)
  - Where to put the end product
  
``` javascript
/*
* Define a task named 'concat-app', which requires the 'coffee' task be run beforehand. Coffee is just another gulp.task
* defined elsewhere in the gulpfile
*/
gulp.task('concat-app', ['coffee'], function() { 
    return gulp.src([ //Define the source files
        '!src/**/*.spec.js', //Exclamation mark means "DO NOT use these files"
        'src/**/*.js', //Means use these files. ** means any directory or subdirectory, while * means any file
        'node_modules/underscore/underscore.min.js'
        ]).pipe(debug()) //Use the debug plugin to print the list of used files
          .pipe(concat('app.js')) //Concat them into an app.js file
          .pipe(gulp.dest('dev/js/')); //Place this file into the dev/js directory 
});
```

We can now run the task from the command line, by simply typing in:

```bash
gulp concat-app
```

Let that all sink in. You don't have to understand every single line, you'll be using it far more than writing it, but try to get a general feel for it.

Now that we've seen what a task looks like, there's only one more thing we need to learn how to do; how do we run tasks when a file changes? Well, once again, it's not all that complicated! Let's have a look:

```javascript
/*
* Watch for changes. Run default task for every change, which involves rebuilding and retesting.
*/
gulp.task('watch', function() {
  gulp.watch([
    'src/**/*.coffee',
    'src/**/*.js'
  ], ['concat-app']);
});
```

We've simply defined another task. It will watch for any changes in .js or .coffee files placed in the src directory and its sub-directories and run the `concat-app` task when any of them change. Like with the original `concat-app` task, we need to run it from the command-like (see below). However, unlike `concat-app`, it won't exit once it does its thing. Instead, it will keep an eye on the any changes and keep running `concat-app` every time it is triggered. One has to manually end the task.

``` bash
gulp watch
```

That's it for the basics! If you want to learn more about Gulp, go [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). Otherwise, you can start learning about [AngularJS](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/intro.md)!