# Week 4... Oh, yeah!!!

We'll be building this shweet thing:

https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/appointments

And here is my little hacky project that I showed in class:

https://github.com/tiy-durham-fe-2015/wk4

Game plan:

Implement a little mobile appointment app.

- Mon: Interactive, single-page mockup
- Tue: Actually add/remove appointments
- Wed: Use AJAX to load weather info from a service
- Wed or Thu: Persist locally using local storage
- Thu or Fri: Use templates (handlebars or ejs or maybe Riot?)

## Monday

Interactive, single-page mockup

### Plan

- Review user_mgmt assignment (45 min)
- Overview of week's project (45 min)
  - single page app
  - mobile meta tag n' testing w/ Chrome
  - Trello
- Intro to jQuery (45 min)
  - What is jQuery?
  - What is a library?
  - Why is it useful?
  - Basic manipulation
    - $('selector goes here')
    - .html()
    - .text()
    - .click(func)
    - ??? Maybe .on('event', 'selector', func)
- Stretch goal is to introduce Trello

### Exercise

Think like a programmer:

- What is the recipe/play-by-play for doing tonight's assignment?

- Slide left/right demo:

http://jsbin.com/hoyuqucoro/1/edit?js,output

### Assignment:

- functional mockup
- navigate between static, styled screens in a SPA

## Tuesday

Actually add/remove appointments!

### Plan

- Object modeling (45 min)

- Getting form data (30 min)
  - $('input').val()
  - $('input').val('')
  - $('input').focus()
  - $('input').select()

- Event handling with .on, (30 min)
  - $('.container').on('click', '.child', func)
  - $('.container').off('click', '.child', func)

- Trello, if didn't cover on Monday (30 min)

### Exercise

Think like a programmer:

- What is the recipe/play-by-play for doing tonight's assignment?

### Assignment:

- ability to add appointments
- see them in the list
- appointment details
- edit appointment
- delete appointment


## Wednesday

Use AJAX to load weather info from a service

### Plan

- AJAX 101 (45 min)
  - What is a web API?
  - GitHub API as example
  - getJSON
  - $.ajax ??? (stretch-goal)

- Organizing your project (30 min)
  - Use objects to access/manage APIs
  - Reusable UI components
  - Identifying and separating concerns

- Local storage fancypants (45 min)
  - localStorage.setItem('key', 'value');
  - localStorage.getItem('key');
  - localStorage.removeItem('key')
  - localStorage.clear()
  - JSON.stringify
  - JSON.parse

- Weather map API
  - Current weather:
    - http://api.openweathermap.org/data/2.5/weather?q=Durham,nc
  - Forecast
    - http://api.openweathermap.org/data/2.5/forecast?q=Durham,nc

### Exercise

Think like a programmer:

- What is the recipe/play-by-play for doing tonight's assignment?

### Assignment

- on the appointment detail screen, show the weather
for the place/time of appointment
- save/load appointments from local storage, so that data is
not lost between sessions

## Thursday

Use templates (handlebars or ejs or maybe Riot?)

### Plan

- Templating 101 (45 min)
  - What are templates?
  - Why do you need them?
  - Basics of (handlebars, ejs, or Riot)

- Templating 102 (30 mins)
  - Using script tag hack to embed templates in HTML

- Exercise (30 min)
  - Modify your project to use a template to display the list

- Templating 103 (45 mins)
  - Using AJAX to load templates from server
  - More advanced (handlebars, ejs, or Riot)

### Exercise

Think like a programmer:

- What is the recipe/play-by-play for doing tonight's assignment?

### Assignment

- Reorg your code to use templates instead of building
HTML manually in your JS files

## Friday

Hopefully, just lab, with an optional lecture

### Plan

- Review concepts from week 4
- Introduce momentjs
  - http://momentjs.com/

## Over-arching approach

Teach jQuery with this priority/order

- $('selector')
- .click(func)
- .html()
- .text()
- .submit(func)
- .addClass()
- .removeClass()
- .hasClass()
- .toggleClass()
- .val()
- .focus()
- .select()
- .on('event', 'child-selector', func)

### Stretch goal: routing

- Introduce routing via hash change event
  - rlite?
  - riot?
- Mention HTML5 push state
- Read this: http://learnxinyminutes.com/docs/javascript/

### TODO:

Mention how to run a basic server, if we don't manage to get to Gulp:

    python -m SimpleHTTPServer 8000
