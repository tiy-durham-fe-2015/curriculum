# jQuery 101

First off, what is jQuery?

jQuery is just a JavaScript file. And just like the kind of .js files you've
already written, it contains some objects and functions which are designed
to make certain common tasks easier.

jQuery packs a lot of really convenient functions and objects that make
manipulating the DOM and handling events much easier than doing things
manually. Plus, jQuery includes lots of if/else statements that check
which browser your code is running in. If it's running in Internet Explorer,
jQuery will do the right thing for that browser. If it's running in Chrome,
jQuery will do the right thing for that browser. Trust me, you could do
this manually, but it is a pain!

Finally, before we get started, sometimes you'll hear jQuery referred to as
a library. jQuery is a JavaScript library, which is just another way of
saying, it is a JavaScript file that you didn't write, but which you are
going to use.

Now. Here's what we're going to cover in this tutorial.

1. How to get jQuery
2. How to use jQuery to get DOM elements
3. How to use jQuery to modify DOM elements
4. How to use jQuery to handle DOM events


## 1. How to get jQuery

The most straightforward way is to go here:

http://jquery.com/download/

And download the "compressed, production jQuery 2.x" into your project's
js folder. I usually put it under:

    js/lib/jquery-2.1.3.min.js

or

    js/vendor/jquery-2.1.3.min.js

An alternative way to get jQuery is to use Bower:

http://bower.io/

Bower is a snazzy tool that makes it easy to download JavaScript libraries
into your project.

You have to install Bower first.
Then, you can run this command in your terminal (from your project's
source directory).

    bower install jquery

That's it. Now, you've got jQuery.

So, how do you load it? In your HTML file, you'll just refer to it the same
way you refer to any JavaScript file:

    <script src="js/lib/jquery-2.1.3.min.js"></script>

## 2. Using jQuery to get DOM elements

Well, before I show how to use jQuery to get DOM elements, I'll first show you
how to use jQuery to run a function after the document loads:

    $(function () {

      // Your code goes here

    });

Woah! What? What's that $() thing?

Remember how I said that this is a valid variable name:

    var $ = 'hello, world';
    console.log($);

Here, we've said $ is a variable whose value is 'hello, world'. Well, jQuery
defines a single global variable: $

$ is a function (and also an object!) which is used for a lot of different
purposes.

The $(function () { }) code that you saw above. Means this: jQuery, when the
document has finished loading, I want you to run the function that I pass to
you.

### OK, how do I get some elements?

Let's say you have an HTML file that looks like this:

    <div class="menu-container">
      <button class="menu-action">Show Menu</button>
      <ul class="menu-flyout">
        <li>Menu item 1</li>
        <li>Menu item 2</li>
      </ul>
    </div>

And some CSS that looks like this:

    .menu-flyout {
      display: none;
    }

    .menu-show .menu-flyout {
      display: block;
    }

Then, you might want to use jQuery to add the 'menu-show' class to the
menu-container div in order to show the flyout menu. e.g. you'd want to use
jQuery to change this line:

    <div class="menu-container">

Into this line:

    <div class="menu-container menu-show">

Let's look at how you might do it. In a JavaScript file, you'd put code that
looks something like this:

    // jQuery will run this function when the HTML document is done loading
    $(function () {
      var button = $('.menu-action');
      button.closest('.menu-container').toggleClass('menu-show');
    });

OK. Let's break that down.

$('.menu-action') tells jQuery: go find the element that matches
this selector. We could have also said: $('.menu-container button')
or any other valid CSS selector.

So, this line:

    var button = $('.menu-action');

Is saying, find all of the .menu-action elements in HTML and put the result
in the variable button. It is very similar to this:

    var button = document.querySelectorAll('.menu-action');

Except that jQuery makes lists of elements much, much easier to work with, as
we will see.

Next, you see this line:

    button.closest('.menu-container').toggleClass('menu-show');

Let's break that down.

    button.closest('.menu-container')

This is saying, find the closest parent(s) of our button(s) which happent to
have the 'menu-container' class associated with them.

So, button.closest('.menu-container') returns our <div class="menu-container">
element. Next, you see this:

    .toggleClass('menu-show');

This is going to toggle the 'menu-show' CSS class on the parent that we just
found (e.g. on <div class="menu-container">). So, if our menu-container div
already had class 'menu-show', toggleClass would remove it. If it didn't already
have class 'menu-show', toggleClass would add it.

### Recap

To select one or more elements, do this:

    $('your selector here')

### Handling multiple elements

Let's say we had the following HTML:

    <ul>
      <li>Hello</li>
      <li>World</li>
      <li>Bah!</li>
    </ul>

Here's how we might go about getting the first li:

    var li = $('ul li').first();

Here's how we might get the last one:

    var li = $('ul li').last();

Here's how we would get all of the lis:

    var lis = $('ul li');

Heck yeah! Easy peasy.

What if we want to change the text of the first li?

    // Very similar to doing this:
    // document.querySelector('ul li').textContent = 'Change it up!';
    $('ul li').first().text('Change it up!');

What if we just wanted to get the text of the first li and log it?

    // Very similar to doing this:
    // console.log(document.querySelector('ul li').textContent);
    console.log($('ul li').first().text());

What if we wanted to set the HTML of the last li?

    // Similar to doing this:
    // var lis = document.querySelectorAll('ul li');
    // var li = lis[lis.length - 1];
    // li.innerHTML = '<h2>Some new content for you!</li>';
    $('ul li').last().html('<h2>Some new content for you!</li>');

You can see how doing this manually, without jQuery, would be a lot more work!

What if we wanted to change the text of all of the lis?

    $('ul li').text('All of the lis get this!!!');

