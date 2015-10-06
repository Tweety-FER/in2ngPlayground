# in2ngPlayground
A small angularJS-based playground repo used for the AngularJS training track.

## What is AngularJS?

[AngularJS](https://angularjs.org) is a framework for JavaScript that has gained some popularity lately. And we all know JavaScript is awesome, so you better learn it.

![Awesomeness](http://i.imgur.com/g96QleC.png)

## What now?

### Git setup

If you are on the AngularJS track in IN2, clone this repository. You can do this after [installing git](https://git-scm.com/download). Then, create a github account if you already do not have one, and notify us of its creation by emailing your username to [us](luka.skukan@in2.hr).

Set up the basics of your git account - your username, password and proxy settings.

```bash
git config --global user.name your_name
git config --global user.email your_email
git config --global http.proxy proxy.in2.hr:8080
git config --global https.proxy proxy.in2.hr:8080
```

Once everything is set up, clone this repository by doing the following:

```bash
git clone https://github.com/Tweety-FER/in2ngPlayground.git
```

You now have this repository in the directory **in2ngPlayground**

### Updating the Repository

Once you have made your changes to the repository, by adding, removing or editing files, you can have to make them available on the repository. This is performed in three steps:

  - *adding/removing* changes
  - *commiting* changes
  - *pushing* changes

If you have added a file or changed an existing file, you have to use the `git add` command to notify the git versioning system that the file was created or changed. You can do this like so:

```bash
git add example_file.txt
```

If you want to add it all at once, navigate to the root of the project (in this case, the *in2ngPlayground* directory) and just type in:

```bash
git add .
```

Likewise, when you remove files, you have to notify git. For this, we use the `git rm` command. If the file still exists, using this command will both remove it and notify git of the change. An example:

```bash
git rm example_file.txt
```

Once you are done with your project, or a particular part of it (for example a new bug fix or adding a new directive), you have to *commit* your changes. Commiting stores a group of changes. Each commit is accompanied by a message. When you commit, an editor will be opened and will ask you for a message. An example of committing:

```bash
git commit
```

You can pass in a short message without opening a window, by using the **-m** flag, like so:

```bash
git commit -m "Changed background colour to blue"
```

It is a good idea to make the messages a bit longer, however, and as descriptive as possible. Generally, the message should follow this format:

```
Short line summarizing the changes

List of changes in more detail. Use imperative form, such as
"change user login form", in all commit messages. You don't
have to describe every minor thing, but the reader should understand
what and why this commit was created.

Don't be afraid to use multiple paragraphs, or even lists of things
you have done. In short:
  - Descriptive, but not too long
  - Imperative tone
  - Multiple paragraphs and lists are OK
```

You can read more about the importance of good commit messages [here](http://chris.beams.io/posts/git-commit/).

This are the basics of *local* git repository management. However, you must also keep it in sync with the other copies of the repository. Once you have commited your changes, you can publish them using the `git push` command. Once you have done that, other copies can be updated to include your changed if they owners execute the `git pull` command. Likewise, when someone else performs a push, you will have to perform a `git pull` to keep up to date. If you want to go deeper into Git, take a look at [this book](https://git-scm.com/book/en/v2).

## Tutorial
  1. Introduction to Automation
    1. [NodeJS and NPM](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/automation/node.md)
    2. [Gulp](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/automation/gulp.md)
  2. AngularJS Basics
    1. [Introduction](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/intro.md)
    2. [Bootstrapping and Modules](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/bootstrapping.md)
    3. [Expressions](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/expressions.md)
    4. [Controllers](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/controllers.md)
    5. [Factories](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/factories.md)
    6. [Filters](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/filters.md)
    7. [Introduction to Directives](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/directives.md)
    8. [Advanced Directives](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/advanced-directives.md)
    9. [Best Practices](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/angular/best-practices.md)
  3. Unit Testing AngularJS
    1. [Karma and Jasmine](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/testing/karma.md)
    2. [How and What to Unit Test?](https://github.com/Tweety-FER/in2ngPlayground/blob/master/testing/how-and-what.md)
