# Templating

Tired of manually building HTML in your JavaScript? Tired of writing code that
looks like this:

    var span = $('<span></span>');
    span.text(user.name);
    $('#some-place').html(span);

Yeah. Me, too. Fortunately, there's a thing called templating that makes this
process much less painful.

What if you were able to write code that looked like this:

    <span><%- user.name %></span>

And then it would magically turn into the proper HTML:

    <span>Chris Davies</span>

That'd be nifties!

Well, now you can! Huzzah!

What I have just shown you is called a template. It basically is a string
that has some placeholders in it. <%- user.name %> is a placeholder that will
be replaced with the properly escaped value of the name property on the user
object.

There are many different types of templating languages and engines out there,
but for now, we will be using Lodash. (It's one of the fastest.)

Here's how it works...

## First get lodash

In the terminal, if you have bower installed:

    bower install lodash

If you don't have bower, you can just go here and download lodash into your
js/lib directory or some place:

https://lodash.com/

## Next, let's create a hello world template

OK. We've got lodash. It's a library, similar to jQuery. It does lots and lots
of stuff, but right now, we're just going to use it for templating.

Create an HTML file that has a body like this:

    <body>
      <div id="main">
      </div>

      <!-- Include lodash, jquery, and your own app.js scripts here -->

    </body>

Be sure to include script tags whose src attributes point to lodash, jquery,
and your own JavaScript file. (I'll be referring to your own JS file as app.js
from now on.)

Now, in app.js, do something like this:

    var foo = _.template('<h1>Hello, <%- m.name %>!</h1>', { variable: 'm' });
    var renderedHtml = foo({ name: 'Jon Doe' });
    $('#main').html(renderedHtml);

Now, refresh your HTMl file and see what happened. You should see a big h1
tag that reads: "Hello, Jon Doe!".

Let's talk about what's going on.

First, let's talk about that _.template thing.

Just like jQuery defined a global variable "$", so lodash defines a global
variable "_". So, when you see _, what you are really seeing is a variable
that points to a big object (which is defined in lodash.js).

    _.template

Lodash has a method called "template", which takes a template string, and
returns a handy little function for you. The second parameter to "template" is
an object that tells Lodash the name of the data parameter used in the template.

What do I mean by "the data parameter"?

Notice my template string:

    '<h1>Hello, <%- m.name %>!</h1>'

There, you see "m.name". What that means is that whenever we render this
template, we are going to pass it an object that has a "name" property. The
variable that points to our object is "m".

So:

    _.template('<h1>Hello, <%- m.name %>!</h1>', { variable: 'm' });

Here, we are saying, "Lodash, give me a function such that, when I call it,
it will return a string of HTML"

And all together, now:

    var foo = _.template('<h1>Hello, <%- m.name %>!</h1>', { variable: 'm' });

We are storing the function returned by _.template in a variable named foo. So,
foo points to a function which will render our template.

Next, we see this line:

    var renderedHtml = foo({ name: 'Jon Doe' });

What this is doing is just rendering our template, and passing the object:
{ name: 'Jon Doe' } as the data parameter that we named: "m".

Finally, we stick our HTML into the DOM using jQuery.

## Escaped values, unescaped values, and logic in templates

### Escaped

This will escape the string value of m.user. So, if m.user was this string:
"<script>alert('hi')</script>", it wouldn't actually execute the script! You
should always use <%- %> when rendering data that may have been created by
a user.

    'hello <%- m.user %>!'

### Unescaped

If you were to do this:

    'hello <%= m.user %>!'

And m.user was the alert script, then this would actually execute the script.
So, use <%= %> whenever you trust the source of the data you are rendering!

### Loops

You can put JS code into your templates like this:

    <% m.technologies.forEach(function (tech) { %>
      <div class="tech">
        <%- tech.name %>
      </div>
    <% }); %>

That is going to loop through all of the items in m.technologies (presumably
  an array), and write a div out for each one.

You could put if statements into your templates in much the same way.

## The script hack

So, now, it's a pain in the butt to write HTML templates in JS. It involves
lots of string concatenation, etc.

It'd be much easier if we could write them in our HTML file itself!

Well, we can!

We could do something like this:

    <body>

      <div id="main">
      </div>

      <script type="text/html" id="myTemplate">
        Hello, <%- m.name %>!
      </script>

    </body>

Woah hoa! If you tell the browser, "This script's type is some crazy thing
that you don't understand." Then, the browser will just ignore the script tag.

So here, we've told it, this script tag is type="text/html" wich isn't a
valid script language. So, the browser ignores it. Now, we just need to
grab this script in our JavaScript and get its inner HTML as a string.

    // Get the template from the hacky script tag:
    var templateString = $('#myTemplate').html();

    // Compile the template as per usual:
    var compiledTemplate = _.template(templateString, { variable: 'm' });

    // Render the template out to our main div tag:
    $('#main').html(compiledTemplate({ name: 'John Smith' }));

That's purty cewl. But what if we had lots and lots of templates? Hmm.. That'd
get pretty tedious.

What if we wrote a little bit of code that would take all of the templates in
the HTML document, compile them, and store them in some easily accessible way?

OOooh. Let's do that. I'll create a file called 'tpl.js' which will hold this
code:

    // An object that will hold all of our templates.
    var views = { };

    // Initialize views with all of the templates from the
    // script hack in our HTML
    (function () {
      // Get all scripts that are of type "text/html"
      $('script[type="text/html"]').each(function () {
        // For each one of those scripts, we want to get it, and remove it
        // from the DOM. (No use keeping useless scripts in the document!)
        var elem = $(this).remove();

        // Now, elem is the current <script type="text/html"> element.
        //
        // Add a property to our views object with the same name as the
        // script's id attribute.
        //
        // So, if we had a <script id="foo" type="text/html">
        //
        // We'd expect to be able to do this:
        // var html = views.foo({ name: 'James' });
        //
        // Where foo is the compiled template that was defined in the script
        // tag whose id was foo... Hmm...
        views[elem.attr('id')] = _.template(elem.html(), { 'variable': 'm' });
      });
    })();


Now, if we have an HTML file that looks like this:

    <body>

      <div id="main">
      </div>

      <script type="text/html" id="myTemplate">
        Hello, <%- m.name %>!
      </script>

    </body>

We could render the myTemplate template out into the #main div tag like this:

    $('#main').html(views.myTemplate({ name: 'Jane Doe' }));

Teh hotness.

Even cooler, we can now include templates within other templates:

    <body>

     <div id="main">
     </div>

     <script type="text/html" id="header">
        <h1>Hi, <%- m.name %>!</h1>
     </script>

     <script type="text/html" id="myTemplate">
        <%= views.header(m) %>
        <p>You are <%- m.description %>!</p>
     </script>

     <!-- your JavaScript includes should go here -->
    </body>

Now, when we render myTemplate like this:

    $('#main').html(views.myTemplate({ name: 'Joe', description: 'awesome' }));

The #main div will have the following inner HTML:

    <h1>Hi, Joe!</h1>
    <p>You are awesome!</p>

Nifties!
