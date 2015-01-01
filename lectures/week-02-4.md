# Week 2, Day 4

Summary: exceptions, testing, and other good shtuffs

## Topics

- Week recap (1st half of lecture)
- Arrays 201: splice, map, reduce, filter, some, every
- Unit testing w/ QUnit

## Exercise(s)

### Create a UserManagement class

- user.isInRole(roleName)
  - use 'some' to determine if the user's roles contains the roleName

- users
  - add(user)
  - remove(userEmail)
  - query()

- roles
  - add(role)
  - remove(roleName)
  - query()

- users.queryByRole(roleName)
  - use 'filter' to extract users in a certain role
  - e.g. users.inRole('admin')

- users.areInDomain(domainName)
  - use 'every' to test if every user has an email that ends in '@' + domainName
  - e.g. users.areInDomain('gmail.com')


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

### User Management System

Nearly every application you will ever write will have some kind of user management.
We've already worked on it a bit. Now, we're going to refine it.

- Copy my week 2 project repo
  - Use the instructions here to make the copy:
  - https://help.github.com/articles/duplicating-a-repository/
  - Here's the repo:
  - TODO...
- Create a class: UserRepo
- Get the unit tests to pass
  - In the terminal, cd to your project directory
  - gulp test

### User Management UI

- Using the user repo class and the UI we made in class this week,
  - Create a page that has several forms
  - Add user
  - Add role
  - Assign role to user
  - Remove user
  - Remove role
