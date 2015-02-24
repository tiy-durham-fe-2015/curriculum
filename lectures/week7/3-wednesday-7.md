# Wednesday, Week 7

## Angular 103

- Review 102 & coding challenge
- $http (and promises in Angular)
- $scope and watching

### AJAX with Angular

Angular provides an $http object which is used to make AJAX calls.

    https://docs.angularjs.org/api/ng/service/$http

It works like this:

    $http.get('http://the.url/you/want/to/get')
      .then(function (result) {
        // This is called if the AJAX promise succeeded. It is similar to
        // jQuery's success method.
        //
        // result is the result of the get operation. It has lots of info
        // associated with it. But its data property is what gives you
        // the data that was returned from the server.
        return result.data;
      })
      .catch(function (error) {
        // The catch function is called if the AJAX promise failed.
        // It is similar (but not exactly) like jQuery's .fail method.
      });

If you wanted to post data to a server:

    $http.post('http://the.url/etc/etc', { foo: 'bar' })
      .then(function (result) { })
      .catch(function (error) { });

If you wanted to put, call `$http.put`

    $http.put('http://the.url/etc/etc', { foo: 'bar' })
      .then(function (result) { })
      .catch(function (error) { });

If you wanted to delete, call: `$http.delete`

    $http.delete('http://foo.bar/baz/bleh')
      .then(function (result) { })
      .catch(function (error) { });

AJAX should be done in a service/factory object, not directly in controllers.

You can see an example of a AJAX service here:

    https://github.com/tiy-durham-fe-2015/gulp-angular/blob/master/src/components/services/users/users-service.js

And you can see how to consume such an object here:

    https://github.com/tiy-durham-fe-2015/gulp-angular/blob/master/src/users/users-controller.js

Let's break that last bit down:

    // Here, we are defining the '#/users' page...
    app.config(['$routeProvider', function($routeProvider) {
      // Route definition looks pretty similar to what we've already seen...
      var routeDefinition = {
        templateUrl: 'users/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'vm',

        // Except this! Here, we are saying, when this route runs, first
        // resolve these dependencies:
        resolve: {
          // The users dependency users our usersService AJAX object to
          // fetch a list of users from GitHub. The controller will not be
          // called until the users list has been successfully loaded...
          // Angular will wait for the AJAX promise to succeed, then it will
          // take the result of that promise and stick it in a dependency called
          // 'users'.
          users: ['usersService', function (usersService) {
            return usersService.list();
          }]
        }
      };

      $routeProvider.when('/', routeDefinition);
      $routeProvider.when('/users', routeDefinition);
    }])
    .controller('UsersCtrl', ['users', function (users) {
      // In our controller definition, we are injecting the 'users' dependency
      // which is the value returned from our AJAX call.
      this.users = users;
    }]);

### Watching shtuff

OK. Here's a scenario. Let's say you want to run some logic any time a certain
property changes. It's a pretty common need, and Angular provides a way to
make it so.

With Angular, you can watch any property of any object.

Let's say, we have a chat application, and whenever the user changes the text
in the 'new message' textbox, we want to let the server know the user is typing.

(OK. It's kind of a contrived example, and you could do this in lots of other
ways, but here's one way...)

    // $scope is an Angular object that you can inject into a controller
    // $scope.$watch is a function which is used to watch a value for changes.
    // It takes two arguments, and both arguments are functions!
    //
    // The first argument is a function that gets called multiple times per
    // Angular digest... That means you don't want to do anything expensive
    // in the first function. The purpose of the first function is to return
    // a value (the value you are watching). Angular will then detect if that
    // value changed. And if it did change, it will call the second function.
    //
    // The second argument is a function that actually does the logic you want
    // to have happen whenever the value actually changed...
  	$scope.$watch(function () {
  		// Called multiple times per digest
  		// This is annoyink!!!
      return self.newMessage;
    }, function (value) {
  		// Called only if self.newMessage changed... value is the value that
      // the first function returned
      myFancyService.setStatus('typing');
    });

You would not want to call a service *every time* the user typed, so
myFancyService would probably want to use a timeout to avoid calling the
server a million times per minute!

But that's beside the point. The point is, sometimes you want to watch a value
and respond if it has changed, and $scope.$watch is one way to make that happen.

## Coding challenge

Give it a shot! Don't spend more than 30 mins of your time on it, though! It's
important, but it's more important that you are learning Angular! We'll go
over the solution to this tomorrow in class.

http://coderbyte.com/CodingArea/Language.php?ct=Letter%20Changes

Some things you may need:

- String's charCodeAt method
- String's fromCharCode method

## Homework

Read up on JavaScript getters and setters. We sort of lightly touched on them,
but they are very handy.

http://javascriptplayground.com/blog/2013/12/es5-getters-setters/

### Add some AJAX to your Bike Shop

You could use the ol' familiar weather API to show the current weather:

    http://openweathermap.org/api

But I'll leave it up to you! The point is not to learn a new API, but rather to get familiar with how to do AJAX with Angular. You'll be really diving deep with it tomorrow (for your weekend assignment)!

### Do more stuff...

Go back and look at Monday's assignment. Try doing the hard/nightmare modes.

Or, modify your "show" view to show only one promo at a time and change
the currently displaying promo every few seconds or so (like a slide show).

Consider making the "show" view display the current time.

I don't know if I'll remember to mention it in class, but Angular doesn't play
nice with setTimeout. If you want to do setTimeout (e.g. to get the clock
  or slideshow working). Then, you need to look into using this:

    https://docs.angularjs.org/api/ng/service/$timeout

I just saved you hours of headache. You're welcome. :)
