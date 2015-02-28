# Thursday, Week 8

- Review
- Basic authentication
- Q&A
- Python project kickoff

## Assignment

This weekend, you'll be building a single page application that calls the
Python class' API.

### Description

Lots of companies need collaboration tools. Unfortunately, these are usually
really complicated, and for non-technical users, they are daunting. We want
to build a collaboration tool that helps people track and collaborate on tasks
without requiring tons of technical expertise. And we *don't* want to overwhelm
them with lots of bells and whistles.

### Normal Mode

Users can:

- Login
- See tasks assigned to him/her
- Assign tasks to someone via email
- Tasks have:
  - title
  - description
  - comments
  - status (e.g. 'new', 'doing', 'done')
  - a due date (should be in UTC)
- The UI should be responsive (e.g. look good on mobile and desktop)

#### Thoughts about UI and UX

- The UI should represent new, doing, and done tasks logically
- Think about the persona of the end-user
  - How can you represent a task as simply as possible?
  - What is a users' primary concern?
  - What do they most want to see when logging in?
- What other personas might there be? Managers? What would their landing page
look like?

#### Note about authentication

You'll be using basic HTTP authentication, so you'll have to look into sending
the http authentication header with all of your AJAX requests. Google is your
friend!

### Hard Mode

- Tasks can have attachments (images, files)
- Updates to tasks are reflected in "real-time" (e.g. Via web-sockets)
