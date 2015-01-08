# Week 1, Day 1

Question: A client comes to you and wants a slick new website. "Make it look
like Smashing Boxes' website," they say. What do you do?

## Topics

- Icebreaker
- Boundaries & expectations
- How the web works
- Introduction to HTML & CSS
  - Markup, a brief history
  - Separation of concerns
    - Content: HTML
    - Style: CSS
    - Interaction & logic: JavaScript
  - Syntax
  - Pull up jsbin and have the class follow along
  - http://meettheipsums.com
  - HTML: h1...h6, p, img, a, div
  - CSS: selector basics, the cascade
  - CSS: margin, padding, color, background
  - CSS: reset
  - CSS: display, position

- How to think about layout and design
  - Verbiage (text content)
  - Block layout
  - Colors
  - Images & icons
  - Patterns (error messages, profile pictures, etc)
  - Hallway testing

## Notes

### Syntax
Punctuation matters.

[TShirt](http://www.signals.com/signals/T-Shirts-Sweatshirts-Hoodies_4AA/View-All-T-Shirts-Sweatshirts_4AALL/Item_s-Commas-Save-Lives-Shirts_HN3281.html)

  > Let's eat Grandma. Let's eat, Grandma. Commas save lives.

So does a clear end to your statements.

  > Time flies like an arrow fruit flies like bananas.

  > Time flies like an arrow. Fruit flies like bananas.

With computers, punctuation and clearly defined statements *really* matter.

Order matters. These are two very diffrent statments:

  > The thing is a soccer ball. The soccer ball is a thing.

HTML, CSS, and JavaScript all have their own syntaxes

  HTML:

    <tag attrib-name="attrib-value" attrib2-name="attrib-2-value" />
    <tag>Content</tag>
    <!-- comments -->
    <tag attrib-name="you can't put a quote: " in an attribute value">
    <tag attrib-name="you can put an escaped quote: &quot; in an attribute value">

  CSS:

    // The grammar consists of a selector statement, followed by a block of
    // style properties.
    //
    // Blocks are denoted by an open { and a close }
    //
    // CSS properties are denoted by:
    //  - property name
    //  - :
    //  - property value
    //  - ;
    //
    // CSS assignment is a :
    // CSS statement termination is either a ; (for ending property statements)
    // or a } (for ending a block)
    div {
      color: black;
      background: white;
    }

### CSS

Colors. CSS colors are usually defined using hexadecimal (base 16) color notation:

    // Syntax is # defines the beginning of a color
    // The first 2 digits define the value of red
    // The next 2 digits define the value of green
    // The last 2 digits define the value of blue

    #FF0000; // red
    #00FF00; // green
    #0000FF; // blue

    // The shorthand notation uses only three digits:

    #F00; // red
    #0F0; // green
    #00F; // blue

Hexadecimal (or base 16) is really pretty easy. It's a way of defining the value
0-15 using only one character (instead of the 2 that would be required in base
10.) 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

So, FF is 255.

Any color (red, gree, or blue) can have a value from 0 (0 = black) to FF (255 =
full-strength).

More recent browsers also support rgba and hsla

## Exercises


Clone the week-1 starter project:

* cd ~/src
* git clone git@github.com:tiy-durham-fe-2015/week1_exercises.git
* cd ~/src/week1_exercises
* Atom .

If you're not using Atom, open week1_exercises in your editor of choice...

You'll be working from here and jsbin for your in-class exercises.

### Basic Text Layout

Create a blog layout. Blog posts have a header, multiple paragraphs, and
an image or two. (You can download some from [pexels](http://www.pexels.com/).)
Content should be centered on screen, but text should be left-aligned.

Grab your text from here: http://meettheipsums.com/

Play with color, if you want: [here's a color guide from Google](http://www.google.com/design/spec/style/color.html#color-color-palette)

Remember:

- line-length should not exceed 70 characters
- line-height should be proportional to the font-size
- blocks should have extra space (usually a blank line) between them

### Positioning

When you're flying around the world, you often see a map that shows where your
plane is relative to the planet. In this exercise, you're going to do that
using CSS and HTML.

The plane image is: img/plane.svg

The map image is: img/world-map.jpg

Using CSS positioning, put the plane somewhere over florida.

Next, allow the world map to resize with the width of the browser, and make sure
the plane remains over florida, even when the map size changes.


## Assignment

Implement this layout: http://academy.smashingboxes.com/

Don't worry about the animations, hover effects, forms, etc.

  - First, grab resources (images)
  - Implement the big, block layout
  - Implement your basic defaults: colors, fonts, h1, p, a styles, etc
  - Implement the page header details
  - Implement the page "hero" block details
  - etc.
