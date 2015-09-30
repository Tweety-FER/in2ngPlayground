# NodeJS and NPM

As you might be aware, JavaScript has gone through a certain boom recently. A good part of it is owed to the option of using JavaScript in the back-end, primarily through Node. An important part of Node is NPM, the (**N**ode **P**ackage **M**anager). Node programmers use it to manage the packages they require to develop. As any good package manager, NPM also handles dependency management and version interoperability.

You might wonder why we're talking about a back-end tool when we are doing front-end programming with JavaScript. The answer is simple - we, too, will be using NPM to manage some of our components. However, these will primarily be front-end build and development tools, such as *gulp*, *karma* and various plug-ins, all of which will be described in more detail later.

## Installing Node+NPM

The installation process is quite simple, especially on the Windows and OS X operating systems. Just go [here](https://nodejs.org/download/) and download the appropriate package or binary! No hassle! To make sure it works, access the command prompt (cmd/terminal/PowerShell) and type:

```bash
npm --version
```

It should output something like:

```
2.5.1
```

If it works, that's it!

## Installing and Saving Packages with NPM

Installing a package with NPM is really simple. There are some variations, but in the most basic case, all you need to do is type this into your command prompt/terminal:

```bash
npm install packageName
```

This will make the package available in the current directory. If you want to install it as a global command-line utility, you have to add the **global** flag like so:

```bash
npm install packageName -g
```

or

```bash
npm install packageName --global
```

We usually do this with actual command-line tools, like **gulp**, which we'll discuss soon enough. However, in most cases we will be installing things like plugins, which we only need in the development environment - for instance to concatenate and minify our JavaScript - and that doesn't actually serve any purpose in the command-like and isn't served to the user.

### package.json

In most cases, we want to preserve a list of our dependencies. For example, in a git repository like this, we want the user to be able to pull the repository and have all the necessary dependencies. However, it would be wasteful to host megabytes of command-like tools in the repository. Instead, all the dependencies are recorded in out [package.json](https://github.com/Tweety-FER/in2ngPlayground/blob/master/package.json) file. Give it a look. It briefly describes our project and lists two types of dependencies: **dependencies** and **development dependencies**.

The regular dependencies are those that are required to run the project. You don't have to worry much about these - they are primarily used in back-end projects. However, if you ever want to save something as a project dependency while installing it, simply run:

```bash
npm install packageName --save
```

The more interesting dependencies to us are the development dependencies. These are the dependecies we need for the building and testing process - they are only used during the development and packaging process. When we want to save a package to the development dependencies, we do:

```bash
npm install packageName --save-dev
```

So, we have a package.json file with a list of dependencies... what do we do with them now? Well, that's simple! Simply run `npm install` (*without any arguments*) and it will simply install all the dependencies and development dependencies for you! This might take a while, so feel free to go ahead and have a tea or coffee. Once more, like so (Don't run it again! Just making it clear!):

```bash
npm install
```

If you ever feel like creating your own package.json file from scratch, there is one more important command you need to know - `npm init`. When you run this command, the NPM will ask you a few simple questions and generate the package.json file according to your responses.

**Note**: For some `npm install` commands to be resolved, you might have to install Python 2.7 and/or a C++ compiler.


### Proxy settings

If you're using NPM from behind a proxy (which is likely), you will have to set up NPM's proxy settings. You can do this from the command line:

```bash
npm config set proxy http://proxy.in2.hr:8080
npm config set https-proxy http://proxy.in2.hr:8080
npm config set strict-ssl false
npm config set registry http://registry.npmjs.org/
```

You might have to do similar things for other command-line tools you might be using, e.g. Bower.

---

You now know the basics of the npm! When you're done playing around with it, it's time for [gulp](https://github.com/Tweety-FER/in2ngPlayground/blob/master/tutorial/automation/gulp.md)!
