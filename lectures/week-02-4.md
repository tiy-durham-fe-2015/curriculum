# Week 2, Day 4

Summary: exceptions, testing, and other good shtuffs

## Topics

- Week recap (1st half of lecture)
- Arrays 201: splice, map, reduce, filter, some, every
- Unit testing w/ QUnit
- Using JS to dynamically generate HTML
- XSS

## Exercise(s)

### Create a User class

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


## Weekend Assignment

### Learn
- Use [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to review/learn about these array methods:
  - forEach
  - map
  - reduce
  - pop
  - push
  - shift
  - unshift
  - sort
  - splice
  - concat
  - indexOf
  - lastIndexOf
  - every
  - some
  - filter

### User Management System Assignment

Implement the user management assignment detailed here: [user management assignment](https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/user_mgmt)
