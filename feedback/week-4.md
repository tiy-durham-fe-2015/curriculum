## Unnecessary returns
    
    function findById(apptId) {
	    appointments = appointments.filter(function (item) {
	        return item.id == apptId;
	    });

	      if(appointments.length > 0) {
	        return appointments[0];

	      } else {

	        return false;
	      }
    }
    
This is not bad, but could be tidied up a bit:
  
    function findById(apptId) {
      appointments = appointments.filter(function (item) {
        return item.id == apptId;
      });

      if (appointments.length) {
        return appointments[0];
      }
    }

## Accidental globals:

    $('.confirm-delete-yes').click(function() {
      theLi = $(this).parent();
      // more logic went here
    });
    
Here, theLi is actually a global variable, because you forgot to put
var in front of it:

    $('.confirm-delete-yes').click(function() {
      var theLi = $(this).parent();
      // more logic went here
    });

One way to prevent yourself from accidentally declaring global variables
is to use JavaScript's 'use strict' option. (Google about it!) Also, Gulp
will complain if you accidentally create globals, so that should help find
this situation!

## Namespaces should be camelCased

In app.js, this:

    var App = {}

Would be more idiomatic if it looked like this:

    var app = {};
    
(And note the semi-colon.)
