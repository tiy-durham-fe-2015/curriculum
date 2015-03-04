# Framework Concepts

- Routing
	- The ability for your application to respond to a URL
	- When you see URL1, you respond in this way
	- When you see URL2, you respond in that way
	- Usually, routing allows you to easily pull arguments out of a URL

- Controllers
	- Code that is responsible for taking data and exposing it to a view
	- It also generally exposes functions to the view

- Views
	- Templates/HTML that represent data

- Models
	- Object whose responsibility is to represent data
	- Generally, models should have no (or very little) logic

- Services/stores
	- Objects whose responsibility is to query a datasource and/or update/insert, etc
	- CRUD operations for an API or for any data source
	- All API calls should be inside of a service object
	- C = Create (POST)
	- R = Read (GET)
	- U = Update (PUT)
	- D = Delete (DELETE)

- Factories
	- A key/value store, a way for you to ask for a thing by name
	- The responsibility for creating the "thing" is handled by the factory
	- If you want to change what happens when a "thing" is requested/crated, you can
	do that in one place (the factory)
	- A way to share objects/code between components in an application

- Singleton
	- An object that exists only once per application
	- (As opposed to a constructor function which might create many instances)

- Single responsibility principle
	- An object or function should have one single, focused purpose

- Directives / partials
	- Directives (and/or partials) are HTML templates and associated JS behaviors
	that you can inject into other templates
	- They are like functions for HTML
	- You can pass arguments to a directive
	- If you call the same directive twice-- with different arguments-- you'll get
	slightly different HTML each time

- AJAX
	- A way for JavaScript to talk to a server without doing a full browser refresh

- Asynchronous vs Synchronous
	- Synchronous code executes in sequence, so line 4 happens after line 1, 2, and 3
	- Asynchronous code does not execute in sequence (necessarily)
		- AJAX is an example of asynchronous execution

Here's an example of asynchronous shtuff

    // This file demonstrates asynchronous code...
		var x = 34;
		var y = x + 5;

		// AJAX takes a while to download stuff, so it happens
		// in the background, and meanwhile, our code keeps
		// executing.
		var ajaxPromise = $.get('https:/api.github.com/users/chrisdavies');

		$('body').append('<span class="processing">Working...</span>');

		ajaxPromise.done(function (result) {
		  console.log(result);
		});

		ajaxPromise.fail(function (req, status, err) {
		  console.log('FAILED! ' + err);
		});

		ajaxPromise.always(function () {
		  $('.processing').remove();

		  console.log('ALL DONE');
		});

		// This will actually happen before line 9 or line 13
		// or lines 17-19
		console.log(y);

You can also just chain your promise calls like this:

		$.get('https:/api.github.com/users/chrisdavies')
			.done(function (result) {
				console.log(result);
			})
			.fail(function (req, status, err) {
				console.log('FAILED! ' + err);
			})
			.always(function () {
				$('.processing').remove();

				console.log('ALL DONE');
			});

That works because the $.get method, the .done, the .fail, and the .always
methods each return the promise object.

- Promises / Futures / Deferreds
	- A promise is an object that makes handling asynchronous success and/or
	failure easier to handle
	- Similar to a callback, but...
		- Gives you ability to have multiple "success" callbacks
		- Gives you ability to handle errors
		- Gives you ability to handle the "finished" state, regardless of success/failure
	- resolve
		- A method on the promise object that makes the promise call its .done and
		.always callbacks (or .then and .finally callbacks, in Angular's case)
		- You will not call this method unless you manually created a promise
	- reject
		- A method on the promise object that makes the promise call its .fail and
		.always callbacks.. Kind of the opposite of .resolve
		- You will not call this method unless you manually created a promise
	- then / done
		- You register success callbacks by calling .then or .done and passing
		them the function you want to run when the promise resolves
	- catch / fail
		- You register error-handling callbacks by calling .catch or .fail and
		passing them the function you want to run when the promise rejects
	- finally / always
		- You register callbacks that will always run, no matter whether the
		promise resolved or rejected...


		var myPromise = $.Deferred();

		myPromise.done(function (result) {
		  console.log('WE got : ' + result);
		});

		myPromise.done(function (result) {
		  console.log(result);
		});

		// Sometime in the future this call will make the .done functions execute
		myPromise.resolve('All done, yo!');

To make a promise call its .fail callbacks (instead of its .done callbacks), do this:

		// Sometime in the future
		myPromise.reject('All done, yo!');

One example of when you might create and manage your own promise, consider JSONP:

		function getJsonPThing() {
			var myPromise = $.Deferred();

			// For example, when calling a JSONP endpoint/API, JSONP never calls the
			// fail function, because it calls .done with a success/error result.
			$.get('/some/thing.js?callback=?').done(function (result) {
				// If the result is a success, resolve our promise
			  if (!result.isErr) {
			    myPromise.resolve(result);
			  } else {
					// If the result was a failure, reject our promise
			    myPromise.reject(result);
			  }
			});

			return myPromise;
		}
