# User Management

## Description

Nearly every application you will ever write will have some kind of user management.
We've already worked on it a bit in class. Now, we're going to refine it.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand the basics of unit testing
* Understand the basics of object construction
* Understand the basics of array manipulation
* Understand the basics of variables, properties, and methods
* Understand the basic use cases of Git for single-developer projects

### Performance Objectives

After completing this assignment, you should be able to effectively...

* Program using arrays, objects, strings, and numbers
* Code against a suite of tests

## Details

### Make a Fork of The user_mgmt Starter Project

The project can be found here:
[user_mgmt](https://github.com/tiy-durham-fe-2015/user_mgmt_gulpless):

### Deliverables

* A repository named "user_mgmt"
* A working implementation of User, ObjectStore, UserStore
* All tests should be passing
* A UI that allows you to dynamically add users to a list

### Requirements

#### Implement a User Class

It should be defined in js/user.js

- A user has three properties:
  - firstName
  - lastName
  - email
- User constructor should take a spec with the following properties
  - firstName: required
  - lastName: required
  - email: required
- If the User is passed an invalid spec
  - Throw an exception indicating which property is invalid
  - e.g. throw { message: 'firstName is required', field: 'firstName' }
- User should have the following methods:
  - fullName() - returns the first and last name as a single string value
  - equal(otherUser) - returns true if the user's email matches otherUser's email

#### Implement an ObjectStore Class

It should be defined in js/object-store.js

- ObjectStore has the following methods:
  - exists(obj) - returns true if there are any objects in the store whose .equal method matches obj
    - HINT: You'll probably want to use the Array object's some method to do this
  - add(obj) - adds an object to the store
    - if obj already exists in the store, the add method should do nothing
  - remove(obj) - removes any objects whose .equal method matches obj
  - query() - returns an array containing all objects in the store

## Normal Mode

Get all unit tests to pass.

First, open test/user-test.html in your browser.

Then, implement js/user.js such that the tests in test/user-test.html passes.

Next, open test/object-store-test.html in your browser.

Then, implement js/object-store.js such that the tests in test/object-store-test.html passes.

Then, use your User and ObjectStore classes to build a website:

- Create a form with first name, last name, and email fields
- When the form is submitted,
  - Create a new user object with the field values
  - Add that user to the ObjectStore
  - Show all users in the ObjectStore

![Add user screen](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/week2-add-user.gif)

## Hard Mode

- Add the ability to remove a user (by clicking an X in the UI list)
- Sort all users alphabetically by full-name
- Add a sort dropdown with the options 'a-z' and 'z-a'
- When the user changes the value of this dropdown, the list of users should change their sort order

![Sort user screen](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/week2-sort-users.gif)

## Nightmare Mode

- Add a search box
- When the user types in the search box, dynamically change the users list to show only those users that match the search term
  - search across first name, last name, and email

![Filter user screen](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/week2-filter-users.gif)
