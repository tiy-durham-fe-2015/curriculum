Week 6:

Angular!, memory game

## Library vs Framework

Library: utility objects/functions that your code calls

Framework: an application infrastructure that calls your code
whenever it needs something... You just fill in the details.




Hello world
Routing
Binding
Controllers
Views
Promises
Dependency injection
$http instead of ngresource
AJAX

...

Basic introduction requires:

- Prototypal objects
- ng-app
- ng-controller
- Data binding
- Filters
- http://jsbin.com/xofeviwumo/1/edit?html,js,output

HW:

Create a Veterinarian Portal application.

An add button to add a new pet.

Pet has:

- ownerName
- petName
- amountDue
- notes

The page should summarize:

- number of pets in the system
- total amount owed to the clinic
-



- https://docs.angularjs.org/api/ng/directive/ngShow

Project structure guidelines:
	https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub

1. Declare a root module:
	var app = angular.module('app', []);

2. Register a controller:
	app.controller('StudentsCtrl', function ($scope) {
		$scope.foo = 'Some value';
	});

3. Prevent flickering:
	Add ng-cloak attribute to dynamic HTML elements
	Add ng-cloak CSS

4. Directive: filter
	ng-repeat="student in students | filter:query"

	Here, query is a value in $scope

5. Directive: orderBy
	ng-repeat="student in students | orderBy:someField"

	Here, someField is a string that contains the name of a property on student
	'name' would sort by student's name
	'-name' would sort by student's name in descending order

6. When creating dynamic src attributes, use ng-src
	(This prevents the browser from loading an invalid URL)

7. $http is the http service, used to do AJAX requests

8. $log is the logging service (instead of console.log)

9. Routing is now an external dependency. The CDN url is here:
	https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.min.js

10. Events follow a pattern like this:
	ng-click="doSomething(arg1, arg2)"

11. Good resource on implementing common patterns in angular:
	http://nathanleclaire.com/blog/2014/01/04/5-smooth-angularjs-application-tips/

12. Each controller should go into its own module.
	Each module needs to be registered as a dependency of the root app.

13. Factories should be camelCased and end with Factory

14. Regular DOM stuff doesn't always work as you'd think. Use the Angular equivalent (e.g. $timeout instead of setTimeout)

15. It's easy to accidentally redefine a module angular.module('foo') vs angular.module('foo', [])
