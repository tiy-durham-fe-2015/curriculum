# Week 2, Day 2

Question: OK, calculators are boring. How do I do something really interactive?

## Topics

- Review
  - Strings, numbers, HTML binding, functions, debugging
- Types: bool
- Conditionals
- DOM: querySelector, querySelectorAll, classList
- Events: addEventListener, removeEventListener
  - See MDN for a full list of available events:
  - https://developer.mozilla.org/en-US/docs/Web/Events

## Exercise(s)

### Flyout Menu

- Create a dropdown menu like this one:
https://dribbble.com/shots/850410-Dropdown-Menu-UI?list=searches&tag=dropdown_menu&offset=0
- It should be hidden by default
- When you click the "Admin Settings" button, the menu should show
- When you click the menu, the button, or the page, the menu should hide

### Modal

- Remember the modal CSS project you did? Cool.
- Create a page with a button on it.
- When you click the button, show a modal
- When you click the greyed out background, hide the modal
- When you click the [X] close button, hide the modal

## Assignment

### Textarea With Max-length

- Write JavaScript which finds any textareas that have a maxsize attribute:
  (e.g. <textarea maxsize="25"></textarea>)
- Write JavaScript to prevent the user from entering more than maxsize chars
- As the user types, show them how many characters they have remaining

![Textarea](https://github.com/chrisdavies/lessons/raw/master/img/chars-left.gif)

### Extra Credit: Auto-Grow Textarea

- Create a textarea that grows (in height) so that it is always bigger than its text content
- Hint: Google to see how this is generally done, but implement it yourself; don't copy/paste

### Double Extra Credit: Dynamic List

- Create a site with a textbox
- When the user enters text into it, add another beneath it
- When the user removes all text from a textbox, and the textbox loses focus, delete the textbox
- There should always be at least one textbox

![Dynamic list](https://github.com/chrisdavies/lessons/raw/master/img/dynamic-list.gif)
