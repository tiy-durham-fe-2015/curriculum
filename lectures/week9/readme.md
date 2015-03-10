# Week 9

This week, we'll be learning some new stuff:

- Node
- C3 (a charting library built using D3)

And we'll be reviewing some old stuff:

- Design principles (w/ Chance)
- jQuery
- CSS/SCSS
- Angular

Instead of breaking notes apart by day, we'll be organizing notes by concept...

## Goals

- Learn the backend (using Node, Express, and NEDB)
- Learn how to visualize your data using C3 (built on D3)
- Deepen understanding of design via
  - Chance's lecture
  - Reading Google material design

# Homework

Reading (all week):

http://www.google.com/design/spec/material-design/introduction.html

Read up on NEDB:

https://github.com/louischatriot/nedb

## Tuesday

- Integrate NEDB into your API
- Ability to find all friends
- Ability to insert a friend
- Ability to update a friend
- Ability to find a friend by Id
- Ability to remove a friend

## Description

Visualize stats about your friends. Don't like social networks? Don't like
lots and lots of noise? Still want to know stuff about your friends? Welcome
to Friendli!

## New tech

- 3-tier architecture
  - client (e.g. browser, phone, desktop app)
  - server (e.g. rails, node, django)
  - database (e.g. MySQL, Postgres, Mongo, SQL Server)
- NPM
  - bower for the server
  - Packages are libraries to be used by the server
- Node
  - the server
  - runs v8 (Chrome's JavaScript interpreter)
- Express
  - MVC on the server
  - Angular for the server
- NEDB or Mongo
  - the storage layer
  - a nosql database
  - works really well w/ JS, because you store objects directly in the DB

## What you'll be building

- Friend
  - Name
  - Address
  - Gender
  - Birthdays
  - When did you meet them?
- Visualizations
  - Pie-chart: gender
  - Pie-chart: age breakdown (e.g. 20s, 30s, 40s, 50s, 60s, etc)
  - Bar-chart: birthdays per month
  - Line-chart: timeline of when you met peeps
- JSON API in Node
- Persist records in NEDB or Mongo
- Angular (or jQuery) client
- Responsive and beautiful
- Whatevz else you wish

In fact, if you want to build something else, a prototype for a final project
idea, or whatever, it's cool... But I want it to ultimately have:

- Node
- Express
- NEDB or Mongo
- Charts (e.g. pie, bar, line, etc)

## Who you'll work with

- Ben, Bernard
- Jordan, Zach
- Tim, Tom
- Paget, Todd
- Elisha, Grace
- Bobby, Ashley

## Some datasets you might want to use for charting:

http://lib.stat.cmu.edu/datasets/
