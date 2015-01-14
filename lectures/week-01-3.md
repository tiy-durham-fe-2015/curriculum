# Week 1, Day 3

Scenario: Your client likes your layout. Now, they want to get information from
their clients... How do you do that?

## Topics

- Use gulp: https://github.com/tiy-durham-fe-2015/gulp-lite
- Intro to Atom (or editors) and gulp (lite)

- Web-fonts
  - http://hellohappy.org/beautiful-web-type/
  - http://app.fontastic.me/

- Tables vs display: table

- box-model
  - content-box
  - border-box

- responsive design vs adaptive (breakpoints)

    @media (max-width: 700px)

- Forms, forms, and more forms
  - form, action, method
  - input
    - text
    - checkbox
    - radio
  - label
  - textarea
  - select
  - button


## Exercise(s)

### Custom Checkboxes/Radios

- Make checkboxes and radio buttons that look like these:
https://dribbble.com/shots/218427-Ui-Elements-Free-PSD?list=searches&tag=checkbox&offset=8
  - Note, use a check font (http://fontello.com/)

### Form layout

- Create a user details form with the following entries:
  - Full name
  - Phone number
  - Email
  - Occupation (as a dropdown)
  - Brief bio (as a textarea)
  - Male/Female (as radio buttons, allowing only one choice)
  - Notification preferences section:
    - SMS notifications (checkbox)
    - Email notifications (checkbox)
  - By signing up, you are accepting terms and conditions (checkbox)
  - Signup (button)

    <input type="text" pattern="[A-Za-z]{3}">

## Assignment

- Finish the form layout from class

- If you want a challenge, use the pattern attribute to validate field formats
  - http://www.w3schools.com/tags/att_input_pattern.asp
  - Here are some common patterns: http://html5pattern.com/
  - Style invalid elements using the :invalid selectors

- Use CSS to make the checkboxes in the preferences section look like:

![toggle](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/checkbox-toggle.gif)

- Play this again: http://flukeout.github.io/
- Read this: http://cssguidelin.es/

## Related Resources

Stuff about @font-face and font-family:

http://css-tricks.com/snippets/css/using-font-face/

Stuff about the mobile meta tag:

http://css-tricks.com/snippets/html/responsive-meta-tag/

MDN on all the various display options:

https://developer.mozilla.org/en-US/docs/Web/CSS/display
