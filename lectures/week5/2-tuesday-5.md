# Tuesday, Week 5

- Understand MVC (at a high level)

## Talking points

- MVC
  - Model view controller
  - Model = data
  - View = your template
  - Controller = the glue that ties a model to a template and wires up behaviors
- Routing
  - onhashchange
  - hash change vs pushstate
  - pattern matching and pulling data from URLs
- Loading views via AJAX!!!
- Review & Q/A

## Assignment

Install rails:

https://github.com/tiy-durham-fe-2015/curriculum/blob/master/cheat-sheets/rails-setup.md

Just wanted to get that out of the way, so we have a few days to troubleshoot if
something goes wrong!

Continue working on your Etsy site.

Change your "show user" button to be a link. E.g. something like:

    <a href="#user/<%- item.user_id %>">Seller</a>

Use a hash-based router to enable navigation back and forth between
"pages".

You can use mine:

    bower install rlite

With documentation here:

    https://github.com/chrisdavies/rlite

Or use another one like:

    http://projects.jga.me/routie/
