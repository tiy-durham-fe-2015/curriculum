# Feedback For Week 2

Hola, class. I had a look at some of your weekend assignments, and here is some
general feedback... Over all, I'm super impressed. Most of you made this game
your own, added your own styling, got the logic working, started manipulating
the UI from JavaScript... Very impressive.

Now for some constructive feedback:

## If and if/else

In one project, I found the following code:

    if (triesRemaining >= 1) {
      document.querySelector('.remaining-guesses').textContent = triesMessage;
    }

    if (triesRemaining === 0) {
      document.querySelector('.remaining-guesses').textContent = "He was too young to die :'(";
    }

This could have been written a bit more concisely and more efficiently:

    if (triesRemaining >= 1) {
      document.querySelector('.remaining-guesses').textContent = triesMessage;
    } else if (triesRemaining === 0) {
      document.querySelector('.remaining-guesses').textContent = "He was too young to die :'(";
    }

Or better yet, we probably could have just gotten away with an else:

    if (triesRemaining >= 1) {
      document.querySelector('.remaining-guesses').textContent = triesMessage;
    } else {
      document.querySelector('.remaining-guesses').textContent = "He was too young to die :'(";
    }

Or an even tidier implementation might look like:

    if (triesRemaining <= 0) {
      triesMessage = "He was too young to die :'(";
    }

    document.querySelector('.remaining-guesses').textContent = triesMessage;

## Consistency Is Key

In most projects I looked at, I would see something like this:

    var winMessage = 'You win';
    var loseMessage = "You lose";

Do you see the issue? Sometimes strings are denoted with '', and sometimes with
"". It would be best to stick to one or the other. (I prefer single quotes.)

When a code base gets large, consistency, even in small things, makes a big
difference in readability and maintainablility.


## -- and ++

In sevral projects, I saw code that looked like this:

    triesRemaining = --triesRemaining;

There is no difference between that and this:

    --triesRemaining;

What -- and ++ do is change the value of the variable to which they are applied.
So:

    var x = 0;
    ++x; // x is now 1
    ++x; // x is now 2

So, there is no reason to do this:

    x = --x;

The assignment here is redundant and less efficient than just doing --x;

## Conditionals

Several times I saw something like this:

    if (correct === false)

Here's a shorter, more idiomatic way of writing that:

    if (!correct)

In another place I saw this:

    if (turnCount === true)

But you could just write:

    if (turnCount)

Again, it's shorter, and once you're used to it, it is just as clear.

## Indentation

I saw inconsistent spacing and indentation (both in HTML and in JavaScript).
This is a maintainability and readability issue. Indentation is ignored by
the browser (generally speaking), but it is not ignored by humans, and we
use it to help us understand code.

Here's an example of what I mean:

    for(var i = 0; i < randomWord.length; i++) {
        if (userLetter === randomWord[i]) {
          dashedWord[i] = userLetter;
        }
      }

        if (correct === false) {
          --triesRemaining;
        }

The way this is indented, it almost looks as if the if (correct === false)
statement is inside of the for loop. It would be easier to read if it was
indented like this:

    for(var i = 0; i < randomWord.length; i++) {
      if (userLetter === randomWord[i]) {
        dashedWord[i] = userLetter;
      }
    }

    if (correct === false) {
      --triesRemaining;
    }


## Variable Declaration

OK. This is a bit of a difficult thing to explain, as I haven't yet covered
scope or globals in class (hopefully, I'll be covering them this week).

However, just to nip any bad habits in the bud, I want to address something.

In one project, I saw variables declared like this:

var word;
    displayWord;
    finalDisplay;
    turnsRem = 8;
    userGuesses = [];
    displayGuesses = 0;
    theText = [];

Now, I really like the idea here. It's nicely oraganized, and the variables are
grouped together so I can get a clear sense of what variables are used by this
application. However, they should be declared like this:

	var word;
	var displayWord;
	var finalDisplay;
	var turnsRem = 8;
	var userGuesses = [];
	var displayGuesses = 0;
	var theText = [];

Or like this (note the commas):

	var word,
	    displayWord,
	    finalDisplay,
	    turnsRem = 8,
	    userGuesses = [],
	    displayGuesses = 0,
	    theText = [];

The reason will be more clear, once we've talked about scope (later this week).
In this statement:

    var example1;
        example2;

What you've really done is declare a local variable named example1, then the
semicolon that follows it ends the var declaration. Next, you declare a global
variable named example2. Declaring a variable without using the var keyword is
a big no-no:

    example2;

It creates a global variable (that is, a variable that is accessible to all
  script files on the page). And that's usually not your intent. As for the
  difference between local and global variables, we'll hopefully go into
  details on weds or thurs.

## DRY

Don't repeat yourself.

In a few projects, I saw something like this:

    document.querySelector('.guess-input').value = '';
    document.querySelector('.guess-input').focus();
    document.querySelector('.guess-input').select();

There's a lot of redundancy there. This would be a better approach:

	var guessInput = document.querySelector('.guess-input');
	guessInput.value = '';
  guessInput.focus();
  guessInput.select();

Here's another common thing that I saw:

    document.querySelector('.game-word').textContent = word;
    document.querySelector('.caption').textContent = 'Uh oh!';
    document.querySelector('.message').textContent = 'You lost big time!';
    document.querySelector('.primary-action').textContent = 'Try again';

It might be cleaner to create some helper functions:

    function element(selector) {
        return document.querySelector(selector);
    }

    function setText(selector, text) {
        element(selector).textContent = text;
    }

Given these helper functions, you can refactor this:

    document.querySelector('.game-word').textContent = word;
    document.querySelector('.caption').textContent = 'Uh oh!';
    document.querySelector('.message').textContent = 'You lost big time!';
    document.querySelector('.primary-action').textContent = 'Try again';

Into this:

    setText('.game-word', word);
    setText('.caption', 'Uh oh!');
    setText('.message', 'You lost big time!');
    setText('.primary-action', 'Try again');

It may look like a marginal savings, but you may find that your logic for
setting an element's text is slightly buggy in some browsers, and this gives
you one place to fix it (in the setText function).

Or, you may find that you need to support an older browser that doesn't support
document.querySelector... In that case, you could fix your code simply by
fixing the element(selector) function.

Remember, if you see a pattern repeating over and over, consider ways to
refactor your code into smaller, more reusable functions!
