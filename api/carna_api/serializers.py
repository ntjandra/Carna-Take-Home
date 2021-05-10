from rest_framework import serializers
from .models import User # , Course

# Create a Serializer for the User Table
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'bio')

# Create a Serializer for the Courses Table
# class CourseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Course
#         fields = ('id', 'title', 'description', 'completed')

