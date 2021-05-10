from django.db import models

# Create your models here.

# Model for User
# A User has a name and bio
class User(models.Model):
    # Set Default Parameters
    first_name = models.CharField("Person's first name", max_length=30)
    last_name = models.CharField("Person's last name", max_length=30)
    bio = models.TextField("Tell me about yourself")

    def _str_(self):
        return self.first_name + self.last_name

'''
# Model for Course 
# A course has a creator, Title, description, when it was posted and the ratings.
# Optionally there are tags such as what langauage (topic)
class Course(models.Model):
    creator_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    release_date = models.DateField()
    description = models.TextField()    
    num_stars = models.IntegerField()
    topic = models.CharField(max_length=10)

    def _str_(self):
        return self.title

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