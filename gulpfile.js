var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var debug = require('gulp-debug');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var coffee = require('gulp-coffee');
var less = require('gulp-less');
var Server = require('karma').Server;
var es6transpiler = require('gulp-es6-transpiler');

var applicationName = 'playground';

/*
* Stores all template .html files into the $templateCache automatiaclly, creating a templates module and .js file in the dev directory.
*/
gulp.task('template-cache', function() {
    return gulp.src('src/**/*.html')
        .pipe(templateCache({standalone : true}))
        .pipe(gulp.dest('dev/js'));
});

/*
* Concats all non-test source javascript files into a deployment application file.
* Performs ES6 compilation beforehand.
*/
gulp.task('concat-app', ['compile-es6', 'coffee'], function() {
    return gulp.src([
        '!src/**/*.spec.js',
        'src/**/*.js',
        'node_modules/underscore/underscore.min.js' // Node dependencies. Maybe switch to browserify?
        ]).pipe(debug())
          .pipe(concat('app.js'))
          .pipe(gulp.dest('dev/js/'));
});

/*
* Performs a single unit test run.
* Performs the build task beforehand.
*/
gulp.task('unit-test', ['build'], function(done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/*
* Same as unit-test, but keeps watch on the files continuously and re-runs tests if anything changes.
* Performs the build task beforehand.
*/
gulp.task('tdd', ['build'], function(done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

/*
* Performs a single end-to-end test run
*/
gulp.task('e2e-test', ['build'], function() {
  return gulp.src(['src/**/*.e2e.js'])
              .pipe(angularProtractor({
                  'configFile': 'protractor.conf.js',
                  'autoStartStopServer': true,
                  'debug': true
              }))
              .on('error', function(err) {
                console.log('Error =>', err);
                this.emit('end');
              });
});

/*
* Performs a single run of all tests (both unit and E2E)
*/
gulp.task('run-tests', ['unit-test', 'e2e-test']);

/*
* Finds all files with the .es6 extension in the source and transpiles them into ES5-compliant javascript, resulting in .js files in the same directory
*/
gulp.task('compile-es6', function() {
  return gulp.src('src/**/*.es6')
        .pipe(debug())
        .pipe(es6transpiler({
          globals : {
            '$' : false,
            'angular' : false,
            'escape' : true,
            'setTimeout' : false,
            'describe' : false,
            'beforeEach' : false,
            'it' : false,
            'inject' : false,
            'expect' : false
          }
        }))
        .pipe(rename(function (path) {
          path.extname = ".js";
        }))
        .pipe(gulp.dest('./src')); // Put them back where you found them
});

/*
* Finds all coffeescript files in the source (by .coffee extension) and compiles them into JS files in the same directory
*/
gulp.task('coffee', function() {
  return gulp.src('src/**/*.coffee')
      .pipe(debug())
      .pipe(coffee({bare: true}))
      .pipe(gulp.dest('./src'));
});

/*
* Builds an application by compiling and combining all JS-like and CSS-like sources.
* The resulting JS is then combined with other source files (templates and AngularJS) into a single JS file.
*/
gulp.task('build', ['compile-angular', 'style'], function() {
  return gulp.src(['dev/js/angular.js', 'dev/js/app.js', 'dev/js/templates.js'])
      .pipe(concat(applicationName + '.js'))
      .pipe(gulp.dest('dev/js'));
});

/*
* Compiles all LESS files (with a .less extension) into .css files in the same directory.
*/
gulp.task('less', function() {
  return gulp.src('src/**/*.less')
             .pipe(less())
             .pipe(gulp.dest('src'));
});

/*
* Combines all CSS files in the source directory into a single CSS file in the deployment directory.
* Performs LESS compilation into CSS beforehand.
*/
gulp.task('style', ['less'], function() {
  return gulp.src('src/**/*.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dev/css'));
});

// Compile both the angular source and the templates
gulp.task('compile-angular', ['template-cache', 'concat-app']);

// Better not run this, not tested
gulp.task('uglify-app', function() {
   return gulp.src('dev/js/*.js')
       .pipe(rename('app.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dev/js/min'));
});

// Don't run without asking
gulp.task('deploy', ['build'], function() {
  return gulp.src(['dev/js/widgets.js', 'dev/css/style.css'])
      .pipe(gulp.dest('X:/'));
});

/*
* Performs linting on the source, finding and reporting style errors and such.
*/
gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//Setting the default to build and run test
gulp.task('default', ['unit-test']);

/*
* Watch for changes. Run default task for every change, which involves rebuilding and retesting.
*/
gulp.task('watch', function() {
  gulp.watch([
    'src/**/*.es6',
    'src/**/*.coffee',
    'src/**/*.js',
    'src/**/*.less',
    'src/**/*.css',
    'src/**/*.html'
  ], ['unit-test']);
});