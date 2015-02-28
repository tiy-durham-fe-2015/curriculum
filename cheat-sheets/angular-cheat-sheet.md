# Angular

## Project structure guidelines:

	  https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub

## Including Angular in your app:

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-animate.min.js"></script>

## Some notes

### Declare a root module:

    var app = angular.module('app', []);

### Register a controller:

    app.controller('StudentsCtrl', function () {
      var self = this;

  		self.address = {
        city: 'Durham',
        state: 'NC'
      };
  	});

### Prevent flickering:

- Add ng-cloak attribute to dynamic HTML elements
- Add ng-cloak CSS

### Directive: filter

    ng-repeat="student in m.students | filter:m.query"

Here, m.query and m.students are presumably values in our controller

### Directive: orderBy

	  ng-repeat="student in m.students | orderBy:someField"

Here, someField is a string that contains the name of a property on student

- 'name' would sort by student's name
- '-name' would sort by student's name in descending order

### When creating dynamic src attributes, use ng-src

    <img ng-src="m.someProp">

This prevents the browser from loading an invalid URL.

### $http

To do AJAX, use the $http service

### $log

To log to the console, use the $log service

### Events follow a pattern like this:

	  ng-click="doSomething(arg1, arg2)"

They have a special $event variable which you can use to pass the event object
in to your event handler.

    ng-click="doSomething(arg1, arg2, $event)"

### Good resource on implementing common patterns in angular:

http://nathanleclaire.com/blog/2014/01/04/5-smooth-angularjs-application-tips/

### Each controller should go into its own module.

That's what the experts say, but it's kind of a pain, since each module needs
to be registered as a dependency of the root app.


### Regular DOM stuff doesn't always work as you'd think.

Use the Angular equivalent (e.g. $timeout instead of setTimeout)

### It's easy to accidentally redefine a module

Use an existing module:

    angular.module('foo')

Define (or blow away and redefine) a module:

    angular.module('foo', [])

So, be careful when defining modules! Even though many say you shouldn't, I
would either define all of my modules in one place, or simply have one big
module for my app. Whatevz!

### If you need to reuse a view

You can use `ng-include` in simple cases. Otherwise, you need to create a directive.
