# Week 3 - Wednesday

## Topics

Today, we're going to talk about exceptions... and review objects and the DOM...

... And maybe get into a little Gulp??

## Agenda

- Homework review

Lecture 1: Exceptions & misc
  - Exceptions
  - Scope/closures
  - setTimeout, setInterval
  - Dates
  - ternary: isTrue ? 'Yes' : 'No';
  - short-circuiting
    - var isMyShirtRed = false;
    - var result = (!isMyShirtRed && "it's actually salmon") || "yey for red";
    - value = value || 'default';

Excercise:

Lecture 2: Gulp
  - Minification
  - Cache-busting
  - Automated testing

## Exercise

Create a useful user object, given the following requirements:

- A user has a first name, last name, email, phone
- User constructor should take a spec with the following properties
  - firstName: required
  - lastName: required
  - email: required
  - phone: optional
- User should have the following properties:
  - firstName
  - lastName
  - email
  - phone
- If the User is passed an invalid spec
  - Throw an exception indicating which property is invalid
  - e.g.
    throw {
      message: 'First name is required',
      field: 'firstName'
    }
- User should have the following methods:
  - fullName() - returns the first and last name as a single string value

## Assignment

### Reading

- Read this: https://github.com/airbnb/javascript

### Work

- Finish your hexclock, if you haven't already!

https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/hexclock

- Choose a couple more exercises found here:

https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/js-widgets

Note, if you are shaky with the DOM or with manipulation, you may want to do
a handful of those exercises per week (or invent similar ones) until you are
more familiar!

### Hard Mode

- Create a form that allows you to enter a new user.
- When the form is submitted, create a user object (from today's exercise).
- If the user object throws an exception, catch it and display the exception
message as a validation error on the form.
- See this for inspiration on displaying validation messages:

https://dribbble.com/shots/1396639-Sign-Up-Form?list=searches&tag=validation&offset=0
