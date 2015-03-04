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

## Assignment

Feel free to do another coding challenge from coderbyte...

Wrap up your reshare app. Today is code-complete day!

If you've got modals or prompts in your app, make 'em a directive!
