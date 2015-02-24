# Feedback for the Memory game

## Indentation matters!!!

I'm still seeing lots of poorly formatted, improperly indented JavaScript. :/

Here's an example:

    $('.game-card').on('click', function (e) {
      $('.game-board').removeClass('tossing');
      var currentTile = $(this);
      if (firstTile === undefined) {
        firstTile = currentTile;
      }

     else if (firstTile[0] === currentTile[0]){
        console.log('Ignoring duplicate click');
     }

      else if (firstTile !== undefined) {
        compare(firstTile, currentTile);
        }
    });

Looking at this, it looks like there are lots of bugs (and maybe there are).

But it will take you longer to write (and correct mistakes in) code like this,
because such code is harder to reason about and understand!

And prospective employers who look at this code will probably be inclined to
rule you out!

Here's what it should look like:

    $('.game-card').on('click', function (e) {
      $('.game-board').removeClass('tossing');

      var currentTile = $(this);

      if (firstTile === undefined) {
        firstTile = currentTile;
      } else if (firstTile[0] === currentTile[0]){
        console.log('Ignoring duplicate click');
      } else {
        compare(firstTile, currentTile);
      }
    });

Much easier to read and debug!

## Long blocks of code

I saw lots of really long if statements like the one in this code snippet:

    app.checkMatch = function () {
      var firstTile,
          firstIcon,
          secondIcon,
          matches = 0;

      $('.back').on('click', function () {
        var currentTile = $(this);
        if (firstTile === undefined) {
          firstTile = currentTile
          firstIcon = currentTile.children();
          $(firstIcon).fadeIn();
        } else if (firstTile[0] === currentTile[0]) {
          $('.alert-modal').fadeIn().delay(1000).fadeOut();
        } else {
            secondIcon = $(this).children();
            $(secondIcon).fadeIn();
            if (firstTile.text() === currentTile.text()) {
              matches = ++matches;
              console.log(matches);
              firstTile = undefined;
              secondTile = undefined;
              if (matches === 9) {
                $('.win-modal').fadeIn();
              }
            } else {
              $(firstIcon).delay(900).fadeOut();
              $(secondIcon).delay(500).fadeOut();
              app.decrementLives();
              firstTile = undefined;
              secondTile = undefined;
            }
          }
      });

    };

Generally, you want to keep your code blocks (if statements, functions,
  object declarations, etc) nice and compact, otherwise it's pretty
  easy to get lost when trying to follow them.

Here's an alternate solution to the previous code. This isn't doing exactly the same
  logic. We came up with this solution in a CSS huddle. Note that the if
  statements are not longer than 10 or so lines of code. And each function
  is not longer than 10 or so line. Most functions in here are much smaller.

    app.checkMatch = function () {
      var firstTile;

      // I put my click handler on the checkbox, which
      // really simplified a lot. All of my flip in/flip out
      // was handled by pure SCSS...
      $('.game-checkbox').on('click', function () {
        var currentTile = $(this)

        if (firstTile === undefined) {
          firstTile = currentTile;
        } else if (firstTile[0] === currentTile[0]) {
          return false;
        } else {
          // I moved the tile comparision to a separate function
          compareTiles(firstTile, currentTile);

          firstTile = undefined
        }

      });

      function compareTiles(firstTile, secondTile) {
        if (firstTile.val() === secondTile.val()) {
          disableCheck(firstTile);
          disableCheck(secondTile);
        } else {
          setTimeout(function() {
            setCheck(firstTile, false);
            setCheck(secondTile, false);
          }, 750);
        }
      };

      function disableCheck(tile) {
        tile.prop('disabled', true);
      }

      function setCheck(tile, state) {
        tile.prop('checked', state);
      }
    };

This verison is actually still pretty long, but each portion of it is
broken into small little bits. So our if statements became small. Each
function is small, too. It's a good idea to keep every block of code
small, so that you don't have a block of code that runs for more than 10
or so lines of code. 5-7 lines is generally my personal max, if I'm focusing
on writing legible code!

## Timer logic

Timer logic can be tricky. I saw someone with an app.gameTimer function
that was based on the Date object. Nothing wrong with that, but it is
important to note that setTimeout(function () { }, 1000) is not guaranteed
to run exactly 1 second after you call it. Depending on how much work
your machine is doing, it may call your timeout callback after more than
one second has passed (e.g. in 1012 milliseconds or something).

So, if you are displaying the current time and want to update your display
every second, you may occasionally notice that it jumps unexpectedly or
skips a second or something odd...

One way to get around this is just not to use dates, as in the following
example:

  	app.gameTimer = function () {
      // Here, we'll just increment a counter every
      // second (or so).
  	  var totalSeconds = 0;

      // Just a convenience method to pad our numbers with 0s.
  	  function pad(num) {
  	    var padding = '00';
  	    var numStr = Math.floor(num).toString();
  	    return padding.substring(0, padding.length - numStr.length) + numStr;
  	  }

      // Get the elapsed time in 00:00:00 format (hh:mm:ss)
  	  function getElapsedTime() {
  	    var seconds = totalSeconds % 60,
  	        minutes = (totalSeconds / 60) % 60,
  	        hours = (totalSeconds / 120);

  	    return [pad(hours),
  	            pad(minutes),
  	            pad(seconds)].join(':');
  	  }

      // We'll update our $('.timer') span roughly
      // every second
  	  function updateTime(){
  	    $('.timer').html(getElapsedTime());

  	    ++totalSeconds;

  	    setTimeout(updateTime, 1000);
  	  }

  	  setTimeout(updateTime, 1000);
  	};

Alternatively (and an arguably better approach) would be to base the timer
off of the system clock (e.g. using new Date()) and simply to run our setTimeout
every hundred milliseconds or so.
