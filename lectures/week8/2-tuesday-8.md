# Tuesday, Week 8

- Review
- Angular directives 201
- Image preview
- Basic image uploading

## Transclusion

What if you have a component in several places on your website. It has a
header with some title, a footer with some link, and it has various content
between the header and the footer.

For example:

    <div class="sandwich">
      <header>
        <h2 class="sandwich-title">Users list</h2>
      </header>
      <ul>
        <li>Chris</li>
        </li>Tom</li>
      </ul>
      <footer>
        <a href="/users/all">See all users</a>
      </footer>
    </div>

    <div class="sandwich">
      <header>
        <h2 class="sandwich-title">Repos list</h2>
      </header>
      <div class="repo-summary">
        <h3>Reshare</h3>
        <p>Reshare is an awesome little app</p>
      </div>
      <footer>
        <a href="/repos/all">See all repos</a>
      </footer>
    </div>

That's a lot of duplication. Let's make a directive called 'tiy-sandwich' which
lets us get rid of the bits that are duplicated:

    <tiy-sandwich header="Users list" footer="See all users" footer-link="/users/all">
      <ul>
        <li>Chris</li>
        </li>Tom</li>
      </ul>
    </tiy-sandwich>

    <tiy-sandwich header="Repos list" footer="See all repos" footer-link="/repos/all">
      <div class="repo-summary">
        <h3>Reshare</h3>
        <p>Reshare is an awesome little app</p>
      </div>
    </tiy-sandwich>

Much tidier. So, how do we make directives which can wrap some inner content?

The answer is transclusion.

See the modal directive here for an example:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-directives-102

## Image preview

It's a fairly common thing for apps to need to allow users to select one or
more images, then upload them. User experience is greatly enhanced when
the user is shown a thumbnail or preview of the selected image.

This can be accomplished using the browser's FileReader object. Unfortunately,
support for FileReader is only in IE 10 and up.

If you have to support older browser, this library gives you a Flash-based
fallback: `https://github.com/Jahdrien/FileReader`

So, how does image previewing work?

First, you have to have a file input type, which is HTML's way of asking a
user to choose a file from their system:

    <input name="my-image" type="file">

Then, you need to attach a 'change' event handler for this input, in which
you will detect what file the user chose, read that file's content, and then
stick the file's content into an image element. Let's see how that's done.

Here's a jQuery example:

https://github.com/tiy-durham-fe-2015/wk8/blob/master/src/jquery-image-preview/image-preview.js

For an Angular example, check this out:

https://github.com/tiy-durham-fe-2015/wk8/tree/master/src/angular-directives-103

## Assignment

Feel free to do another coding challenge from coderbyte...

Wrap up your reshare app. Today is code-complete day!

If you've got modals or prompts in your app, make 'em a directive!
