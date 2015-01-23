# Week 3 - Wednesday

## Topics

Today, we're going to talk about exceptions... and Gulp!

## Agenda

- Homework review

Lecture 1: Exceptions & misc
  - Exceptions
  - Scope/closures
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

- Modify your Monday user object:
- If the User is passed an invalid spec
  - Throw an exception indicating which property is invalid
  - e.g.

    throw {
      message: 'First name is required',
      field: 'firstName'
    }

## Assignment

- Modify your Monday assignment
- Remove onchanged, onclick, etc from your HTML
- Access the form, and its events entirely from JavaScript
- If the user enters an invalid user
  - catch the exception thrown by the user object
  - display a helpful error message on the screen

- Finish your hexclock, if you haven't already!
