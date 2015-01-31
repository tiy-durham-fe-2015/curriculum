// Well, you should read basic-demo, first, then come back.
// Done? Good.
//
// We've covered basic types and conditionals...
// Next up? Functions.
//
// A function is really just a block of code that
// has a name. We use them all the time in English.
//
// For example, when I ask you to make a PB&J sandwich,
// I don't have to give you a list of instructions.
// You know that it means: go get a knife, some peanut
// butter, some jelly, two pieces of bread, probably
// a plate, etc...
//
// So, with functions.

var name = "Chris",
    age = 34; // hard to believe!!!

// Let's say we want to log how old I am
console.log(name + " is " + age + " years old.");

// Now, let's say we want to log how old Sarah is...
name = "Sarah";
age = 22;

console.log(name + " is " + age + " years old.");

// That's a lot of duplicated code... Let's change it.

// First, we will define a function.
// We'll call it logPersonalInfo
//
// It takes 2 parameters, a name and an age.
//
// And it prints those to the console.
function logPersonalInfo(personName, personAge) {
  console.log(personName + " is " + personAge + " years old.");
}

// You call a function by typing the function's name,
// followed by ()
// Inside the (), you put the values you want to pass
// to the function itself.
//
// You've already called several functions.
// alert
// prompt
// console.log
//
// Well, console.log is a bit of a special case, and
// we'll get to that later.

logPersonalInfo("James", 67);
logPersonalInfo("Jane", 32);

// Let's break all of that down...
//
// We created a function named logPersonalInfo
//
// Function names follow the same conventions
// as variable names. camelCased, etc
//
// We declared that it takes 2 parameters.
//
// personName is the first parameter. I gave it the name
// personName, but we could have called it anything, say
// userName, or something.
//
// personAge is the second parameter.
//
// When you call a function, you pass in the values
// you want the function to use for those parameters.
//
// If I were to write this:
// logPersonalInfo("Chris", 44);
//
// This would call logPersonalInfo, and personName would
// be "Chris" and personAge would be 44

// Let's see another example. Here, I've defined a function
// called add, and it takes two parameters, x and y.
// It returns the result of adding those two numbers...
function add(x, y) {
  // return is a keyword that simply says
  // that this function produces a value.

  return x + y;
}

var result = add(5, 4);

// result === 9

console.log("5 + 4 produced " + result);

// You don't have to store the result in a variable
// if you don't want to. You can just use the function
// call as if it is a value!
console.log("6 + 7 is " + add(6, 7));

// Remember the name variable we declared way above?
// I think it should have a value of "Sarah"
console.log(add("Hello, ", name));

// Because add just uses the + operator, and because
// strings understand the + operator, we can actually
// call add with strings as well as numbers, and it
// will just concatenate them.... Weird, eh?

// What happens if you forget to pass in the second
// paramter (in this case, y)? It will be undefined.
console.log(add("You "));
