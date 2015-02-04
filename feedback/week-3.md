# Feedback week 3

## Global scope

I see that many of you are still putting all of your variables and functions into global scope.

    var foo = 'baz';

Instead of using an immediately invoked function to avoid polluting global scope:

    (function () {
      var foo = 'baz';
    })();

From now on, this will constitute a failed weekend assignment!

## Code formatting-- spacing

I've seen lots o code that looks like this:

    if (someThing) {
       doThis();
    } else {
       doThat();
    }
    someOtherThing();

There should be a space after the last }, like so:


    if (someThing) {
       doThis();
    } else {
       doThat();
    }

    someOtherThing();

It's a code-styling thing, and trust me-- it matters! If you show sloppy looking code to a prospective employer, you will immediately be docked a few points in their mental evaluation of you.

### Strange empty lines

Here's something else I've seen fairly often:

    var x = 'some value';
    console.log('some text');



    // Note the odd empty space above?
    doSomething(x);


    doSomethingElse(x);

This is another example of odd spacing, and employers won't like it!
This code should look like this:

    var x = 'some value';
    console.log('some text');

    // Note the odd empty space above?
    doSomething(x);

    doSomethingElse(x);

No more than one empty line between lines of code. And there should generally
be one empty line above any comment.

### Odd indentation

Here's something else I've seen pretty often:

    function foo () {

      if (someCondition) {
        console.log('The condition was troo!');
           }

       }

     function bar(text) {
       var x = 32;
       var y = 43;

            alert(text);
          }

It's really tough to follow code like this. So, always, always, always make
sure your closing curly brace is at the same indentation level as the line on
which it's opening is found, and within a block (function, if, whatevz), keep
all code at the same indentation level:

    function foo () {
      if (someCondition) {
        console.log('The condition was troo!');
      }
    }

    function bar(text) {
      var x = 32;
      var y = 43;

      alert(text);
    }

Ah! Much better!

## Commented out code

From now on, I don't want to see commented out code in any published
repositories. If you want to remember how you did something in a previous
version of a file, you can always browse your repo's history on GitHub!
