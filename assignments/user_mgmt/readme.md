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
[User Mgmt](https://github.com/tiy-durham-fe-2015/user_mgmt)

Clone your fork to your laptop

- cd user_mgmt
- npm install

You may get an error when running npm install. If so, try this:

- echo prefix = ~/.node >> ~/.npmrc
- Atom ~/.bashrc
- In Atom, add the following line to your .bashrc file:
	- export PATH="$PATH:$HOME/.node/bin"
- Go back to the terminal and run:
  - . ~/.bashrc

### Run the Project

- gulp test
- gulp watchTest

The tests are currently failing. It's your job to get them to pass (without changing any of the test/* files).


### Deliverables

* A repository named "user_mgmt"
* A working implementation of User, ObjectStore, UserStore
* All tests should be passing
* A UI that allows you to dynamically add users to a list

Send the link to your repository to your instructor

### Requirements

#### Implement a User Class

/src/js/user.js

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
- If the User is passed an invalid spec
  - Throw an exception indicating which property is invalid
  - e.g. throw { err: 'User: firstName is required' }
- User should have the following methods:
  - fullName() - returns the first and last name as a single string value
  - equal(otherUser) - returns true if the user's email matches otherUser's email
  - isInRole(roleName) - returns true if the user has the specified role
  - addRole(roleName) - adds the specified role to the user
  - removeRole(roleName) - removes the specified role from the user

#### Implement an ObjectStore Class

/src/js/object-store.js

- ObjectStore has the following methods:
  - add(obj) - adds an object to the store
    - if there is already an object in the store whose .equal method matches obj, don't add obj
  - remove(obj) - removes any objects whose .equal method matches obj
  - query() - returns an array containing all objects in the store
  - exists(obj) - returns true if there are any objects in the store whose .equal method matches obj

#### Implement a UserStore Class

/src/js/user-store.js

- UserStore extends ObjectStore
- UserStore has all of ObjectStore's methods, as well as the following methods:
  - queryByRole(roleName) - returns an array of all users that are in a given role
  - haveSameDomain() - returns true if all users in the store have the same email domain
    - e.g. if all users' emails end in '@gmail.com', this would return true

## Normal Mode

Get all unit tests to pass. To run tests, go to your terminal:

- cd to the root of your project
- run gulp test

Use your User and UserStore classes to build a website:

- Create a form with first name, last name, and email fields
- When the form is submitted,
  - Create a new user object with the field values
  - Add that user to the UserStore
  - Show all users in the UserStore

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
