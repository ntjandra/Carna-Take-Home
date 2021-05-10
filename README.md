# Carna Take-Home Challenge
## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Prerequisites](#prerequisties)
- [Usage](#usage)
- [Test](#test)
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

To start the project run

```python start_up.py```
<!-- pip install -r requirements.txt -->
<!-- python manage.py runserver 0.0.0.0:5000 for Django -->
<!-- npm install for packages -->
<!-- npm start for React -->
## Usage <a name = "usage"></a>

### Admin
On **localhost:8000/admin/** there is a field to login as a superuser and add more users.
You can set this up to be anything you like by running the command here and replacing the field.

```./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'adminpass')"```

Upon logging in to the dashboard the admin can manually add Courses, Users, and Questions.
### API
On **localhost:8000/api/**
You can perform CRUD operations for all the existing tables of data. There are three routes for the User, Course, and Question.

- *localhost:8000/api/users/*
- *localhost:8000/api/courses/*
- *localhost:8000/api/questions/*

To view a specific response, add the id after the '/'
ie. *localhost:8000/api/users/1*

### Website 
To visit the website, go to **localhost:5000**
The website consists of 5 pages.
- Home Page
- Sign in Page
- Profile Page
- Course Page
- Quiz Page

## Testing <a name = "test"></a>
For API testing, I use [Postman]() to generate a collection of endpoint calls to then verify the outputs and response status. For load balance testing, I use [Locust]() to hit randomized endpoints with parameters at a customized frequency and then generate a chart to view response time and failures.

# Developer Notes
- Backend: This was the first time I've used Django, so starting it up was the hardest part, but once I got past the setup the rest was similar to Flask (models, views) so it became easy to build. 

    - Challenges: The directory structure was very confusing at first and finding out how manage.py works.
<br>
- Frontend: I've done projects with React but use third party apps to handle login, so building an authenthicator was new for me. I was told to not focus on the UI too heavily so I use Bootstrap to created basic buttons to call endpoints and displayed the results on a card in the page.
    - Challenges: Learning React JWT and keeping track of user session.
