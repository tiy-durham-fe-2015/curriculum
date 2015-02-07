# Monday, Week 5

## Goals

- Understand asset optimization
- Better understanding of AJAX and APIs

## Talking points

- Gulp
  - Asset concatenation
  - Minification
  - Cache-busting
  - gulp
  - gulp release
  - gulp deploy
- Q&A and review about weekend assignment
- AJAX continued...
  - Promises
  - REST APIs
    - GET /orders - list all orders
    - GET /orders/23 - get detail about order with id 23
    - POST /orders - submits a new order to the server
    - PUT /orders/5 - updates order with id 5
    - DELETE /orders/4 - deletes order with id 4
  - CORS-compatible (Cross Origin Resource Sharing)
  - JSONP (server generates JavaScript that calls a cb)

## Etsy API Example

First, a note about JSONP.

To use APIs that call JSONP, we need to have urls that:

- Point to a '.js' file
- Have &callback=? at the end

## Assignment

Remember the GitHub exercise we did in class? Well, tonight, you'll be writing
something kind of like that, only using Etsy's API. Wut wut!

- Spend longer than 20 minutes and wrote nothing? Ask someone for help or move on!
- Up past 12:30am? GO TO BED!

### Normal Mode

The goal is to show a set of Etsy listings. Along with each listing,
you'll want to show a button or link which-- when clicked-- shows
the user who posted the listing.

#### Getting Started

Here's what you'll need to do to get started:

1. Create an app with Etsy here: https://www.etsy.com/developers/documentation/getting_started/register. This will give you an API key to use. Some services use API keys to provide authorization and to rate-limit people who make too many requests (i.e. spam thousands of requests per second).
2. Get your API key from here: https://www.etsy.com/developers/your-apps
3. API's are released with documentation (how to GET/PUT/POST/DELETE them). One resource on Etsy is called a listing, and we can learn how to GET listings from https://www.etsy.com/developers/documentation/reference/listing
4. Test the REST API resources with your own API key:
  - get all active listings: https://openapi.etsy.com/v2/listings/active.js?api_key=...&callback=?
  - Each listing has a user_id that we can use to find the user's details on the Etsy API: https://openapi.etsy.com/v2/users/19181170/profile.js?api_key=...&callback=?

#### Your Project

Start a new project called "etsy-api".

Have a look at the Etsy stuff in week 5's project:

https://github.com/tiy-durham-fe-2015/wk5

There's some handy stuff in there that you can use as a starting point.

Grab the file found here:

    /src/js/etsy-api.js

And add it to your etsy-api project.

Add a new method to the EtsyApi object:

    userDetail: function (userId) { /* TODO */ }

When this is called, it should call the Etsy userprofile API. This is
documented here:

https://www.etsy.com/developers/documentation/reference/userprofile

It should return a promise, as we discussed in class.

Next, call the listings API, and render the listings. You should show:

- The listing's image
- The listing's title
- A link to the listing
- The listing's description
- The listing's price
- An element which, when clicked, shows the user who posted the listing

This last bullet point should make use of the Etsy user profile API previously mentioned.


### Hard Mode

Add the ability to see all listings for a user.
