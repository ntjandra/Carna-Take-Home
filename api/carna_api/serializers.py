from rest_framework import serializers
from .models import Course


# Create a Serializer for the Courses Table
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'description', 'completed')