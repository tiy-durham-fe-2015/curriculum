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

Instructions will be added here as soon as they're up and ready!
