# Monday, Week 8

- Review
- Deploying to Heroku
- Angular filters
- Angular directives 101

## Deploying to Heroku

- Pull the latest reshare changes from my repo

    https://github.com/tiy-durham-fe-2015/reshare

- Modify .env to have:

    HOST_NAME=http://localhost:3000

- Create a Heroku account

    https://signup.heroku.com/www-header

- Install Heroku commandline tools

    https://toolbelt.heroku.com/

- Add a file called Procfile to your project, with this line in it:

    web: node app.js

- Create a new Node application on Heroku
- Register your production app with GitHub
  - https://github.com/settings/applications/new
  - Your authorization callback URL should look like this:
    - https://YOURAPP.herokuapp.com/auth
    - Except that "YOURAPP" should be whatever you named your Heroku app
- Go to Heroku's settings tab for your app
  - Edit the config variables, and add these:
  - APP_SUPER_ADMIN
  - GITHUB_CLIENT_ID
  - GITHUB_CLIENT_SECRET
  - HOST_NAME
  - SESSION_SECRET
- The value for HOST_NAME should look like this:
  - https://YOURAPP.herokuapp.com
  - Except that "YOURAPP" should be the name of your Heroku app
- The value for GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET should come from
your registered GitHub app
- Go to Heroku's Deploy tab for your app
  - Choose the GitHub connect option
  - Once that's configured, you can do a manual deploy to get things deployed
- Go to your app's URL and see if it all worked!
  - https://YOURAPP.herokuapp.com

## Angular filters

Filters are simple functions that you can call from Angular views in order
to modify the way that data is displayed.

Here's an example of a built-in filter called currency:

    {{vm.price | currency}}

It modifies the way that vm.price is displayed, adding $, and
other fancy things.

Here's a custom one that I wrote, called possessive:

    {{vm.name | possessive}}

It takes a string and produces the possessive version of it...
(e.g. Chris becomes Chris' and Tom becomes Tom's)

Here's how I defined the possessive filter:

    app.filter('possessive', function() {
      return function(input) {
        input = input || '';
        var suffix = input.slice(-1).toLowerCase() === 's' ? '\'' : '\'s';
        return input + suffix;
      };
    });

More examples (with comments!) can be found here:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-filters

## Angular directives

Let's say you've got a bunch of HTML that is duplicated in multiple views.
Maybe, you're displaying user profile data on several different pages, and
that markup looks like this:

    <div class="user-profile">
      <h2><a href="https://github.com/{{vm.user.github}}">{{ vm.user.name }}</a></h2>
      <p>
        Role: {{ vm.user.role }}
      </p>
    </div>

As we've noted many times, it's a *bad* idea to copy/paste HTML, source code,
or pretty much anything else. In general, if you are copy/pasting, you're
probably doing something wrong.

In Angular, factories are how you reduce duplication in your JavaScript. Rather
than copy/pasting a JavaScript function over and over, you can put it in a
factory, and then reuse it as much as you want.

In Angular, directives are how you reduce duplication in your HTML.

We could take the HTML mentioned above, and move it into a directive. Say we
named our directive 'tiy-user-profile'. In that case, we could put something
like this in our HTML:

    <tiy-user-profile user="vm.user"></tiy-user-profile>

Nifty. Angular will see that, and replace it with the HTML from our directive,
or else inject the HTML from our directive inside of the tiy-user-profile
element.

Directives names should always have a prefix. In this case, I used 'tiy-' as my
prefix. Whatever app you're writing, you should choose a prefix and stick to
it. (e.g. 'res-' might be a good prefix for your reshare app's directives).

For more details, see the directive example here:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-directives-101

## Assignment

Feel free to do another coding challenge from coderbyte...

Your homework:

- Deploy your reshare app to Heroku

- Add a filter to your reshare app:
  - It should be named: 'ellipsis'
  - It takes a length, and returns a truncated value with '...' at the end
  - Use the ellipsis filter to truncate long share descriptions on the share
  list view

    Example: Let's say that item.description was 'This is a long description'
    If we were to have this in our template:

    {{item.description | ellipsis:14}}

    We should see this as the final output:

    This is a long...

- Add a shareSummary directive to your reshare app:
  - It should display the share's URL as a clickable link
  - It should display the share's description
  - If a share has tags, it should display those.
  - Use this directive in your list view and in your details view

- Keep plugging away at your application!
