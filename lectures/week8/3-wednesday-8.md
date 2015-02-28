# Wednesday, Week 8

- AJAX file uploads
- Websockets vs polling

## File uploading

AJAX is teh bombz. So, how would we upload an image/file using AJAX? It's not
as simple as you'd think... And it only works in IE10+... Again, if you need
to support legacy browsers, you'll need to take a look at a shim:

    http://afarkas.github.io/webshim/demos/

Or, you can just fall back to a non-AJAX file upload in older browsers.

So... How do we do it?

Let's say we have gotten our file input element and stored it in a variable
called fileInput...

    // Get the selected file (assuming that only one file was selected).
    var file = fileInput.files[0];

    // FormData is a built-in (IE10+) object which can be used to build
    // data which will be sent to the server not as JSON, but as if we were
    // doing a normal form POST/PUT. Only this allows us to do the POST/PUT
    // via AJAX instead of requiring a full browser refresh and round-trip!
    var formData = new FormData();

    // Add the selected file to the form data object
    formData.append(fileInput.getAttribute('name'), file);

Once we've got our FormData object properly initialized with the values we
want to send, our next step is to send it! It's trickier than you might expect.

Let's have a look at doing it with jQuery:

    $.ajax({
      url: '/foo/bar', // The URL to post to
      type: 'POST', // The HTTP method (e.g. POST)
      data: formData, // The data to send to the server
      processData: false, // Disable jQuery's mangling of the data
      contentType: false, // Prevent jQuery from adding the content-type header
      dataType: 'json' // What we expect back from server
    }).done(function (data) {
      // TODO: process the successful response
    }).fail(function () {
      // TODO: process the error response
    });

For a full jQuery example, see this:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/jquery-image-ajax

For an Angular example, see this:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-image-ajax

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

## Assignment

Feel free to do another coding challenge from coderbyte...

Play with image previewing.

- What happens if a user selects an invalid image, such as a .txt file or a .psd?
- Is there a way to allow a user to select multiple files at once?
- How about adding the ability for a user to drag a file onto your site?

Play with the image uploading examples from here:

https://github.com/tiy-durham-fe-2015/wk8

- Can you make the upload happen as soon as the user has selected an image?
- Could you allow multiple uploads, one after the other?
- Could you show a processing indicator while the upload was happening?

Play with the chatting application (especially the WebSocket version!)

- While your browser is open, stop the server and restart it
- See how this breaks the websocket communication
- Can you make the websocket reconnect if the server was rebooted?
