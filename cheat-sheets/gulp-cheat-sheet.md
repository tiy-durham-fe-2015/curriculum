# How to use the gulp starter kit

This document explains how to create a new project using the gulp starter kit that is found here:

https://github.com/chrisdavies/gulp_starter_kit

## Get a copy of the gulp_starter_kit

You'll only really need to do this once (unless I update the gulp_starter_kit on GitHub)!

    git clone git@github.com:chrisdavies/gulp_starter_kit.git
    cd gulp_starter_kit
    npm install

Now, go back up a directory

    cd ..

## Create a shiny new project

First, we'll make a copy of the gulp starter kit, giving the copy a new name (the name of the project we are creating):

    cp -r gulp_starter_kit/ new-project-name

Next, we'll cd into the new project directory:

    cd new-project-name

Then, we're going to get rid of the git repo that is associating our new project with the gulp_starter_kit project:

    rm -rf .git

Next, you should probably go a head and change the readme to say something about your new project, rather than having instructions about gulp. We'll open our new project in Atom. Then, find the readme.md file and edit it as you see fit:

    Atom .

Finally, We'll initialize git, add our initial files, and commit them as an initial commit:

    git init
    git add .
    git commit -m "Initial checkin with gulp"
