# Wednesday, Week 6

### What is a framework?

Nearly every complex front-end project will need routing, templating, AJAX,
data-modeling, controllers, etc. When setting out to build such a project,
a team needs to first agree on how they are going to do each of these things.

- How are we going to do routing?
- How are we going to do AJAX?
- How do we define controllers?
- How do we do templating?
- How do we model our data?
- How do we wire all of these things together?

These problems are so common that some people decided to solve them for us.
They built a framework which would say, "Here's how you do all of those
things. You want to make a controller? Do it just like this. You want to
give your controller a certain model? Do it just so. You want to call some
RESTful API? Here's how."

So, a framework is a system that you plug your code into, and-- provided
that you follow the rules of the system-- your site will fall into place.
It gives you a common, standard way to do (most of) your common front-end
tasks.

### What is Angular?

Angular is a front-end framework. It's biggest specialty (in my opinion) is
live data binding.

### A note about events

Events are handled by directives in Angular (more about those later). Basically,
all you need to know is that there are special attributes which are not
standard HTML, but that Angular requires in order to wire up events.

Here's an example:

    <button ng-click="m.doSomethingCool()">Click Me!</button>

Events have access to the event object like so:

    <button ng-click="m.doSomethingCool($event)">Click Me!</button>

So now, in our doSomethingCool method, we could do something like:

    function doSomethingCool(e) {
      e.preventDefault();
    }

## Assignment

Acme Bike Co wants to have a sign (a tablet) at the front of their store that
displays their current featured bikes along with the top accessories for each
bike. This information changes daily, so they want to be able to easily edit
the info that displays on the tablet... That's where you come in!

### Normal mode

Build an Angular application that lets you edit a list of bikes:

You should be able to

- A bike has this info:
  - make
  - model
  - year
  - speed (e.g. '10 speed', '20 speed')
  - base price
  - accessories (which is a list of one or more accessories)
- Accessories have this info:
  - brief description
  - price
- Basic features of the app:
  - Add a bike
  - Remove a bike
  - Edit a bike's info
  - Add accessories to a bike
  - Remove accessories from a bike
  - Display the min/max price for each bike
    - min price is the bike's base price before any accessories are added
    - max price is the bike's price if all accessories are chosen

### Hard mode

- Ability to show the bikes in a pretty read-only view (e.g. without textboxes)
- Local-storage persistence

### Nightmare mode

- Ability to search the inventory from the read-only screen
- Maybe try making it all look nice with Bourbon + Neat + Refills?
