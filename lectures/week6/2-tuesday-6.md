# Tuesday, Week 6

Understand MVC (at a high level)

### Topics

- MVC
  - Model view controller
  - Model = data
  - View = your template
  - Controller = the glue that ties a model to a template and wires up behaviors
- Routing
  - onhashchange
  - hash change vs pushstate
  - pattern matching and pulling data from URLs
- Quiz!
- Walkthrough on architecting an app

## Quiz

Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the
number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and
five print “FizzBuzz”."

So this:

fizzbuzz()

Would return an array with 100 items, the first 16 of
which would be:

  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz',
  'Fizz'

When you've finished your solution, create a GitHub gist
  https://gist.github.com/ and send me the link. I'll run your code through
  my unit tests and see if it passes.

## Assignment

Continue working on your Etsy site.

Change your "show user" button to be a link. E.g. something like:

    <a href="#users/<%- item.user_id %>">Seller</a>

Use a hash-based router to enable navigation back and forth between
"pages".

You can use mine:

    bower install rlite

With documentation here:

    https://github.com/chrisdavies/rlite

Or use another one like:

    http://projects.jga.me/routie/
