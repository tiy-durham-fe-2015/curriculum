# Week 2, Day 2

The code for week 2 is here:

https://github.com/tiy-durham-fe-2015/wk2

Concepts:

* Debugging
* Types
* Variables
* Functions
* Math

## Topics

- Types 101
  - numbers (floats, ints)
  - operators, ceil, floor, round
    - mod === remainder
  - strings (text)
  - string/number conversion String(23.4) and Number('23.4')
    - new String("hi") !== new String("hi")
    - String(23) === "23"
    - +"32" === 32
    - Number("32") === 32
    - parseInt("23adfasdfa32") works
    - Number("23dfjasdfaj32") === NaN
  - string length, concatenation
  - bools, conditionals
- variables
  - naming, best-practices
  - use-case: reduce duplication (reuse myName in many places, change one place)
- debugging
- functions
  - a named block of code
- comments
- HTML binding
  - Simple calc:
  - http://jsbin.com/gebigutosi/1/edit?html,js,output
- Syntax

- Later lecture:
  - Show how to use Atom instead of vim in git
  - Show how to set up terminal to show branch

## Semicolon Insertion

    // Wrong
    function doStuff() {
      return // semicolon is inserted here
      {
        hello: 'world';
      }
    }

    doStuff() // returns undefined

    // Right
    function doStuff() {
      return {
        hello: 'world';
      }
    }

## Exercise(s)

Fortune cookie...

See fortune.js for details:

https://github.com/tiy-durham-fe-2015/wk2

### Calculator

- Implement the calculator that I demonstrated.
- Make some new buttons (multiply, divide, and mod)
- Try adding the ability to add 3 numbers by adding a third variable and another textbox

### Converter

- Create a form where:
  - User inputs "Quantity/volume"
  - User clicks button "Cups to Quarts"
  - Alert the amount in quarts (1 cup is 0.25 quarts)
- Make a quarts to cups converter
- Make a meters to yards converter
- Make a yards to meters converter
- Make a Fahrenheit to celcius converter
- Make a celcius to Fahrenheit converter

## Assignment

- Create a project called: "week2"
- In this project, put your converter form (from the converter assignment above)
- Use CSS to pretty up your converter form(s) and publish to GitHub pages
- Make sure your alerts read like English:
  (e.g. if the user enters 34, alert "34 quarts is 136 cups")

- Have a look at the number guessing game challenge found here:

https://github.com/tiy-durham-fe-2015/wk2

- Add that to your "week2" project
- Once you get it working, push it to GitHub, too

### Stretch-goal:

- See if you can output the results to the screen, instead of alerting them.

- I'll show you one solution that will work:
- Let's say you have some HTML that looks like this:

    <p class="some-element"></p>

- Then, in your JavaScript, you could do something like this:

    document.querySelector('.some-element').textContent = "Some value";
