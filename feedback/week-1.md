
## Separating structure from "skin"

I see something like this happening in your tiy-site:

    <div class="section-a">
    	stuff
    </div>

    <div class="section-b">
        other stuff
    </div>

    <div class="section-c">
        yet more stuff
    </div>

But the only visual difference between sections is that some have a different color/background. Other than that these sections are the same. They are full-width, have some sort of padding, etc.

So, in this scenario, it is better to separate your structure (width, location, etc) from your skin/theme/style. Let me demonstrate. I'd change my markup to look like this:

    <div class="section primary-theme">
    	stuff
    </div>

    <div class="section secondary-theme">
        other stuff
    </div>

    <div class="section primary-theme">
        yet more stuff
    </div>

Here, I've given each div two classes. And here's what they do:

.section is shared by all sections. It tells sections that they should have a certain layout. Width 100% or whatevz, a certain amount of padding, etc.

.primary-theme would indicate color and "skinning" but not positioning. It might look like this:

    .primary-theme {
    	color: #444;
    	background: white;
    }

And .secondary-theme might look like this:

    .secondary-theme {
    	color: white;
    	background: deeppink;
    }

Sometimes it makes sense to separate your structural classes from your stylistic classes like this. What that allows you to do is to mix structure and "skinning" (or style or theming) simply by combining classes on an element.

Confused? Ask me about it on Tuesday!!!



## No default styles allowed!

Revisit your form project. Try to style it something like one of these (but choose your own colors, etc):

https://dribbble.com/shots/981366-Sign-In?list=searches&tag=form&offset=75

https://dribbble.com/shots/1027207-Login-form?list=searches&tag=form&offset=118

Nothing too fancy. Just add in some colors, some borders, etc. It should *not* look like the browser's default styles still apply. Choose your own flavor, but definitely choose a flavor!

## Drop shadows

Try adding drop shadows to your forms project:

http://css-tricks.com/almanac/properties/b/box-shadow/

## Quotes in HTML

Have a look at this. It's something I saw in one of your projects, and I think everyone should be aware of this:

https://gist.github.com/chrisdavies/0907440fc10b06a571ba

## Pushing to gh-pages

If you want to deploy your site to gh-pages, you need to do this:


Create the gh-pages branch, if it doesn't exist:

	git branch gh-pages

Then, merge your code into it, and push it to GitHub:

	git checkout gh-pages
	git merge master
	git push origin gh-pages


## Viewing your gh-pages

The URL for your website will look like this:

	http://your-github-id.github.io/your-project-name

For example here's my "lessons" project's URL:

	http://chrisdavies.github.io/lessons/

If you hit your gh-pages URL and get a 404, it means something is not configured. Either you don't have a gh-pages branch for your project, or you don't have an index.html file in your gh-pages branch. index.html is the expected default html file for a gh-pages site!


## Non-styled class names

I see class names in your project like this:

    .white-about

The problem with this class name is that it indicates style (white), which might change (say, to pink) if requirements change. So, if .white-about eventually became pink, the name would no longer make sense. A name like .about or .alt-about might make more sense. (alt indicating that there is a .about which is styled in the main style and .alt-about being an alternating style).

## Descriptive class names

I see a class name:

    .fw_bg

That's not a great name for this reason: .fw is not meaningful. _bg is pretty meaningful (presumably it means background).

But I would definitely change this class to indicate clearly what it's intent is.


## Non-redundant class names

I see a class block in your CSS that looks like this:

	.chris-davies-img,
	.mason-matthews-img,
	.clinton-img,
	.jessica-img {
	  max-height: 120px;
	  max-width: 120px;
	}

These names are both good and bad. They're good in that I can look at them and immediately tell what they are: .chris-davies-img is probably my image!

They are bad in that they are not very modular or reusable. They are overly specific.

Here's what I would suggest:

You currently have a container per instructor, and that container has the class: .instructor-profile

That's a pretty good name. It is descriptive. It is obvious. And it is reusable per instructor. Each instructor profile will be classed with .instructor-profile.

I would suggest the same thing for each instructor photo. Instead of .chris-davies-photo or whatever, just have a .instructor-photo

I also saw that you had a class called: .teacher-title

That's not a bad class name either, except that it is contained inside of a .instructor-profile

So, you have an inconsistent naming scheme. You should stick with one consistent name:

	.instructor-profile
	.instructor-photo
	.instructor-title
