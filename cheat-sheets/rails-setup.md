# Rails setup

Note: I think most of you have installed xCode already (due to my prework), but if you run into errors here, you might want to double check. Mason has instructions on installing xCode, which you can find here:

https://github.com/tiyd-rails-2015-01/tiyd-rails-2015-01.github.io/blob/master/prework/setup.md

OK. Let's get the latest version of Ruby. If you don't already have homebrew installed, get it and install it:

- Run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Run `brew doctor`

Now, we'll get a tool that is used to manager Ruby versions on your Mac:

- Run `brew install ruby-build rbenv`
- Run `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile`
- Run `echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`
- Close your terminal(s)

Now, we'll get the latest version of Ruby:

- Open a new terminal window
- Run `rbenv install 2.2.0`
- (Rbenv install will take a long, long time. Grab a book.)
- Run `rbenv global 2.2.0`

You *should* be good to go. So, let's check to make sure.

- Run `ruby -v`
- You should see a line that begins with `ruby 2.2.0p0`

If not, come see me or Mason Mathews!

Next, let's install Rails.

- Run `gem install rails`
- That'll take a good long while, too, so may as well pick up your book again

OK. Now, you've got Ruby (a programming language) and you've got Rails (a web framework). Huzzah! Party on!
