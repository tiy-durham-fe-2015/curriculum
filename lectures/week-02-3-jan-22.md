# Week 2, Day 3

Summary: records and sets

## Topics

- Review day 2
- Loops
  - for
  - while
- Introduction to arrays
  - Array literals
  - length
  - push, pop, slice, unslice, splice
  - looping
  - forEach
  - sort
- Introduction to objects (as records)
  - Object literal syntax
  - Object . accessor
  - Object [] accessor
- Nulls, undefined, and null-coalescing

## Exercise(s)

### User Roles

- FooCorp has asked you to write an app for them
- Part of the app requires user management, which requires role management
- App users can have any number of roles assigned to them
- The app currently has the following roles:
  - Admin
  - Instructor
  - Student
  - TA
- Create a page which dynamically displays these roles
- Use an array to store the roles
- Loop through the array and add an HTML element to the DOM, e.g.:

        <li class="user-role">Admin</li>

### User Roles (w/ Objects FTW!!!)

- Now, FooCorp has asked that the roles screen display the number of users in a role, e.g.

        <li class="user-role">
            <span class="role-name">Admin</span>
            <span class="role-user-count">32</span>
        </li>
    
- Modify your array to contain a Role object, rather than just strings
  - The Role object should have two properties:
  - name
  - userCount
- Modify your display logic to display role names and user-counts.


## Assignment

- Finish up the exercise from class
- Add a form that allows you to enter new roles
- New roles should obviously have 0 user-count
- Add the ability to delete a role (it should also be removed from the array)
- Roles should be displayed in alphabetical order (use the sort method)
- Add the ability for a user to choose the sort-order (z-a or a-z)
- SCSSify it
- Publish it to GitHub

### Stretch Goal

Breezed through the goal assignment? Great. Here's more work:

- Create a users screen
- List all users in the system (from an array of users)
- Users must have the following properties (but feel free to add more properties)
  - firstName
  - lastName
  - email
- Add the ability to enter a new user
- Add the ability to remove a user
- Users should be sorted by email in alphabetical order
