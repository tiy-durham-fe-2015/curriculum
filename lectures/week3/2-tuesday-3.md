# Week 3 - Tuesday

## Topics

Today, we're going to talk about the DOM. Wut wut!

- How to get an element
- Manipulate attributes and CSS classes
- Create/manipulate HTML
- Events

## Agenda

- Lecture 1: DOM
  - Getting an element
    - querySelector
    - querySelectorAll
    - getElementById
    - getElementsByTagName
    - getElementsByClassName
  - Manipulating an element
    - setAttribute
    - getAttribute
    - hasAttribute
    - removeAttribute
    - className
    - classList (IE 10 and up)
    - attributes
  - Create/manipulate HTML
    - innerHTML
    - textContent
    - removeChild
    - replaceChild
    - appendChild
    - insertAdjacentHTML
      - https://developer.mozilla.org/en-US/docs/Web/API/Element.insertAdjacentHTML
    - document.createElement
  - Traversal
    - childNodes
    - firstChild
    - lastChild
    - nextSibling
    - previousSibling
    - parentNode
  - Events
    - addEventListener
    - removeEventListener
    - (attachEvent in older versions of IE)
    - window.onload
    - onclick
    - ondblclick
    - onmousedown
    - onmouseup
    - onmouseover
    - onmouseout
    - onchange
    - window.onbeforeunload
    - onkeydown
    - onkeyup
    - onkeypress (representing typing)
    - onfocus
    - onblur

A full list can be found here:
http://www.w3schools.com/jsref/dom_obj_event.asp

You're most interested in key and mouse events... And beware of old browsers!

- Exercise

- Lecture 2:
  - setTimeout
  - dates

## Exercises

### Flyout Menu

- Create a dropdown menu like this one:
https://dribbble.com/shots/850410-Dropdown-Menu-UI?list=searches&tag=dropdown_menu&offset=0
- It should be hidden by default
- When you click the "Admin Settings" button, the menu should show
- When you click the menu, the button, or the page, the menu should hide

## Resources

You may find it handy to look into the full HTML element reference here:
https://developer.mozilla.org/en-US/docs/Web/API/Element

Or the node reference here:
https://developer.mozilla.org/en-US/docs/Web/API/Node

## Assignment

- Finish your dropdown menu.

- Do the hexclock assignment:

https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/hexclock

### Hard Mode

If you've finished the hexclock really fast, then do a few of these:

https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/js-widgets
