# Node

## Getting started

- Create your project folder
- Create `readme.md`
- Git init, add and commit
- Create a `package.json` file that should look something like this:

    {
      "name": "feclass",
      "version": "0.0.1",
      "description": "An app to visualize student data",
      "author": "Chris Davies <chris.davies@theironyard.com>",
      "main": "app.js",
      "repository": {
        "type": "git",
        "url": "https://github.com/tiy-durham-fe-2015/feclass"
      }
    }

- Change the name, description, author, and repository url to be your own
- Create a `.gitignore` file that looks like this:

    node_modules
    npm-debug.log

- Git add and commit

## Building a server

Now, you can start building your server!

- Run `npm install --save express`
  - This installs the express web framework, which we'll use to do cool stuff
  - For more info: http://expressjs.com/
- Run `npm install --save body-parser`
  - This installs a Node plugin that you can use to receive JSON requests
- Create `app.js` and make it look like this:

    // We're building our app using express... Let's tell Node's module
    // system that we require express and body-parser...
    var express = require('express'),
        bodyParser = require('body-parser'),
        app = express();

    // Allow JSON posts/puts
    app.use(bodyParser.json());

    // When users go to the URL '/api/friends', we'll give them a JSON response
    // with a hard-coded list of friends.
    app.get('/api/friends', function (req, res) {
      res.json([
        { name: 'Jane', gender: 'f' },
        { name: 'James', gender: 'm' }]);
    });

    // Start the server. Bind it to the port specified in the environment
    // (if any) or else default to port 3000. Write out the address/port
    // to the console so users know where to watch.
    var server = app.listen(process.env.PORT || 3000, function () {
      var host = server.address().address,
          port = server.address().port;

      console.log('Feclass listening at http://%s:%s', host, port);
    });

- In the terminal, run `node app.js`
- In the browser, go to `http://localhost:3000` and you should see some JSON!

## Serving up static content

We'll probably want to serve up HTML, CSS, and JavaScript.

- Serving up static content (HTML, CSS, JavaScript, images, fonts, etc) is as
simple as adding this into your `app.js`

    // Specify src as the place where public files are found
    app.use(express.static(__dirname + '/src'));

This'll work if your static content is in the /src directory.

## Using a database

We also want to use a database to save/load our data. For simplicity, we'll use
an uuber lightweight Mongo-like database called NEDB.

## Organizing your Node project

Next, we'll want to start organizing our app into multiple files rather than
one big `app.js`.

TODO...
