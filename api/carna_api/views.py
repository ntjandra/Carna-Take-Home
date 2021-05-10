from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer # , CourseSerializer 
from .models import User # , Course


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# # Create your views here.
# class CourseView(viewsets.ModelViewSet):
#     serializer_class = CourseSerializer
#     queryset = Course.objects.all()