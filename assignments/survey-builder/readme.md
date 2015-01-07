# Survey Builder

??? Should we allow editing surveys after there are answers?
  Should "save as draft" and "publish" be separate concepts?

## Description

I can count on 1 million hands the number of times I've had to write a form
builder or survey builder. So, methinks ye shall do the same.

## Scenario

SurveyMonkey has started charging $4 billion per survey. Their customers are
outraged. Being the savvy entrepreneurs that you are, you spot an opportunity
and jump on it. Time to build the SurveyMonkey killer!

## Objectives

### Learning Objectives (Front End)

After completing this assignment, you should...

* Understand the concept of factory objects
* Know how to build a UI that runs on Rails

### Performance Objectives

After completing this assignment, you should be able to effectively...

* Work on a project with multiple developers
* Resolve merge conflicts in git

## Details

### Deliverables

* A usable survey application hosted in Heroku
  * This must meet the minimum requirements
* A GitHub repo named "survey-builder"
  * A readme.md that links to the hosted Heroku application

## Normal Mode (MVP)

### Signup

* New users can sign up

### Create Survey

* Users have a "my surveys" screen that lists all the surveys they have created
* Users can create a new survey
* Users can delete a survey (that they authored)
* Surveys have:
  * Title (required)
  * Description (optional)
  * A list of questions (at least one is required)
* Every question has:
  * Question text (required)
  * Question description (optional)
* There are three types of questions that should be supported:
  * Yes/no
    * The yes and no labels should be editable in the survey designer
    * This displays as either two radio buttons or a toggle checkbox
  * Short answer
    * This displays as a textbox
  * Long answer
    * This displays as an auto-expanding textarea
* Survey authors can mark textual answers as required
* Questions can be reordered
  * This does not have to be a drag/drop implementation it can be more naive
    * (e.g. a move up / move down button on each question)
* Surveys can be saved
* Existing surveys can be edited (by the survey author)
* Publishing a survey works as follows:
  * For any survey, you can invite one or more people to take the survey
  * To do this, you enter their email address (or addresses)
  * This sends an invitation email to those email addresses
  * Only people who have been invited to take a survey should be allowed to take it

### Notifications

* If a user has been invited to take a survey,
  * She can follow the link in her email which will take her directly to the survey
  * And she should see a notification icon in the website header
    * The notification icon shows the number of surveys she's been invited to take but hasn't completed
    * Clicking the notification icon should show a dropdown of the surveys she's been invited to take
    * Clicking a survey in the dropdown should take her to the survey
    * Once a survey has been completed, it should no longer show up in her notifications

### Take a Survey

* Only users who have been invited to take a survey can see that survey
* Users cannot change their answers once they have submitted a survey
* Users cannot take the same survey twice
* Users cannot submit a survey until the required fields have been filled in

### View Results

* Users can view their answers for any survey they've taken
* Survey authors can view all of the answers for any survey they have created
  * This displays a question, followed by all of the answers
  * Each answer should show the user (name or email) who supplied the answer


## Hard Mode

* Survey authors can export the results of their survey (in CSV)
* Add support for single-choice questions
    * At design time:
      * The author must specify at least two possible choices
      * There should be a checkbox "allow other"
      * If selected, those surveyed can enter their own text as an answer
    * When the survey is being filled out:
      * The user can only select one of the available answers
      * If the "allow other" option was specified at design-time,
        * The user can check the option: "other", and a textbox will appear
* When a survey author views survey results
  * He should be given the option to view an aggregate report
    * For yes/no questions and single-choice questions:
      * Show each possible answer,
      * Show what what percentage of people chose that answer
    * For textual questions:
      * Show the answers in a list

## Nightmare Mode

* Make questions reorderable via drag-and-drop
* Add multiple choice question type
  * This is very similar to the "single choice" question mentioned above, except:
    * When taking the survey users can select any number of answers
