# Week 1, Day 2

Scenario: You've done a ton of work. At one point, things were pretty good, but
then the client asked for drastic changes. You tried them. They didn't work.
Now, how do you get back to the version that looked good?

## Topics

- Review previous lesson
  - opacity
  - Specificity
    - Universal selectors
    - Type selectors
    - Class selectors
    - Attributes selectors
    - Pseudo-classes
    - ID selectors
    - Inline style
  - Conventions, casing, naming, etc
- CSS:
  - If you're often repeating yourself, something's wrong
  - Don't use IDs...
  - float
  - color (foreground: borders & text)
  - position
    - fixed
    - absolute
    - relative
    - static
    - z-index
    - y is zero to +infinity in the downward direction
  - background
    - images
    - positioning
      - x y
    - scaling
    - stacking
    - repeating
  - box-model
    - content-box
    - padding-box
    - border-box
  - fonts
    - line-height
    - importing a font
    - discuss icon fonts
  - overflow
    - visible
    - hidden
    - scroll
    - auto
  - pseudo-selectors
    - :visited
    - :before
    - :after
    - :hover
    - :empty
    - :first-child()
    - :last-child()
    - :nth-child()
  - responsive design vs adaptive (breakpoints)

    @media (min-width: 700px), handheld and (orientation: landscape)

- favicons

- Terminal & Git basics
  - pwd, cd, mkdir, ls, open, Atom
  - git branch, add, commit, push, pull
- GitHub source and pages
  - Walk through setting up the homework:
    - tiy-site folder
    - git init
    - .gitignore
    - commiting
    - branch (gh-pages)
    - pushing to GitHub

## Notes

Things I forgot to cover (or didn't know) yesterday:

* Border width does not support percentages
* Don't use #id selectors in CSS (pretty much ever)

CSS specificity rules:
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

CSS box-sizing:
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

CSS pseudo-classes:
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

CSS responsive-design media queries:

* http://css-tricks.com/snippets/css/media-queries-for-standard-devices/
* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries

Git cheat sheet:
https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf

## Exercise(s)

### Chatter

Create a chat text-bubble layout... Here's some inspiration:

- https://dribbble.com/shots/1164814-iOS-7-Chat-View-Interaction-Animation-and-Freebie
- https://dribbble.com/shots/640702-Speech-Bubbles

If you need an image for the person doing the talking, here are some dashing
profile pics you can use:

- https://avatars.githubusercontent.com/u/833377?v=3
- https://avatars.githubusercontent.com/u/2739321?v=3

### Modal

Create a modal. For example:

- https://dribbble.com/shots/1150089-Expiration-for?list=searches&tag=modal&offset=38

- The content behind the modal should be darkened or greyed and not clickable
- There should be a close icon or X somewhere on the modal
- The content should be scrollable if it gets really long

## Assignment

- Create a git repo for yesterday's assignment
- Finish implementing yesterday's assignment: http://academy.smashingboxes.com/
- Finish your in-class exercises
- Play this: http://flukeout.github.io/
- Read this: http://blog.froont.com/9-basic-principles-of-responsive-web-design/
