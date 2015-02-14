# Tuesday, Week 6

Understand MVC (at a high level)

Guest lecture from the inimitable Chance!

### Topics

- MVC
  - Model view controller
  - Model = data
  - View = your template
  - Controller = the glue that ties a model to a template and wires up behaviors
- Routing
  - onhashchange
  - hash change vs pushstate
  - pattern matching and pulling data from URLs
- Loading views via AJAX, mebbe?

## Assignment

Spend 20-30 minutes reading about Angular here:

https://docs.angularjs.org/guide/introduction

Continue working on your Etsy site.

Change your "show user" button to be a link. E.g. something like:

    <a href="#users/<%- item.user_id %>">Seller</a>

Use a hash-based router to enable navigation back and forth between
"pages".

You can use mine:

    bower install rlite

With documentation here:

    https://github.com/chrisdavies/rlite

Or use another one like:

    http://projects.jga.me/routie/
