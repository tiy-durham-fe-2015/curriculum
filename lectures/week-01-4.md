# Week 1, Day 4

Scenario:

## Topics

- How to do a grid
	- Keep aspect ratio
	- How to center transform: translate(-50%, -50%)
- SCSS & intro to build processes
  - Nesting
  - Variables
  - Imports
  - Functions
- More pseudo selectors, :valid, :invalid, :required, etc
- CSS animations and transitions
  * http://ianlunn.github.io/Hover/
  * http://daneden.github.io/animate.css/
  * http://www.justinaguilar.com/animations/index.html
  * http://leaverou.github.io/animatable/
- Styling checkboxes and radios

## Useful SASS function to demo in class:

Tots stolen from here: http://sass-guidelin.es/#lightening-and-darkening-colors

     /// Slightly lighten a color
    /// @access public
    /// @param {Color} $color - color to tint
    /// @param {Number} $percentage - percentage of `$color` in returned color
    /// @return {Color}
    @function tint($color, $percentage) {
      @return mix($color, white, $percentage);
    }

    /// Slightly darken a color
    /// @access public
    /// @param {Color} $color - color to shade
    /// @param {Number} $percentage - percentage of `$color` in returned color
    /// @return {Color}
    @function shade($color, $percentage) {
      @return mix($color, black, $percentage);
    }

## Exercise(s)

### Create a dropdown menu

![toggle](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/tshirts.gif)

* When you hover over xl, the sizes should fade and slide in
* When hou hover over color, the color-list should fade and slide in

### Create a Flip Animation

* See the above photo and implement a flip animation similar to the t-shirt flip
* See this CSS for a starter:
* https://github.com/daneden/animate.css/blob/master/source/flippers/flip.css

## Weekend Assignment

Implement the memory game layout detailed here: [memory layout](https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/memory-layout)

Read this: http://sass-guidelin.es/

## The source from today's lecture

https://github.com/tiy-durham-fe-2015/week1-4-examples
