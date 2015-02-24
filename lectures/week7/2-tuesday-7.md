# Tuesday, Week 7

## Angular 102

- Review 101 & coding challenge
- Dependency injection
  - factory
  - service
- Routing

### Dependency injection

Angular isn't a big fan of global scope. (Well, no one is, but Angular *really*
  isn't.) In fact, Angular doesn't even like namespacing things like this:

    var app = {};

    app.User = function () {
      // Construct and return a user object...
    };

Instead of hanging a bunch of methods and objects off of one or more
namespaces, Angular prefers to do something called Dependency Injection. You
can Google it, if you want.

Basically, it goes like this:

- You register a class, object, or function with Angular
  - Hey, Angular, here's what the User class looks like.
  - Any time someone asks for "User", give them this.
- Then, other parts of your codebase ask Angular for objects/classes/functions
  - Hey, Angular, I give me a 'User'
  - Angular gives them the thing that you registered as 'User'

Sounds convoluted. Why would you want to do this?

There are a number of reasons, but I think the main one is testability.

Let's say you have an object that needs to manipulate localStorage. It's
really hard to test that object, because the data saved to localStorage in
one test might corrupt another test.

However, if your object didn't call localStorage directly, but instead asked
Angular for a 'localStorage' object. Then, your tests could tell Angular, "Hey,
instead of handing that object the actual localStorage, hand it this object
I made that looks and behaves like localStorage, but doesn't actually persist
data to disk."

In testing, when you pass in an object that looks and behaves like another
object, this is called mocking. E.g. you pass in a mock object that, instead
of saving to disk, or calling some API, just saves/loads from an in-memory
structure.

This is a really common practice, and it is one of Angular's big strengths.

There are other reasons why you might want to use dependency injection, but
testability is the main reason. Some would argue that dependency injection
makes your code more pluggable, generic, and reusable.

I would argue that you can create flexible and testable code without the added
complexity of dependency injection, but it is the route that Angular chose. And
many other frameworks do the same thing.

So, how does it actually work?

Have a look at the dependency injection intro here:

[https://github.com/tiy-durham-fe-2015/wk7](https://github.com/tiy-durham-fe-2015/wk7)

### Skinny controllers

Remember the single-responsibility principle? It states that an object (or
  function) should have only one responsibility. So, a User object might
  be responsible for representing a User's data, but it shouldn't manage
  that user's Facebook likes. *That* should go into a FacebookLikes object.

OK. Maybe that wasn't a great example, but hopefully you get the idea.

The single responsibility principle applies to everything, including (maybe
  especially) controllers. So, instead of having a HUGE controller that does
  all sorts of random, somewhat unrelated things, you should break your logic
  out into objects that get injected into your controller. This keeps your
  controller focused primarily on one responsibility (exposing relevant
    data to the view).

### Routing in Angular

Angular has routing... Well, as long as you included the routing script in
your HTML file:

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.min.js"></script>

And you've got to modify your app module to include ngRoute. See here for
an example:

    https://github.com/tiy-durham-fe-2015/gulp-angular/blob/master/src/app.js

Now, your app is ready to roll. Let's see how to set up a route. Here's the
about page from the gulp-angular project:

    // First, you'll note that we're calling .config
    // We inject $routeProvider into our config function.
    // $routeProvider is Angular's router.
    app.config(['$routeProvider', function($routeProvider) {
      // Next, we define our route.
      var routeDefinition = {
        // This is the Angular template that will be displayed
        // whenever the URL matches our route
        templateUrl: 'about/about.html',

        // This is the controller that will be associated with
        // the templateUrl view...
        controller: 'AboutCtrl',

        // This is the way that we'll reference our controller
        // from the view (e.g. If our controller had a foo property,
        // then in our view, we would access it: vm.foo)
        controllerAs: 'vm'
      };

      // Tell the route provider that when we see a URL like '#/about', we want
      // to use the routeDefinition we just defined.
      $routeProvider.when('/about', routeDefinition);
    }])
    .controller('AboutCtrl', [function () { }]);

The about controller itself doesn't actually do anything interesting, but it
could (and most controllers will).

## Coding challenge

Der it!

http://coderbyte.com/CodingArea/Language.php?ct=Longest%20Word

I'll be really sweet and give you a hint... You have to ignore non-word
characters. (e.g. ignore ! or & or -, etc) So, you'll need to use regular
expressions. I used JavaScript's string match method like this:

    match(/\w+/g)

(Use Google to see how you might make use of this!)

## Homework

Keep working on yesterday's assignment.

### Style it

Make your application responsive (e.g. it should look good on mobile as well
  as in the full desktop browser experience).

### Create and use at least one factory

Use dependency injection to inject objects where you need them. Here are some
objects you may define:

- Bike
- Accessory
- BikeStore (manages the collection of bikes)
- EditPromosCtrl (the controller for editing the promos)
- ShowPromosCtrl (the controller for showing today's promos)

You can break your app down however you want, but create at least one factory
and use it!

### Add routing

You'll want at least three routes:

The edit route:

    #/promos/edit

The promos screen:

    #/promos

And the default screen:

    #/
