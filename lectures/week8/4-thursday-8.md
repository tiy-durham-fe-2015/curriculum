# Thursday, Week 8

- Review
- Basic authentication
- Q&A
- Python project kickoff

## Websockets vs Polling

Google chat... How's it work?

Well, here's one way you might implement it:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-chat-poll

This strategy is called polling. Basically, it works like this:

- Post data to a server
- Every n seconds, ask the server for any changes since the last request
- Update the UI if the server gives you any changes

The downside to polling is:

- It's laggy (e.g. the user only gets refreshes every n seconds)
- It slams the server if you have 100 users, then you are getting 100 requests
per second, each request sending data just to ask: "Hey, anything new?"

That's pretty inefficient. In the case of something like a chat server, there
is a new, more efficient way... Supported in new browsers. For old browsers,
there are shims:

https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

The new, slick way is WebSockets.

A web-socket is a connection that is always on. Instead of connecting to the
server every N seconds and asking: "Hey, anything new?" You can just keep a
connection open, and the server will send you data whenever it pleases.

This approach gives near instantaneous updates to connected browsers. But it
does mean that if you have 500 users, you will have 500 open connections on
your server, so this solution can be harder to scale.

To see an example of WebSockets in action:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-chat-socks

At some point, you might want to play with the chatting application (especially
  the WebSocket version!) 

- While your browser is open, stop the server and restart it
- See how this breaks the websocket communication
- Can you make the websocket reconnect if the server was rebooted?


## Assignment

This weekend, you'll be building a single page application that calls the
Python class' API.

### Description

Lots of companies need collaboration tools. Unfortunately, these are usually
really complicated, and for non-technical users, they are daunting. We want
to build a collaboration tool that helps people track and collaborate on tasks
without requiring tons of technical expertise. And we *don't* want to overwhelm
them with lots of bells and whistles.

### Focus on MVP

- It's much better to ship a small, polished featureset than a big, ugly, buggy one
- Break your project into pieces
- Get the smallest useful thing done, then ship it
- Rinse and repeat

### Normal Mode

Users can:

- Login
- See tasks assigned to him/her
- Assign tasks to someone via email
- Tasks have:
  - title
  - description
  - comments
  - status (e.g. 'new', 'doing', 'done')
  - a due date (should be in UTC)
- The UI should be responsive (e.g. look good on mobile and desktop)

#### Thoughts about UI and UX

- The UI should represent new, doing, and done tasks logically
- Think about the persona of the end-user
  - How can you represent a task as simply as possible?
  - What is a users' primary concern?
  - What do they most want to see when logging in?
- What other personas might there be? Managers? What would their landing page
look like?

#### Note about authentication

You'll be using basic HTTP authentication, so you'll have to look into sending
the http authentication header with all of your AJAX requests. Google is your
friend!

### Hard Mode

- Tasks can have attachments (images, files)
- Updates to tasks are reflected in "real-time" (e.g. Via web-sockets)
