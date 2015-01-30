# JavaScript cheat sheet/quiz

There are tons and tons of functions and objects! Where does one
begin? Well, lucky you. I compiled a list of the most useful things you can know.

(Note, this is not exhaustive, so it'll probably morph and grow.)

## Arrays

Here are the most useful methods of the Array type in JavaScript. If you don't
know what each of these does, fix that problem.

- join
- push
- pop
- reverse
- shift
- unshift
- sort
- splice
- concat
- slice
- indexOf
- lastIndexOf
- forEach
- every
- some
- filter
- map

## Strings

How do you convert something (e.g. a number) to a string?

What does the + operator do?

What do these methods do?

- charAt
- indexOf
- split
- lastIndexOf
- replace
- slice
- substr (I prefer slice)
- substring
- toLowerCase
- toUpperCase
- trim

## Numbers and math

How do you convert a string to a number?

What do these operators do?

+, -, /, *, %

What do these methods do?

- Math.random
- Math.abs
- Math.floor
- Math.ceil
- Math.round
- Math.max
- Math.min
- Math.pow

## Objects

What is an object?

How do you create a new object?

What is a constructor function?

What is a property?

How do you add a property to an object?

How do you get a property's value?

What does this code do?

    var obj = { name: 'Joe' };
    var f = 'name';

    console.log(obj.name);
    console.log(obj['name']);
    console.log(obj[f]);

What does this code do?

    var obj = {
      firstName: 'John',
      lastName: 'Smith',
      fullName: function () {
        return obj.firstName + ' ' + obj.lastName;
      }
    };

    console.log(obj.fullName());

What does this code do?

    var obj = {
      name: 'Jane Doe',
      address: {
        street: '123 Somewhere Dr',
        city: 'Durham',
        state: 'NC',
        zip: 23325,

        toString: function () {
          var addr = obj.address;

          return addr.street + '\n' +
            addr.city + ', ' +
            addr.state + ' ' +
            addr.zip;
        }
      }
    };

    console.log(obj.address.toString());

What does this code do?

    function Animal(spec) {
      var self = {
        name: spec.name,

        speak: function () {
          return self.name + ' says hmm...';
        }
      };

      return self;
    }

    console.log(Animal({ name: 'Filo' }).speak());

What does this code do?

    function Animal(spec) {
      var self = {
        name: spec.name,

        speak: function () {
          return self.name + ' says hmm...';
        }
      };

      return self;
    }

    function Dog(spec) {
      var self = Animal(spec);
      self.speak = function () {
        return self.name + ' barks ferociously!';
      }

      return self;
    }

    function Cat(spec) {
      var self = Animal(spec);
      self.speak = function () {
        return self.name + ' purrs loudly.';
      }

      return self;
    }

    console.log(Animal({ name: 'Filo' }).speak());
    console.log(Dog({ name: 'Toto' }).speak());
    console.log(Cat({ name: 'Turd' }).speak());

## The DOM...

I don't mean [this dom](https://www.google.com/search?q=dom&es_sm=91&source=lnms&tbm=isch&sa=X&ei=venKVNnXOqK1sQTj5IGgCA&ved=0CAgQ_AUoAQ&biw=1048&bih=576#tbm=isch&q=don+corleone&spell=1).

There's so much to know about the DOM... What to do?
What to do?

Do this:

### How to get an element (or elements)

- querySelector
- querySelectorAll
- getElementById
- getElementsByTagName
- getElementsByClassName

### How to manipulate an element

- setAttribute
- getAttribute
- hasAttribute
- removeAttribute
- className
- attributes
- classList (IE 10 and up)

### How to add/remove HTML content

- innerHTML
- textContent
- removeChild
- replaceChild
- appendChild
- insertAdjacentHTML
  - https://developer.mozilla.org/en-US/docs/Web/API/Element.insertAdjacentHTML
- document.createElement

### How to navigate the DOM

Given a DOM element, you should be able to go up to
its parent, grandparent, great grand parent, etc or
get its siblings or children using these properties.

- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
- parentNode

### Events

What is an event?

What do these methods do?

- addEventListener
- removeEventListener
- (attachEvent in older versions of IE)

What do each of these events do?

- window.onload
- onclick
- ondblclick
- onmousedown
- onmouseup
- onmouseover
- onmouseout
- onchange
- window.onbeforeunload
- onkeydown
- onkeyup
- onkeypress (representing typing), String.fromCharCode
- onfocus
- onblur

## A note on compatibility in old browsers

Some of these methods aren't supported in older browsers, but that can mostly
be addressed, if need be, with tools like this. http://modernizr.com/
