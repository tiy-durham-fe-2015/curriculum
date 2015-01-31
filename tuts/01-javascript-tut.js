// This is a single line comment

/*
  This is a multiline comment
  (I prefer the single line variant)
*/

// Let's talk about numbers.
// You define them as literals like this:

7; // an integer
8.5; // a floating point number

// Notice the semicolon? The smicolon is not always
// required, but it's pretty good to pretend that it is.
// Semicolons end statements, the way periods end
// statements in JavaScript.

// You can do math with them:
7 + 5; // add
3 - 1; // subtract
9 * 4; // multiply
10 / 3; // divide (produces 3.3333333333333335)
87 % 10; // modulo... (produces a remainder, in this case 7)

// As you note with 10 / 3, floating points are prone to
// rounding errors, and these do accumulate!

// Under the hood, all numbers in JavaScript are really
// floating point numbers

5 + 4 * 3; // What do you think this produces?

// JavaScript evaluates left to right, however,
// there is operator precendence which overrides this
// so, * and / and % are processed before + and -

5 + 4 * 3; // 17
(5 + 4) * 3; // 27

// Let's talk about Math. There's a Math object which
// has some useful functions... (I know. I haven't
// even introduced functions, yet, but bear with me)

Math.round(47.7); // 48
Math.floor(47.7); // 47
Math.ceil(47.2); // 48
Math.abs(-5); // 5
Math.abs(5); // 5
Math.random(); // a random number between 0 (inclusive)
  // and 1 (exclusive), that is it might be 0, 0.572, but
  // it will never be 1

// To produce a random number between 0 and N,
// just multiply Math.random() by N and round it:
Math.round(Math.random() * 3); // 0, 1, 2, or 3

///////////////////////////////////////////////////////
// Let's leave off there for a minute and talk about
// another type... strings.

// strings are a language's way of representing text
"Hello, Class!";

// when two strings are added together, they are
// concatenated...
"Hello," + " Class!"; // produces a single string: "Hello, Class!"

// strings have a length property
"Hello".length; // = 5

// strings can be converted to numbers
Number("32.3"); // = 32.3

// And numbers can be converted to strings!
String(32.3); // = "32.3"

///////////////////////////////////////////////////////
// New type: booleans!!!

true; // true
false; // false

// true and false are keywords in JavaScript and they
// are called booleans. The boolean type permits only
// one of two values true or false

!true; // false
!false; // true

// The ! operator negates the value of a boolean
// When are booleans used?
// All... the... time

3 === 3; // true
3 === 4; // false
3 !== 3; // false
3 !== 4; // true
3 < 4; // true
3 > 4; // false
3 >= 3; // true
3 <= 3; // true
3 <= 4; // true
3 <= 2; // false

///////////////////////////////////////////////////////
// Variables... bum bum BUUUM!!!

var age = 34; // This is how old I am

// Variables are a way for you to name a value
// and variable values can change at a later point:

age === 34; // true!

age = 35; // Assign a new value to age

age === 35; // true

// Variables should *always* be declared with the
// var keyword. Failure to do so produces weird
// behavior.

var name = "Chris"; // This is my name

// Let's tell visitors to this page how old I am

console.log(name + " is " + age + " years old.");

// Wait! What's that console.log thing?
// It's how we write to the browser's console
// So, if you open the browser's dev-tools:
// Cmd + Option + J
// You'll see "Chris is 34 years old."
// Pretty nifty

var favoriteColor;

// I just declared a variable, but I didn't give it
// a value. What happens?

console.log("Favorite color is: " + favoriteColor);

// It's a special value called undefined

console.log(favoriteColor === undefined); // logs true

// One last note about variables.
// They should begin with a $, _, a-z, or A-Z
// They can contain numbers after the first letter
// They ought to be camelCased

// var myDog; // good
// var _myDog; // Weird, but fine
// var $myDog; // Weird, but fine
// var 5Dogs; // ERROR!
// var dog5; // Sure. Works
// var MyDog; // Works, but doesn't follow naming conventions
// var my_dog; // Works, but doesn't follow naming conventions

//////////////////////////////////////////////////////
// Conditionals

// Conditionals are where it's at. They are happnin.
// They are a way to run one set of code if a condition
// is true and another set of code if it isn't.

// Remember our age variable?

if (age > 30) {
  console.log("You're really old!");
} else if (age > 20) {
  console.log("Enjoy it while you can...");
} else {
  console.log("Yungin");
}

// The if statement works like this:
// if (some evaluation that produces a boolean) {
//   Logic that you want to run if the evaluation
//   was true
// }

if (true)  {
  // This will always run
}

//////////////////////////////////////////////////
// A couple more things to note:

// We've talked about console.log()
// There are a couple other functions to consider
//
// alert("Hello") will show an alert box
//
// prompt("What do you want?") will ask the user for
// data by showing them an alert with a textbox in it
//
// prompt returns a value. Let's demonstrate.

// Ask the user for his/her name, then store
// the result in a variable called username
var username = prompt("What's your name?");

// Alert a friendly hello to the user
alert("Hello, " + username);

// These are pretty annoying, so let's not use these
// for too much longer... there's a better way

// So, let's put this all together
