from django.db import models
from django.contrib.auth.models import AbstractBaseUser, User
from django.core.validators import MaxValueValidator, MinValueValidator

# Model for User
# A User has a login name and display name

# This Model will be the main model, extending Django's old sign in model.
# This references the model chosen in settings.py, under AUTH_USER_MODEL

# There should only be ONE user Model in a project.
# Back to using the BuiltIn
class CarnaUser(models.Model):
    # Set Default Parameters
    # REQUIRED_FIELDS = ('user',)
    # USERNAME_FIELD = 'email' # Use email as login, so schools have an easier time.

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # # Sign Up Requirements.
    # email = models.CharField("Type in your school email", max_length=30, unique=True)
    # password = models.CharField(max_length=25, null=False)
    first_name = models.CharField("Person's first name", max_length=30)
    last_name = models.CharField("Person's last name", max_length=30)

    # Optional
    bio = models.TextField("Tell me about yourself",  blank=True, max_length=100, default='')
    # District Information
    # country ... import list of all countries, space separated and set into text choices.
    city = models.TextField("Tell where you're from",  blank=True, max_length=100, default='')
    school = models.TextField("School District",  blank=True, max_length=100, default='')

    # Decided by Method: Teacher vs Student
    is_student = models.BooleanField('student status', default=False)
    is_teacher = models.BooleanField('teacher status', default=False)
    
    # Return Full Name, Formatted for Display
    def __str__(self):
        return f'{self.first_name} {self.last_name}'

# Model for Course 
# A course has a creator, Title, description, when it was posted and the ratings.
# Optionally there are tags such as what langauage (topic)
class Course(models.Model):
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField("My course", max_length=30)
    release_date = models.DateField()
    description = models.TextField(blank=True)

    # Extras: Calculate Average Rating from list, with their own ratings table.
    # Ratings from 0 to 10 stars.   
    stars = models.IntegerField(default = 1, validators=[MaxValueValidator(10), MinValueValidator(1)])
    
    # Topics for filtering, currently only one topic per course.
    topic = models.CharField(max_length=10, blank=True)

    def __str__(self):
        return f'{self.title}'
'''
# Model for Questions, broken down into types of questions. Many to one
# Multiple Choice, Short Answer/Free Response, and True/False
class Questions(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    question = models.TextField()
    pass

class MCQuestion(models.Model):
    questions = models.ForeignKey(Questions, on_delete=models.CASCADE)
    AnswerType = models.TextChoices('AnswerType', 'A B C D')

class TFQuestion(models.Model):
    # Django Naming convertion, that fk matches model name
    questions = models.ForeignKey(Questions, on_delete=models.CASCADE)
    AnswerType = models.TextChoices('AnswerType', 'TRUE FALSE')

class FRQuestion(models.Model):
    questions = models.ForeignKey(Questions, on_delete=models.CASCADE)
'''