# Week 2, Day 2

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
  - strings (text)
  - string/number conversion String(23.4) and Number('23.4')
    - new String("hi") !== new String("hi")
    - String(23) === "23"
    - +"32" === 32
    - Number("32") === 32
  - string length, concatenation
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

- Finish your converter logic
- Pretty up your converter form(s) and publish to GitHub pages
- Make sure your alerts read like English:
  (e.g. if the user enters 34, alert "34 quarts is 136 cups")
- See if you can output the results to the screen, instead of alerting them.
