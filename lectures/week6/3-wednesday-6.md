# Wednesday, Week 6

- Review: What are these & when do you use them?
  - Model - Data being used by your app (e.g. Appointment)
  - View - HTML representation of data (e.g. Your lodash template(s))
  - Controller - Middle man between view and model, exposes functionality to view
  - Routing - Abillity to respond to changes in the URL and react as desired
  - Promises - Is like a callback, except with more options (e.g. a fail and
    success callback option)
  - Closures - A function always having access to variables in its scope or
  its parent's scope or its grandparent's scope, etc.
  - Walk through setting up the Etsy app & architecture
- Unit testing
  - Why unit testing is useful
  - How to write unit tests (TDD style) using Jasmine
  - Mocking out objects (keeping tests isolated)
- CSS & design
  - Designing for personas
    - Who is your product for?
    - What motivates them / what do they need?
    - What kind of design ethic do they like?
    - What other brands do they gravitate to?
    - How do those brands market/message themselves?
    - What is their demographic info?
    - What is their online behavior?
      - What kind of search terms do they use?
      - What websites do they frequent?
    - What benefit does your product give them?
    - You may (probably will have more than one persona)
      - Pick your primary, if you have one, and focus on that first
      - Try to target each persona
    - Example:
      - You've got a site that helps website admins visualize their web
      traffic. If you were to do a persona analysis, you'd probably find
      that there were 2 primary personas.
      1. The admins who are trying to
      manage the website and keep it up. Their primary goal/motivation would
      be visualizing traffic patterns to detect latency/performance issues
      so they can prevent the site from going down or performing sluggishly.
      2. Business (CEOs, CTOs, and marketers) who want to see if traffic to
      their site spikes after a marketing campaign, or maybe they want to
      see which areas of the site are the most popular, etc.
  - There's a difference between nice visuals and good usability
    - https://www.mint.com/
    - https://global.gotomeeting.com/?_ga=1.89090457.368014762.1424124523
    - https://account.unmatchedstyle.com/register/grok/
    - https://dribbble.com/shots/1933308-Project-Stats-Overview
    - https://dribbble.com/shots/1933193-Mobile-Dashboard
    - https://dribbble.com/shots/1933399-Live-statistics-dashboard
    - https://logentries.com/

## Quiz!

Write a function "isPalindrome(str)" which takes a string as its argument
and returns true if the string is a palindrome (e.g. if it is the same
  backwards as forwards) and returns false if the string is not a palindrome.

So.

    isPalindrome('hannah'); // returns true
    isPalindrome('hello'); // returns false

## Assignment

Read about design personas:

http://webdesign.tutsplus.com/articles/design-personas-injecting-personality-into-your-web-projects--webdesign-7430

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

If you're up for a challenge, on the user's profile, add a link that takes
you to a view of all of that user's listings.

Try using an SCSS framework on the Etsy project (Neat + Refills, maybe?)
