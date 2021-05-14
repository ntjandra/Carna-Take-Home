# Carna Take-Home Challenge
## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Test](#test)
- [Notes](#dev)
- [Features](#summary)
- [Technical Q/A](#qa)
## About <a name = "about"></a>

The goal of the take home was to create a full-stack application that can perform CRUD operations in the context of an edtech platform for learning languages.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for testing and review purposes. **This project is not designed to be secure and should never be used in production.**

### Prerequisites

To run this project, the machine must have installed [Python](), [React](), and have a [Postgres]() server running with the following credentials setup.

```txt
database = 'api'
user = 'carna'
password = 'password'
```

### Installing

To make sure there are no extra components that could clash with the imports, I recommend creating a [Virtual Environment]() using pipenv.

To start the project run on a Mac, Linux or Windows Bash Shell
```
source start_up.sh
```
<!-- pip install -r requirements.txt -->
<!-- python manage.py runserver -->
<!-- npm install -->
<!-- npm start -->
## Usage <a name = "usage"></a>

### Admin
On **http://localhost:8000/admin/** there is a field to login as a superuser and add more users.
You can set this up to be anything you like by running the command here and replacing the fields of 'admin', 'admin@example.com', 'adminpass'.

```sh
./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'adminpass')"
```

Upon logging in to the dashboard the admin can manage Courses, Users, and (Permission) Groups. In addition, the admin may also export the data into a JSON or CSV, or load in their own datasheet.

### API
On **http://localhost:8000/api/**
The API is hosted to perform CRUD operations for all the existing tables of data. There are three routes for the User, Course, and Question.

- *http://localhost:8000/api/users/*
- *http://localhost:8000/api/courses/*
- *http://localhost:8000/api/questions/*

To view a specific resource, add the id after the '/'

ie. *http://localhost:8000/api/users/1* to view the user with the id 1

Note that the user route requires authenthication in order to edit or view another user's information. This can be done by logging in via the admin route or filling in the form at 
*http://localhost:8000/token-auth/*.

### Website 
The website is hosted on **http://localhost:3000**
and consists of 6 pages.
- Home Page
- Sign Up Page
- Login Page
- Profile Page
- Course Page
- Quiz Page (WIP)

## Testing <a name = "test"></a>
For API testing, I use [Postman]() to generate a collection of endpoint calls to then verify the outputs and response status. For load balance testing, I use [Locust]() to hit randomized endpoints with parameters at a customized frequency and then generate a chart to view response time and failures.

Results of the load balance tests are found in tests/load_tests.

Test Criteria:
- API response must not exceed 2.5 seconds.
- API is sent 100 requests per second.
- Basic SQL Injection Attack mixed in: i.e "(Robert'); DROP TABLE User;--)".

Test Cases:

These tests can be exported from tests/api_tests/ into a Postman Collection.
Note: Guest means not logged in. **X** = failed tests.
- CREATE
    - User password strength must follow the Django Guidelines. 
    - Username is too long.
    - Username is already taken.
    - Username contains restricted characters
    - Login does not match User in system
    - Login matches User in system
    - Logged in user creates a new course **X**
- READ
    - Anyone can view Course List
    - Guest cannot view User List
    - Admin can view User List
- UPDATE
    - Users can edit their owned course
    - Guests are not be able to edit course **X**
    - Admin can edit any course
- DELETE
    - Users can delete their owned course
    - Guests are not be able to delete course **X**
    - Users can delete their account **X**
    - Admin can delete any account
    - Admin can delete any course

# Developer Notes <a name = "dev"></a>
- Backend: This was the first time I've used Django, so starting it up was the hardest part, but once I got past the setup the rest was similar to Flask (models, views) so it became easy to build. 

    - Challenges: 
        - The directory structure was very confusing at first and finding out how manage.py works was through trial and error.
        - Creating a Custom login in order to customize User types (Students and Teachers). Django's Built in needed to be rewritten. This was the only way to add a filter by location.
        - Understanding what ViewSets are and how they work, and the alternatives, such as direct function calls.
        - Looking back into the old history of regex to define routes.
    - Mistakes: I deleted the migrations folder to "restart from scratch". Never do this. Ever! I fixed it by eventually hard resetting the db by dropping all tables, then reran migrate.

- Frontend: I've done projects with React but use third party apps to handle login, so building an authenthicator was new for me. I was told not to focus on the UI too heavily so I leveraged Bootstrap to create basic buttons to call endpoints and displayed the results on a card in the page. Errors messages were shown on the page to verify the endpoint response.
    - Challenges
        - Learning React JWT and keeping track of user session, especially persisting it over to the next pages.
        - Seperating the logins for a Teacher account versus a Student account. Had to add the is_teacher/Student to token fields.
    - Mistakes
        - I spent too much time deciding between Axios versus Fetch for sending HTTP requests.

## Project Requirements and Nice to Haves. <a name="summary"></a>
### 1. Admin Panel/Dashboard
- Import/export data into the database via the Admin Panel
- User Management (CRUD)
- Group Management (CRUD)
- Course Management (CRUD)

### 2. API Endpoints
- Sign up a non-admin account
- Login to an account
- Display all Courses
- Edit an existing Course

### 3. Frontend Display
- Login/Register Page
- Course Page
- Profile Page
- Home Page

### 4. Nice to haves 
- End to End tests.
- Auto deployment scripts
- Comments in code/Self documenting code
- Load test script for 100 concurrent requests.

### Areas for Improvement
- Question/Quiz Feature. 
- Frontend Auth handling.
- Frontend Error Handling.
- Custom User Model.
- API cannot add a course.
- Frontend could look a lot nicer.
- Windows Support for startup script.

# Technical Questions <a name = "qa"></a>
### 1. What libraries did you add to the frontend? What are they used for?
- I chose React as the framework for my Frontend. Inside React I imported the following libraries.
    - Reactstrap x Bootstrap, to handle styling using prebuilt components that I extended to meet the needs.
    - prop-types, to check and validate type errors when passing props. It also makes the components easier to understand.
    - react-scripts, a built in part of the React framework that starts up the web server for building or quick deployment.
    - react-router-dom, to maintain page history and routes for each page.

### 2. What's the command to start the application locally?
For Mac or Linux. If on Windows download a bash shell.
```
source start_up.sh
```

This runs a series of other commands, mainly initializing the Database, API, and website to run in the background. See script for exact commands.

### 3. How long did you spend on the coding project? What would you add to your solution if you had more time? If you didn't spend much time on the coding project, then use this as an opportunity to explain what you would add.
- I spent roughly 4 hours a day for the given week. Approx 20 so far. I wanted to showcase what I can do as a Full-Stack and used the Take-Home project as my motivator to learn Django and JWT handling. 
- On the Backend, if I had more time I would have created a custom user model, instead of using Django's built-in User model.
- On the Frontend, I would add more screens and buttons that interact with the API, and more tests.
- As an extra feature, I wanted to finish adding quiz questions to a course.

### 4. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
- In terms of the Python Framework, Django, having the Admin Panel be built-in made it very easy to create a dashboard. There were also some libraries to extend the dashboard to handle import/export of large datasets.
- As for React, ES6 allowing developers to create values as variables helped make passing values much easier.
- Outside of frameworks I did not use any recent language only feature.

   [Image](Img)

### 5. How would you track down a performance issue in production? Have you ever had to do this?
- I would start from looking at the time it takes for the API to process a request, as most performance issues lie on the Backend. This could lead to a bottleneck where a query takes far too long. While if the page itself was loading slowly, I would inspect the Frontend React Components and make sure the state is updated properly and the endpoint is called exactly once.
- Speaking from experience, I dealt with an issue where a query to fetch the location of all IoT devices took a long time. This endpoint was called upon visiting the homepage and was resolved by caching the result into a view and triggering an update on the view every 30 minutes.