Woah. Way easier than using document.querySelectorAll and then looping.

What if we had this HTML:

    <textarea maxlength="50" placeholder="Your address"></textarea>

And what if we wanted to get the maxlength property in JavaScript?

    // maxlen will equal '50'
    var maxlen = $('textarea').attr('maxlength');

Aight, cool. What if we wanted to get the value that a user had typed into a
specific textbox? Say, we had this HTML:

    <input type="text" name="firstName" value="Joe">

We could access that textbox's value like this:

    var name = $('input[name=firstName]').val();

And now, name is a variable with the value 'Joe'.

jQuery FTW!

## Event handling

There are two ways of handling events. Let's start with the simplest, then
I'll try to explain the more complex way (and why you might want to use it
  sometimes).

    $('form').submit(function (e) {

      alert($('input', this).val());

      return false;
    });

Alright, what do we have here?

    $('form')

This just says: "Go get all the form elements on the page".

    $('form').submit(function (e) {

    });

This just says, when any of those forms are submitted, call the function I just
specified. jQuery will pass the event as the first argument to the function.

    alert($('input', this).val());

Woah. What's that thing inside the alert function, you ask?

    $('input', this)

This line is very similar to $('input'), but what is the word this doing in
there?

this is a keyword in JavaScript. It refers to the object on which a method is
running. We haven't talked about it much up till now, because it is confusing
and is generally best practice to avoid it.

In the global context, outside of any function, the this keyword refers to the
window object. So, you could do this:

    this.alert('Hello!');
    // which is exactly the same as writing:
    alert('Hello!');

Confusing? Yeah. It's a stupid and confusing language feature, in my opinion.

Anyway, back to jQuery.

    $('input', this)

First, let's talk about what the value of this is. When a jQuery event is
triggered, the value of this is the DOM element on which the event fired.

So:

    $('form').submit(function () {
      // Here, this would be the form element whose submit event is being
      // handled
    });

    $('button').click(function () {
      // Here, this would be the button whose click event is being handled.
    });

    $('input').focus(function () {
      // Here, this would be the input whose focus event is being handled.
    });

Well, it's possibly confusing at first, but once you're used to it, it's not
so bad.

    $('input', this)

So, what is that line doing? It is saying to jQuery, give me the input elements
that are found inside of this, where this is the form that is being submitted.

    $('input', this).val()

So, that line of code is getting the inputs of the form, then grabbing the
value of the first input.

    alert($('input', this).val())

So, that is just alerting the value of the first input in the form.

OK.

    return false;

That last line there is returning false from our event handler. In jQuery, if
an event handler returns false, the event gets cancelled. This is our way of
saying, "Don't actually submit the form."

So, putting it all together:

    $('form').submit(function (e) {

      alert($('input', this).val());

      return false;
    });

That is saying:

- Any time any form on the page is submitted
- Alert the value of the first input in the form
- And cancel the submit event

### Advanced event handling

Often, it is the case that you'll have a list of HTML items like this:

    <ul>
      <li>Item 1 <button class="delete-me">X</button></li>
      <li>Item 2 <button class="delete-me">X</button></li>
    </ul>

Let's say we want to remove the LI when the remove button is clicked:

    $('.delete-me').click(function() {
      // Get the jQuery object representing the button that was clicked
      var button = $(this);

      // Find the closest parent of button whose tag is 'li', and remove it!
      button.closest('li').remove();
    });

That does the trick. Except in one case... What if we wanted to dynamically
add new lis to that ul? Say, when a user entered new items from a form?

We'll just simulate this scenario like this:

    $('.delete-me').click(function() {
      // Get the jQuery object representing the button that was clicked
      var button = $(this);

      // Find the closest parent of button whose tag is 'li', and remove it!
      button.closest('li').remove();
    });

    $('ul').append('<li>Item 3 <button class="delete-me">X</button></li>');

OK. All we've done is appended a new li to the bottom of the ul. However,
we appended it after we bound our click event to the buttons in ul. This
new li also has a delete-me button, but it was added after we bound our
click event, so there is no click event for it!!

What to do? What to do?

Well, there is an alternative way to bind events. It looks like this:

    $('ul').on('click', '.delete-me', function () {
      // Get the jQuery object representing the button that was clicked
      var button = $(this);

      // Find the closest parent of button whose tag is 'li', and remove it!
      button.closest('li').remove();
    });

    $('ul').append('<li>Item 3 <button class="delete-me">X</button></li>');

OK. So, this code will do almost the same thing that our previous .click code
did. However, what we've done is say this: "UL element, if there is ever a
.delete-me element inside of you that gets clicked, call the function I'm
passing to you."

So now, when we add an li, then click its .delete-me button, this code will
detect it, because the event handler is on the container, not on the individual
items.

Another way of writing it is like this:

    // Deletes the li that contains the button that was clicked
    function myFunc () {
      // Get the jQuery object representing the button that was clicked
      var button = $(this);

      // Find the closest parent of button whose tag is 'li', and remove it!
      button.closest('li').remove();
    }

    // Bind to all delete-me click events that occur inside ul
    $('ul').on('click', '.delete-me', myFunc);

Now, as you might guess, there is also an off method.

    $('ul').off('click', '.delete-me', myFunc);

This just removes the click handler that was previously registered with .on

## For more reading, see the jQuery cheat sheet

There's a whole lot more you can do with jQuery. Adding/removing elements,
inserting elements in very specific ways, etc. For more, head over to my
cheat sheet and then look up the jQuery documentation on the events and
properties I list there.

https://github.com/tiy-durham-fe-2015/curriculum/blob/master/cheat-sheets/jquery.md
