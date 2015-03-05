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

## Image preview

It's a fairly common thing for apps to need to allow users to select one or
more images, then upload them. User experience is greatly enhanced when
the user is shown a thumbnail or preview of the selected image.

This can be accomplished using the browser's FileReader object. Unfortunately,
support for FileReader is only in IE 10 and up.

If you have to support older browsers, this library gives you a Flash-based
fallback: `https://github.com/Jahdrien/FileReader`

So, how does image previewing work?

First, you have to have a file input type, which is HTML's way of asking a
user to choose a file from their system:

    <input name="my-image" type="file">

Then, you need to attach a 'change' event handler for this input, in which
you will detect what file the user chose, read that file's content, and then
stick the file's content into an image element. Let's see how that's done.

Here's a jQuery example:

https://github.com/tiy-durham-fe-2015/wk8/blob/master/src/jquery-image-preview/image-preview.js

For an Angular example, check this out:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-directives-103

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
