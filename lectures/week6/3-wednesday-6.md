# Wednesday, Week 6

- Revisit promises
- CSS & design
  - Designing for personas
  - 1 + 1 = 3 line rule
  - Contrast
  - Color palettes
    - http://paletton.com/
  - Few fonts (2, or at most 3 [e.g. if you need to represent code])
  - Using proper spacing to denote boundaries
  - Analysis of design(s)
    - https://www.mint.com/
    - https://global.gotomeeting.com/?_ga=1.89090457.368014762.1424124523
    - https://account.unmatchedstyle.com/register/grok/
    - https://dribbble.com/shots/1933308-Project-Stats-Overview
    - https://dribbble.com/shots/1933193-Mobile-Dashboard
    - https://dribbble.com/shots/1933399-Live-statistics-dashboard
    - https://logentries.com/
- Unit testing
  - Why unit testing is useful
  - How to write unit tests (TDD style) using Jasmine
  - Mocking out objects (keeping tests isolated)

## Quiz!

Write a function "isPalindrome(str)" which takes a string as its argument
and returns true if the string is a palindrome (e.g. if it is the same
  backwards as forwards) and returns false if the string is not a palindrome.

So.

    isPalindrome('hannah'); // returns true
    isPalindrome('hello'); // returns false

## Assignment

### Unit test the palindrome problem

Write unit tests to test your isPalindrome solution.

- Test positive and negative cases
- What should happen if you pass null or undefined to isPalindrome? (Test that
  scenario)

### Convert a number to HEX

Write a function "toHex(n)" which takes a number as its argument and returns
a string representing that number as hexadecimal.

So.

    toHex(9); // returns '9'
    toHex(10); // returns 'A'
    toHex(15); // returns 'F'
    toHex(255); // returns 'FF'

Unit test your toHex function.

### Etsy contd...

If you have more you'd like to do on the Etsy project, please do!

Try using an SCSS framework on the Etsy project (Neat + Refills, maybe?)
