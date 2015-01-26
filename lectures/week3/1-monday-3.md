# Week 3 - Monday

* Mention CSS huddle and off-topic huddle

## Topics

Today, we're going to learn about objects, and a few odds and ends.

- What is an object?
- How to use an object for:
  - Hashing
  - Data modeling
  - Creating abstractions/encapsulation

- While loops
- Boolean ands and ors

## Agenda

- Review: arrays

- Lecture 1: Objects 101
  - What is an object?
  - What are objects for (in JavaScript)
    - hashing
    - modeling data
    - creating abstractions (generally making up for deficiencies in JS)
  - Object literal syntax
  - Object . accessor
  - Object [] accessor
  - Constructor methods w/ specs

- Excercises:
  - Create a user object
  - Create a groups object
  - Create a management object
    - Find all users in a group
    - Find all groups a user belongs to

- Lecture 2: Misc
  - && and ||
  - strings
    - trim
    - slice
    - substr

## Coding to an abstraction rather than an implementation

There is a principle in programming which states that your functions/methods
should require the most abstract arguments possible. That is, they should,
as much as possible, not constrain the caller to pass in a specific
implementation. In JavaScript, this is a fairly easy principle to follow.

I'll give an example:

    // printList takes a collection of items and prints them to the
    // console
    function printList(list) {
      list.forEach(function (item) {
        console.log(item);
      });
    }

Normally, you would look at this function and assume that lines was
an array. But lines really can be any object, provided that object has
a "forEach" function.

Now, if printList had been written like this:

    function printList(lines) {
      for (var i = 0; i < lines.length; ++i) {
        console.log(lines[i]);
      }
    }

This second implementation of printList is much less usable. It requires
lines to be an array. This is one reason to use forEach instead of the normal
"for" statement. "forEach" is coding to an abstraction. "for" is coding
to an implementation (an array or array-like thing).

## Exercise / Assignment

### Data modeling

The purpose of the data modeling exercises is that you can think about a domain, and come up with a reasonable data structure to represent it... This is a skill you will absolutely need!

Create an object that models the data required to represent:

- A Twitter tweet (user who tweeted, message, number of retweets, etc)
- A reservation on AirBnB... (probably containing who booked the reservation, start date, end date, status of the resrvation, etc).
- A Gmail box (probably containing an array of email messages which would themselves be objects).
- An order on Amazon

### Hashing - distinct

Create a function:

    distinct(arr)

This function takes an array as its argument and returns a new array
containing each value from the original array, but only once.

Example:

    distinct(['a', 'b', 'a', 'c', 'd', 'd'])

    // Returns: ['a', 'b', 'c', 'd']

### Hashing - HTMl escaping

Create a function:

    escapeHtml(str)

