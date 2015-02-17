# URLs

A uniform resource locator (URL) is the internet's way of specifying the
location of a resource (such as an HTML page or image or script or JSON data).

They generally look something like this:

    http://foo.bar.com:8080/users/2338/listings?sort=1&page=2#stuffs

OK. Let's break that down.

    http://

That part specifies the protocol which is generally either (http or https).
Https is like http, except using encryption to make sure that data is not sent
over the internet in plain text.

    foo.bar.com

That is your hostname. It's the domain (bar.com) and subdomain of the site
you are accessing. It is the hostname that gets looked up via DNS and resovled
to an IP address when your browser makes a request.

    :8080

That is your port. It's just used to make sure that you are talking to the
correct server on a given machine. A single machine can run many servers, each
listening on their own port.

So, you can kind of think of it like this: the hostname resolves to a machine.
The port resolves to a specific server application running on the host machine.

Port is not often specified, but you can. If no port is
specified, the default port is used. For http, the default port is 80. For
https, the default port is 443.

    /users/2338/listings

That is your path. The path is the portion of the URL which refers to some
resource on your server. In this case, it looks like we are looking for the
listings that were created by the user whose id is 2338.

So:

    hostname => machine
    port => server application running on the machine
    path => the resource that you want to retrieve from the server application


Next, you see this:

    ?sort=1&page=2

That is called the query. (Sometimes it is called the query string or
  search string.) It is a collection of name-value pairs separated by &.

So, in the above query, we see that there are two name-value pairs:

    name: sort, value: 1
    name: page, value: 2

Query parameters can be used for any reason that the server sees fit. But
generally, they are used to whittle down the requested results.

In the case of our example URL:

    /users/2338/listings?sort=1&page=2

It appears that we are looking for listings for a specific user, and that
we want to sort those listings, and that we are looking for the second page
of listing results. (Maybe there are many pages of listings per user.)

This part of the URL gets sent to the server:

    http://foo.bar.com:8080/users/2338/listings?sort=1&page=2

This part of the URL does not:

    #stuffs

That is called the hash. Whenever you see a # in a URL, everything to the right
of it is called the URL's hash. The hash portion of a URL does *not* get sent
to the server. It is only used to change things in the browser itself. It is
really handy for making rich single-page applications that behave as if they
are really multi-page applications.

We use the hash portion of the URL to do our routing with Rlite (or other
  client-side routers).
