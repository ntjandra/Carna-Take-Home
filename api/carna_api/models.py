from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

# Model for User
# A User has a login name and display name

# Model extends built in Django User to include more data.
# Recommendation: Add a Country/City/School District field

class CarnaUser(models.Model):
    # Set Default Parameters
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField("Person's first name", max_length=30)
    last_name = models.CharField("Person's last name", max_length=30)
    bio = models.TextField("Tell me about yourself",  blank=True, max_length=100, default='')

    # District Information
    # country ... import list of all countries, space separated and set into text choices.
    city = models.TextField("Tell where you're from",  blank=True, max_length=100, default='')
    school = models.TextField("School District",  blank=True, max_length=100, default='')
    
    # Return Full Name, Formatted for Display
    def __str__(self):
        return (self.first_name + " " + self.last_name)

# Model for Course 
# A course has a creator, Title, description, when it was posted and the ratings.
# Optionally there are tags such as what langauage (topic)
class Course(models.Model):
    creator_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    release_date = models.DateField()
    description = models.TextField()

    # Extras: Calculate Average Rating from list, with their own ratings table.
    # Ratings from 0 to 10 stars.   
    stars = models.IntegerField(default = 1, validators=[MaxValueValidator(10), MinValueValidator(1)])
    
    # Topics for filtering, currently only one topic per course.
    topic = models.CharField(max_length=10)

    def __str__(self):
        return self.title
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