This function takes a string as its argument and returns that string's
text, but with any reserved HTMl characters (<, >, &, ", ') properly escaped.

Example:

    escapeHtml('He said, "Whatevz."');

    // Returns: 'He said, &quot;Whatevz.&quot;'

### Hashing - Word count

Create a function:

    wordCount(str)

This function takes a string as its argument and returns an array of objects
containing the words that occurred in a string, as well as how often
those words occurred. Capitalization and punctuation are ignored.

Example:

    wordCount('A cat, a mouse, and the Cat Captain.');

    // Returns:
    [{
      word: 'a',
      count: 2
    }, {
      word: 'cat',
      count: 2
    }, {
      word: 'mouse',
      count: 1
    }, {
      word: 'and',
      count: 1
    }, {
      word: 'the',
      count: 1
    }, {
      word: 'Captain',
      count: 1
    }];


## Assignment

### Reading
Read the section above, titled: "Coding to an abstraction rather than
 an implementation"

### Work

Next, do the following (at least do the normal mode). If you finish the
following assignment in normal mode, either move on to hard mode, or finish
up the exercises listed above. You may also optionally provide a UI which
uses the objects you have defined today (either those in the following
assignment, or those from your exercises).

### Normal Mode

The purpose of this assignment is to understand how objects can be used
to create useful (and powerful) abstractions.

Your assignment today is to implement an enumerable pattern in JavaScript.
The enumerable pattern is one that exists in nearly every modern language.

An object is enumerable if it has the following method:

    enumerate(callback)
    Enumerate behaves very similarly to Array.forEach, except that the
    callback takes different arguments.

    callback
      A function which takes the following arguments

      currentValue
        The value of the current item in the iteration

      enumOptions
        An object which can be used to cancel the enumeration process by
        calling: enumOptions.cancel()

Example usage:

    // Now, list is expected to be an enumerable
    function printList(list) {
      list.enumerate(function (item) {
        console.log(item);
      });
    }

    // We could also write a function that looks like this
    function printFirstN(list, n) {
      var i = 0;

      list.enumerate(function (item, options) {
        ++i;

        console.log(item);

        if (i >= n) {
          options.cancel();
        }
      });
    }

---

#### ArrayEnumerable

Create ArrayEnumerable(arr) which takes an array as an argument, and provides
the enumerable interface for an array.

#### RangeEnumerable

Create RangeEnumerable(fromX, toY) which takes two arguments, and produces a
range of integers from fromX to toY, inclusive.

For example, given the following line:

    var enumerable = RangeEnumerable(1, 5);

If one were to enumerate through "enumerable", one would get 1, 2, 3, 4, 5

#### RandEnumerable

Create RandEnumerable() which provides an enumerable interface for random
 numbers. An instance of RandEnumerable will generate an infinite range of
 random numbers. Obviously, you would want to cancel the enumeration at some
 point using options.cancel(), or you would create an infinite loop!


### Hard Mode

Do normal mode first.

Then, create LinqEnumerable(enumerable) which takes an enumerable as its
argument and returns an enumerable that also has really handy chainable
methods similar to those of Array, with a few others sprinkled in for
convenience:

- skip
- take
- filter
- map
- toArray
- enumerate

These methods all return a LinqEnumerable object (or an object that is
  compatible with LinqEnumerable).

These methods are detailed as follows:

    skip(n)
    Skips the next N items in the enumerable.

    take(n)
    Returns only the next N items in the enumerable

    filter(callback)
    Behaves exactly like Array.filter, except it is filtering an enumerable

    map(callback)
    Behaves exactly like Array.map, except it is mapping an enumerable

    toArray()
    Returns the items in the enumerable as an array... Don't call this on an
    infinite range unless you have first used the take method to restrict
    the number of items in the enumerable!

    enumerate(callback)
    The LinqEnumerable's implementation of the Enumerable interface's enumerate
    method.

Here's an example of how you might combine LinqEnumerable and RangeEnumerable:

    function isEven(n) {
      return n % 2 === 0;
    }

    var numbers = LinqEnumerable(RangeEnumerable(1, 2000000))
        .skip(10) // Skip past 1 - 10
        .filter(isEven) // Only take even numbers
        .take(5) // Take up to 5 numbers
        .map(String) // Convert them to a string
        .toArray(); // Convert the whole thing to an array

    // numbers is now this array:
    // ["12", "14", "16", "18", "20"]

That example is obviously contrived, but you can hopefully see the power of
this pattern.

Here's a less contrived example, using the LinqEnumerable object to paginate
and filter a list of users very concisely:

    var pageSize = 10;
    var currentPage = 2;
    var usersArray = [{ name: 'Chris', email: 'cd@example.com' }, { //etc
    var users = ArrayEnumerable(usersArray);
    var secondPageOfUsers = LinqEnumerable(users)
       .filter(function (user) { return user.email.indexOf('@gmail.com') > 0; })
       .skip(pageSize * (currentPage - 1))
       .take(pageSize)
       .toArray();

### Nightmare(ish) mode

First, make sure that the hard-mode chain is lazy-evaluated. That is, you
should be able to do this, and not cause an infinite loop:

    var numbers = LinqEnumerable(RandEnumerable())
      .take(5) // Take up to 5 numbers
      .toArray(); // Convert the whole thing to an array

Now, create an array of at least 15 users, and wrap it in an ArrEnumerable
object.

Generate HTML that displays 5 users at a time.

Create a next/previous button that pages through the list of users.
