

# Hello. I'm Chris.

Here to talk about 14 years in the biz.

The agenda:

1. How to get a job
2. How to be good at your job
3. How to grow while employed as a working stiff
4. Meh favz

# Episode 1: How to get a job

Five easy steps.

## 1. Have something to show

Preferably open source.
Or at least live and online.

## 2. Keep your resume brief and tailored

Different resumes for different applications.
Don't lie, but present your most relevant experience/skills.
One page is best. No more than two.

## 3. ACM programming problems

Many tech interviews are dumb.
They ask you to solve puzzles/think in a way you never will need to do on the job.

(Examples from MS, Tetris, chess.)

Get your brain in gear by solving challenging problems.
Try solving them in C++ or some language that bends your brain.

[Example problem](https://icpcarchive.ecs.baylor.edu/index.php?option=com_onlinejudge&Itemid=8&category=582&page=show_problem&problem=4209)

## 4. Sneak in through the back door

Getting into Microsoft, Google, Facebook, and pals is tough.
Get a gig as a contractor.
 
* Less of a commitment
* Easier to get in
* Try before you buy
* If you do want to go full-time, you are at an advantage
* Still a rigorous interview, but the interviewees want you to succeed!

## 5. Persistence

You're going to get rejected.
You're going to have really bad interviews.
The smartest people I know still have this problem.
Just keep going.

# Episode 2: How to be good at your job

In which I ramble on and on about various random topics that annoy or interest me.

## 0. Be humble

You will make stupid mistakes.
So will your boss.
So will your coworkers.

> Have patience with all things, but chiefly have patience with yourself. Do not lose courage in considering your own imperfections but instantly set about remedying them - every day begin the task anew.
- Saint Francis de Sales

When you're frustrated with someone (especially a boss or peer), consider your own shortcomings.

Don't gossip.
Don't complain.

Be the sort of person you know you should be.

## 1. Don't be clever

When in doubt, choose the obvious way.
When in doubt, choose the boring way.
You'll save yourself (and the poor suckers who inherit your code) a lot of trouble.

## 2. Don't over-engineer

Don't solve problems you don't have.
Super flexible, generic solutions are a PITA.
Solve the problem in front of you.
Re-structure when you need to.
Not sooner.

## 3. Readability > Optimization

Which is better, readable code or optimal code?
Readable, every time.
Get it working.
Make it really, really understandable.

## 4. Premature optimization is $@*!

Story of a game developer.

## 5. When you do optimize...

Measure all the things.
Optimize the right thing.

## 6. Write good HTML

### Use the right tags for the right things

Never do this:

    <span class="btn btn-primary" v-on="click: saveProgress">Save</span>
  
Do this  instead:

    <button class="btn btn-primary" v-on="click: saveProgress">Save</span>

Why?

* Buttons can receive focus.
* Buttons are friendly for screen-readers.
* Use buttons, a-tags, input elements, textareas, etc when you intend the element to be interactive or trigger actions.
* Use div, span, p, etc when you intend the element to be only content

### Use descriptive class names

Don't do this:

    <div class="green-hilight col-sm-3">Christopher Davies</div>

Do this:

    <div class="user-name">Christopher Davies</div>

Why?

* Classes should convey meaning, not style
* Makes markup impervious (relatively) to style changes
* Keeps a better separation of concerns from markup (data) and style (layout)

### Don't use tables for layout

Nowadays, most people know this.

### Do use tables for tabular data

Nowadays, most people don't know this.

## 7. Commenting dos and don'ts

### Avoid useless comments

    /// <summary>
    /// Gets or sets the Address
    /// </summary>
    public Address Address { get; set; }

* Provides no benefit
* Wastes vertical space
* Reduces scannability
* Takes up more lines than the implementation itself!

### Comments cause bugs

    // Inc adds one to n and returns the result
    int Inc(int n) {
        return n + 1;
    }

This comment is useful.
But when the business rules change: "Inc must increment by 2"

    // Inc adds one to n and returns the result
    int Inc(int n) {
        return n + 2;
    }

The comment is now misleading.
This *will* happen.
So, where possible, make the code convey its intent.

    int IncrementByOne(int n) {
        return n + 2;
    }

It's still possible to have the method name convey the wrong intention.
But this will probably be caught earlier than a commenting error.
It also improves understandability of calling code.

Commenting is often used as cheap makeup covering up bad code.
Restructure the code to be self-documenting, if possible.

### When/where/how to comment

When you are shipping code as your product (API/SDK).
You will get pretty fast feedback on bad comments in this case.

At the top of your files.
This helps people quickly get the intent of a file.
It also helps you keep the file focused on its main purpose.

    // Ajaxer provides a light-weight promise-based
    // AJAX implementation for modern browsers.
    function Ajaxer() {
    }
    ...

When you have a tricky bit of code that really can't be simplified.

When you have odd code due to obscure business requirements.

    // You might think that we should do X, but bob requires Y
    return y;

This kind of comment will probably lead to bugs, as business requirements change. 
But in really weird/unintuitive scenarios, comment.

Remember: *Comments lie. Code tells the truth... Usually...*

## 8. Single responsibility principle

(From SOLID principles)

Single responsibility - A class/function should have only one responsibility

## 9. Dependency inversion principle

Depend upon abstractions, not concretions.
Don't write this:

    void Foo(string[] strs)

When you really only need:

    void Foo(IEnumerable<string> strs)

## 10. Referential transparency

Function F always returns the same output when given the same input. 
This is a *really* good idea.
Write pure functions where possible.
(Functions with no side-effects.)

    // Gather lots of state from the DOM, elsewhere
    var context = getContextFromMutableState();
    
    // Process context doesn't change context...
    var result = processContext(context);
     
    // Map result back into the DOM/other mutable things
    mapResultToDom(result);

Isolate access to mutable state as much as possible.
Collect it, then pass it into pure functions.
Take the result, and map it back into the mutable state.

This makes your code much easier to reason about.
It wins you friends.

## 11. Method chaining FTW

If you can return something useful, do so.
If you write a void method, you cannot chain that method.

    function setName(name) {
        this.name = name;
    }

Is less useful than this:

    function setName(name) {
	    this.name = name;
	    return this;
	}

Because with the latter, you could write this:

    foo.setName('Chris').setAge(23);

### Semicolons and braces in JavaScript

In JavaScript, this:

    return {
        hello: 'world'
    };

And this:

    return 
    {
        hello: 'world'
    };

Do different things, thanks to semicolon insertion.

*Always* write this:

    return {
        hello: 'world'
    };

## 12. Learn design

Even if you're a dev, this will come in super, super handy.

## 13. Do hallway usability testing

This isn't even optional. Do it. Do it now.

## 14. Boring design = good design

Remember the axiom: "Don't be clever"?

It applies to design, too.

[See Cap Watkin's insight] (http://blog.capwatkins.com/the-boring-designer)

## 15. Take vacation

Use your vacation days.

## 16. Take naps

One of the best things you can do to boost productivity

The brain doesn't have a lymph system... sleep is it's lymph


# Episode 3: How to grow while employed as a working stiff

Nothing you don't already know...

## Invest in yourself (and in others)

Watch TED talks

veritasium (YouTube channel)

Read poetry

Explore the arts, music, etc

## Tinker with new languages

Go at your own pace, but maybe one or two a year...

Definitely learn a systems language: C++, C, Rust, etc

Definitely learn a functional language: Elixir, Erlang, Haskell, etc

Definitely learn JavaScript... probably the most useful language you can learn today.

## Play

One of the best things you can do for your brain and your happiness.

## Make time for silence

... and get out in nature

# Epilogue: Meh favz

[The design of everyday things] (http://www.amazon.com/Design-Everyday-Things-Revised-Expanded-ebook/dp/B00E257T6C/ref=sr_1_1?ie=UTF8&qid=1415154139&sr=8-1&keywords=the+design+of+everyday+things)

[Don't make me think] (http://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/ref=sr_1_1?ie=UTF8&qid=1415154183&sr=8-1&keywords=Don%27t+make+me+think)

[Any of Edward Tufte's books] (http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=edward%20tufte&sprefix=edward+tu%2Caps)

[Clean Code: A Handbook of Agile Software Craftsmanship] (http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_fkmr1_1?ie=UTF8&qid=1415154241&sr=8-1-fkmr1&keywords=Code+as+craft+an+agile)

[Signal vs noise] (https://signalvnoise.com/)

[Hacker news] (https://news.ycombinator.com/)

