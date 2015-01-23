# Week 3 - Monday

## Topics

Today, we're going to learn about objects, and a few odds and ends.

## Agenda

- Review: arrays

- Lecture 1: Objects 101
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

## Exercise

Create a useful user object, given the following requirements:

- A user has a first name, last name, email, and roles
- Roles are just strings, such as 'admin', or 'user'
- User should go into a file called user.js
- User constructor should take a spec with the following properties
  - firstName: required
  - lastName: required
  - email: required
  - roles: optional array of strings
- User should have the following properties:
  - firstName
  - lastName
  - email
- User should have the following methods:
  - fullName() - returns the first and last name as a single string value
  - equal(otherUser) - returns true if the user's email matches otherUser's email
  - isInRole(roleName) - returns true if the user has the specified role
  - addRole(roleName) - adds the specified role to the user
  - removeRole(roleName) - removes the specified role from the user

## Assignment

Create a form which allows you to enter in user data:

- firstName
- lastName
- email
- roles (maybe as a textarea, space-delimited)

When the form's save button is clicked,

- Create a User object out of the form element's values
- Add this user object to an array
- Display the array of users as HTML

HINT:

To display your users as HTML:

    document.querySelector('.your-list-class').innerHTML = 'some string';
